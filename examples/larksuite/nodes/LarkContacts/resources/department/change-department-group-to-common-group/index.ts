import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Change department group to common group'

const rawOption: INodePropertyOptions = {
  name: 'Change department group to common group',
  value: 'Change department group to common group',
  action: 'Change department group to common group',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/departments/unbind_department_chat',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
