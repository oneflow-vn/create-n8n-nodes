import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain calendar list'

const rawOption: INodePropertyOptions = {
  name: 'Obtain calendar list',
  value: 'Obtain calendar list',
  action: 'Obtain calendar list',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
