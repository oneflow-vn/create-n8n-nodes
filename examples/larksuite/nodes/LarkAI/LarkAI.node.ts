import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAI.properties'
import { methods } from './LarkAI.methods'

export class LarkAI implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark AI',
    name: 'LarkAI',
    icon: 'file:larkai.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark AI Management',
    defaults: {
      name: 'LarkAI',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'Tenant Token',
        name: 'larkSuiteTenantApi',
        required: false,
        displayOptions: {
          show: {
            authentication: ['accessToken'],
          },
        },
      },
      {
        displayName: 'OAuth2',
        name: 'larkSuiteOAuth2Api',
        required: false,
        displayOptions: {
          show: {
            authentication: ['oAuth2'],
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
