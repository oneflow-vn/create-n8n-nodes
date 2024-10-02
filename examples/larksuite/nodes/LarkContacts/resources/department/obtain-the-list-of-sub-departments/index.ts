/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Obtain The List Of Sub Departments'

const rawOption: INodePropertyOptions = {
  name: 'Obtain The List Of Sub Departments',
  value: 'Obtain The List Of Sub Departments',
  action: 'Obtain The List Of Sub Departments Contacts Department',
  description:
    'This API is used to obtain the list of sub-departments by using the department ID. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN). API reference documentation: [Obtain the list of sub-departments]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}/children',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
