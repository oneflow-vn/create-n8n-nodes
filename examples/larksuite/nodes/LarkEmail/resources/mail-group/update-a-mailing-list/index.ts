import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a mailing list'

const rawOption: INodePropertyOptions = {
  name: 'Update a mailing list',
  value: 'Update a mailing list',
  action: 'Update a mailing list',
  routing: {
    request: {
      method: 'PUT',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
