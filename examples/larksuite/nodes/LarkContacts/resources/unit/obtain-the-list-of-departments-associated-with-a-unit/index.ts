import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the list of departments associated with a unit'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the list of departments associated with a unit',
  value: 'Obtain the list of departments associated with a unit',
  action: 'Obtain the list of departments associated with a unit',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/unit/list_department',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
