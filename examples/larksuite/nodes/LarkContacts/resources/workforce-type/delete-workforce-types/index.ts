import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete workforce types'

const rawOption: INodePropertyOptions = {
  name: 'Delete workforce types',
  value: 'Delete workforce types',
  action: 'Delete workforce types',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/employee_type_enums/{{$parameter["enum_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
