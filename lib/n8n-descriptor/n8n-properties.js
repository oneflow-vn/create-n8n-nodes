
const { mock } = require('mock-json-schema');
const toJsonSchema = require('to-json-schema');
const _ = require('lodash');

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
        description: property.description,
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
        description: property.description,
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

  // Build properties for depth-1 object
  // using fixedColelction
  n8nNodeProperties.fromObjectSchema = function (schema, property) {
    const { properties, example } = schema;

    if (!properties && !example) {
      return property;
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
        description: prop.description || subProperty.description,
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
    // console.log('fromSchema', schema);
    const property = originalFromSchema.call(this, schema);

    // check for array values
    if (schema.type === 'array') {
      // console.log('fromSchema array schema', {schema});
      return this.fromArraySchema(schema, property);
    }

    // check for string enum values
    if (schema.type === 'string' && schema.enum) {
      // console.log('fromSchema string 1', { schema, property});
      const a =  this.fromStringEnumSchema(schema, property);
      // console.log('fromSchema 2', { schema, a: JSON.stringify(a)});
      return a;
    }

    const schemaMocked = mock(schema);

    // check for depth-1 object
    if (schema.type == 'object' && this.getObjectDepth(schemaMocked) === 1) {
      return this.fromObjectSchema(schema, property);
    }

    // check for type string but example is json
    if (schema.type === 'string' && this.isValidJsonObject(schema.example)) {
      const example = JSON.parse(schema.example);
      const schemaMocked = toJsonSchema(example);
      return this.fromSchema(schemaMocked);
    }

    if (schema.description) {
      property.description = schema.description;
    }

    return property;
  };

  n8nNodeProperties.fromRequestBody = function (requestBody) {
    const fields = originalFromRequestBody.call(this, requestBody);

    // fix routing for fixedCollection
    const modifiedFields = fields.map((field) => {
      if (field.type === 'fixedCollection') {
        const routingBody = _.get(field, 'routing.request.body');

        for (const routingFieldName in routingBody) {
          field.routing.request.body[routingFieldName] = '={{$value.items}}';
        }
      }
      return field;
    });

    return modifiedFields;
  };

  return n8nNodeProperties;
}

module.exports = {
  modifyNodeProperties
};
