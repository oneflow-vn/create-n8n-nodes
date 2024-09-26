import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkCompany.properties'

export class LarkCompany implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Company',
    name: 'LarkCompany',
    icon: 'file:larkcompany.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Company Management',
    defaults: {
      name: 'LarkCompany',
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
