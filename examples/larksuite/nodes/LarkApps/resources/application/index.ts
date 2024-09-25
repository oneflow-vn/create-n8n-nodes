import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as viewTheListOfAppReleaseApplications from './view-the-list-of-app-release-applications'
import * as obtainAppsInformation from './obtain-apps-information'
import * as updateAppCategoryInformation from './update-app-category-information'
import * as obtainAppVersionInformation from './obtain-app-version-information'
import * as updateVersionInformation from './update-version-information'

const operations: INodePropertyOptions[] = [
  viewTheListOfAppReleaseApplications.option,
  obtainAppsInformation.option,
  updateAppCategoryInformation.option,
  obtainAppVersionInformation.option,
  updateVersionInformation.option,
]

export const name = 'Application'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['App Information Application'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...viewTheListOfAppReleaseApplications.properties,
  ...obtainAppsInformation.properties,
  ...updateAppCategoryInformation.properties,
  ...obtainAppVersionInformation.properties,
  ...updateVersionInformation.properties,
]
