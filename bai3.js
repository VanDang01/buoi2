/*### Bài tập 3: Phân loại điểm học sinh

- **Tiêu đề**: Phân loại điểm học sinh
- **Input**: Một số nguyên đại diện cho điểm (ví dụ: `75`)
- **Output**:
    - "A" nếu điểm từ 90 đến 100
    - "B" nếu điểm từ 80 đến 89
    - "C" nếu điểm từ 70 đến 79
    - "D" nếu điểm từ 60 đến 69
    - "F" nếu điểm dưới 60 (ví dụ: "C")*/

function diemHS(num) {
    if (num > 100) {
        return "so diem khong hop le";
    }
    if (num >= 90 && num <= 100) {
        return "Diem A";
    } else if (num >= 80 && num <= 90) {
        return "Diem B";
    } else if (num >= 70 && num <= 79) {
        return "Diem C";
    } else if (num >= 60 && num <= 69) {
        return "Diem D";
    }
    return "Diem F";
}

function diemHS2(num) {
    if (num < 60) {
        return "F";
    } else if (num <= 69) {
        return "D";
    } else if (num <= 79) {
        return "C";
    } else if (num <= 89) {
        return "B";
    }
    return "A";
}

console.log(diemHS2(101));