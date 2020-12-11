var employee = []

function Employee(Name, Title, Salary, Status = "Full Time") {
    this.Name = Name;
    this.Title = Title;
    this.Salary = Salary;
    this.Status = Status;
}

Employee.prototype.printEmplyeeForm = function(){
    console.log("Name: " + this.Name + "," + " Job Title: " + this.Title + "," + " Salary: " + this.Salary + "," + " Status: " + this.Status);
}

var employeeOne = new Employee("Mark", "Founder", "More than Ethan");
var employeeTwo = new Employee("Ethan", "Co-Founder", "At least $1 an hour");
var employeeThree = new Employee("Amy", "Camera Operator", "More than those guys", "Contract");

employeeOne.printEmplyeeForm();
employeeTwo.printEmplyeeForm();
employeeThree.printEmplyeeForm();

employee.push(employeeOne);
employee.push(employeeTwo);
employee.push(employeeThree);
