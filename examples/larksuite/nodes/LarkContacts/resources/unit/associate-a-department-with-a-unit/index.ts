import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Associate a department with a unit'

const rawOption: INodePropertyOptions = {
  name: 'Associate a department with a unit',
  value: 'Associate a department with a unit',
  action: 'Associate a department with a unit',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/unit/bind_department',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
