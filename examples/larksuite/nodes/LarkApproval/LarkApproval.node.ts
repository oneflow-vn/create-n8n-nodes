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
        required: true,
        displayOptions: {
          show: {
            authentication: ['larkSuiteTenantApi'],
          },
        },
      },
      {
        displayName: 'OAuth2 Token',
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
