import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a mailing list alias'

const rawOption: INodePropertyOptions = {
  name: 'Delete a mailing list alias',
  value: 'Delete a mailing list alias',
  action: 'Delete a mailing list alias',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/aliases/{{$parameter["alias_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
