# Diabetes Risk Prediction Web Application

A full-stack web application for predicting diabetes risk using a **machine learning model**, built with **FastAPI**, **Node.js/Express**, **MongoDB**, and a **React** frontend. The application supports user authentication, secure data storage, and provides both guest and registered user prediction functionality.  

---

## Features

- **ML Model Integration:**  
  - Logistic Regression model trained on Kaggle's diabetes dataset using **scikit-learn**.  
  - Model served through a **FastAPI** backend.  

- **User Authentication & Account Management:**  
  - Secure **login/signup** system via **Node.js & Express.js**.  
  - Password hashing and authentication handled with **JWT**.  
  - Users can view their prediction history, delete entries, and securely manage their account.

- **Prediction Functionality:**  
  - Registered users: Predictions saved to **MongoDB**.  
  - Guest users: Predictions performed without saving data.  
  - Supports both **GET** and **POST** requests for predictions.  

- **Frontend:**  
  - Built with **React.js**.  
  - High-quality, **responsive UI**.  
  - Dynamic interfaces for predictions, history viewing, and user authentication.  

- **Database:**  
  - **MongoDB** for storing user accounts and prediction history.  
  - **Mongoose** schemas for structured data management.  

- **Environment Variables:**  
  - Secure configuration using **dotenv** for sensitive data such as DB connections and JWT secrets.  

- **API Endpoints:**  
  - **User APIs:** `/signup`, `/login`, `/logout`, `/user/history`, `/user/delete`  
  - **Prediction APIs:** `/predict`  
  - **Data Retrieval:** `/get`  

---

## Tech Stack

- **Frontend:** React.js, CSS, Responsive Design  
- **Backend (ML API):** FastAPI, scikit-learn, pandas, numpy  
- **Backend (User & Routing):** Node.js, Express.js, Mongoose  
- **Database:** MongoDB  
- **Authentication:** JWT, bcrypt  
- **Environment Variables:** dotenv  



