class Person {
    static instanceCount = 0;

    constructor(name) {
        this.name = name;
        Person.instanceCount++;
    }

    introduceYourself() {
        return `Hello, my name is ${this.name}`;
    }

    getRole() {
        return "Person";
    }

    static countInstances() {
        return Person.instanceCount;
    }
}

class GradeBook {
    constructor() {
        this.grades = {}; // question
    }

    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }

    getGrades(subject) {
        return this.grades[subject] || []; // question
    }

    getAllGrades() {
        return this.grades;
    }

    static format() {
        return {}; // question
    }
}

// const person1 = new Person("Alice");

// console.log(person1.introduceYourself());
// console.log(Person.countInstances());

class Student extends Person {
    static instanceCount = 0;

    constructor(name) {
        super(name);
        this.gradeBook = new GradeBook(); // question
        Student.instanceCount++;
    }

    introduceYourself() {
        return `${super.introduceYourself()} and I am a student`;
    }

    getGradeBook() {
        return this.gradeBook; // question
    }

    getGrade() {
        return this.gradeBook.getGrades(subject);
    }

    schoolUniform() {
        return `School shirt and pants`;
    }

    getRole() {
        super.getRole();
        return "Student";
    }

    countInstances() {
        return Student.instanceCount;
    }
}

// const student1 = new Student("Alex");

// console.log(student1.introduceYourself());
// console.log(student1.countInstances());

class Teacher extends Person {
    static instanceCount = 0;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.instanceCount++;
    }

    introduceYourself() {
        return `${super.introduceYourself()} and I teach ${this.subject}`;
    }
    teach(student, grade) {
        student.getGradeBook().addGrade(this.subject, grade);
    }

    getSubject() {
        return this.subject;
    }

    getStudentGrade(student) {
        return student.getGrade(this.subject);
    }

    dressCode() {
        return "Formal shirt and pants";
    }

    getRole() {
        super.getRole();
        return "Teacher";
    }

    countInstances() {
        return Teacher.instanceCount;
    }
}

// const teacher1 = new Teacher("Maria", "Geography");

// console.log(teacher1.getSubject());

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }

    enroll(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            console.log("Error: Invalid student object");
        }
    }

    expel(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        } else {
            console.log("Error: Student not found in the school");
        }
    }

    hire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        } else {
            console.log("Error: Invalid teacher object");
        }
    }

    fire(teacher) {
        const index = this.teachers.indexOf(teacher);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        } else {
            console.log("Error: Teacher not found in the school");
        }
    }
}

// Testing the implementation
const person1 = new Person("John");
person1.introduceYourself(); // Output: Hello, my name is John
console.log("Person instances:", Person.countInstances()); // Output: Person instances: 1

const student1 = new Student("Alice");
student1.introduceYourself(); // Output: Hello, my name is Alice and I am a student
console.log("Student instances:", Student.countInstances()); // Output: Student instances: 1

const teacher1 = new Teacher("Mr. Smith", "Math");
teacher1.introduceYourself(); // Output: Hello, my name is Mr. Smith and I teach Math
console.log("Teacher instances:", Teacher.countInstances()); // Output: Teacher instances: 1

const school1 = new School("My School");
school1.enroll(student1);
school1.hire(teacher1);

console.log(school1.students); // Output: [Student { name: 'Alice', gradeBook: GradeBook { grades: {} } }]
console.log(school1.teachers); // Output: [Teacher { name: 'Mr. Smith', subject: 'Math' }]

teacher1.teach(student1, 85);
console.log(student1.getGrade("Math")); // Output: [85]

school1.expel(student1);
school1.fire(teacher1);

console.log(school1.students); // Output: []
console.log(school1.teachers); // Output: []
