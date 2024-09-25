import { INodeProperties } from 'n8n-workflow'

import * as addPermissions from './add-permissions'
import * as updatesPermissionsOfACollaborator from './updates-permissions-of-a-collaborator'
import * as deletePermissionsOfACollaborator from './delete-permissions-of-a-collaborator'

export const name = 'Permission Member'

export const properties: INodeProperties[] = [
  ...addPermissions.properties,
  ...updatesPermissionsOfACollaborator.properties,
  ...deletePermissionsOfACollaborator.properties,
]
