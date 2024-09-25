import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain user ID via email or mobile number'

const rawOption: INodePropertyOptions = {
  name: 'Obtain user ID via email or mobile number',
  value: 'Obtain user ID via email or mobile number',
  action: 'Obtain user ID via email or mobile number',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/users/batch_get_id',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
