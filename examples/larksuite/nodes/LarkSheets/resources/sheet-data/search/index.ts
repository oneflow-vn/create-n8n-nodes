import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search'

const rawOption: INodePropertyOptions = {
  name: 'Search',
  value: 'Search',
  action: 'Search',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/find',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
