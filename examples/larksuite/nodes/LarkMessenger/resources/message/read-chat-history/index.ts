import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Read chat history'

const rawOption: INodePropertyOptions = {
  name: 'Read chat history',
  value: 'Read chat history',
  action: 'Read chat history',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
