import { properties } from './properties'

export const name = 'Text language recognition'

const option = {
  name: 'Text language recognition',
  value: 'Text language recognition',
  action: 'Text language recognition',
  routing: {
    request: {
      method: 'POST',
      url: '=/translation/v1/text/detect',
    },
  },
}

export { option, properties }
