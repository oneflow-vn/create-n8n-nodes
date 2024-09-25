import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as updateCommonSettingsOfADocument from './update-common-settings-of-a-document'

const operations: INodePropertyOptions[] = [
  updateCommonSettingsOfADocument.option,
]

export const name = 'permissionpublic'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Permission Permission Public'],
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
  ...updateCommonSettingsOfADocument.properties,
]
