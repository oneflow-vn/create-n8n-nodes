import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Dissociate a department with a unit'

const rawOption: INodePropertyOptions = {
  name: 'Dissociate a department with a unit',
  value: 'Dissociate a department with a unit',
  action: 'Dissociate a department with a unit',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/unit/unbind_department',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
