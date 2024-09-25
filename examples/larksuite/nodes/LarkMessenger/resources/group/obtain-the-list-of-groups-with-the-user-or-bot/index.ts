import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the list of groups with the user or bot'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the list of groups with the user or bot',
  value: 'Obtain the list of groups with the user or bot',
  action: 'Obtain the list of groups with the user or bot',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
