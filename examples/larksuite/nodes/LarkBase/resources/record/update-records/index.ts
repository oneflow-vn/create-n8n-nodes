import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Records'

const rawOption: INodePropertyOptions = {
  name: 'Update Records',
  value: 'Update Records',
  action: 'Update Records',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/batch_update',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
