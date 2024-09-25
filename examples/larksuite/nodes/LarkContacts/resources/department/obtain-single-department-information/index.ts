import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain single department information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain single department information',
  value: 'Obtain single department information',
  action: 'Obtain single department information',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
