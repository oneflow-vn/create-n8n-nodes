import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAUser from './create-a-user'
import * as obtainSingleUserInformation from './obtain-single-user-information'
import * as modifyUserInformationInPart from './modify-user-information-in-part'
import * as updateUserInformationInWhole from './update-user-information-in-whole'
import * as deleteAUser from './delete-a-user'
import * as obtainTheListOfUsersDirectlyUnderADepartment from './obtain-the-list-of-users-directly-under-a-department'
import * as obtainUserIdViaEmailOrMobileNumber from './obtain-user-id-via-email-or-mobile-number'

const operations: INodePropertyOptions[] = [
  createAUser.option,
  obtainSingleUserInformation.option,
  modifyUserInformationInPart.option,
  updateUserInformationInWhole.option,
  deleteAUser.option,
  obtainTheListOfUsersDirectlyUnderADepartment.option,
  obtainUserIdViaEmailOrMobileNumber.option,
]

export const name = 'User'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts User'],
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
  ...createAUser.properties,
  ...obtainSingleUserInformation.properties,
  ...modifyUserInformationInPart.properties,
  ...updateUserInformationInWhole.properties,
  ...deleteAUser.properties,
  ...obtainTheListOfUsersDirectlyUnderADepartment.properties,
  ...obtainUserIdViaEmailOrMobileNumber.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
