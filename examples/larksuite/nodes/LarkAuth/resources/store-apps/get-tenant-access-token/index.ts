/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Get Tenant Access Token'

const rawOption: INodePropertyOptions = {
  name: 'Get Tenant Access Token',
  value: 'Get Tenant Access Token',
  action: 'Get Tenant Access Token Api Access Token Store Apps',
  description:
    '1. 商店应用的注册，请参考[应用商店应用创建](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g#401f1e86) 2. app_access_token的获取请参考[获取 app_access_token（应用商店应用）](https://{{baseUrl}}/document/ukTMukTMukTM/uEjNz4SM2MjLxYzM)，或接口（1.1.1） 3. tenant_key的获取方式参考[获取企业唯一标识 tenant_key](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g)',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/tenant_access_token/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
