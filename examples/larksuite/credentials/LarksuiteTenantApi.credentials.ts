import type {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class LarkSuiteTenantApi implements ICredentialType {
	name = 'larkSuiteTenantApi';

	displayName = 'LarkSuite Tenant';

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
		{
			displayName: 'Tenant access token',
			name: 'tenantAccessToken',
			type: 'hidden',
			default: '',
			typeOptions: {
				expirable: true,
			}
		}
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const { tenant_access_token } = (await this.helpers.httpRequest({
			method: 'POST',
			url: `https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal`,
			body: {
				app_id: credentials.appId,
				app_secret: credentials.appSecret,
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

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://open.larksuite.com/open-apis/tenant/v2/tenant/query',
		}
	}

}
