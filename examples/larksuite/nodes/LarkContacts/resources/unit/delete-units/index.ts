import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete units'

const rawOption: INodePropertyOptions = {
  name: 'Delete units',
  value: 'Delete units',
  action: 'Delete units',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/unit/{{$parameter["unit_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
