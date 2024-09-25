import { INodeProperties } from 'n8n-workflow'

import * as obtainTheRangeOfContactsDataThatAnAppCanAccess from './obtain-the-range-of-contacts-data-that-an-app-can-access'

export const name = 'Contact Scope'

export const properties: INodeProperties[] = [
  ...obtainTheRangeOfContactsDataThatAnAppCanAccess.properties,
]
