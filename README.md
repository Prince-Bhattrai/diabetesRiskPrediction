# 🩺 Diabetes Risk Prediction Web Application

A **full-stack web application** for predicting diabetes risk using a **machine learning model**.  
The system is built with **FastAPI**, **Node.js/Express**, **MongoDB**, and a **React.js** frontend.  
It supports **user authentication, secure data storage**, and **prediction for both guests and registered users**.

---

## ✨ Features

### 🔹 Machine Learning Model
- Logistic Regression trained on Kaggle’s **Diabetes dataset**.  
- Served via a **FastAPI** backend.  
- Handles both **GET** and **POST** prediction requests.  

### 🔹 User Authentication & Management
- Secure **login/signup** with **JWT authentication**.  
- Passwords encrypted with **bcrypt**.  
- Registered users can:
  - View prediction history  
  - Delete prediction entries  
  - Manage their accounts securely  

### 🔹 Prediction Modes
- **Registered Users:** Predictions stored in **MongoDB** for future access.  
- **Guest Users:** Predictions available without saving data.  

### 🔹 Frontend
- Built with **React.js**.  
- Communicates with both:
  - **FastAPI** (for ML predictions)  
  - **Node.js/Express** (for user management & MongoDB operations).  
- Responsive design for smooth user experience.  

---

## 🛠️ Tech Stack

### Backend
- **FastAPI** → ML model deployment  
- **Node.js + Express.js** → User authentication & MongoDB integration  
- **MongoDB + Mongoose** → Database storage  

### Frontend
- **React.js** → UI & state management  
- **Axios** → API requests  
- **React Router** → Navigation  

### Security
- **JWT Authentication**  
- **bcrypt** password hashing  

---

## 📂 Project Structure

```bash
📦 diabetes-prediction-app
├── backend
│   ├── fastapi-model      # ML model with FastAPI
│   ├── express-server     # Node.js server for auth & DB
│   └── database           # MongoDB schemas & config
├── frontend
│   └── react-app          # React.js user interface
└── README.md
🚀 Getting Started
1️⃣Clone the Repository

git clone https://github.com/yourusername/diabetes-prediction-app.git
cd diabetes-prediction-app
Backend Setup
FastAPI (ML Model)

cd backend/fastapi-model
pip install -r requirements.txt
uvicorn main:app --reload
Node.js/Express (Auth + DB)

cd backend/express-server
npm install
npm run dev
3Frontend Setup (React)
 
cd frontend/react-app
npm install
npm start
Dataset
Source: Kaggle - Pima Indians Diabetes Database

Model trained using Logistic Regression.

Features include: Pregnancies, Glucose, Blood Pressure, Skin Thickness, Insulin, BMI, Diabetes Pedigree Function, Age.

Usage
Signup/Login → Access personalized dashboard.

Enter patient data → Get diabetes prediction.

History → View/delete past predictions (for registered users).

Guest mode → Make predictions without storing data.

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

📜 License
This project is licensed under the MIT License.


Copy code
