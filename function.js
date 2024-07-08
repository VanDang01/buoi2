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

/*
8. Tìm phần tử xuất hiện nhiều nhất trong mảng
Input: [1, 3, 3, 2, 3, 4, 4, 4, 4]
Output: 4
*/
function findMostFrequent(arr) {
  // Code here -- em dang lam nha
}

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
