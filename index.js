const employee = {
    name: 'john',
    streetAddress: 'Walter 2b Rn-354 new york',
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
};