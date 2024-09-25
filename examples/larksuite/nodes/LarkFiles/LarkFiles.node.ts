import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkFiles.properties'

export class LarkFiles implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Files',
    name: 'LarkFiles',
    icon: 'fa:file',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Files Management',
    defaults: {
      name: 'LarkFiles',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'larksuiteOAuth2Api',
        required: true,
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
