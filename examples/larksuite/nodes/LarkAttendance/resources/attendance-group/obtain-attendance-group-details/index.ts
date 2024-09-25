import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain attendance group details'

const rawOption: INodePropertyOptions = {
  name: 'Obtain attendance group details',
  value: 'Obtain attendance group details',
  action: 'Obtain attendance group details',
  routing: {
    request: {
      method: 'GET',
      url: '=/attendance/v1/groups/{{$parameter["group_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
