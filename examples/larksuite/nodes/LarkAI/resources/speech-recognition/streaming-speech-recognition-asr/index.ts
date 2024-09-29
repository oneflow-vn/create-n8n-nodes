import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Streaming Speech Recognition Asr'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Streaming Speech Recognition Asr',
  value: 'Streaming Speech Recognition Asr',
  action: 'Streaming speech recognition (ASR)',
  description:
    'A streaming speech recognition API is provided to input an audio clip by clip and receive recognition results in real time. Each audio clip is recommended to be within 100 to 200 ms.\r\n\r\nAPI reference documentation: [Streaming speech recognition (ASR)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/ai/speech_to_text-v1/speech/stream_recognize)',
  routing: {
    request: {
      method: 'POST',
      url: '=/speech_to_text/v1/speech/stream_recognize',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
