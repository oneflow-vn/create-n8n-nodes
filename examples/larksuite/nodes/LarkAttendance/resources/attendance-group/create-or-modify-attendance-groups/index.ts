import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create or modify attendance groups'

const rawOption: INodePropertyOptions = {
  name: 'Create or modify attendance groups',
  value: 'Create or modify attendance groups',
  action: 'Create or modify attendance groups',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/groups',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
