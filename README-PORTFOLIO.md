# Portfolio React App - Vũ Phạm Tuấn Nam

## Mô tả
Ứng dụng này là trang portfolio cá nhân bằng ReactJS + Tailwind CSS + Framer Motion dành cho gia sư Toán, Tin, Anh, IELTS và SAT.

## Cấu trúc chính
- `index.html` - entrypoint Vite.
- `package.json` - cấu hình dependencies và scripts.
- `vite.config.js` - cấu hình Vite.
- `tailwind.config.js` / `postcss.config.js` - cấu hình Tailwind.
- `src/main.jsx` - điểm khởi chạy React.
- `src/App.jsx` - layout chính và tổng hợp các section.
- `src/components/` - các component modular:
  - `Navbar.jsx`
  - `Hero.jsx`
  - `Credentials.jsx`
  - `Subjects.jsx`
  - `Awards.jsx`
  - `Contact.jsx`
- `src/index.css` - thiết lập Tailwind và style chung.
- `src/assets/headshot.svg` - placeholder headshot vector.

## Cài đặt và chạy
1. Mở terminal tại thư mục `Group 12`
2. Chạy `npm install`
3. Chạy `npm run dev`
4. Mở trình duyệt theo địa chỉ hiển thị trong terminal, mặc định là `http://localhost:4173`

## Lưu ý
- Nội dung hiển thị bằng tiếng Việt theo yêu cầu.
- Thiết kế responsive, glassmorphism và animation được cấu hình bằng Tailwind và Framer Motion.
