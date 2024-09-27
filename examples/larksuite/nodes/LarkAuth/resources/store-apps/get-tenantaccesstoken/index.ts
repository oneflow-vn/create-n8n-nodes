import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get tenantaccesstoken'

const rawOption: INodePropertyOptions = {
  name: 'Get tenantaccesstoken',
  value: 'Get tenantaccesstoken',
  action: 'Get tenant_access_token',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/tenant_access_token/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
