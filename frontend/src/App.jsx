import React, { useContext, useState } from "react"
import { AppContext } from "./Context/AppContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Component/Signup/Signup";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Predict from "./Pages/Predict";
import { RiMenu2Fill } from "react-icons/ri";
import Sidebar from "./Component/Sidebar/Sidebar";




function App() {
  const { count, setCount } = useContext(AppContext)
  const [sideBarr, setSideBar] = useState(false)
  const {isLogin, setIsLogin}  = useContext(AppContext)
  console.log(isLogin)
  const navigate = useNavigate()
  const [logoutPopUp, setLogoutpopUP] = useState(false)

  const logouthandler = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/signup"
  }

  return (
    <>
      <div className="wrapper">
        <ToastContainer />
        <div className="sidebar-app">
        <Sidebar/>
        </div>
        <div className="routes" >
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
          </Routes>
        </div>
      </div>
      <p onClick={()=>setSideBar(!sideBarr)} className="menu"><RiMenu2Fill /></p>
      <div onClick={()=>setSideBar(false)} className={sideBarr?"sidebar-mobile":"sidebar-mobile side-barmobile-visible"}>
        <Sidebar />
      </div>
      {isLogin?
      <button className="login-button" onClick={()=>setLogoutpopUP(true)}>
        Log out
      </button>:
      <button onClick={()=>navigate("/signup")} className="login-button">Log in</button>
    
    }
      <div className={logoutPopUp?"logout-pop-up":"logout-pop-up hidelogoutpopup"}>
        <p>Are You sure want to logout?</p>
        <div className="buttons">
          <button onClick={()=>logouthandler()}>Yes</button>
          <button onClick={()=>setLogoutpopUP(false)}>No</button>
        </div>
      </div>


    </>
  )
}

export default App
