import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get records'

const rawOption: INodePropertyOptions = {
  name: 'Get records',
  value: 'Get records',
  action: 'Get records',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/{{$parameter["record_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
