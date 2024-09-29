import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload Images'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload Images',
  value: 'Upload Images',
  action: 'Upload images',
  description:
    'This API can be used to upload an image. You can upload JPEG, PNG, WEBP, GIF, TIFF, BMP, and ICO images.\r\n\r\nAPI reference documentation: [Upload images]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/images',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
