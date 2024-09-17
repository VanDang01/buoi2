// HomeWorkObject

// 1. Create an Object

let obj = {};

// 2. Read a Property Value from the Object

let person = { 
    name: "Dang", 
    age: 23
};
console.log(person.name);

// 3. Update a Property Value in the Object

person.age = 24;

console.log(person);

// 4. Delete a Property from the Object

delete person.age;

console.log(person);

// 5. Add a New Property to the Object

person.age = 23;
person.email = "vandang031001@gmail.com";

console.log(person);

// 6. Read All Property Values in the Object

for (const key in person) {
    console.log(person[key]);
}

// 7. Update Multiple Properties in the Object

Object.assign(person, {name: "VanDang", age: 24})

console.log(person);

// 8. Delete a Property Based on a Condition

if (person.email === "vandang031001@gmail.com") {
    delete person.email;
}

console.log(person);

// 9. Merge Two Objects

let address = { city: "Da Nang", country: "VN"};

let merged = Object.assign({}, person, address);

console.log(merged);

// 10. Find and Modify a Property Based on a Condition

for (const key in person) {
    if (person[key] === "VanDang") {
        person[key] = "Dang";
    }
}

console.log(person);

// 11. Add Multiple Properties to the Object

Object.assign(person, {email: "vandang031001@gmail.com", phone: "0357905942"});

console.log(person);

// 12. Replace a Property Value

person.name = "VanDang";

console.log(person);

// 13. Remove Properties Based on a Key Array

let deleteKey = ["email", "phone"];

deleteKey.forEach(key => delete person[key]);

console.log(person);
// 14. Insert a Property at a Specific Position

person = {
    name: person.name,
    address: "Da Nang",
    age: person.age
};

console.log(person);

// 15. Clone an Object

let clonePerson = Object.assign({},person);

console.log(clonePerson);
