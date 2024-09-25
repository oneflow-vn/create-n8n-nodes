import { INodeProperties } from 'n8n-workflow'

import * as obtainStatisticsOfAFile from './obtain-statistics-of-a-file'

export const name = 'Statistics'

export const properties: INodeProperties[] = [
  ...obtainStatisticsOfAFile.properties,
]
