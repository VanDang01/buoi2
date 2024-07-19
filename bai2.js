/*### Bài tập 2: Kiểm tra tuổi hợp lệ

- **Tiêu đề**: Kiểm tra tuổi hợp lệ
- **Input**: Một số nguyên đại diện cho tuổi (ví dụ: `18`)
- **Output**: "Tuổi hợp lệ" nếu tuổi từ 18 trở lên, "Tuổi không hợp lệ" nếu tuổi dưới 18 (ví dụ: "Tuổi hợp lệ") */

function ktTuoi(age) {
    if (age >= 18) {
        return "Tuoi hop le";
    }
    return "Tuoi khong hop le";
}

const ktTuoi2 = (age) => age >= 18 ? "Tuoi hop le" : "Tuoi khong hop le"

console.log(ktTuoi2(19));
