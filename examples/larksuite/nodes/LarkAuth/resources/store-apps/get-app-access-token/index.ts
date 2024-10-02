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

export const name = 'Get App Access Token'

const rawOption: INodePropertyOptions = {
  name: 'Get App Access Token',
  value: 'Get App Access Token',
  action: 'Get App Access Token Api Access Token Store Apps',
  description:
    '## Reference 1. 商店应用的注册，请参考[应用商店应用创建](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g#401f1e86) 2. app_ticket的获取请参考[获取应用的 app_ticket](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g#f02f09e8) ## Success Response Sample ``` { "app_access_token": "a-ce92ce3a2dc6c6f43a5c736bde3013adc7edc634", "code": 0, "expire": 7167, "msg": "ok" } ```',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_access_token/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
