/*
1.Tìm giá trị lớn nhất trong mảng
Input: [3, 5, 7, 2, 8]
Output: 8
*/
function findMax() {
  let numbers = [3, 5, 7, 9, 2, 8];
  let maxNumber = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > maxNumber) {
      maxNumber = element;
    }
  }
  return maxNumber;
}

// console.log(findMax());

/// cach hai
let numbers = [3, 5, 7, 9, 2, 8];
let maxNumber = numbers.reduce((max, current) => (current > max ? current : max),numbers[0]);
// console.log(maxNumber);
/*
2. Đếm số ký tự nguyên âm trong chuỗi
Input: "hello world"
Output: 3
*/
function countVowels(str) {
  // Code here
}

/*
3. Tính tổng các số lẻ trong mảng
Input: [1, 2, 3, 4, 5]
Output: 9
*/
function sumOddNumbers() {
  let numbers = [1, 2, 3, 4, 5];
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 !== 0) {
      result += element;
    }
  }
  return result;
}

// console.log(sumOddNumbers());

//cach khac 
let numbers3 = [1, 2, 3, 4, 5];
let sumOddNumbers3 = () => {
  return numbers3
  .filter(number => number % 2 !== 0)
  .reduce((sum, current) => sum + current, 0);
  
};
// console.log(sumOddNumbers3());
/*
4. Đảo ngược chuỗi
Input: "hello world"
Output: 3
*/
function reverseString() {
  let chain = "hello world";
  let chainIsland = "";
  for (let index = chain.length - 1; index >= 0; index--) {
    const element = chain[index];
    chainIsland += element;
  }
  return chainIsland;
}

// console.log(reverseString());

// cach hai
let chain = "hello world";
let chainIsland4 = () => chain.split('').reverse().join('');
// console.log(chainIsland4());

/*
5. Tính giai thừa của một số
Input: 5
Output: 120
*/
function factorial(n) {
  if (n < 0) {
    return "giai thua khong xac dinh";
  }
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result *= index;
  }
  return result;
}

// console.log(factorial(5));
/*
6. Kiểm tra số đối xứng (palindrome)
Input: "radar"
Output: true
*/
function isPalindrome(str) {
  let result = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    result += element;
  }
  return result === str;
}

// console.log(isPalindrome("radar"));

//cach hai 
let isPalindrome6 = (str) => {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
let input = "radar";
let result = isPalindrome6(input)
// console.log(result);

/*
7. Loại bỏ các phần tử trùng lặp trong mảng
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/
function removeDuplicates() {
  let numbers = [1, 2, 3, 2, 3, 4, 4, 5];
  let result = [];
  let seen = {};
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (!seen[element]) {
      seen[element] = true;
      result.push(element);
    }
  }
  return result;
}

// console.log(removeDuplicates());

// cach hai 
let removeDuplicates7 = (array) => {
  return array.filter((value, index) => {
    for (let i = 0; i < index; i++) {
      if (array[i] === value) {
        return false;
      }
    }
    return true;
  });
};
 
let input7 = [1, 2, 3, 2, 3, 4, 4, 5];
let result7 = removeDuplicates7(input7);

// console.log(result7);


/*
8. Tìm phần tử xuất hiện nhiều nhất trong mảng
Input: [1, 3, 3, 2, 3, 4, 4, 4, 4]
Output: 4
*/
function findMostFrequent() {
  let arr = [1, 3, 3, 2, 3, 4, 4, 4, 4, 2];
  let numberTimes = {};
  let maxNumber = 0;
  let result = "";

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (numberTimes[element]) {
      numberTimes[element]++;
    } else {
      numberTimes[element] = 1;
    }

    if (numberTimes[element] > maxNumber) {
      maxNumber = numberTimes[element];
      result = element;
    }
  }
  return result;
}

// console.log(findMostFrequent());

/*
9. Chuyển đổi chuỗi thành dạng viết hoa chữ cái đầu của mỗi từ
Input: "hello world"
Output: "Hello World"
*/
function capitalizeWords(str) {
  let result = str.split(" ");
  console.log(result);
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log(element);
    result[index] =
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  }
  return result.join(" ");
}

// console.log(capitalizeWords("hello world"));

/*
10. Tính tổng của tất cả các số trong một khoảng
Input: sumRange(1, 5)
Output: 15
*/
function sumRange(start, end) {
  let result = 0;
  for (let index = start; index <= end; index++) {
    result += index;
  }
  return result;
}

// console.log(sumRange(1, 5));
