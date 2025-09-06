import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='home-page'>
      <div className="welcome">
        <h2># Welcome to the Diabetes Prediction System</h2>
        <br />
        <p>
          The Diabetes Prediction System is an <strong>AI-powered healthcare tool</strong> 
          designed to help users evaluate their potential risk of diabetes using personal 
          health information. 
        </p>
        <p>
          This system is trained on the <strong>Kaggle Diabetes Dataset</strong> with a 
          <strong> Logistic Regression model (scikit-learn)</strong>. It uses advanced 
          preprocessing with <strong>ColumnTransformer</strong>, a clean 
          <strong> Pipeline workflow</strong>, and model persistence via 
          <strong> Pickle</strong> to ensure reliable and efficient predictions.
        </p>
        <p>
          The backend is powered by <strong>FastAPI</strong>, securely connected with 
          <strong> Node.js & Express</strong>. We’ve also built a 
          <strong> React frontend</strong> for a smooth user experience. 
          Features like <strong>JWT authentication</strong>, <strong>MongoDB storage</strong>, 
          <strong> bcrypt password security</strong>, and <strong>Nodemailer</strong> for 
          email notifications ensure your data is safe and your experience is seamless.
        </p>
      </div>

      <div className="user">
        <h2># How to Use the System</h2>
        <ul>
          <li>
            <strong>Sign Up / Login</strong>
            <ul>
              <li>Create an account or log in securely.</li>
              <li>Logged-in users have their results saved to history.</li>
              <li>Guests can still test predictions, but data won’t be stored.</li>
            </ul>
          </li>
          <li>
            <strong>Enter Patient Details</strong>
            <ul>
              <li>Fill in all the health parameters listed below.</li>
            </ul>
          </li>
          <li>
            <strong>Submit for Prediction</strong>
            <ul>
              <li>Click the “Predict” button to analyze your data instantly.</li>
            </ul>
          </li>
          <li>
            <strong>Track History</strong>
            <ul>
              <li>Logged-in users can view previous predictions to monitor changes over time.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="input-fields">
        <h2># About the Input Fields</h2>
        <p>
          Each input field represents a medical or biological factor that can influence the 
          risk of diabetes. Understanding these will help you enter accurate data:
        </p>
        <ul>
          <li>
            <strong>1. Patient Name (patientName)</strong>
            <p>Used to identify the patient and track history by name.</p>
          </li>
          <li>
            <strong>2. Pregnancies</strong>
            <ul>
              <li><strong>Definition:</strong> Number of times the patient has been pregnant.</li>
              <li><strong>Why It Matters:</strong> Pregnancy can affect glucose levels and long-term 
              health. Multiple pregnancies may increase diabetes risk in women.</li>
            </ul>
          </li>
          <li>
            <strong>3. Glucose</strong>
            <ul>
              <li><strong>Definition:</strong> Plasma glucose concentration after fasting (mg/dL).</li>
              <li><strong>Why It Matters:</strong> A critical indicator of diabetes. High levels often 
              point to insulin resistance or diabetes.</li>
            </ul>
          </li>
          <li>
            <strong>4. Blood Pressure</strong>
            <ul>
              <li><strong>Definition:</strong> Diastolic blood pressure (mm Hg).</li>
              <li><strong>Why It Matters:</strong> Hypertension is commonly linked with diabetes and 
              cardiovascular risk.</li>
            </ul>
          </li>
          <li>
            <strong>5. Skin Thickness</strong>
            <ul>
              <li><strong>Definition:</strong> Skinfold thickness (mm), usually measured at the triceps.</li>
              <li><strong>Why It Matters:</strong> Reflects body fat levels. Higher values may suggest 
              obesity, a strong risk factor for diabetes.</li>
            </ul>
          </li>
          <li>
            <strong>6. Insulin</strong>
            <ul>
              <li><strong>Definition:</strong> 2-hour serum insulin level (mu U/ml).</li>
              <li><strong>Why It Matters:</strong> Abnormal insulin levels signal poor glucose 
              regulation, a key marker of diabetes risk.</li>
            </ul>
          </li>
          <li>
            <strong>7. BMI (Body Mass Index)</strong>
            <ul>
              <li><strong>Definition:</strong> Weight (kg) ÷ [height (m)]².</li>
              <li><strong>Why It Matters:</strong> A high BMI indicates overweight/obesity, strongly 
              correlated with diabetes risk.</li>
            </ul>
          </li>
          <li>
            <strong>8. Diabetes Pedigree Function</strong>
            <ul>
              <li><strong>Definition:</strong> A score indicating diabetes likelihood based on family history.</li>
              <li><strong>Why It Matters:</strong> Genetics significantly affect diabetes risk. A 
              higher score means higher risk.</li>
            </ul>
          </li>
          <li>
            <strong>9. Age</strong>
            <ul>
              <li><strong>Definition:</strong> Patient’s age in years.</li>
              <li><strong>Why It Matters:</strong> Risk increases with age, especially after 40.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="why">
        <h2># Why Use Our System?</h2>
        <ul>
          <li><strong>Accurate Predictions</strong> – Trained on real-world medical data.</li>
          <li><strong>Secure & Private</strong> – Data protected with JWT, MongoDB, and bcrypt.</li>
          <li><strong>User-Friendly</strong> – Clean React interface with guided inputs.</li>
          <li><strong>History Tracking</strong> – Logged-in users can monitor past results.</li>
          <li><strong>Accessible Anywhere</strong> – Works across devices with API integration.</li>
        </ul>
      </div>

      <div className="disclaimer">
        <p>
          <strong>Disclaimer:</strong> This system is not a medical diagnostic tool. 
          It is for <em>educational and informational purposes only</em>. Always consult 
          a healthcare professional for medical advice or treatment.
        </p>
      </div>
    </div>
  )
}

export default Home

