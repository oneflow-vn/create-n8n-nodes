import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query the list of user groups'

const rawOption: INodePropertyOptions = {
  name: 'Query the list of user groups',
  value: 'Query the list of user groups',
  action: 'Query the list of user groups',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/group/simplelist',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
