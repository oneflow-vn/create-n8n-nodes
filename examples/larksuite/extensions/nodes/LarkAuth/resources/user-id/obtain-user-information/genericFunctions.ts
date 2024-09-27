import type {
	IExecuteSingleFunctions, IHttpRequestOptions
} from 'n8n-workflow';


/**
 * Pre send function which gets called before the request gets sent
 *
 */
export async function preSend(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions
): Promise<IHttpRequestOptions> {
	try {
	const credentials = await this.getCredentials('larkSuiteOAuth2Api');
	// @ts-ignore
	console.log('credentials', credentials);
	// @ts-ignore
	console.log('preSend', requestOptions);
	} catch (error) {
		// @ts-ignore
		console.log('error----------------------', error);
		throw error;
	}

	return requestOptions;
}
