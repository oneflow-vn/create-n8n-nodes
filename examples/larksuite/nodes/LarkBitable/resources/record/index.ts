import { INodeProperties } from 'n8n-workflow'

import * as listRecords from './list-records'
import * as createARecord from './create-a-record'
import * as getRecords from './get-records'
import * as updateARecord from './update-a-record'
import * as deleteARecord from './delete-a-record'
import * as createRecords from './create-records'
import * as updateRecords from './update-records'
import * as deleteRecords from './delete-records'

export const name = 'record'

export const properties: INodeProperties[] = [
  ...listRecords.properties,
  ...createARecord.properties,
  ...getRecords.properties,
  ...updateARecord.properties,
  ...deleteARecord.properties,
  ...createRecords.properties,
  ...updateRecords.properties,
  ...deleteRecords.properties,
]
