import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get App Information'

const rawOption: INodePropertyOptions = {
  name: 'Get App Information',
  value: 'Get App Information',
  action: 'Get App Information',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
