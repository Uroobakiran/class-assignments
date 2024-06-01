#!usr/bin/env node
// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any).
type Employee = {
    name: string;
    department: string;
    role: "Manager"| "Engineer"| "Intern";
    contact: {
        phone: string;
        email: string;
    };
    skills: string[]
 };
let employee1: Employee = {
    name: "Zabrish",
    department: "Biology",
    role:  "Intern",
    contact: {
        phone: "0344-2345671",
        email: "zabrish009@gmail.com"
    },
    skills: ["Research","Biochemistry","Data analysis"]

}
let employee2: Employee = {
    name: "Arisha",
    department: "IT",
    role:  "Engineer",
    contact: {
        phone: "0343-8979651",
        email: "Arisha123@gmail.com"
    },
    skills: ["Typescript","Node.js","React"]
}

console.log(employee1);
console.log(employee2)


// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower.

type Car = {
   engine: {
    horsepower: number;
   };
   getHorsepower : ()=> number
}
 
let toyota: Car = {
     engine: {
         horsepower: 350
     },
     getHorsepower: () => { 
        return toyota.engine.horsepower
    },
 }

// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue).

type TShirt = {
   name: string;
   price: number;
   color: string;
   inventory: {
    stock: number;
    colorOption: string[]
    changeColor: (newColor: string) => void;
  };
};

let colorfulTShirt : TShirt = {
name: "Cool T-Shirt",
price: 25.99,
color: "Blue",
inventory: {
  stock: 100,
  colorOption: ["Blue", "Red", "Green"],
  changeColor(newColor: string) {
    colorfulTShirt.color = newColor;
    
    if (newColor === "Red") {
      colorfulTShirt.price *= 1.1; // Increase by 10% for red
    } else if (newColor === "Blue") {
      colorfulTShirt.price *= 0.95; // Decrease by 5% for blue
    }
  },
},
};

colorfulTShirt.inventory.changeColor("Red");
console.log(colorfulTShirt);
   
