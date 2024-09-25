import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'View the list of app release applications'

const rawOption: INodePropertyOptions = {
  name: 'View the list of app release applications',
  value: 'View the list of app release applications',
  action: 'View the list of app release applications',
  routing: {
    request: {
      method: 'GET',
      url: '=/application/v6/applications/underauditlist',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
