#!usr/bin/env node
// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.

let people = {
    friends: [] as { firstName: string; lastName: string; id?: number } []
};

// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
let friend1 = {
    firstName : "zoha",
    lastName: "kanwal",
    id: 234567
};
let friend2 = {
    firstName : "sana",
    lastName: "naz",
    id: 234568
};
let friend3 ={
    firstName : "abhiha",
    lastName: "mehtab",
    id: 234569 
}
// 3. Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);

// 4. Output the entire people object to the console, displaying your information and your 
// friend list.
console.log(people);

