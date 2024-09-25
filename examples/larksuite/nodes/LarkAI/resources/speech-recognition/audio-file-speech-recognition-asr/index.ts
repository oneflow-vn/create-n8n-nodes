import { properties } from './properties'

export const name = 'Audio file speech recognition ASR'

const option = {
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

export { option, properties }
