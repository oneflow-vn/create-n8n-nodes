import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Tenantaccesstoken'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Get Tenantaccesstoken',
  value: 'Get Tenantaccesstoken',
  action: 'Get tenant_access_token',
  description:
    '1. 商店应用的注册，请参考[应用商店应用创建](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g#401f1e86)\n2. app_access_token的获取请参考[获取 app_access_token（应用商店应用）](https://{{baseUrl}}/document/ukTMukTMukTM/uEjNz4SM2MjLxYzM)，或接口（1.1.1）\n3. tenant_key的获取方式参考[获取企业唯一标识 tenant_key](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g)',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/tenant_access_token/',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
