import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a Record'

const rawOption: INodePropertyOptions = {
  name: 'Delete a Record',
  value: 'Delete a Record',
  action: 'Delete a Record',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/{{$parameter["record_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
