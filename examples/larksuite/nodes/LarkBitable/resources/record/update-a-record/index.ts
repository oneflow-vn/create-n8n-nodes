import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a Record'

const rawOption: INodePropertyOptions = {
  name: 'Update a Record',
  value: 'Update a Record',
  action: 'Update a Record',
  routing: {
    request: {
      method: 'PUT',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/{{$parameter["record_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
