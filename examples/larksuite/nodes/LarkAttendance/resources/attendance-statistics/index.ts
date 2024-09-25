import { INodeProperties } from 'n8n-workflow'

import * as queryStatisticsHeaders from './query-statistics-headers'
import * as queryStatisticsSettings from './query-statistics-settings'
import * as updateStatisticsSettings from './update-statistics-settings'
import * as queryStatisticalData from './query-statistical-data'

export const name = 'Attendance Statistics'

export const properties: INodeProperties[] = [
  ...queryStatisticsHeaders.properties,
  ...queryStatisticsSettings.properties,
  ...updateStatisticsSettings.properties,
  ...queryStatisticalData.properties,
]
