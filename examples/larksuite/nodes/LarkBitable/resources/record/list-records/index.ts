import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List records'

const rawOption: INodePropertyOptions = {
  name: 'List records',
  value: 'List records',
  action: 'List records',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
