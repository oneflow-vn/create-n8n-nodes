import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Batch Create Table'

const rawOption: INodePropertyOptions = {
  name: 'Batch Create Table',
  value: 'Batch Create Table',
  action: 'Batch Create Table',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/batch_create',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
