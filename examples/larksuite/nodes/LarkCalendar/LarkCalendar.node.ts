import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkCalendar.properties'

export class LarkCalendar implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Calendar',
    name: 'LarkCalendar',
    icon: 'file:./icons/larkcalendar.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Calendar Management',
    defaults: {
      name: 'LarkCalendar',
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
