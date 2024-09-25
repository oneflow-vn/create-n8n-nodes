import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query availability'

const rawOption: INodePropertyOptions = {
  name: 'Query availability',
  value: 'Query availability',
  action: 'Query availability',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/freebusy/list',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
