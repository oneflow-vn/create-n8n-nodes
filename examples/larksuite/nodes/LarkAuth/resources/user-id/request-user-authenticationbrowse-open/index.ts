import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Request User Authenticationbrowse Open'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Request User Authenticationbrowse Open',
  value: 'Request User Authenticationbrowse Open',
  action: 'Request user authentication(Browse open)',
  description:
    '**！！！！注意！！！！**  \n这个接口请从操作系统浏览器中打开，选择账号，点击`授权`，跳转到目标页面之后，从浏览器的地址栏中获取到当前用户的code；',
  routing: {
    request: {
      method: 'GET',
      url: '=/open-apis/authen/v1/index',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
