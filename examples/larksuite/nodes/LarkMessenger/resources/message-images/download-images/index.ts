import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download Images'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Download Images',
  value: 'Download Images',
  action: 'Download images',
  description:
    'Download image resources. Only images of the message type uploaded by an app itself can be downloaded.\r\n\r\nAPI reference documentation: [Download images]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/images/{{$parameter["image_key"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
