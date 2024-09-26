import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkMessenger.properties'

export class LarkMessenger implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Messenger',
    name: 'LarkMessenger',
    icon: 'file:larkmessage.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Messenger Management',
    defaults: {
      name: 'LarkMessenger',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'larksuiteOAuth2Api',
        required: true,
        displayOptions: {
          show: {
            authentication: ['oauth2'],
          },
        },
      },
      {
        name: 'larksuiteTenantApi',
        required: true,
        displayOptions: {
          show: {
            authentication: ['accessToken'],
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
}
