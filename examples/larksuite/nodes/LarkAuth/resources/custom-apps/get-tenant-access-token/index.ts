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
  action: 'Get Tenant Access Token Api Access Token Custom Apps',
  description:
    '1. 接口文档参考 [获取tenant_access_token（企业自建应用）](https://{{baseUrl}}/document/ukTMukTMukTM/uIjNz4iM2MjLyYzM) 2. 注册应用参考 [获取用户身份访问凭证](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/get-#3f769f25)',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/tenant_access_token/internal/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }