const employee = {name:'Kyoko', streetAddress:'33 Barricklo st'}

function updateEmployeeWithKeyAndValue() {
    return newEmployee = employee.assign({}, employee, { [key]: value })
    
}
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee[key] ='value';
    return employee;
}
function deleteFromEmployeeByKey() {
    const newEmployee = delete employee.key;
    return newEmployee; 
}
function destructivelyDeleteFromEmployeeByKey() {
    return delete employee.key;

}