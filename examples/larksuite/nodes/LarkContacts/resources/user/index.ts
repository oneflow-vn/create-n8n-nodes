import { INodeProperties } from 'n8n-workflow'

import * as createAUser from './create-a-user'
import * as obtainSingleUserInformation from './obtain-single-user-information'
import * as modifyUserInformationInPart from './modify-user-information-in-part'
import * as updateUserInformationInWhole from './update-user-information-in-whole'
import * as deleteAUser from './delete-a-user'
import * as obtainTheListOfUsersDirectlyUnderADepartment from './obtain-the-list-of-users-directly-under-a-department'
import * as obtainUserIdViaEmailOrMobileNumber from './obtain-user-id-via-email-or-mobile-number'

export const name = 'User'

export const properties: INodeProperties[] = [
  ...createAUser.properties,
  ...obtainSingleUserInformation.properties,
  ...modifyUserInformationInPart.properties,
  ...updateUserInformationInWhole.properties,
  ...deleteAUser.properties,
  ...obtainTheListOfUsersDirectlyUnderADepartment.properties,
  ...obtainUserIdViaEmailOrMobileNumber.properties,
]
