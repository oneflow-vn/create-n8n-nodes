import { INodeProperties } from 'n8n-workflow'

import * as spreadsheet from './spreadsheet'
import * as sheetFilter from './sheet-filter'
import * as sheetFilterView from './sheet-filter-view'
import * as filterConditionFilterView from './filter-condition-filter-view'
import * as sheetRowColumn from './sheet-row-column'
import * as sheetData from './sheet-data'
import * as sheetFloatingImage from './sheet-floating-image'

export const properties: INodeProperties[] = [
  ...spreadsheet.properties,
  ...sheetFilter.properties,
  ...sheetFilterView.properties,
  ...filterConditionFilterView.properties,
  ...sheetRowColumn.properties,
  ...sheetData.properties,
  ...sheetFloatingImage.properties,
]
