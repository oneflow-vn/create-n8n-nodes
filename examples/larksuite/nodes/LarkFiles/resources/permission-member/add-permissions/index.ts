import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add permissions'

const rawOption: INodePropertyOptions = {
  name: 'Add permissions',
  value: 'Add permissions',
  action: 'Add permissions',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
