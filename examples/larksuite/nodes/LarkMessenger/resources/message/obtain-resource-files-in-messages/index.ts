import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Resource Files In Messages'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Resource Files In Messages',
  value: 'Obtain Resource Files In Messages',
  action: 'Obtain resource files in messages',
  description:
    'Obtains resource files in messages, including audios, videos, images, and files. **Emoji resources can’t be downloaded**, and the resource files for download can’t exceed 100 MB.\r\n\r\nAPI reference documentation: [Obtain resource files in messages]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-resource/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/resources/{{$parameter["file_key"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
