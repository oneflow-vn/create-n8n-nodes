import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain filter'

const rawOption: INodePropertyOptions = {
  name: 'Obtain filter',
  value: 'Obtain filter',
  action: 'Obtain filter',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
