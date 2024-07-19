/*### Bài tập 9: Tính tổng các số từ 1 đến n

- **Tiêu đề**: Tính tổng các số từ 1 đến n
- **Input**: Một số nguyên dương n (ví dụ: `10`)
- **Output**: Tổng các số từ 1 đến n (ví dụ: `55`)*/

function tinhTong(n) {
    let tong = 0;
    for (let i = 0; i <= n; i++) {
        tong += i;
    }
    return tong;
}

console.log(tinhTong(10));