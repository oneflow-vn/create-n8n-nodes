import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update common settings of a document'

const rawOption: INodePropertyOptions = {
  name: 'Update common settings of a document',
  value: 'Update common settings of a document',
  action: 'Update common settings of a document',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/public',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
