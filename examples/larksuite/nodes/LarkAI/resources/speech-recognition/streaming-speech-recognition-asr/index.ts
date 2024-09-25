import { properties } from './properties'

export const name = 'Streaming speech recognition ASR'

const option = {
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

export { option, properties }
