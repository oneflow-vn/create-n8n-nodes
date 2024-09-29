import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Complete Uploading A Material In Blocks'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Complete Uploading A Material In Blocks',
  value: 'Complete Uploading A Material In Blocks',
  action: 'Complete uploading a material in blocks',
  description:
    'Completes an upload task.\r\n\r\nAPI reference documentation: [Complete uploading a material in blocks]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_finish)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/medias/upload_finish',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
