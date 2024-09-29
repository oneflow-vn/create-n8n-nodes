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
    'Uploads a file and obtains its file ID. This ID can be used as the face_key parameter in the "Modify user settings" API.\r\n\r\nAPI reference documentation: [Upload files]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/file/upload)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/files/upload',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
