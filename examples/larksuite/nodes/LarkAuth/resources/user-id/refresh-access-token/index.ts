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

export const name = 'Refresh Access Token'

const rawOption: INodePropertyOptions = {
  name: 'Refresh Access Token',
  value: 'Refresh Access Token',
  action: 'Refresh Access Token Api Access Token User Id',
  description:
    '## Reference 1. 接口参考[刷新 access_token](https://{{baseUrl}}/document/ukTMukTMukTM/uQDO4UjL0gDO14CN4gTN) 2. *注意* 参数中的`refresh_token` 是 1.3.1 获取登录用户身份接口返回结果中的refresh_token字段，而非access_token字段；并且该refresh_token只能用一次；用错的情况下会获得以下 ``` { "code": 20007, "msg": "generate access_token fail" } ``` ## Success Response Sample ``` { "code": 0, "data": { "access_token": "u-In71D01i3jngErbYTYKdjf", "avatar_big": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=640x640&cut_type=&quality=&format=image&sticker_format=.webp", "avatar_middle": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp", "avatar_thumb": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp", "avatar_url": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp", "email": "", "en_name": "敬之Lynx1", "expires_in": 6900, "mobile": "+86199998888", "name": "敬之Lynx1", "open_id": "ou_e0ddd8cfc3524b973bef3d0e83400e67", "refresh_expires_in": 2591700, "refresh_token": "ur-OI8USnxkLOOlEB5WqUvyme", "tenant_key": "2cc0cbb58a8e175e", "token_type": "Bearer", "union_id": "on_c9e970ebba9f25f7a711e6104e08b68f", "user_id": "2482944f" }, "msg": "success" } ```',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/authen/v1/refresh_access_token',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
