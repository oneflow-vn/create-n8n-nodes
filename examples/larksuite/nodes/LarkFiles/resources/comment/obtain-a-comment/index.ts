import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Comment'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Comment',
  value: 'Obtain A Comment',
  action: 'Obtain a comment',
  description:
    'Obtains a specified comment in Docs.\r\n\r\nAPI reference documentation: [Obtain a comment]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
