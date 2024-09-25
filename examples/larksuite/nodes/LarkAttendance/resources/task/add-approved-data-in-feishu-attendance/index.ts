import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add Approved Data in Feishu Attendance'

const rawOption: INodePropertyOptions = {
  name: 'Add Approved Data in Feishu Attendance',
  value: 'Add Approved Data in Feishu Attendance',
  action: 'Add Approved Data in Feishu Attendance',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_approvals',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
