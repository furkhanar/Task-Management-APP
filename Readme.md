# 🚀 Task Manager App

A modern and responsive full-stack Task Management Web Application built using React.js, Node.js, Express.js, and MySQL.

The application helps users manage daily tasks efficiently with features like task creation, completion tracking, dark/light mode, and real-time database storage.

---

# 📌 Features

✅ Add New Tasks  
✅ Delete Tasks  
✅ Mark Tasks as Complete / Incomplete  
✅ Dark & Light Theme  
✅ Responsive Modern UI  
✅ Real-Time MySQL Database Storage  
✅ Task Creation Time & Date  
✅ REST API Integration  
✅ Full CRUD Operations  

---

# 🛠 Tech Stack

## Frontend
- React.js
- CSS3
- Axios

## Backend
- Node.js
- Express.js

## Database
- MySQL

---

# 📂 Project Structure

```bash
TaskManager/
│
├── backend/
│   ├── routes/
│   ├── server.js
│   ├── db.js
│
├── frontend/
│   ├── src/
│   ├── public/
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/furkhanar/Task-Management-App.git
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Run backend server:

```bash
npx nodemon server.js
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

# 🗄 Database Setup

Create MySQL database:

```sql
CREATE DATABASE taskmanager;

USE taskmanager;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 🌟 Future Improvements

- User Authentication
- Task Priority Levels
- Due Dates
- Drag & Drop Tasks
- Search & Filter Tasks
- Notifications
- JWT Authentication
- Deployment on Vercel / Render

---

# 📱 Responsive Design

The application is fully responsive and works on:
- Desktop
- Tablet
- Mobile Devices

---

# 📷 Screenshots

<img width="481" height="792" alt="image" src="https://github.com/user-attachments/assets/bf69f870-7ae9-4f2c-80ee-ee1c49f883bf" />


---

# 👨‍💻 Author

Developed by Furkhan AR

---

# 📄 License

This project is open-source and available under the MIT License.
