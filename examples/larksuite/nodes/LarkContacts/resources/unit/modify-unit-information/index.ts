import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify unit information'

const rawOption: INodePropertyOptions = {
  name: 'Modify unit information',
  value: 'Modify unit information',
  action: 'Modify unit information',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/unit/{{$parameter["unit_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
