import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Batch Delete Table'

const rawOption: INodePropertyOptions = {
  name: 'Batch Delete Table',
  value: 'Batch Delete Table',
  action: 'Batch Delete Table',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/batch_delete',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
