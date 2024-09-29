import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload A Material'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload A Material',
  value: 'Upload A Material',
  action: 'Upload a material',
  description:
    'Uploads a material (images or files) required by Docs or other Lark suite to My Space.\r\n\r\nAPI reference documentation: [Upload a material]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/medias/upload_all',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
