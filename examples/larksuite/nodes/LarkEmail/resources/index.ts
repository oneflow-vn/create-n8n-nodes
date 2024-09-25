import { INodeProperties } from 'n8n-workflow'

import * as mailGroup from './mail-group'
import * as mailGroupMember from './mail-group-member'
import * as mailGroupPermissionMember from './mail-group-permission-member'
import * as mailGroupAlias from './mail-group-alias'
import * as publicMailbox from './public-mailbox'
import * as publicMailboxMember from './public-mailbox-member'
import * as publicMailboxAlias from './public-mailbox-alias'

export const properties: INodeProperties[] = [
  ...mailGroup.properties,
  ...mailGroupMember.properties,
  ...mailGroupPermissionMember.properties,
  ...mailGroupAlias.properties,
  ...publicMailbox.properties,
  ...publicMailboxMember.properties,
  ...publicMailboxAlias.properties,
]
