import { INodeProperties } from 'n8n-workflow'

import * as spreadsheet from './spreadsheet'
import * as sheetFilter from './sheet-filter'
import * as sheetFilterView from './sheet-filter-view'
import * as filterConditionFilterView from './filter-condition-filter-view'
import * as sheetRowColumn from './sheet-row-column'
import * as sheetData from './sheet-data'
import * as sheetFloatingImage from './sheet-floating-image'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'spreadsheet',
      value: 'Docs Sheets Spreadsheet',
    },
    {
      name: 'Sheet  Filter',
      value: 'Docs Sheets Sheet Filter',
    },
    {
      name: 'Sheet  Filter view',
      value: 'Docs Sheets Sheet Filter View',
    },
    {
      name: 'Filter condition  filter view',
      value: 'Docs Sheets Filter Condition Filter View',
    },
    {
      name: 'Sheet  Row Column',
      value: 'Docs Sheets Sheet Row Column',
    },
    {
      name: 'Sheet  Data',
      value: 'Docs Sheets Sheet Data',
    },
    {
      name: 'Sheet  Floating image',
      value: 'Docs Sheets Sheet Floating Image',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
  ...spreadsheet.properties,
  ...sheetFilter.properties,
  ...sheetFilterView.properties,
  ...filterConditionFilterView.properties,
  ...sheetRowColumn.properties,
  ...sheetData.properties,
  ...sheetFloatingImage.properties,
]
