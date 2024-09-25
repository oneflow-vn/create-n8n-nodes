import { INodeProperties } from 'n8n-workflow'

import * as listView from './list-view'
import * as newView from './new-view'
import * as deleteView from './delete-view'

export const name = 'view'

export const properties: INodeProperties[] = [
  ...listView.properties,
  ...newView.properties,
  ...deleteView.properties,
]
