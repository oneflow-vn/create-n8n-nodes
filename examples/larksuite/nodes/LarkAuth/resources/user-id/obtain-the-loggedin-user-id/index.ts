import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the loggedin user ID'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the loggedin user ID',
  value: 'Obtain the loggedin user ID',
  action: 'Obtain the logged-in user ID',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/authen/v1/access_token',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
