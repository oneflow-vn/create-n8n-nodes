import { INodeProperties } from 'n8n-workflow'

import * as obtainCompanyInformation from './obtain-company-information'

export const name = 'Tenant'

export const properties: INodeProperties[] = [
  ...obtainCompanyInformation.properties,
]
