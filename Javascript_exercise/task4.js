/* Task 4 :Write a JavaScript program that creates a class called University with properties for university names
 and departments. Include methods to add a department, remove a department, and display all departments. Create an 
 instance of the University class and add and remove departments.*/

class University {
    constructor(name) {
        this.name = name;             
        this.departments = [];        
    }

    addDepartment(department) {
        if (!this.departments.includes(department)) {
            this.departments.push(department);
            console.log(`${department} department added.`);
        } else {
            console.log(`${department} department already exists.`);
        }
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`${department} department removed.`);
        } else {
            console.log(`${department} department not found.`);
        }
    }

    displayDepartments() {
        if (this.departments.length > 0) {
            console.log(`${this.name} Departments:`);
            this.departments.forEach(department => {
                console.log(`- ${department}`);
            });
        } else {
            console.log(`${this.name} has no departments.`);
        }
    }
}

const university = new University("CVM University");

university.addDepartment("Computer Science");
university.addDepartment("Imformation Technology");
university.addDepartment("Mechanical Engineering");
university.addDepartment("Electrical Engineering");

university.displayDepartments();

university.removeDepartment("Mechanical Engineering");

university.displayDepartments();
