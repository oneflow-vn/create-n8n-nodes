import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List all fields'

const rawOption: INodePropertyOptions = {
  name: 'List all fields',
  value: 'List all fields',
  action: 'List all fields',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
