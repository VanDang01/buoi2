// HomeWorkArray


// 1. Create an Item and Add to the End of the Array
let arr = [1,2,3];
arr.push(4);

// console.log(arr);

// 2. Read the First Item from the Array
let firstItem = arr[0];

// console.log(firstItem);

// 3. Update an Item at a Specific Index

arr[1] = "Dang"

// console.log(arr);

// 4. Delete an Item from the End of the Array

arr.pop();

// console.log(arr);


// 5. Create an Item and Add it to the Beginning of the Array

arr.unshift(0);

// console.log(arr);

// 6. Read All Items in the Array

// arr.forEach(item => console.log(item));

// 7. Update Multiple Items Using .map()

arr = arr.map(item => item + "AA");

// console.log(arr);

// 8. Delete an Item from the Array by Index

arr.splice(2,1);

// console.log(arr);

// 9. Create Multiple Items by Merging Arrays

let arr1 = ["4AA", "5AA"];

let mergeArr1 = arr.concat(arr1);

// console.log(mergeArr1);

// 10. Find and Delete an Item Based on Value

let arr2 = ["item1", "item2", "BB", "TranVanDang", "item4"]
let  deleteValue = "TranVanDang";
arr = arr2.filter(item => item !== deleteValue);

// console.log(arr);

// 11. Add Multiple Items to the End of the Array

arr.push("item5", "item6");

// console.log(arr);

// 12. Replace an Item at a Specific Index

arr.splice(1,1,"item0");

// console.log(arr);

// 13. Remove Items Based on a Condition

arr = arr.filter(item => item !== "BB");

// console.log(arr);

// 14. Insert an Item at a Specific Position

arr.splice(2,0, "item7");

// console.log(arr);

// 15. Sort Items in the Array

arr.sort();

// console.log(arr);




