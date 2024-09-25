import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify user settings'

const rawOption: INodePropertyOptions = {
  name: 'Modify user settings',
  value: 'Modify user settings',
  action: 'Modify user settings',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_settings/modify',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
