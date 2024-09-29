import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Solve Or Restore A Comment'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Solve Or Restore A Comment',
  value: 'Solve Or Restore A Comment',
  action: 'Solve or restore a comment',
  description:
    'Solves or restores a comment on a document in Docs.\r\n\r\nAPI reference documentation: [Solve or restore a comment]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
