import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Generate CalDAV configuration'

const rawOption: INodePropertyOptions = {
  name: 'Generate CalDAV configuration',
  value: 'Generate CalDAV configuration',
  action: 'Generate CalDAV configuration',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/settings/generate_caldav_conf',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
