import { INodeProperties } from 'n8n-workflow'

import * as getAppaccesstoken from './get-appaccesstoken'
import * as getTenantaccesstoken from './get-tenantaccesstoken'

export const name = 'Custom apps'

export const properties: INodeProperties[] = [
  ...getAppaccesstoken.properties,
  ...getTenantaccesstoken.properties,
]
