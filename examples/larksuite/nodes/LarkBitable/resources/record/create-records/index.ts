import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Records'

const rawOption: INodePropertyOptions = {
  name: 'Create Records',
  value: 'Create Records',
  action: 'Create Records',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/batch_create',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
