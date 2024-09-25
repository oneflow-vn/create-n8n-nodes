import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a user group'

const rawOption: INodePropertyOptions = {
  name: 'Create a user group',
  value: 'Create a user group',
  action: 'Create a user group',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/group',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
