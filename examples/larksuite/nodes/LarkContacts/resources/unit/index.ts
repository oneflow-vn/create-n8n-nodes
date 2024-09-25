import { INodeProperties } from 'n8n-workflow'

import * as createAUnit from './create-a-unit'
import * as obtainUnitsInBatches from './obtain-units-in-batches'
import * as modifyUnitInformation from './modify-unit-information'
import * as deleteUnits from './delete-units'
import * as obtainUnitInformation from './obtain-unit-information'
import * as associateADepartmentWithAUnit from './associate-a-department-with-a-unit'
import * as dissociateADepartmentWithAUnit from './dissociate-a-department-with-a-unit'
import * as obtainTheListOfDepartmentsAssociatedWithAUnit from './obtain-the-list-of-departments-associated-with-a-unit'

export const name = 'Unit'

export const properties: INodeProperties[] = [
  ...createAUnit.properties,
  ...obtainUnitsInBatches.properties,
  ...modifyUnitInformation.properties,
  ...deleteUnits.properties,
  ...obtainUnitInformation.properties,
  ...associateADepartmentWithAUnit.properties,
  ...dissociateADepartmentWithAUnit.properties,
  ...obtainTheListOfDepartmentsAssociatedWithAUnit.properties,
]
