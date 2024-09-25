import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update department information in whole'

const rawOption: INodePropertyOptions = {
  name: 'Update department information in whole',
  value: 'Update department information in whole',
  action: 'Update department information in whole',
  routing: {
    request: {
      method: 'PUT',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
