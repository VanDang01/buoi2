let person = {
    name: "Dang",
    age: 20,
    addres: "cach mang thang 8"
}

person.age = 23;

delete person.addres;

let khoa = [];

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        khoa.push(key);
        
    }
}

/// tim hieu cach su dung hasOwnProperty

const array = Object.keys(person);

console.log(khoa);