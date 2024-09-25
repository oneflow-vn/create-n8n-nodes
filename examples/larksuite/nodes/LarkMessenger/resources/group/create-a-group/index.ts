import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a group'

const rawOption: INodePropertyOptions = {
  name: 'Create a group',
  value: 'Create a group',
  action: 'Create a group',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
