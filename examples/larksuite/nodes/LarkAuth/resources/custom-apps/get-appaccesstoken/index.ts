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
    '1. 接口文档参考 [获取app_access_token（企业自建应用）](https://{{baseUrl}}/document/ukTMukTMukTM/uADN14CM0UjLwQTN)\n2. 注册应用参考\n[获取用户身份访问凭证](https://{{baseUrl}}/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/get-#3f769f25)',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_access_token/internal/',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
