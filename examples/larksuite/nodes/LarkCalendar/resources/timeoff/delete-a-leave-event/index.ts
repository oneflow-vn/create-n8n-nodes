import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a leave event'

const rawOption: INodePropertyOptions = {
  name: 'Delete a leave event',
  value: 'Delete a leave event',
  action: 'Delete a leave event',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/timeoff_events/{{$parameter["timeoff_event_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
