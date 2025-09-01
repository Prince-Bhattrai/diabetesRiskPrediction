import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Predict.css"
import { AppContext } from '../Context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { server } from '../../server'
import { RxCross2 } from "react-icons/rx";
const Predict = () => {
  const navigate = useNavigate()
  const [patientName, setPatientName] = useState("")
  const [Age, setAge] = useState("")
  const [Pregnancies, setPregnancies] = useState("")
  const [Glucose, setGlucose] = useState("")
  const [BloodPressure, setBloodPressure] = useState("")
  const [BMI, setBMI] = useState("")
  const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState("")
  const [SkinThickness, setSkinThickness] = useState("")
  const [Insulin, setInsulin] = useState("")

  const { isLogin, setIsLogin } = useContext(AppContext)
  const [error, setError] = useState(false)
  const [pred, setPred] = useState("")

  const { user, setUser } = useContext(AppContext)
  const { history, setHistory } = useContext(AppContext)
  console.log("from predict", history)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (isLogin) {
        if (!patientName ||
          !Age ||
          !Pregnancies ||
          !Glucose ||
          !BloodPressure ||
          !BMI ||
          !DiabetesPedigreeFunction ||
          !SkinThickness ||
          !Insulin
        ) {
          toast.error("Please fill all fields", { theme: "dark" })

        }

        const response = await axios.post(`${server}/v1/api/query/predict/${user._id}`, {
          Age,
          Pregnancies,
          Glucose,
          BloodPressure, BMI
          , DiabetesPedigreeFunction,
          SkinThickness, Insulin, patientName

        })
        console.log("response all", response.data.alldata)
        if (response.data.success) {
          setAge("")
          setBMI("")
          setBloodPressure("")
          setDiabetesPedigreeFunction("")
          setPatientName("")
          setGlucose("")
          setInsulin("")
          setPregnancies("")
          setSkinThickness("")
          setHistory((prev) => [response.data.alldata, ...prev])
          console.log(response.data.prediction)
          if (response.data.data.prediction === 1) {
            setPred("The patient is likely to have diabetes.");
          } else {
            setPred("The patient is not likely to have diabetes.");
          }

        }

      }

      else {
        const response = await axios.post("http://localhost:8000/predict",
          {
            Pregnancies, Glucose, BloodPressure, SkinThickness,
            Insulin, BMI, DiabetesPedigreeFunction, Age

          }
        )
        console.log(response.data)
        if (response.data.success) {
          console.log(response.data.prediction)
          setAge("")
          setBMI("")
          setBloodPressure("")
          setDiabetesPedigreeFunction("")
          setPatientName("")
          setGlucose("")
          setInsulin("")
          setPregnancies("")
          setSkinThickness("")

          if (response.data.data.prediction === 1) {
            setPred("The patient is likely to have diabetes.");
          } else {
            setPred("The patient is not likely to have diabetes.");
          }

        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='predict-page'>

      <p>For information about inputs please read about inputs fields <span onClick={() => navigate("/")}>Click Here.</span></p>
      <form action="" onSubmit={submitHandler}>
        <fieldset>
          <fieldset>
            <label htmlFor="patient_name">Patient Name</label>
            <input value={patientName} onChange={(e) => setPatientName(e.target.value)} type="text" id='patient_name' />
          </fieldset>
          <fieldset>
            <label htmlFor="patient_age" >Patient Age</label>
            <input value={Age} onChange={(e) => setAge(e.target.value)} type="number" id='patient_age' />
          </fieldset>
        </fieldset>
        <fieldset>
          <fieldset>
            <label htmlFor="blp">Blood Pressure</label>
            <input value={BloodPressure} onChange={(e) => setBloodPressure(e.target.value)} type="number" id='blp' />
          </fieldset>
          <fieldset>
            <label htmlFor="glu">Glucose level</label>
            <input value={Glucose} onChange={(e) => setGlucose(e.target.value)} type="number" id='glu' />
          </fieldset>
        </fieldset>
        <fieldset>
          <fieldset>
            <label htmlFor="preg">Pregnancies</label>
            <input value={Pregnancies} onChange={(e) => setPregnancies(e.target.value)} type="number" id='preg' />
          </fieldset>
          <fieldset>
            <label htmlFor="skt" >Skin Thickness</label>
            <input value={SkinThickness} onChange={(e) => setSkinThickness(e.target.value)} type="number" id='skt' />
          </fieldset>
        </fieldset>
        <fieldset>
          <fieldset>
            <label htmlFor="ins">Insulin</label>
            <input value={Insulin} onChange={(e) => setInsulin(e.target.value)} type="number" id='ins' />
          </fieldset>
          <fieldset>
            <label htmlFor="bmi">BMI</label>
            <input value={BMI} onChange={(e) => setBMI(e.target.value)} type="number" id='bmi' />
          </fieldset>
        </fieldset>
        <fieldset className='last' id='hhhhh'>
          <label htmlFor="dbtf">Diabetes Pedigree Function</label>
          <input value={DiabetesPedigreeFunction} onChange={(e) => setDiabetesPedigreeFunction(e.target.value)} type="text" id='dbtf' />

        </fieldset>
        <button>Predict</button>
      </form>
      <div className={pred.length !== 0 ? "predict-show" : "predict-show hide-pred-box"}>
        <p onClick={() => setPred("")} style={{ width: "100%", fontSize: "40px", cursor: "pointer" }}><RxCross2 /></p>
        <h3 style={{ padding: "10px", textAlign: "center" }}>{pred}</h3>
      </div>
    </div>
  )
}

export default Predict
