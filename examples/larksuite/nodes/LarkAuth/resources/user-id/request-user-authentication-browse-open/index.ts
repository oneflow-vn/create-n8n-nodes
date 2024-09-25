import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Request user authenticationBrowse open'

const rawOption: INodePropertyOptions = {
  name: 'Request user authenticationBrowse open',
  value: 'Request user authenticationBrowse open',
  action: 'Request user authentication(Browse open)',
  routing: {
    request: {
      method: 'GET',
      url: '=/open-apis/authen/v1/index',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
