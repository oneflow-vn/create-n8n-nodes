import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete shift'

const rawOption: INodePropertyOptions = {
  name: 'Delete shift',
  value: 'Delete shift',
  action: 'Delete shift',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/attendance/v1/shifts/{{$parameter["shift_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
