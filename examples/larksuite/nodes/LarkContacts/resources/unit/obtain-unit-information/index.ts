import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain unit information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain unit information',
  value: 'Obtain unit information',
  action: 'Obtain unit information',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/unit/{{$parameter["unit_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
