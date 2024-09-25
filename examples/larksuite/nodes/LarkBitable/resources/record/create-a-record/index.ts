import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a Record'

const rawOption: INodePropertyOptions = {
  name: 'Create a Record',
  value: 'Create a Record',
  action: 'Create a Record',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
