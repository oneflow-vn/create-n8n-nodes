import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete attendance group'

const rawOption: INodePropertyOptions = {
  name: 'Delete attendance group',
  value: 'Delete attendance group',
  action: 'Delete attendance group',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/attendance/v1/groups/{{$parameter["group_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
