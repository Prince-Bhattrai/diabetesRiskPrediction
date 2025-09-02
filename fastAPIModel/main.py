from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Annotated
from fastapi.responses import JSONResponse
import pickle
import pandas as pd

app = FastAPI(title="Diabetes Prediction API")

with open("d_model.pkl", "rb") as f:
    model = pickle.load(f)

origins = [
    "https://diabetesriskprediction-gf58.onrender.com", 
    "http://localhost:5173",  
    "https://diabetes-risk-prediction-six.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PatientData(BaseModel):
    Pregnancies: Annotated[int, Field(..., ge=0)]
    Glucose: Annotated[int, Field(..., ge=0)]
    BloodPressure: Annotated[int, Field(..., ge=0)]
    SkinThickness: Annotated[int, Field(..., ge=0)]
    Insulin: Annotated[int, Field(..., ge=0)]
    BMI: Annotated[float, Field(..., ge=0)]
    DiabetesPedigreeFunction: Annotated[float, Field(..., ge=0)]
    Age: Annotated[int, Field(..., ge=0)]

@app.get("/")
def home():
    return JSONResponse(status_code=200, content={
        "success": True,
        "message": "Diabetes prediction API running..."
    })

@app.post("/predict")
def predict(data: PatientData):
    try:
        df = pd.DataFrame([data.dict()])
        prediction = model.predict(df)[0]
        return JSONResponse(status_code=200, content={
            "success": True,
            "prediction": int(prediction)
        })
    except Exception as e:
        print("Error occurred:", e)
        raise HTTPException(status_code=500, detail="Server error, please try again later.")

