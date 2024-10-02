import { IDataObject, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow'

export async function preSendActionCustonBody (
  this: IExecuteSingleFunctions,
  requestOptions: IHttpRequestOptions
): Promise<IHttpRequestOptions> {
  const { customBody } = requestOptions.body as IDataObject;

	if (typeof requestOptions.body === 'object' && typeof customBody === 'object') {
		// @ts-ignore
		requestOptions.body = {
			...requestOptions.body,
			...customBody,
		}
		// @ts-ignore
		delete requestOptions.body.customBody
	}


  return Promise.resolve(requestOptions)
}
