# RBAC Web Application

**RBAC (Role-Based Access Control)** is a web application that implements secure user authentication and authorization. The app manages user roles and provides restricted access to specific pages or functionalities based on assigned roles.

---

## 🌟 Features

- **User Registration**: Allows new users to create an account.
- **User Login**: Authenticates existing users securely using JWT.
- **Role-Based Access Control**: Restricts access to certain pages (e.g., Dashboard) based on user roles.
- **Modern UI**: Built with TailwindCSS for a responsive and clean design.
- **Secure Token Management**: Tokens are stored and accessed securely via cookies.

---

## 🚀 Technologies Used

- **Frontend**: React, React Router, TailwindCSS
- **Backend**: Node.js, Express (assumed for backend setup)
- **Authentication**: JWT (JSON Web Tokens)
- **HTTP Requests**: Axios

---

## 📂 Project Structure

rbac-app/ ├── public/ # Public assets ├── src/ │ ├── components/ # Reusable components │ ├── pages/ # Register, Login, Dashboard pages │ ├── services/ # Axios API service │ ├── App.js # Main app component with routes │ ├── index.js # Entry point ├── tailwind.config.js # TailwindCSS configuration ├── package.json # Project metadata and dependencies └── README.md # Documentation


---

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rbac-app.git
   cd rbac-app

   ```
   Navigate to frontend Directory then
   ```bash
   npm install
   npm start
   ```
   Similarly navigate to Backend Directory
   ```bash
   npm install
   npm start
   ```
   

