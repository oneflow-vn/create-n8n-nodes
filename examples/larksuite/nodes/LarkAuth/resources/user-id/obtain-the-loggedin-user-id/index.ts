import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The Loggedin User Id'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The Loggedin User Id',
  value: 'Obtain The Loggedin User Id',
  action: 'Obtain the logged-in user ID',
  description:
    '## Reference  \n1. 接口参考 [获取登录用户身份](https://{{baseUrl}}/document/ukTMukTMukTM/uEDO4UjLxgDO14SM4gTN)   \n2. *注* 参数中的`code`字段 从1.3.2获取，参考 [请求用户身份](https://{{baseUrl}}/document/ukTMukTMukTM/ukzN4UjL5cDO14SO3gTN)，拼装完成的URL如 \n\n `https://{{baseUrl}}/open-apis/authen/v1/index?redirect_uri=https%3A%2F%2Fttx21n.web.bytedance.net%2F&app_id=cli_9f434d2bb52f100c&state=11` **（浏览器打开）**;     \n注意code可能过期，如果失败请重新获取；  \n3. 响应中的 `access_token` 即为 user_access_token;\n\n## Success Response Sample \n```\n{\n    "code": 0,\n    "data": {\n        "access_token": "u-Lr1RT7S8fJUES03mT5FtWf",\n        "avatar_big": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=640x640&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_middle": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_thumb": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_url": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp",\n        "email": "",\n        "en_name": "敬之Lynx1",\n        "expires_in": 6900,\n        "mobile": "+86199998888",\n        "name": "敬之Lynx1",\n        "open_id": "ou_e0ddd8cfc3524b973bef3d0e83400e67",\n        "refresh_expires_in": 2591700,\n        "refresh_token": "ur-0aXNdq9LZXtsac0Y90XmXb",\n        "tenant_key": "2cc0cbb58a8e175e",\n        "token_type": "Bearer",\n        "union_id": "on_c9e970ebba9f25f7a711e6104e08b68f",\n        "user_id": "2482944f"\n    },\n    "msg": "success"\n}\n```',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/authen/v1/access_token',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
