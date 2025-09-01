import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import "./History.css"
import { BsSearch } from "react-icons/bs";
import axios from 'axios';
import { server } from '../../server';
import { toast } from 'react-toastify';



const History = () => {
  const { history, setHistory } = useContext(AppContext);
  const [allHistory, setAllHistory] = useState(history);
  const [search, setSearch] = useState("");

  const [deletePopup, setDeletePopup] = useState(false)

  useEffect(() => {
    setAllHistory(history); 
  }, [history]);

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`${server}/v1/api/query/delete/${id}`)
      toast.success(response.data.message, { theme: "dark" })

      if (response.data.success) {
        setHistory((prev) => prev.filter((v) => v._id !== id))
        setAllHistory((prev) => prev.filter((v) => v._id !== id))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const searchHandler = () => {
    if (!search.trim()) {
      setHistory(allHistory); 
    } else {
      setHistory(
        allHistory.filter((d) =>
          d.patientName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };
  if(!history || history.length == 0){
    return(
      <h1 style={{textAlign:"center", marginTop:"40vh"}}>
        No History Found !
      </h1>
    )
  }

  return (
    <>
      <div className="top-search" >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='Search patient'
        />
        <p onClick={searchHandler}><BsSearch /></p>
      </div>
      <div className='history-page'>
        {[...history].reverse().map((v) => (
          <div key={v._id} className="outer">
            <div className="hist-top">
              <p><strong>Patient Name: </strong><p>{v.patientName}</p></p>
              <p>
                <strong>Prediction:</strong>{" "}
                <p className={v.predict == 1 ? "danger" : "normal"}>
                  {v.predict == 1 ? "Yes" : "No"}
                </p>
              </p>
            </div>
            <div className="bottom-hist">
              <p><strong>Age: </strong>{v.Age}</p>
              <p><strong>BMI: </strong>{v.BMI}</p>
              <p><strong>Blood Pressure: </strong>{v.BloodPressure}</p>
              <p><strong>Diabetes Pedigree Function: </strong> {v.DiabetesPedigreeFunction}</p>
              <p><strong>Glucose: </strong>{v.Glucose}</p>
              <p><strong>Insulin: </strong>{v.Insulin}</p>
              <p><strong>Pregnancies: </strong>{v.Pregnancies}</p>
            </div>
            <div className="lst-btn">
              <p><strong>Skin Thickness: </strong>{v.SkinThickness}</p>
              <button onClick={() => deleteHandler(v._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="deletepopup">
        <p>Are Your sure want to delete?</p>
        <div className="buttons">
          <button >Yes</button>
          <button>No</button>
        </div>
      </div> */}
    </>
  )
}

export default History
