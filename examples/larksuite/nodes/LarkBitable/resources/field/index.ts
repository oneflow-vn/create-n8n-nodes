import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as listAllFields from './list-all-fields'
import * as createField from './create-field'
import * as updateField from './update-field'
import * as deleteField from './delete-field'

const operations: INodePropertyOptions[] = [
  listAllFields.option,
  createField.option,
  updateField.option,
  deleteField.option,
]

export const name = 'Field'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Bitable Field'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...listAllFields.properties,
  ...createField.properties,
  ...updateField.properties,
  ...deleteField.properties,
]
