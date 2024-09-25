import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Records'

const rawOption: INodePropertyOptions = {
  name: 'Delete Records',
  value: 'Delete Records',
  action: 'Delete Records',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/batch_delete',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
