import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a mailing list alias'

const rawOption: INodePropertyOptions = {
  name: 'Create a mailing list alias',
  value: 'Create a mailing list alias',
  action: 'Create a mailing list alias',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/aliases',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
