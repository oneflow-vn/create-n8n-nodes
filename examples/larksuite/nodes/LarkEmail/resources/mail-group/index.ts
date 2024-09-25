import { INodeProperties } from 'n8n-workflow'

import * as createAMailingList from './create-a-mailing-list'
import * as obtainMailingListsInBatch from './obtain-mailing-lists-in-batch'
import * as obtainAMailingList from './obtain-a-mailing-list'
import * as modifyAMailingList from './modify-a-mailing-list'
import * as updateAMailingList from './update-a-mailing-list'
import * as deleteAMailingList from './delete-a-mailing-list'

export const name = 'Mail Group'

export const properties: INodeProperties[] = [
  ...createAMailingList.properties,
  ...obtainMailingListsInBatch.properties,
  ...obtainAMailingList.properties,
  ...modifyAMailingList.properties,
  ...updateAMailingList.properties,
  ...deleteAMailingList.properties,
]
