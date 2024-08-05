/*### Bài tập 10: In ra bảng cửu chương của một số

- **Tiêu đề**: In ra bảng cửu chương của một số
- **Input**: Một số nguyên dương từ 1 đến 10 (ví dụ: `5`)*/

function bangCuuChuong(so) {
    let BCC = "";
    for (let i = 0; i <= 10; i++) {
        // BCC += so + " X " + i + " = " + (so * i) + "\n";
        BCC += `${so} X ${i} = ${so * i} \n`;
    }
    return BCC
}

console.log(bangCuuChuong(5));