import { INodeProperties } from 'n8n-workflow'

import * as code2SessionUsedInGadgetScenarios from './code-2-session-used-in-gadget-scenarios'

export const name = 'API Access Token'

export const properties: INodeProperties[] = [
  ...code2SessionUsedInGadgetScenarios.properties,
]
