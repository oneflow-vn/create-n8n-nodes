import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain app version information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain app version information',
  value: 'Obtain app version information',
  action: 'Obtain app version information',
  routing: {
    request: {
      method: 'GET',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}/app_versions/{{$parameter["version_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
