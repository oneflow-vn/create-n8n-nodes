import { INodeProperties } from 'n8n-workflow'

import * as createAMailingListAlias from './create-a-mailing-list-alias'
import * as obtainAllMailingListAliases from './obtain-all-mailing-list-aliases'
import * as deleteAMailingListAlias from './delete-a-mailing-list-alias'

export const name = 'Mail Group Alias'

export const properties: INodeProperties[] = [
  ...createAMailingListAlias.properties,
  ...obtainAllMailingListAliases.properties,
  ...deleteAMailingListAlias.properties,
]
