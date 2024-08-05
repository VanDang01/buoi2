/*### Bài tập 5: Tìm số lớn nhất trong ba số

- **Tiêu đề**: Tìm số lớn nhất trong ba số
- **Input**: Ba số nguyên (ví dụ: `3, 7, 5`)
- **Output**: Số lớn nhất trong ba số đó (ví dụ: `7`)*/

function  max(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        console.log(num[i]);
        let element = num[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

function  min(num) {
    let min = num[0];
    for (let i = 1; i < num.length; i++) {
        console.log(num[i]);
        let element = num[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

console.log(min([3, 7, 5, 9, 6]));