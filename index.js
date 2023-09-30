const employee = {
    name: 'John Doe',
    streetAddress: '123 Main Street'
  };
  

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
 console.log(updateEmployeeWithKeyAndValue(employee,"name","ahmad"))

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
console.log(destructivelyDeleteFromEmployeeByKey(employee,"name","salman"))

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
console.log(deleteFromEmployeeByKey(employee,"name"))

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"))
