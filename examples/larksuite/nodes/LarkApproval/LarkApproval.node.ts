import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkApproval.properties'

export class LarkApproval implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Approval',
    name: 'LarkApproval',
    icon: 'file:larkapproval.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Approval Management',
    defaults: {
      name: 'LarkApproval',
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
