import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain apps information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain apps information',
  value: 'Obtain apps information',
  action: 'Obtain apps information',
  routing: {
    request: {
      method: 'GET',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
