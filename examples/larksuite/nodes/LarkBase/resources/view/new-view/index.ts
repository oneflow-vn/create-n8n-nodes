import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'New view'

const rawOption: INodePropertyOptions = {
  name: 'New view',
  value: 'New view',
  action: 'New view',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/views',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
