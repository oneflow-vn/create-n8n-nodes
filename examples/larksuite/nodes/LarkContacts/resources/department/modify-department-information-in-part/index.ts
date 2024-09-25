import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify department information in part'

const rawOption: INodePropertyOptions = {
  name: 'Modify department information in part',
  value: 'Modify department information in part',
  action: 'Modify department information in part',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
