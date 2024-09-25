import { INodeProperties } from 'n8n-workflow'

import * as modifyUserSettings from './modify-user-settings'

export const name = 'User Settings'

export const properties: INodeProperties[] = [...modifyUserSettings.properties]
