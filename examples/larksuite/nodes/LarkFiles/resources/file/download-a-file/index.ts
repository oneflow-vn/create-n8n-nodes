import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download A File'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Download A File',
  value: 'Download A File',
  action: 'Download a file',
  description:
    'This API is used to download files from a directory in My Space, excluding online documents in Lark Docs, Sheets, and MindNotes. You can download a file based on a specified range.\r\n\r\nAPI reference documentation: [Download a file]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/download)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/download',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
