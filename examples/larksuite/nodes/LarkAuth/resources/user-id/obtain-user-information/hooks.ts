import { INodePropertyOptions, INodeProperties } from 'n8n-workflow'
import { preSend } from './genericFunctions'

export default function runHook (
  option: INodePropertyOptions,
  properties: INodeProperties[]
): {
  option: INodePropertyOptions
  properties: INodeProperties[]
} {
	option.routing =  {
		...option.routing,
		send: {
			preSend: [preSend]
		}
	};

  return {
    option,
    properties,
  }
}
