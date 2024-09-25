import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain user information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain user information',
  value: 'Obtain user information',
  action: 'Obtain user information',
  routing: {
    request: {
      method: 'GET',
      url: '=/open-apis/authen/v1/user_info',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
