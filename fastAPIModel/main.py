from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Annotated
from fastapi.responses import JSONResponse
import pickle
import pandas as pd

app = FastAPI()

with open("d_model.pkl", "rb") as f:
    model = pickle.load(f)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PatientData(BaseModel):
    Pregnancies: Annotated[int, Field(..., description="Number of pregnancies")]
    Glucose: Annotated[int, Field(..., description="Glucose level", ge=0)]
    BloodPressure: Annotated[int, Field(..., description="Blood pressure", ge=0)]
    SkinThickness: Annotated[int, Field(..., description="Skin thickness", ge=0)]
    Insulin: Annotated[int, Field(..., description="Level of insulin", ge=0)]
    BMI: Annotated[float, Field(..., description="BMI", ge=0)]
    DiabetesPedigreeFunction: Annotated[float, Field(..., description="Diabetes Pedigree Function", ge=0)]
    Age: Annotated[int, Field(..., description="Age of the patient", ge=0)]


@app.get("/")
def home():
    return JSONResponse(status_code=200, content={
        "success": True,
        "message": "Diabetes prediction API running...."
    })
    
    
@app.post("/predict")
def predict(data: PatientData):
    try:
        
        dataframe = pd.DataFrame([{
            "Pregnancies": data.Pregnancies,
            "Glucose": data.Glucose,
            "BloodPressure": data.BloodPressure,
            "SkinThickness": data.SkinThickness,
            "Insulin": data.Insulin,
            "BMI": data.BMI,
            "DiabetesPedigreeFunction": data.DiabetesPedigreeFunction,
            "Age": data.Age
        }])

        y_pred = model.predict(dataframe)
        print(y_pred[0])
        return JSONResponse(status_code=200, content={
            "success": True,
            "prediction": int(y_pred[0])  
        })
        
    except Exception as e:
        print("Error occurred: ", e)
        raise HTTPException(status_code=500, detail="Server error please try again later.")
