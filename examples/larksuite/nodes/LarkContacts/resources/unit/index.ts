import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAUnit from './create-a-unit'
import * as obtainUnitsInBatches from './obtain-units-in-batches'
import * as modifyUnitInformation from './modify-unit-information'
import * as deleteUnits from './delete-units'
import * as obtainUnitInformation from './obtain-unit-information'
import * as associateADepartmentWithAUnit from './associate-a-department-with-a-unit'
import * as dissociateADepartmentWithAUnit from './dissociate-a-department-with-a-unit'
import * as obtainTheListOfDepartmentsAssociatedWithAUnit from './obtain-the-list-of-departments-associated-with-a-unit'

const operations: INodePropertyOptions[] = [
  createAUnit.option,
  obtainUnitsInBatches.option,
  modifyUnitInformation.option,
  deleteUnits.option,
  obtainUnitInformation.option,
  associateADepartmentWithAUnit.option,
  dissociateADepartmentWithAUnit.option,
  obtainTheListOfDepartmentsAssociatedWithAUnit.option,
]

export const name = 'Unit'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts Unit'],
    },
  },
  default: '',
}
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...createAUnit.properties,
  ...obtainUnitsInBatches.properties,
  ...modifyUnitInformation.properties,
  ...deleteUnits.properties,
  ...obtainUnitInformation.properties,
  ...associateADepartmentWithAUnit.properties,
  ...dissociateADepartmentWithAUnit.properties,
  ...obtainTheListOfDepartmentsAssociatedWithAUnit.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
