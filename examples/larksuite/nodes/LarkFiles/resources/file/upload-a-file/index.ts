import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload A File'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload A File',
  value: 'Upload A File',
  action: 'Upload a file',
  description:
    'Uploads a file to a specified directory in My Space.\r\n\r\nAPI reference documentation: [Upload a file]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_all',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
