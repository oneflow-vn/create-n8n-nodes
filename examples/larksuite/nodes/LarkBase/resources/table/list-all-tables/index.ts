import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List all tables'

const rawOption: INodePropertyOptions = {
  name: 'List all tables',
  value: 'List all tables',
  action: 'List all tables',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
