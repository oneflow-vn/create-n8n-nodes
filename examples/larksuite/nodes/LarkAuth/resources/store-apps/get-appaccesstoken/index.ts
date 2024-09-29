import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Appaccesstoken'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Get Appaccesstoken',
  value: 'Get Appaccesstoken',
  action: 'Get app_access_token',
  description:
    '## Reference\n1. 商店应用的注册，请参考[应用商店应用创建](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g#401f1e86)\n2. app_ticket的获取请参考[获取应用的 app_ticket](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/g#f02f09e8)\n\n## Success Response Sample\n```\n{\n    "app_access_token": "a-ce92ce3a2dc6c6f43a5c736bde3013adc7edc634",\n    "code": 0,\n    "expire": 7167,\n    "msg": "ok"\n}\n```',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_access_token/',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
