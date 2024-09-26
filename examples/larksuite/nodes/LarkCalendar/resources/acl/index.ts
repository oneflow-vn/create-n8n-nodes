import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAccessControl from './create-access-control'
import * as obtainTheAcl from './obtain-the-acl'
import * as deleteAccessControl from './delete-access-control'
import * as subscribeToChangesInCalendarAccessControl from './subscribe-to-changes-in-calendar-access-control'

const operations: INodePropertyOptions[] = [
  createAccessControl.option,
  obtainTheAcl.option,
  deleteAccessControl.option,
  subscribeToChangesInCalendarAccessControl.option,
]

export const name = 'ACL'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar ACL'],
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
  ...createAccessControl.properties,
  ...obtainTheAcl.properties,
  ...deleteAccessControl.properties,
  ...subscribeToChangesInCalendarAccessControl.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
