import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update the workforce type'

const rawOption: INodePropertyOptions = {
  name: 'Update the workforce type',
  value: 'Update the workforce type',
  action: 'Update the workforce type',
  routing: {
    request: {
      method: 'PUT',
      url: '=/contact/v3/employee_type_enums/{{$parameter["enum_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
