import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload Files'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload Files',
  value: 'Upload Files',
  action: 'Upload files',
  description:
    'Upload files, with videos, audios, and common file types supported.\n\r\n\r\nAPI reference documentation: [Upload files]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/files',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
