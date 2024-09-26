import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkSheets.properties'
import { methods } from './LarkSheets.methods'

export class LarkSheets implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Sheets',
    name: 'LarkSheets',
    icon: 'file:larksheet.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Sheets Management',
    defaults: {
      name: 'LarkSheets',
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
