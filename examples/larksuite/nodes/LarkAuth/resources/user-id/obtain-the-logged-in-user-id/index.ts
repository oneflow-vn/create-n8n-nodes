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

export const name = 'Obtain The Logged In User Id'

const rawOption: INodePropertyOptions = {
  name: 'Obtain The Logged In User Id',
  value: 'Obtain The Logged In User Id',
  action: 'Obtain The Logged In User Id Api Access Token User Id',
  description:
    '## Reference 1. 接口参考 [获取登录用户身份](https://{{baseUrl}}/document/ukTMukTMukTM/uEDO4UjLxgDO14SM4gTN) 2. *注* 参数中的`code`字段 从1.3.2获取，参考 [请求用户身份](https://{{baseUrl}}/document/ukTMukTMukTM/ukzN4UjL5cDO14SO3gTN)，拼装完成的URL如 `https://{{baseUrl}}/open-apis/authen/v1/index?redirect_uri=https%3A%2F%2Fttx21n.web.bytedance.net%2F&app_id=cli_9f434d2bb52f100c&state=11` **（浏览器打开）**; 注意code可能过期，如果失败请重新获取； 3. 响应中的 `access_token` 即为 user_access_token; ## Success Response Sample ``` { "code": 0, "data": { "access_token": "u-Lr1RT7S8fJUES03mT5FtWf", "avatar_big": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=640x640&cut_type=&quality=&format=image&sticker_format=.webp", "avatar_middle": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp", "avatar_thumb": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp", "avatar_url": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp", "email": "", "en_name": "敬之Lynx1", "expires_in": 6900, "mobile": "+86199998888", "name": "敬之Lynx1", "open_id": "ou_e0ddd8cfc3524b973bef3d0e83400e67", "refresh_expires_in": 2591700, "refresh_token": "ur-0aXNdq9LZXtsac0Y90XmXb", "tenant_key": "2cc0cbb58a8e175e", "token_type": "Bearer", "union_id": "on_c9e970ebba9f25f7a711e6104e08b68f", "user_id": "2482944f" }, "msg": "success" } ```',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/authen/v1/access_token',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
