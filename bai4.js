/*### Bài tập 4: Kiểm tra số nguyên tố

- **Tiêu đề**: Kiểm tra số nguyên tố
- **Input**: Một số nguyên (ví dụ: `7`)
- **Output**: "Số nguyên tố" nếu số đó là số nguyên tố, "Không phải số nguyên tố" nếu số đó không phải số nguyên tố (ví dụ: "Số nguyên tố")*/

function soNguyenTo(num) {
    if (num < 1) {
        return "khong phai "
    }
    let isSNT = true;
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            isSNT = false;
            break;
        }
    }

    return isSNT;
}

console.log(2, soNguyenTo(2));
console.log(3, soNguyenTo(3));
console.log(4, soNguyenTo(4));
console.log(5, soNguyenTo(5));
console.log(6, soNguyenTo(6));