import { properties } from './properties'

export const name = 'Translate with machine translation'

const option = {
  name: 'Translate with machine translation',
  value: 'Translate with machine translation',
  action: 'Translate with machine translation',
  routing: {
    request: {
      method: 'POST',
      url: '=/translation/v1/text/translate',
    },
  },
}

export { option, properties }
