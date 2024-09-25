import { INodeProperties } from 'n8n-workflow'

import * as viewTheListOfAppReleaseApplications from './view-the-list-of-app-release-applications'
import * as obtainAppsInformation from './obtain-apps-information'
import * as updateAppCategoryInformation from './update-app-category-information'
import * as obtainAppVersionInformation from './obtain-app-version-information'
import * as updateVersionInformation from './update-version-information'

export const name = 'Application'

export const properties: INodeProperties[] = [
  ...viewTheListOfAppReleaseApplications.properties,
  ...obtainAppsInformation.properties,
  ...updateAppCategoryInformation.properties,
  ...obtainAppVersionInformation.properties,
  ...updateVersionInformation.properties,
]
