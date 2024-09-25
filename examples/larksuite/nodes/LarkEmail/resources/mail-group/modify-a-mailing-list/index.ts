import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify a mailing list'

const rawOption: INodePropertyOptions = {
  name: 'Modify a mailing list',
  value: 'Modify a mailing list',
  action: 'Modify a mailing list',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
