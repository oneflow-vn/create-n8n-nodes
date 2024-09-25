import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search for groups visible to a user or bot'

const rawOption: INodePropertyOptions = {
  name: 'Search for groups visible to a user or bot',
  value: 'Search for groups visible to a user or bot',
  action: 'Search for groups visible to a user or bot',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
