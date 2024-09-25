import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a mailing list member'

const rawOption: INodePropertyOptions = {
  name: 'Create a mailing list member',
  value: 'Create a mailing list member',
  action: 'Create a mailing list member',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
