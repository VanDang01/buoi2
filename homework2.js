/*
1. Remove duplicates from an array

Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5] */

function xoaTrungLap(arr = []) {
    return arr.reduce((result, item) => result.includes(item) ? result: [...result, item], []);
}
// console.log(xoaTrungLap([1, 2, 2, 3, 4, 4, 5]));


/*
2. Find the index of a particular element in an array

Input: [10, 20, 30, 40, 50], 30
Output: 2 */

function funIndex(arr = [], value) {
    return arr.map((element, index) => element === value ? index : -1)
    .filter(index => index !== -1 );
}
// console.log(funIndex([10, 20, 30, 40, 30, 50], 30));

/*
3. Check if all elements in an array are even numbers

Input: [2, 4, 6, 8, 10]
Output: true */


// su dung phuong thuc every
function soChan(number) {
    return number.every(element => element % 2 === 0);
}

// console.log(soChan([2, 4, 6, 8, 10]));

// su dung filter  

function soChan2(number) {
    return number.filter(element => element % 2 !== 0).length === 0;
}

console.log(soChan2([2, 4, 6, 8, 10]));


/* 
4. Merge two arrays 

Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
 */


// su dung concat

function mergeArr2(arr1, arr2) {
    return arr1.concat(arr2);
}

// console.log(mergeArr2([1, 2, 3], [4, 5, 6]));

// dung toan tu spread 

function mergeArr3(arr1, arr2) {
    return [...arr1, ...arr2]
}

// console.log(mergeArr3([1, 2, 3], [4, 5, 6]));


/* sap xep mang theo thu tu giam dan 
Input: [5, 3, 8, 1, 2]
Output: [8, 5, 3, 2, 1]*/

function sapXep(arr = []) {
    return arr.sort((a, b) => b - a);
}

console.log(sapXep([5, 3, 8, 1, 2]));

/*
5. Merge two objects
Input: {a: 1, b: 2}, {c: 3, d: 4}
Output: {a: 1, b: 2, c: 3, d: 4}*/

// su dung toan tu spread

function mergeObject2(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeObject2({a: 1, b: 2}, {c: 3, d: 4}));

/*
7. Convert an object to an array of keys
Input: {a: 1, b: 2, c: 3}
Output: ['a', 'b', 'c']*/

function convertObjKey(obj) {
    return Object.keys(obj);
}

console.log(convertObjKey({a: 1, b: 2, c: 3}));
/*
8. Convert an object to an array of values
Input: {a: 1, b: 2, c: 3}
Output: [1, 2, 3]*/

function convertObjValue(obj) {
    return Object.values(obj);
}

console.log(convertObjValue({a: 1, b: 2, c: 3}));

/*
10. Get the length of an object (number of properties)
Input: {a: 1, b: 2, c: 3}
Output: 3*/

function getLength(obj) {
    return Object.keys(obj).length;
}

console.log(getLength({a: 1, b: 2, c: 3}));


/* 
11. Remove a property from an obj
Input: {a: 1, b: 2, c: 3}, 'b'
Output: {a: 1, c: 3}*/

function remove(obj, key) {
    delete obj[key];
    return obj;
}

// console.log(remove({a: 1, b: 2, c: 3}, 'b'));
function arrToObj() {
    let result = {};
    let groupIndex = 1;
    let ageMap = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const age = element.age;
        if (!ageMap[age]) {
            ageMap[age] = groupIndex++;
            result[ageMap[age]] = [];
        }
        result[ageMap[age]].push(element);
    }
    return result;
}
