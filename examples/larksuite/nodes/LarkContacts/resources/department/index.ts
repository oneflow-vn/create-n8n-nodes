import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createADepartment from './create-a-department'
import * as obtainSingleDepartmentInformation from './obtain-single-department-information'
import * as modifyDepartmentInformationInPart from './modify-department-information-in-part'
import * as updateDepartmentInformationInWhole from './update-department-information-in-whole'
import * as deleteADepartment from './delete-a-department'
import * as obtainTheListOfSubdepartments from './obtain-the-list-of-subdepartments'
import * as obtainParentDepartmentInformation from './obtain-parent-department-information'
import * as searchForDepartments from './search-for-departments'
import * as changeDepartmentGroupToCommonGroup from './change-department-group-to-common-group'

const operations: INodePropertyOptions[] = [
  createADepartment.option,
  obtainSingleDepartmentInformation.option,
  modifyDepartmentInformationInPart.option,
  updateDepartmentInformationInWhole.option,
  deleteADepartment.option,
  obtainTheListOfSubdepartments.option,
  obtainParentDepartmentInformation.option,
  searchForDepartments.option,
  changeDepartmentGroupToCommonGroup.option,
]

export const name = 'Department'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts Department'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
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

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
