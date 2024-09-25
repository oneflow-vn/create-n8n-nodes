import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a department'

const rawOption: INodePropertyOptions = {
  name: 'Delete a department',
  value: 'Delete a department',
  action: 'Delete a department',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
