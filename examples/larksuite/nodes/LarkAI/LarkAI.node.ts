import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAI.properties'
import { methods } from './LarkAI.methods'

export class LarkAI implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark AI',
    name: 'larkAi',
    icon: 'file:larkai.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark AI Management',
    defaults: {
      name: 'Lark AI',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'Tenant Token',
        name: 'larkSuiteTenantApi',
        required: true,
        displayOptions: {
          show: {
            authentication: ['larkSuiteTenantApi'],
          },
        },
      },
      {
        displayName: 'OAuth2',
        name: 'larkSuiteOAuth2Api',
        required: true,
        displayOptions: {
          show: {
            authentication: ['larkSuiteOAuth2Api'],
          },
        },
      },
    ],
    requestDefaults: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: 'https://open.larksuite.com/open-apis',
    },
    properties: properties,
  }

  methods = methods
}
