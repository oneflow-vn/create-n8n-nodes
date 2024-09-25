import { INodeProperties } from 'n8n-workflow'

import * as obtainCorrectionRecord from './obtain-correction-record'

export const name = 'Attendance Correction'

export const properties: INodeProperties[] = [
  ...obtainCorrectionRecord.properties,
]
