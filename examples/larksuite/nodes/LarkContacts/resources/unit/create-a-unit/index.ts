import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a unit'

const rawOption: INodePropertyOptions = {
  name: 'Create a unit',
  value: 'Create a unit',
  action: 'Create a unit',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/unit',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
