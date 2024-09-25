import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update app category information'

const rawOption: INodePropertyOptions = {
  name: 'Update app category information',
  value: 'Update app category information',
  action: 'Update app category information',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
