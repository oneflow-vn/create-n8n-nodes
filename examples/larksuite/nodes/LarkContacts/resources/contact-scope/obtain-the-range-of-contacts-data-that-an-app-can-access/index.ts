import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the range of contacts data that an app can access'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the range of contacts data that an app can access',
  value: 'Obtain the range of contacts data that an app can access',
  action: 'Obtain the range of contacts data that an app can access',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/scopes',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
