import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add A Comment'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add A Comment',
  value: 'Add A Comment',
  action: 'Add a comment',
  description:
    'Adds a global comment to Docs.\r\n\r\nAPI reference documentation: [Add a comment]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
