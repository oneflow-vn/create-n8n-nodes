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

export const name = 'Request User Authentication Browse Open'

const rawOption: INodePropertyOptions = {
  name: 'Request User Authentication Browse Open',
  value: 'Request User Authentication Browse Open',
  action: 'Request User Authentication Browse Open Api Access Token User Id',
  description:
    '**！！！！注意！！！！** 这个接口请从操作系统浏览器中打开，选择账号，点击`授权`，跳转到目标页面之后，从浏览器的地址栏中获取到当前用户的code；',
  routing: {
    request: {
      method: 'GET',
      url: '=/open-apis/authen/v1/index',
    },
    output: {
      postReceive: [
        {
          type: 'setKeyValue',
          properties: {
            data: '={{$response.body}}',
          },
        },
      ],
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
