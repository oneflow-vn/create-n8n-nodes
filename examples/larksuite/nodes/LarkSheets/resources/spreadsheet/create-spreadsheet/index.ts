import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create spreadsheet'

const rawOption: INodePropertyOptions = {
  name: 'Create spreadsheet',
  value: 'Create spreadsheet',
  action: 'Create spreadsheet',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
