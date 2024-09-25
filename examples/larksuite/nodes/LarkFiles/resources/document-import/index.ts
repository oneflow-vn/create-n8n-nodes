import { INodeProperties } from 'n8n-workflow'

import * as createAnImportTask from './create-an-import-task'
import * as queryTheImportTaskResult from './query-the-import-task-result'

export const name = 'document import'

export const properties: INodeProperties[] = [
  ...createAnImportTask.properties,
  ...queryTheImportTaskResult.properties,
]
