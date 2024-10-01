
const { mock } = require('mock-json-schema');
const toJsonSchema = require('to-json-schema');
const _ = require('lodash');
const { normalizeDesc } = require('./utils');

/**
 * in obj find key starts with regexp
 * Return first match VALUE of the key
 */
function findKey (obj, regexp) {
  const key = Object.keys(obj).find((key) => regexp.test(key));
  return key;
}

function flattenObj (obj, parent, res = {}) {
  for (const key in obj) {
    const propName = parent ? `${parent  }_${  key}` : key;
    if (typeof obj[key] == 'object') {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

/**
 * extend the N8NINodeProperties instance
 * overwrite the fromSchema function
 * @param {*} n8nNodeProperties
 */
function modifyNodeProperties (n8nNodeProperties) {
  const originalFromSchema = n8nNodeProperties.fromSchema;
  const originalFromRequestBody = n8nNodeProperties.fromRequestBody;

  n8nNodeProperties.fromArraySchema = function (schema, property) {
    const { items } = schema;
    const { type, enum: values } = items;

    if (type === 'string' && values) {
      property.type = 'multiOptions';
      property.options = values.map((value) => ({ name: value, value }));
      property.default = [];
      return property;
    }

    if (type === 'string' && (!values || values.length === 0)) {
      // create fixedCollection with one item
      const newProperty = {
        type: 'fixedCollection',
        default: [],
        typeOptions: {
          multipleValues: true,
        },
        displayName: property.displayName,
        name: property.name,
        description: normalizeDesc(property.description),
        placeholder: property.placeholder || 'Add item',
        options: [
          {
            name: 'items',
            displayName: 'Items',
            values: [
              {
                name: 'Item',
                displayName: 'Item',
                type: 'string',
                default: '',
              },
            ],
          },
        ],
      };
      return newProperty;
    }

    if (type === 'object') {
      const itemProperty = this.fromSchema(items, property);

      itemProperty.displayName = itemProperty.displayName || 'Item';
      itemProperty.name = itemProperty.name || 'item';

      const optionValues = [];

      if (itemProperty.type === 'fixedCollection') {
        // console.log('fromArraySchema 1.2', {schema, itemProperty});
        optionValues.push(...itemProperty.options[0].values);
      } else {
        optionValues.push(itemProperty);
      }

      const newProperty = {
        type: 'fixedCollection',
        default: [],
        typeOptions: {
          multipleValues: true,
        },
        displayName: property.displayName,
        name: property.name,
        description: normalizeDesc(property.description),
        placeholder: property.placeholder || 'Add item',
        options: [
          {
            name: 'items',
            displayName: 'Items',
            values: optionValues,
          },
        ]
      };

      return newProperty;
    }

    return property;
  };

  n8nNodeProperties.fromStringEnumSchema = function (schema, property) {
    const { enum: values } = schema;
    // console.log('fromStringEnumSchema', {schema, property});

    if (values && values.length > 0) {
      property.type = 'options';
      property.options = values.map((value) => ({ name: value, value }));
    }

    return property;
  };

  // get the depth of an object
  n8nNodeProperties.getObjectDepth = function (obj) {
    if (typeof obj !== 'object') return 0;

    let level = 1;
    let key;
    for (key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj.hasOwnProperty(key)) continue;

      if (typeof obj[key] == 'object') {
        const depth = this.getObjectDepth(obj[key]) + 1;
        level = Math.max(depth, level);
      }
    }

    return level;
  };

  // check if the string is a valid json
  n8nNodeProperties.isValidJsonObject = function (str) {
    try {
      const json = JSON.parse(str);
      if (typeof json !== 'object') {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  };

  // extract example from requestBody
  n8nNodeProperties.extractBodyExample = function (body) {
    if (!body) {
      return null;
    }

    const { schema } = this.resolveBodySchema(body);

    const { example } = schema;
    if (example) {
      return example;
    }

    const schemaMocked = mock(schema);
    return schemaMocked;
  };

  // Build properties for depth-1 object
  // using fixedColelction
  n8nNodeProperties.fromObjectSchema = function (schema, property) {
    const { properties, example } = schema;

    if (!properties && !example) {
      return property;
    }

    // check for over 10 keys
    const examole = example || mock(schema);
    const examoleFlat = flattenObj(examole);

    if (Object.keys(examoleFlat).length > 10) {
      // build raw json input
      const newProperty = {
        type: 'json',
        default: JSON.stringify(examole),
        displayName: property.displayName,
        name: property.name,
        description: normalizeDesc(property.description),
      };

      return newProperty;
    }

    if (!properties && example) {
      const schemaMocked = toJsonSchema(example);
      return this.fromSchema(schemaMocked);
    }

    property.type = 'fixedCollection';
    property.default = {};

    const values = Object.entries(properties).map(([key, prop]) => {
      const subProperty = this.fromSchema(prop);
      return _.merge(subProperty, {
        name: key,
        description: normalizeDesc(prop.description || subProperty.description),
        displayName: prop.displayName || key,
      });
    });

    property.options = [
      {
        name: 'items',
        displayName: 'Items',
        values,
      },
    ];

    return property;
  };

  n8nNodeProperties.fromSchema = function (schema) {
    const property = originalFromSchema.call(this, schema);

    // check for array values
    if (schema.type === 'array') {
      // console.log('fromSchema array schema', {schema});
      return this.fromArraySchema(schema, property);
    }

    // check for string enum values
    if (schema.type === 'string' && schema.enum) {
      return this.fromStringEnumSchema(schema, property);
    }

    // check for depth-1 object
    if (schema.type == 'object') {
      return this.fromObjectSchema(schema, property);
    }

    // check for type string but example is json
    if (schema.type === 'string' && this.isValidJsonObject(schema.example)) {
      // change type to json
      property.type = 'json';
      property.default = JSON.stringify(JSON.parse(schema.example), null, 2);
      return property;
    }

    if (schema.description) {
      property.description = normalizeDesc(schema.description);
    }

    // check for type as aray
    if (Array.isArray(schema.type)) {
      // if array includes 'string', then it is a string type
      if (schema.type.includes('string')) {
        property.type = 'string';
      }
    }

    // validate null, undefined, empty string type
    if (schema.type === 'null' || schema.type === 'undefined' || schema.type === '') {
      property.type = 'string';
    }

    return property;
  };

  // Resolve body schema
  n8nNodeProperties.resolveBodySchema = function (body) {
    body = this.refResolver.resolve(body);

    const regexp = /application\/json.*/;
    const contentKey = findKey(body.content, regexp);

    if (!contentKey) {
      throw new Error(`No '${regexp}' content found`);
    }

    const content = body.content[contentKey];

    if (!content) {
      throw new Error(`No '${regexp}' content found`);
    }

    const requestBodySchema = content.schema;

    const schema = this.refResolver.resolve(requestBodySchema);

    // console.log('resolveBodySchema', {schema});

    return {schema, contentKey};
  };

  n8nNodeProperties.fromRequestBody = function (body) {
    if (!body) {
      return [];
    }

    const { schema, contentKey } = this.resolveBodySchema(body);

    // handle example object with no properties
    if (schema.type === 'object' &&  !schema.properties && schema.example) {
      const schemaMocked = toJsonSchema(schema.example);
      body.content[contentKey].schema = schemaMocked;
    }

    // handle string-json example
    if (schema.type === 'string' && this.isValidJsonObject(schema.example)) {
      const example = JSON.parse(schema.example);
      const schemaMocked = toJsonSchema(example);
      body.content[contentKey].schema = schemaMocked;
      // change type to object
      body.content[contentKey].schema.type = 'object';
    }

    if (!schema.properties && schema.type != 'object' && schema.type != 'array') {
      throw new Error(`Request body schema type '${schema.type}' not supported`);
    }

    const fields = originalFromRequestBody.call(this, body);

    const modifiedFields = fields.map((field) => {
      // fix routing for fixedCollection
      if (field.type === 'fixedCollection') {
        const routingBody = _.get(field, 'routing.request.body');

        for (const routingFieldName in routingBody) {
          field.routing.request.body[routingFieldName] = '={{$value.items}}';
        }
      }
      // add displayOptions
      field.displayOptions =  {
        hide: {
          '/options.useCustomBody': [true],
        }
      };

      return field;
    });

    return modifiedFields;
  };

  return n8nNodeProperties;
}

module.exports = {
  modifyNodeProperties
};
