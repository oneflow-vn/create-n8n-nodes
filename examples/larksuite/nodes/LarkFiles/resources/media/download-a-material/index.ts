import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download A Material'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Download A Material',
  value: 'Download A Material',
  action: 'Download a material',
  description:
    'This API is used to download materials. Materials refer to files in various production containers, for example, images in a document and files. You can download a material based on a specified range.\r\n\r\nAPI reference documentation: [Download a material]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/medias/{{$parameter["file_token"]}}/download',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
