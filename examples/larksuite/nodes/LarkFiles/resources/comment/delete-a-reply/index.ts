import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Reply'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Reply',
  value: 'Delete A Reply',
  action: 'Delete a reply',
  description:
    'Deletes a reply to a document in Docs.\r\n\r\nAPI reference documentation: [Delete a reply]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}/replies/{{$parameter["reply_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
