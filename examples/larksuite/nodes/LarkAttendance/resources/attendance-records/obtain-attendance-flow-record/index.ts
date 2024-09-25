import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain attendance flow record'

const rawOption: INodePropertyOptions = {
  name: 'Obtain attendance flow record',
  value: 'Obtain attendance flow record',
  action: 'Obtain attendance flow record',
  routing: {
    request: {
      method: 'GET',
      url: '=/attendance/v1/user_flows/{{$parameter["user_flow_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
