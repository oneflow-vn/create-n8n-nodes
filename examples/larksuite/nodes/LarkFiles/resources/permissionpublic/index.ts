import { INodeProperties } from 'n8n-workflow'

import * as updateCommonSettingsOfADocument from './update-common-settings-of-a-document'

export const name = 'permissionpublic'

export const properties: INodeProperties[] = [
  ...updateCommonSettingsOfADocument.properties,
]
