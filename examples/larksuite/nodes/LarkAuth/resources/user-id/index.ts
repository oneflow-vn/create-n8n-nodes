import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainTheLoggedinUserId from './obtain-the-loggedin-user-id'
import * as requestUserAuthenticationbrowseOpen from './request-user-authenticationbrowse-open'
import * as refreshAccesstoken from './refresh-accesstoken'
import * as obtainUserInformation from './obtain-user-information'

const operations: INodePropertyOptions[] = [
  obtainTheLoggedinUserId.option,
  requestUserAuthenticationbrowseOpen.option,
  refreshAccesstoken.option,
  obtainUserInformation.option,
]

export const name = 'User Id'

/* eslint-disable */
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
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...obtainTheLoggedinUserId.properties,
  ...requestUserAuthenticationbrowseOpen.properties,
  ...refreshAccesstoken.properties,
  ...obtainUserInformation.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
