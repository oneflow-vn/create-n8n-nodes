import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Translate with machine translation'

const rawOption: INodePropertyOptions = {
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

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
