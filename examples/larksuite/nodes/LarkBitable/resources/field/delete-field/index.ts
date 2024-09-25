import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Field'

const rawOption: INodePropertyOptions = {
  name: 'Delete Field',
  value: 'Delete Field',
  action: 'Delete Field',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields/{{$parameter["field_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
