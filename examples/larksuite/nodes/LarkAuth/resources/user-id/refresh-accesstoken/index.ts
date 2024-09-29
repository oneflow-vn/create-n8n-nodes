import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Refresh Accesstoken'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Refresh Accesstoken',
  value: 'Refresh Accesstoken',
  action: 'Refresh access_token',
  description:
    '## Reference  \n1. 接口参考[刷新 access_token](https://{{baseUrl}}/document/ukTMukTMukTM/uQDO4UjL0gDO14CN4gTN)\n2. *注意* 参数中的`refresh_token` 是 1.3.1 获取登录用户身份接口返回结果中的refresh_token字段，而非access_token字段；并且该refresh_token只能用一次；用错的情况下会获得以下\n```\n {\n    "code": 20007,\n    "msg": "generate access_token fail"\n}\n```\n\n## Success Response Sample\n```\n{\n    "code": 0,\n    "data": {\n        "access_token": "u-In71D01i3jngErbYTYKdjf",\n        "avatar_big": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=640x640&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_middle": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_thumb": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_url": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp",\n        "email": "",\n        "en_name": "敬之Lynx1",\n        "expires_in": 6900,\n        "mobile": "+86199998888",\n        "name": "敬之Lynx1",\n        "open_id": "ou_e0ddd8cfc3524b973bef3d0e83400e67",\n        "refresh_expires_in": 2591700,\n        "refresh_token": "ur-OI8USnxkLOOlEB5WqUvyme",\n        "tenant_key": "2cc0cbb58a8e175e",\n        "token_type": "Bearer",\n        "union_id": "on_c9e970ebba9f25f7a711e6104e08b68f",\n        "user_id": "2482944f"\n    },\n    "msg": "success"\n}\n```',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/authen/v1/refresh_access_token',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
