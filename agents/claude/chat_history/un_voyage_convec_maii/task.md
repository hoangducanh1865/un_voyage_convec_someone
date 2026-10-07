# Task: Web lịch trình hẹn hò Hà Nội cho crush

## Yêu cầu gốc

Người dùng đi hẹn với người mình rất yêu quý, lịch trình buổi chiều/tối ở Hà Nội:

1. 15:00–15:30 di chuyển đến Hồ Gươm
2. 15:30–16:45 chụp ảnh "Thu Hà Nội" ở Hồ Gươm
3. 16:45–17:00 di chuyển đến quán chè trôi tàu, 80 Hàng Điếu
4. 17:00–17:30 ăn chè
5. 17:30–17:45 di chuyển đến cafe Hanoi Neighbors (114 Tuệ Tĩnh)
6. 17:45–19:45 cafe talk
7. 19:45–20:00 di chuyển đến quán ốc nóng Hà Trang, 1A Đinh Liệt
8. ăn ốc (~20:00 trở đi)

Yêu cầu: code thành một web hiển thị lịch trình sinh động, có animation, để gửi cho crush. Người dùng muốn deploy web này (có thể quay video demo).

## Ràng buộc quan trọng

- KHÔNG dùng ảnh trong `references/images/` lên web (đó là ảnh riêng tư/tham khảo). Ảnh trên web phải tự tải từ internet, ứng với đúng địa điểm/món ăn.
- Web nên "cute và tinh nghịch" (playful) — phù hợp để gửi cho người yêu thích.
- Người dùng muốn xem kết quả trực tiếp (preview ngay).

## Đã làm

- Xem ảnh tham khảo trong `references/images/` để bắt vibe: mùa thu Hà Nội, Hồ Gươm, quán cafe ấm cúng kiểu nhà cổ (Hanoi Neighbors), chè, phố cổ về đêm.
- Tải 4 ảnh thật (Wikimedia Commons, mở bản quyền) vào `assets/img/`:
  - `ho-guom.jpg` — cây xanh/hoa ven Hồ Gươm
  - `che.jpg` — chè kiểu Việt Nam (chè bà ba, minh hoạ cho chè trôi tàu)
  - `cafe.jpg` — quán cafe phố cổ Hà Nội, đèn lồng
  - `oc.jpg` — món ăn đường phố Hà Nội (minh hoạ quán ốc/ăn tối)

## Cập nhật (quan trọng)

- Người dùng chê 4 ảnh tải từ Wikimedia Commons xấu (`assets/img/*.jpg`) → **đổi hướng: bỏ hẳn ảnh chụp thật, web chỉ dùng animation/minh hoạ (CSS/SVG/emoji)**, không còn cần tải ảnh từ internet nữa. Các file trong `assets/img/` không còn dùng, có thể xoá sau.

## Việc tiếp theo

- Build trang `index.html` + CSS/JS (thuần, không framework) tại thư mục gốc, có:
  - Timeline lịch trình 8 chặng, animation khi scroll/xuất hiện
  - Minh hoạ bằng CSS/SVG + emoji cho từng điểm đến (lá thu bay, trái tim, hồ nước, tách cà phê, bát chè, ốc...), KHÔNG dùng ảnh chụp
  - Thiết kế cute, tinh nghịch, tông ấm mùa thu
- Mở preview cho người dùng xem trực tiếp (chạy local server hoặc mở file).
- Hướng dẫn người dùng deploy (Vercel/Netlify/GitHub Pages) khi web đã ưng ý.
