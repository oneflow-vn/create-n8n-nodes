import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain mailing list members in batch'

const rawOption: INodePropertyOptions = {
  name: 'Obtain mailing list members in batch',
  value: 'Obtain mailing list members in batch',
  action: 'Obtain mailing list members in batch',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
