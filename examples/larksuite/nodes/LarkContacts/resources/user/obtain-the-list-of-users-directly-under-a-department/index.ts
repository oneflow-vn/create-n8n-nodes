import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the list of users directly under a department'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the list of users directly under a department',
  value: 'Obtain the list of users directly under a department',
  action: 'Obtain the list of users directly under a department',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/users/find_by_department',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
