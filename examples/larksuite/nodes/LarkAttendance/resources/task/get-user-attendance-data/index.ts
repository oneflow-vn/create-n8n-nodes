import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get User Attendance Data'

const rawOption: INodePropertyOptions = {
  name: 'Get User Attendance Data',
  value: 'Get User Attendance Data',
  action: 'Get User Attendance Data',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_approvals/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
