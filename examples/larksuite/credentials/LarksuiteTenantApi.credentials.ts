import type {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialType,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class LarksuiteTenantApi implements ICredentialType {
	name = 'larksuiteTenantApi';

	displayName = 'Larksuite Tenant API';

	documentationUrl = 'https://open.larksuite.com/document/server-docs/getting-started/api-access-token/g';

	properties: INodeProperties[] = [
		{
			displayName: 'App ID',
			name: 'appId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'App Secret',
			name: 'appSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const { tenant_access_token } = (await this.helpers.httpRequest({
			method: 'POST',
			url: `https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal`,
			body: {
				client_id: credentials.appId,
				client_secret: credentials.appSecret,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		})) as { tenant_access_token: string };
		return { tenantAccessToken: tenant_access_token };
	}

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.tenantAccessToken}}',
			},
		},
	};

}
