import { INodeProperties } from 'n8n-workflow'

import * as searchShiftByName from './search-shift-by-name'
import * as obtainShiftDetails from './obtain-shift-details'
import * as deleteShift from './delete-shift'
import * as createShifts from './create-shifts'

export const name = 'Attendance Shift'

export const properties: INodeProperties[] = [
  ...searchShiftByName.properties,
  ...obtainShiftDetails.properties,
  ...deleteShift.properties,
  ...createShifts.properties,
]
