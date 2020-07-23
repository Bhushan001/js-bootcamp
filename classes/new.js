const Employee = function(firstName, lastName, age, dept) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dept = dept;
}

Employee.prototype.getName = function() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
};

const emp1 = new Employee('Bhushan', 'Gadekar', 27, 'IT');
console.log(emp1.getName());