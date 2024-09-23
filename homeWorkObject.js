// HomeWorkObject

// 1. Create an Object

let obj = {};

// 2. Read a Property Value from the Object

let person = { 
    name: "Dang", 
    age: 23
};
// console.log(person.name);

// 3. Update a Property Value in the Object

person.age = 24;

// console.log(person);

// 4. Delete a Property from the Object

delete person.age;

// console.log(person);
// 
// 5. Add a New Property to the Object

person.age = 23;
person.email = "vandang031001@gmail.com";

// console.log(person);

function addPropety(obj, key, value) {
    obj[key] = value;
    return obj;
}

console.log(addPropety(person, 'age', 30));

// 6. Read All Property Values in the Object

for (const key in person) {
    // console.log(person[key]);/
}

// 7. Update Multiple Properties in the Object


Object.assign(person, {name: "VanDang", age: 24})

// console.log(person);

//cach 2 
function updateProperties(obj, update) {
    return Object.assign(obj, update);
}

console.log(updateProperties(person, {name: "VanDang", age: 24}));


// 8. Delete a Property Based on a Condition

if (person.email === "vandang031001@gmail.com") {
    delete person.email;
}

// console.log(person);

// 9. Merge Two Objects

let address = { city: "Da Nang", country: "VN"};

let merged = Object.assign({}, person, address);

// console.log(merged);


function mergeObjects(obj,obj2) {
    return Object.assign({}, obj,obj2);
}

const merged2 = mergeObjects(person, address);

// console.log(merged2);

//cach 3 

function mergeObjects(obj,obj2) {
    return {...obj,...obj2};
}

const merged3 = mergeObjects(person,address);   

// console.log(merged3);


// 10. Find and Modify a Property Based on a Condition

for (const key in person) {
    if (person[key] === "VanDang") {
        person[key] = "Dang";
    }
}

// console.log(person);

// 11. Add Multiple Properties to the Object

Object.assign(person, {email: "vandang031001@gmail.com", phone: "0357905942"});

// console.log(person);

function addMultiple(obj, newValue) {
    return Object.assign(obj, newValue);
}

// console.log(addMultiple(person,{email: "vandang031001@gmail.com", phone: "0357905942"}));


//Cach 3

function addMultiple2(obj, newValue) {
    return {...obj,...newValue};
}

// console.log(addMultiple2(person,{email: "vandang031001@gmail.com", phone: "0357905942"}));

// 12. Replace a Property Value

person.name = "VanDang";

// console.log(person);

// 13. Remove Properties Based on a Key Array

let deleteKey = ["email", "phone"];

deleteKey.forEach(key => delete person[key]);

// console.log(person);
// 14. Insert a Property at a Specific Position

person = {
    name: person.name,
    address: "Da Nang",
    age: person.age
};

// console.log(person);

// 15. Clone an Object

let clonePerson = Object.assign({},person);

// console.log(clonePerson);


// cach 2 

function clonePerson2(obj) {
    return Object.assign({}, obj);
}

const clone = clonePerson2(person);
console.log(clone);
// cach 3
function clonePerson3(obj) {
    return {...obj};
}

const clone2 = clonePerson3(person);
console.log(clone2);