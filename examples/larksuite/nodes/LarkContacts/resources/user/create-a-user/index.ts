import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a user'

const rawOption: INodePropertyOptions = {
  name: 'Create a user',
  value: 'Create a user',
  action: 'Create a user',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/users',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
