# 🎯 PrepMate - AI Mock Interview Platform

PrepMate is a full-stack web application that helps students prepare for technical interviews through AI-powered mock interviews, performance tracking, and personalized feedback.

> 🚧 This project is currently under development.


## ✨ Features Completed

### 🔐 Authentication
- User Registration
- User Login
- Secure Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Duplicate Email Validation

### 💻 Frontend
- Responsive Landing Page
- Hero Section
- Features Section
- Statistics Section
- Login Page
- Register Page
- React Router Navigation

### ⚙ Backend
- Express.js REST API
- PostgreSQL Database
- MVC Architecture
- Environment Variables using dotenv


## 🚀 Upcoming Features

- Dashboard
- AI Mock Interview Generator
- Interview Session
- Interview History
- AI Feedback & Evaluation
- Performance Analytics
- User Profile
- Dark Mode
- Deployment


## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- CSS3
- Vite

### Backend
- Node.js
- Express.js
- PostgreSQL

### Authentication
- bcrypt
- JSON Web Token (JWT)

### Tools
- Postman
- Git & GitHub
- VS Code



## 📂 Project Structure

```
prepmate/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```


## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=prepmate
DB_PASSWORD=your_postgres_password
DB_PORT=5432

JWT_SECRET=your_secret_key
```


## ⚡ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/prepmate.git
```

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
npm run dev
```

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/dashboard` | Protected route using JWT |

## 🔒 Authentication Flow

```
Register
      │
      ▼
Password Hashing (bcrypt)
      │
      ▼
Store User in PostgreSQL
      │
      ▼
Login
      │
      ▼
Verify Password
      │
      ▼
Generate JWT Token
      │
      ▼
Access Protected Routes
```

## 📸 Current Progress

- ✅ Landing Page
- ✅ Login & Register UI
- ✅ Backend Authentication
- ✅ PostgreSQL Integration
- ✅ JWT Authentication
- 🔄 Dashboard (In Progress)
- 🔄 AI Interview Module (Upcoming)


## 🌟 Learning Highlights

This project helped me gain hands-on experience with:

- React.js
- Express.js
- PostgreSQL
- REST APIs
- JWT Authentication
- Password Hashing with bcrypt
- Protected Routes
- Git & GitHub Workflow


## 👩‍💻 Author

**Bhavana Machapalli**

If you like this project, consider giving it a ⭐ on GitHub!