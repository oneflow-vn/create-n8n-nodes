import { INodeProperties } from 'n8n-workflow'

import * as createADepartment from './create-a-department'
import * as obtainSingleDepartmentInformation from './obtain-single-department-information'
import * as modifyDepartmentInformationInPart from './modify-department-information-in-part'
import * as updateDepartmentInformationInWhole from './update-department-information-in-whole'
import * as deleteADepartment from './delete-a-department'
import * as obtainTheListOfSubdepartments from './obtain-the-list-of-subdepartments'
import * as obtainParentDepartmentInformation from './obtain-parent-department-information'
import * as searchForDepartments from './search-for-departments'
import * as changeDepartmentGroupToCommonGroup from './change-department-group-to-common-group'

export const name = 'Department'

export const properties: INodeProperties[] = [
  ...createADepartment.properties,
  ...obtainSingleDepartmentInformation.properties,
  ...modifyDepartmentInformationInPart.properties,
  ...updateDepartmentInformationInWhole.properties,
  ...deleteADepartment.properties,
  ...obtainTheListOfSubdepartments.properties,
  ...obtainParentDepartmentInformation.properties,
  ...searchForDepartments.properties,
  ...changeDepartmentGroupToCommonGroup.properties,
]
