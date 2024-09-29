import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload A File In Blocks Upload Blocks'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload A File In Blocks Upload Blocks',
  value: 'Upload A File In Blocks Upload Blocks',
  action: 'Upload a file in blocks (Upload blocks)',
  description:
    'Uploads blocks of a specified file.\r\n\r\nAPI reference documentation: [Upload a file in blocks (Upload blocks)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_part)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_part',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
