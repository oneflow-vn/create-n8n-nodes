import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A File'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A File',
  value: 'Delete A File',
  action: 'Delete a file',
  description:
    'Deletes a file from My Space.\r\n\r\nAPI reference documentation: [Delete a file]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
