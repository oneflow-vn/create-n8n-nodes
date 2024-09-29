import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Audio File Speech Recognition Asr'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Audio File Speech Recognition Asr',
  value: 'Audio File Speech Recognition Asr',
  action: 'Audio file speech recognition (ASR)',
  description:
    'An audio speech recognition API is provided to recognize the entire audio file (less than 60s) at one time.\r\n\r\nAPI reference documentation: [Audio file speech recognition (ASR)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/ai/speech_to_text-v1/speech/file_recognize)',
  routing: {
    request: {
      method: 'POST',
      url: '=/speech_to_text/v1/speech/file_recognize',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
