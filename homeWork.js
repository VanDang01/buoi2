/*
1. Remove duplicates from an array

Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5] */

function xoaTrungLap(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isNotSame = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] !== result[j]) {
                isNotSame = true;
                break;
            }
        }
        if (!isNotSame) {
            result.push(arr[i]);
        }
    }
    return result;
}

function xoaTrung(arr2 = []) {
    let result2 = [];
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];

        if (! result2.includes(element)) {
            result2.push(element);
        }
    }

    return result2;
}

function xoaTrung2(arr2 = []) {
    return arr2.reduce((result, item) => result.includes(item) ? result : [...result, item],[]);
}

// console.log(xoaTrungLap([1, 2, 2, 3, 4, 4, 5]));

/*
2. Find the index of a particular element in an array

Input: [10, 20, 30, 40, 50], 30
Output: 2 */
function funIndex(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === num) {
            result.push(i);
        }
    }
    return result;
}

// console.log(funIndex([10, 20, 30, 40, 30, 50], 30));

/// 
function funIndex3(arr = []) {
    return arr.filter((element) => element ==  30) ;
}
// console.log(funIndex3([10, 20, 30, 40, 30, 50]));



///

let funIndex2 = [10, 20, 30, 40, 30, 50];

// console.log(funIndex2.findIndex((element) => element == 30));





/*
3. Check if all elements in an array are even numbers

Input: [2, 4, 6, 8, 10]
Output: true */

function soChan(number) {
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 !== 0) {
            return false;
        }
    }
    return true;
}

function soChan2(number = []) {
    return number.every(element => element % 2 === 0);
}

// console.log(soChan([2, 4, 6, 8, 10]));
// console.log(soChan2([2, 4, 6, 8, 10]));

/* 
4. Merge two arrays 

Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
 */

function mergeArr(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        result.push(element);
    }
    for (let j = 0; j < arr2.length; j++) {
        const element = arr2[j];
        result.push(element);
    }
    return result;
}

// console.log(mergeArr([1, 2, 3], [4, 5, 6]));


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

function sapXep(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function sapXep2(arr= []) {
    return arr.sort((a, b) => b - a);
}

// console.log(sapXep([5, 3, 8, 1, 2]));
// console.log(sapXep([5, 3, 8, 1, 2]));

/*
5. Merge two objects
Input: {: 1, b: 2a}, {c: 3, d: 4}
Output: {a: 1, b: 2, c: 3, d: 4}*/

function mergeObject(obj1, obj2) {
    let result = {};
    for (const key in obj1) {
        result[key] = obj1[key];
    }
    for (const key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}

// console.log(mergeObject({a: 1, b: 2}, {c: 3, d: 4}));

// su dung toan tu spread

function mergeObject2(obj1, obj2) {
    return {...obj1, ...obj2};
}

// console.log(mergeObject2({a: 1, b: 2}, {c: 3, d: 4}));

/*
6. Find the value of a property in a nested object
Input: {a: {b: {c: 3}}}, 'a.b.c'
Output: 3*/

// function findTheValue(obj, str) {
//     let keys = [];
//     let temp = '';
//     for (let i = 0; i < str.length; i++) {
//         let element = str[i];
//         if (element === '.') {
//             keys.push(temp);
//             temp = '';
//         } else {
//             temp += str[i];
//         }
//     }
//     keys.push(temp);

//     for (let i = 0; i < keys.length; i++) {
//         if (obj[keys[i]] === undefined) {
//             return undefined;
//         } 
//         obj = obj[keys[i]];
//     }
//     return obj;
// }


function getValue(obj2, path = []) {
    const keys = path.split('.');
    
    let result = obj2;

    for (let key of keys) {
        if (result[key] !== undefined) {
            result = result[key];
        } else {
            return undefined;
        }
    }

    return result;
}

const obj2 = {a: {b: {c: 3}}};
const path = 'a.b.c';

console.log(getValue(obj2, path));



// function getValue2(obj, path) {
//     return path.split('.').reduce((acc, key) => acc && acc[key], obj);
//   }
  
//   console.log(getValue2({a: {b: {c: 3}}}, 'a.b.c')); 
  
// console.log(findTheValue({a: {b: {c: 3}}}, 'a.b.c'));

/*
7. Convert an object to an array of keys
Input: {a: 1, b: 2, c: 3}
Output: ['a', 'b', 'c']*/

function convertObjKey(obj) {
    let result = [];
    for (const key in obj) {
        result.push(key);
    }
    return result;
}

function convertObjKey2(obj) {
    return Object.keys(obj);
}

// console.log(convertObjKey({a: 1, b: 2, c: 3}));
// console.log(convertObjKey2({a: 1, b: 2, c: 3}));

/*
8. Convert an object to an array of values
Input: {a: 1, b: 2, c: 3}
Output: [1, 2, 3]*/

function convertObjValue(obj) {
    let result = [];
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
}

let convertObjValue2 = (obj) => Object.values(obj);

// console.log(convertObjValue({a: 1, b: 2, c: 3}));
// console.log(convertObjValue2({a: 1, b: 2, c: 3}));

/* 
9. Check if an object contains a specific property
Input: {a: 1, b: 2, c: 3}, 'b'
Output: true*/

function checkObj(obj, property) {
    for (const key in obj) {
        if (key === property) {
            return true;
        }
    }
    return false;
}

function checkObj2(obj, property) {
    return property in obj;
}

function checkObj3() {
    return Object.keys(obj);    
}
 let obj = {a: 1, b: 2, c: 3};
//  let property = 'b';
// console.log(checkObj({a: 1, b: 2, c: 3}, 'b'));
// console.log(checkObj2({a: 1, b: 2, c: 3}, 'b'));
// console.log(checkObj3().includes('d'));

/*
10. Get the length of an object (number of properties)
Input: {a: 1, b: 2, c: 3}
Output: 3*/

function getLength(obj) {
    let count = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            count ++;
        }
    }
    return count;
}


