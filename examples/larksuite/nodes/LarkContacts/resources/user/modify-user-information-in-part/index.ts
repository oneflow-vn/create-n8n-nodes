import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify user information in part'

const rawOption: INodePropertyOptions = {
  name: 'Modify user information in part',
  value: 'Modify user information in part',
  action: 'Modify user information in part',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
