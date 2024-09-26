import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Field'

const rawOption: INodePropertyOptions = {
  name: 'Update Field',
  value: 'Update Field',
  action: 'Update Field',
  routing: {
    request: {
      method: 'PUT',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields/{{$parameter["field_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