function getLength2(obj) {
    return Object.keys(obj).length;
}

// console.log(getLength({a: 1, b: 2, c: 3}));
// console.log(getLength2({a: 1, b: 2, c: 3}));

/* 
11. Remove a property from an obj
Input: {a: 1, b: 2, c: 3}, 'b'
Output: {a: 1, c: 3}*/

function remove(obj, key) {
    delete obj[key];
    return obj;
}

// console.log(remove({a: 1, b: 2, c: 3}, 'b'));

/*
12. Get all property names and values in a nested object
Input: {a: 1, b: {c: 2, d: 3}}
Output: {'a: 1', 'b.c: 2', 'b.d: 3'}*/




function getAllPropety(obj) {
    // 1. for tung doi tuong trong object
    // 2. sop sanh tung doi tuong trong object voi number , neu la number thi in ra khong thi tiep tuc voi doi tuong tiep theo .
    // 
    for (const key in obj) {
    }
}

// console.log(getAllPropety({a: 1, b: {c: 2, d: 3}}));

/*
13. Convert an array of objects to a single object using a property as the key
Input: [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id'
Output: {1: {id: 1, name: 'John'}, 2: {id: 2, name: 'Jane'}}*/


function arrToObj(arr) {
    let result = {};
    let ageMap = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const age = element.age;
        if (!ageMap[age]) {
            ageMap[age] = age;
            result[ageMap[age]] = [];
        }
        result[ageMap[age]].push(element);
    }
    
    return result;
}

let arr = [
    {id: 1, name: 'John', age: 18},
    {id: 2, name: 'John', age: 19},
    {id: 3, name: 'John', age: 18},
    {id: 4, name: 'John', age: 21}
];


const arrToObj2 = (arr, key) => {
    return arr.reduce((accumulator,currentValue) => {  
        const keyValue = currentValue[key];
        if (!accumulator[keyValue]) {
            accumulator[keyValue] = [];
        }
        accumulator[keyValue].push(currentValue);
        return accumulator;
    }, {});
};
    

// console.log(arrToObj(arr));
// console.log(arrToObj2(arr, 'age'));