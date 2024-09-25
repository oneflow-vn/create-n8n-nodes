import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain a mailing list'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a mailing list',
  value: 'Obtain a mailing list',
  action: 'Obtain a mailing list',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
