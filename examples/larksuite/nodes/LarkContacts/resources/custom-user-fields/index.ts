import { INodeProperties } from 'n8n-workflow'

import * as obtainCustomUserFieldsOfACompany from './obtain-custom-user-fields-of-a-company'

export const name = 'Custom User Fields'

export const properties: INodeProperties[] = [
  ...obtainCustomUserFieldsOfACompany.properties,
]
