import { INodeProperties } from 'n8n-workflow'

import * as createALeaveEvent from './create-a-leave-event'
import * as deleteALeaveEvent from './delete-a-leave-event'

export const name = 'Timeoff'

export const properties: INodeProperties[] = [
  ...createALeaveEvent.properties,
  ...deleteALeaveEvent.properties,
]
