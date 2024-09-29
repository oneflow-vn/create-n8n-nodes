import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Complete Uploading A File In Blocks'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Complete Uploading A File In Blocks',
  value: 'Complete Uploading A File In Blocks',
  action: 'Complete uploading a file in blocks',
  description:
    'Completes an upload task.\r\n\r\nAPI reference documentation: [Complete uploading a file in blocks]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_finish)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_finish',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
