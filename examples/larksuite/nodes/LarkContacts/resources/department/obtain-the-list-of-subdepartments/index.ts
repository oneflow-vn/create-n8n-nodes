import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the list of subdepartments'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the list of subdepartments',
  value: 'Obtain the list of subdepartments',
  action: 'Obtain the list of sub-departments',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}/children',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
