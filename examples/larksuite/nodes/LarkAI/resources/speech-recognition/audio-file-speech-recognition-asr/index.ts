import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Audio file speech recognition ASR'

const rawOption: INodePropertyOptions = {
  name: 'Audio file speech recognition ASR',
  value: 'Audio file speech recognition ASR',
  action: 'Audio file speech recognition (ASR)',
  routing: {
    request: {
      method: 'POST',
      url: '=/speech_to_text/v1/speech/file_recognize',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
