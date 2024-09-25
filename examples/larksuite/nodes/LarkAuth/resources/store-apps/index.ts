import { INodeProperties } from 'n8n-workflow'

import * as getAppaccesstoken from './get-appaccesstoken'
import * as getTenantaccesstoken from './get-tenantaccesstoken'
import * as repushAppticket from './repush-appticket'

export const name = 'Store apps'

export const properties: INodeProperties[] = [
  ...getAppaccesstoken.properties,
  ...getTenantaccesstoken.properties,
  ...repushAppticket.properties,
]
