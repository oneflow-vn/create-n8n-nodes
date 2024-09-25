import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain a temporary material download URL'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a temporary material download URL',
  value: 'Obtain a temporary material download URL',
  action: 'Obtain a temporary material download URL',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/medias/batch_get_tmp_download_url',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
