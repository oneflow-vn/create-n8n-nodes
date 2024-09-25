import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a filter'

const rawOption: INodePropertyOptions = {
  name: 'Delete a filter',
  value: 'Delete a filter',
  action: 'Delete a filter',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
