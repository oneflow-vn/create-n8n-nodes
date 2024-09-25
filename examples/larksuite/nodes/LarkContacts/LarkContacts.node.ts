import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkContacts.properties'

export class LarkContacts implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Contacts',
    name: 'LarkContacts',
    icon: 'fa:address-book',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Contacts Management',
    defaults: {
      name: 'LarkContacts',
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
