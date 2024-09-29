import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download Files'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Download Files',
  value: 'Download Files',
  action: 'Download files',
  description:
    'Download files. Only files uploaded by an app itself can be downloaded.\r\n\r\nAPI reference documentation: [Download files]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/files/{{$parameter["file_key"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
