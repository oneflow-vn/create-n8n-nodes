import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain custom user fields of a company'

const rawOption: INodePropertyOptions = {
  name: 'Obtain custom user fields of a company',
  value: 'Obtain custom user fields of a company',
  action: 'Obtain custom user fields of a company',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/custom_attrs',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
