import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Table'

const rawOption: INodePropertyOptions = {
  name: 'Create Table',
  value: 'Create Table',
  action: 'Create Table',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
