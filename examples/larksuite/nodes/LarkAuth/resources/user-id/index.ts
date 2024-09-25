import { INodeProperties } from 'n8n-workflow'

import * as obtainTheLoggedinUserId from './obtain-the-loggedin-user-id'
import * as requestUserAuthenticationBrowseOpen from './request-user-authentication-browse-open'
import * as refreshAccesstoken from './refresh-accesstoken'
import * as obtainUserInformation from './obtain-user-information'

export const name = 'User ID'

export const properties: INodeProperties[] = [
  ...obtainTheLoggedinUserId.properties,
  ...requestUserAuthenticationBrowseOpen.properties,
  ...refreshAccesstoken.properties,
  ...obtainUserInformation.properties,
]
