import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List view'

const rawOption: INodePropertyOptions = {
  name: 'List view',
  value: 'List view',
  action: 'List view',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/views',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
