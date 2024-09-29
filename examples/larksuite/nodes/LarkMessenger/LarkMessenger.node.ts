import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkMessenger.properties'
import { methods } from './LarkMessenger.methods'

export class LarkMessenger implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Messenger',
    name: 'larkMessenger',
    icon: 'file:larkmessage.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Messenger Management',
    defaults: {
      name: 'Lark Messenger',
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
