import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainTheLoggedinUserId from './obtain-the-loggedin-user-id'
import * as requestUserAuthenticationBrowseOpen from './request-user-authentication-browse-open'
import * as refreshAccesstoken from './refresh-accesstoken'
import * as obtainUserInformation from './obtain-user-information'

const operations: INodePropertyOptions[] = [
  obtainTheLoggedinUserId.option,
  requestUserAuthenticationBrowseOpen.option,
  refreshAccesstoken.option,
  obtainUserInformation.option,
]

export const name = 'User ID'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['API Access Token User ID'],
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
  ...obtainTheLoggedinUserId.properties,
  ...requestUserAuthenticationBrowseOpen.properties,
  ...refreshAccesstoken.properties,
  ...obtainUserInformation.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
