# SA Food Blog – MERN Stack Assignment

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application developed for a GitHub Classroom assignment. This project is a food review blog platform where users can create, view, update, and comment on blog posts.

---

## 📌 Project Overview

This assignment demonstrates full-stack integration with the following features:

- **RESTful API** built with Express.js and MongoDB
- **React-based front-end** using component-based architecture
- **CRUD operations** for blog posts
- **User authentication and authorization** (JWT-based)
- **Image uploads** and **comment functionality**

---

## 🗂 Project Structure

```
sa-food-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   └── src/                # Application source code
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page-level components
│       ├── hooks/          # Custom hooks
│       ├── services/       # API interaction logic
│       ├── context/        # Context API for state management
│       └── App.jsx         # Main component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Environment config and DB connection
│   ├── controllers/        # Route controller logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # Express routers
│   ├── middleware/         # Authentication and error handling
│   ├── utils/              # Helper functions
│   └── server.js           # API entry point
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB (local or Atlas)
- Git and GitHub
- npm or yarn

### Installation

1. **Clone the repository:**
  ```bash
  git clone <your-github-classroom-repo-url>
  ```

2. **Set up the server:**
  ```bash
  cd server
  npm install
  ```

3. **Configure environment variables:**

  Create a `.env` file in `/server/` with:
  ```ini
  MONGO_URI=your_mongo_connection_string
  JWT_SECRET=your_jwt_secret
  ```

4. **Start the server:**
  ```bash
  npm run dev
  ```

5. **Set up the client:**
  ```bash
  cd ../client
  npm install
  npm run dev
  ```

---

## ✅ Assignment Tasks

- Set up Express routes and Mongoose models for Post, User, Comment, and Category
- Implement controller logic for CRUD operations and comments
- Set up React routing with protected routes for authenticated users
- Implement context for auth state management
- Build front-end forms for creating posts and comments
- Enable file upload for images
- Add error handling, validations, and middleware

---


## 📄 API Documentation (Sample)

### `POST /api/posts`

- **Description:** Create a new blog post
- **Auth:** Required
- **Body:**
  ```json
  {
   "title": "Post title",
   "content": "Post body",
   "category": "Food"
  }
  ```

### `GET /api/posts/:id`

- **Description:** Get details of a single post

_(Add more endpoints as needed)_

---

## 🧪 Testing & Validation

- All required routes return expected responses
- Components handle state and error scenarios
- MongoDB collections reflect application data accurately

---

## 📦 Submission Checklist

- [x] Back-end with working Express routes and MongoDB connection
- [x] Front-end with working React components and routing
- [x] Full CRUD for posts and comments
- [x] Auth setup and secure endpoints
- [x] Proper `.env` configuration
- [x] Code pushed to GitHub Classroom repository

---

## 📚 References

- [React](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.org/)
- [JWT](https://jwt.io/)


--- 

## Author

- Sylvester Kesa [github](https://github.com/Kesa1203)