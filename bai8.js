/*### Bài tập 8: Kiểm tra một ngày trong tuần

- **Tiêu đề**: Kiểm tra một ngày trong tuần
- **Input**: Một số nguyên từ 0 đến 6 đại diện cho ngày trong tuần (0 là Chủ Nhật, 1 là Thứ Hai, ..., 6 là Thứ Bảy) (ví dụ: `2`)
- **Output**: Tên ngày tương ứng (ví dụ: "Thứ Ba")*/


function ktNgayTongTuan(ngay) {
    let ngayTrongTuan = ["chu nhat", "thu hai", "thu ba", "thu tu", "thu nam", "thu sau", "thu bay"];
    return ngayTrongTuan[ngay] || "khong phai thu trong tuan";
}

function ktNgayTongTuan2(ngay) {

    let ngayTrongTuan = {
        0: "chu nhat",
        1: "thu hai", 
        2: "thu ba", 
        3: "thu tu", 
        4: "thu nam", 
        5: "thu sau", 
        6: "thu bay"
    };
    return ngayTrongTuan[ngay] || "khong phai thu trong tuan";
}

console.log(ktNgayTongTuan2(7));