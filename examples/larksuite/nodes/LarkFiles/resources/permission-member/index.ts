import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as addPermissions from './add-permissions'
import * as updatesPermissionsOfACollaborator from './updates-permissions-of-a-collaborator'
import * as deletePermissionsOfACollaborator from './delete-permissions-of-a-collaborator'

const operations: INodePropertyOptions[] = [
  addPermissions.option,
  updatesPermissionsOfACollaborator.option,
  deletePermissionsOfACollaborator.option,
]

export const name = 'Permission Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Permission Permission Member'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...addPermissions.properties,
  ...updatesPermissionsOfACollaborator.properties,
  ...deletePermissionsOfACollaborator.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
