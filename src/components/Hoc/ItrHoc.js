import React from 'react'
import IncomeFromHouseProperty from '../itr-component/IncomeFromHouseProperty'
import IncomeFromSalary from '../itr-component/IncomeFromSalary'

export default function ItrHoc({selection}) {
  if(selection === 1) {
      return <IncomeFromSalary />
  } else if(selection === 2) {
      return <IncomeFromHouseProperty />
  }
}
