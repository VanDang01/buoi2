
/*### Bài tập 7: Kiểm tra năm nhuận

- **Tiêu đề**: Kiểm tra năm nhuận
- **Input**: Một số nguyên đại diện cho năm (ví dụ: `2024`)
- **Output**: "Năm nhuận" nếu năm đó là năm nhuận, "Không phải năm nhuận" nếu năm đó không phải năm nhuận (ví dụ: "Năm nhuận")*/

function ktNamNhuan(nam) {
    if (nam % 4 === 0 && nam % 100 !==0 || nam % 400 == 0) {
        return "Nam Nhuan";
    }
    return "Khong Phai Nam Nhuan";
}

console.log(ktNamNhuan(1990));