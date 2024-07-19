/*### Bài tập 1: Kiểm tra số chẵn lẻ

- **Tiêu đề**: Kiểm tra số chẵn lẻ
- **Input**: Một số nguyên (ví dụ: `5`)
- **Output**: "Số lẻ" nếu số đó là số lẻ, "Số chẵn" nếu số đó là số chẵn (ví dụ: "Số lẻ")*/

function kiemTra(num) {
    if (num % 2 === 0) {
        return "so chan";
    } else {
        return "so le";
    }
}

function kiemTra2(num) {
    if (num % 2 === 0) {
        return "so chan";
    }

    return "so le";
}


function kiemTra3(num) {
    let result = "so le";
    if (num % 2 === 0) {
        result = "so chan";
    }

    return result;
}

function kiemTra4(num) {
    return num % 2 === 0 ? "so chan" : "so le";
}

const kiemTra5 = (num) => num % 2 === 0 ? "so chan" : "so le";

console.log(kiemTra5(5));

