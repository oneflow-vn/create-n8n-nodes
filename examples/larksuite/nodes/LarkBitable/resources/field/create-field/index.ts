import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Field'

const rawOption: INodePropertyOptions = {
  name: 'Create Field',
  value: 'Create Field',
  action: 'Create Field',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
