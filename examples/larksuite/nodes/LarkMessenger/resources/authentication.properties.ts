import { INodeProperties } from 'n8n-workflow';

export const authenticationProperties: INodeProperties[] = [
	{
		displayName: 'Authentication',
		name: 'authentication',
		type: 'options',
		options: [
			{
				name: 'Access Token',
				value: 'accessToken',
			},
			{
				name: 'OAuth2',
				value: 'oAuth2',
			},
		],
		default: 'accessToken',
	},
];
