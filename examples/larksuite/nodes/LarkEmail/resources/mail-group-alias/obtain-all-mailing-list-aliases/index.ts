import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain all mailing list aliases'

const rawOption: INodePropertyOptions = {
  name: 'Obtain all mailing list aliases',
  value: 'Obtain all mailing list aliases',
  action: 'Obtain all mailing list aliases',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/aliases',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
