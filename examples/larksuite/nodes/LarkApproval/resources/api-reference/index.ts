import { INodeProperties } from 'n8n-workflow'

import * as approvalTaskAddSign from './approval-task-add-sign'
import * as approvalPreview from './approval-preview'
import * as taskListFromUserPerspective from './task-list-from-user-perspective'

export const name = 'API Reference'

export const properties: INodeProperties[] = [
  ...approvalTaskAddSign.properties,
  ...approvalPreview.properties,
  ...taskListFromUserPerspective.properties,
]
