function Employees(name, job, salary, status) {
    this.name = name
    this.job = job
    this.salary = salary
    this.status = "Full Time" 
}

Employees.prototype.print = function() {
    console.log(this.name, this.job, this.salary, this.status)
}

var brittany = new Employees("Brittany", "Analyst", 80000)

var john = new Employees("John", "Software Engineer", 100000)

var lisa = new Employees("Lisa", "Project Coordinator", 130000)
lisa.status = "Contract"

brittany.print()
john.print()
lisa.print()