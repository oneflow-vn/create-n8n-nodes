import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkApproval.properties'
import { methods } from './LarkApproval.methods'

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
