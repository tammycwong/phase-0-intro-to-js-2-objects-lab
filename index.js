// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee,key,value) {
    const cloneOfEmployee = {...employee};
    cloneOfEmployee[key] = value;
    return cloneOfEmployee; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key) {
    const deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee,key) {
    delete employee[key];
    return employee;
}