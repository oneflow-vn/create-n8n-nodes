import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Streaming speech recognition ASR'

const rawOption: INodePropertyOptions = {
  name: 'Streaming speech recognition ASR',
  value: 'Streaming speech recognition ASR',
  action: 'Streaming speech recognition (ASR)',
  routing: {
    request: {
      method: 'POST',
      url: '=/speech_to_text/v1/speech/stream_recognize',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
