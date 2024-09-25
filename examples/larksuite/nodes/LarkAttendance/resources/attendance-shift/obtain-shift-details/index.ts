import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain shift details'

const rawOption: INodePropertyOptions = {
  name: 'Obtain shift details',
  value: 'Obtain shift details',
  action: 'Obtain shift details',
  routing: {
    request: {
      method: 'GET',
      url: '=/attendance/v1/shifts/{{$parameter["shift_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
