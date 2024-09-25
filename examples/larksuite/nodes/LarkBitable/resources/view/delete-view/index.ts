import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete view'

const rawOption: INodePropertyOptions = {
  name: 'Delete view',
  value: 'Delete view',
  action: 'Delete view',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/views/{{$parameter["view_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
