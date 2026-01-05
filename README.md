# Tracklet Frontend 🎨

Frontend for **Tracklet**, a modern and responsive expense tracking web application.

This frontend is built with React and Tailwind CSS and communicates with a
JWT-secured backend API to manage user authentication and expenses.

---

## ✨ Features

- User Login & Signup
- JWT based authentication
- Protected Dashboard
- Add & Delete Expenses
- Category-wise Expense Tracking
- Total Expense Calculation
- Pie & Bar Charts (Recharts)
- Export Expenses to CSV
- Clean Sidebar + Dashboard Layout
- Professional Login & Signup UI
- Fully Responsive Design

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Recharts

---

## 📁 Folder Structure

```txt
frontend/
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── tracklet-bg.jpg
│   │
│   ├── components/
│   │   ├── AddExpense.jsx
│   │   ├── Charts.jsx
│   │   ├── ExpenseCard.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
