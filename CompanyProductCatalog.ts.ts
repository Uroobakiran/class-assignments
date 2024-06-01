#!usr/bin/env node
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.

let inventory = [] as { name:string , model:string,cost: string,quantity:string}[]

// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
let product1 = {
    name: "BeautyBoost Radiance Serum",
    model:  "Radiant Glow Serum" ,
    cost: "$20 " ,
    quantity: "30ml"
};
let product2 = {
        name: "LashLux Lengthening Mascara",
        model:  "Lash Lengthening Mascara" ,
        cost: "$12 " ,
        quantity: "8g"
};
let product3 = {
    name: " Velvet Kiss Matte Lipstick",
    model:  "Velvet Matte Lipstick" ,
    cost: "$15" ,
    quantity: "4.5g"
}

// 3. Add these product objects to the inventory array using an appropriate array method.

inventory.push(product1, product2, product3);
console.log(inventory);

// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.

console.log("The quantity of a third product: ", inventory[2].quantity);

// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data

let product4 = {
    name: "Glowing Skin Foundation",
    model: "Radiant Finish Foundation",
    cost: "$25",
    quantity: "30ml"
};

let product5 = {
    name: "Brightening Eye Cream",
    model: "Eye Brightening Cream",
    cost: "$18",
    quantity: "15ml"
};
inventory.push(product4, product5, );
console.log(inventory);

console.log("name of a fourth product:", inventory[3].name);
console.log(product5)
console.log("Model of product 2 is:", inventory[1].model)