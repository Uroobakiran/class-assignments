#!usr/bin/env node
// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:

// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
interface Student {
    name: string;
    seniorStatus: boolean;
    assignmentsCompleted: boolean;
}

// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
let students: Student[] = [
    { name: "Neha", seniorStatus: true, assignmentsCompleted: true },
    { name: "Zeshan", seniorStatus: false, assignmentsCompleted: false },
    { name: "Wania", seniorStatus: true, assignmentsCompleted: false },
    { name: "Anum", seniorStatus: true, assignmentsCompleted: true },
    { name: "Taha", seniorStatus: false, assignmentsCompleted: false },
    { name: "Zoha", seniorStatus: false, assignmentsCompleted: true }
]

// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
function seniorStudent(studentList: Student[]){
    return studentList.filter(student => student.seniorStatus && student.assignmentsCompleted);
}


let seniorsAssignments = seniorStudent(students);
console.log("Senior Students with Completed Assignments:");
console.log(seniorsAssignments);

 // 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
function updateClassList(studentList: Student[]) {
    return studentList.filter(student => !student.seniorStatus|| student.assignmentsCompleted);
}

let updatedStudentList = updateClassList(students);
console.log("Updated Class List:");
console.log(updatedStudentList);