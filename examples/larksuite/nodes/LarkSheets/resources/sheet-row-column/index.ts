import { INodeProperties } from 'n8n-workflow'

import * as rowsOrColumnsToMove from './rows-or-columns-to-move'

export const name = 'Sheet  Row Column'

export const properties: INodeProperties[] = [...rowsOrColumnsToMove.properties]
