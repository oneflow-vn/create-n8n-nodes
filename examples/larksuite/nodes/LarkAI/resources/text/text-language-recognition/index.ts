import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Text language recognition'

const rawOption: INodePropertyOptions = {
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

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
