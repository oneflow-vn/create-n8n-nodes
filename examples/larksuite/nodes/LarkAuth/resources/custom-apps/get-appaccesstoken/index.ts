import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get appaccesstoken'

const rawOption: INodePropertyOptions = {
  name: 'Get appaccesstoken',
  value: 'Get appaccesstoken',
  action: 'Get app_access_token',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_access_token/internal/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
