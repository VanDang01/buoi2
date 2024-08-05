/*
1. Remove duplicates from an array

Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5] */

function xoaTrungLap(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let trungLap = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                trungLap = true;
                break;
            }
        }
        if (!trungLap) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(xoaTrungLap([1, 2, 2, 3, 4, 4, 5]));

/*
2. Find the index of a particular element in an array

Input: [10, 20, 30, 40, 50], 30
Output: 2 */
function funIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === num) {
            return i;
        }
    }
    return "khong tim thay chi muc cua so";
}



function funIndex2(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === num) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        return "khong tim thay chi muc cua so"
    }
    return result;
}


// console.log(funIndex([10, 20, 30, 40, 30, 50], 30));
// console.log(funIndex2([10, 20, 30, 40, 30, 50], 30));

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

// console.log(soChan([2, 4, 6, 8, 10]));

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

// console.log(sapXep([5, 3, 8, 1, 2]));

/*
5. Merge two objects
Input: {a: 1, b: 2}, {c: 3, d: 4}
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

/*
6. Find the value of a property in a nested object
Input: {a: {b: {c: 3}}}, 'a.b.c'
Output: 3*/

function findTheValue(obj, str) {
    let keys = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        if (element === '.') {
            keys.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    keys.push(temp);

    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] === undefined) {
            return undefined;
        } 
        obj = obj[keys[i]];
    }
    return obj;
}

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

// console.log(convertObjKey({a: 1, b: 2, c: 3}));

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

// console.log(convertObjValue({a: 1, b: 2, c: 3}));

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

// console.log(checkObj({a: 1, b: 2, c: 3}, 'b'));

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

// console.log(getLength({a: 1, b: 2, c: 3}));

/* 
11. Remove a property from an obj
Input: {a: 1, b: 2, c: 3}, 'b'
Output: {a: 1, c: 3}*/

function remove(obj, property) {
    delete obj[property];
    return obj;
}

// console.log(remove({a: 1, b: 2, c: 3}, 'b'));

/*
12. Get all property names and values in a nested object
Input: {a: 1, b: {c: 2, d: 3}}
Output: ['a: 1', 'b.c: 2', 'b.d: 3']*/

/*
13. Convert an array of objects to a single object using a property as the key
Input: [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id'
Output: {1: {id: 1, name: 'John'}, 2: {id: 2, name: 'Jane'}}*/

function arrToObj(arr, stt) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result[element[stt]] = element;
    }
    return result;
}
let arr = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];

console.log(arrToObj(arr, 'id'));