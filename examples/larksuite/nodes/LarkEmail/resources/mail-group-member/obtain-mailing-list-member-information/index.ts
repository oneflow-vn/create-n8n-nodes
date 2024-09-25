import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain mailing list member information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain mailing list member information',
  value: 'Obtain mailing list member information',
  action: 'Obtain mailing list member information',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
