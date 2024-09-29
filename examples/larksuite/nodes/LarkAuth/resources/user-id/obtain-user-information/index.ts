import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain User Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain User Information',
  value: 'Obtain User Information',
  action: 'Obtain user information',
  description:
    '## Reference  \n1. 接口参考 [获取用户身份(身份验证)]()\n2. **注** `user_access_token` 从1.3.1接口中获取，响应体中的`access_token` 字段\n\n## Success Response Sample  \n```\n{\n    "code": 0,\n    "data": {\n        "avatar_big": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=640x640&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_middle": "https://s1-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_thumb": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp",\n        "avatar_url": "https://s3-fs.pstatp.com/static-resource/v1/31d0fc66-5175-4848-98e9-6cedbc10820g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp",\n        "email": "",\n        "en_name": "敬之Lynx1",\n        "mobile": "+86199998888",\n        "name": "敬之Lynx1",\n        "open_id": "ou_e0ddd8cfc3524b973bef3d0e83400e67",\n        "tenant_key": "2cc0cbb58a8e175e",\n        "union_id": "on_c9e970ebba9f25f7a711e6104e08b68f",\n        "user_id": "2482944f"\n    },\n    "msg": "success"\n}\n```',
  routing: {
    request: {
      method: 'GET',
      url: '=/open-apis/authen/v1/user_info',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
