import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Comment List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Comment List',
  value: 'Obtain A Comment List',
  action: 'Obtain a comment list',
  description:
    'Obtains all Doc comments in Docs by pages.\r\n\r\nAPI reference documentation: [Obtain a comment list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
