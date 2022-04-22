class Member {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  printSalary = () => {
    console.log(`Salary of ${this.name} : $${this.salary}`);
  };
}

class Employee extends Member {
  constructor(name, age, salary, department) {
    super(name, age, salary);
    this.department = department;
  }
}

const emp1 = new Employee("Ben", 25, 1000, "AWS Developer");
const emp2 = new Employee("Bob", 35, 2000, "MERN Developer");
const emp3 = new Employee("Bill", 45, 3000, "MEAN Developer");

emp1.printSalary();
emp2.printSalary();
emp3.printSalary();
