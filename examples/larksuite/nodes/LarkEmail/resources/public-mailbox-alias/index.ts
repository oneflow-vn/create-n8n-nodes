import { INodeProperties } from 'n8n-workflow'

import * as createAPublicMailboxAlias from './create-a-public-mailbox-alias'
import * as obtainAllPublicMailboxAliases from './obtain-all-public-mailbox-aliases'
import * as deleteAPublicMailboxAlias from './delete-a-public-mailbox-alias'

export const name = 'Public Mailbox Alias'

export const properties: INodeProperties[] = [
  ...createAPublicMailboxAlias.properties,
  ...obtainAllPublicMailboxAliases.properties,
  ...deleteAPublicMailboxAlias.properties,
]
