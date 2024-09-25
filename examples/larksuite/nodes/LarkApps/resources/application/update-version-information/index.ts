import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update version information'

const rawOption: INodePropertyOptions = {
  name: 'Update version information',
  value: 'Update version information',
  action: 'Update version information',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}/app_versions/{{$parameter["version_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
