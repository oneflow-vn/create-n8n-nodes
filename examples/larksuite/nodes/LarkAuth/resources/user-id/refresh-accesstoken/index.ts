import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Refresh accesstoken'

const rawOption: INodePropertyOptions = {
  name: 'Refresh accesstoken',
  value: 'Refresh accesstoken',
  action: 'Refresh access_token',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/authen/v1/refresh_access_token',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
