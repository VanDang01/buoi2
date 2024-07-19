/*### Bài tập 8: Kiểm tra một ngày trong tuần

- **Tiêu đề**: Kiểm tra một ngày trong tuần
- **Input**: Một số nguyên từ 0 đến 6 đại diện cho ngày trong tuần (0 là Chủ Nhật, 1 là Thứ Hai, ..., 6 là Thứ Bảy) (ví dụ: `2`)
- **Output**: Tên ngày tương ứng (ví dụ: "Thứ Ba")*/


function ktNgayTongTuan(ngay) {
    let ngayTrongTuan = ["chu nhat", "thu hai", "thu ba", "thu tu", "thu nam", "thu sau", "thu 7"];
    return ngayTrongTuan[ngay] || "Ngay khong hop le!";
}

console.log(ktNgayTongTuan(2));