import { IExecuteSingleFunctions, IHttpRequestOptions } from "n8n-workflow";


export async function preSend (this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    return Promise.resolve(requestOptions)
}

