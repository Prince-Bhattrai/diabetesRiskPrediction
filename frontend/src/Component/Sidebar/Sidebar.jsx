import React, { useState } from 'react'
import "./Sidebar.css"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineBatchPrediction } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { CgWebsite } from "react-icons/cg";


const Sidebar = () => {
    const [active, setActive] = useState("home")
    const navigate = useNavigate()
  return (
    <div className='sidebar'>
      <div className="top-sidebar">
        <div onClick={()=>{setActive("home"),navigate("/") }} className={active=="home"?"item active":"item"}>
            <p className="p"><IoHomeOutline /></p>
            <p>Home</p>
           
        </div>
        <div onClick={()=>{setActive("predict"), navigate("/predict")}} className={active=="predict"?"item active":"item"}>
            <p className="p"><MdOutlineBatchPrediction /></p>
            <p>Predict</p>
           
        </div>
        <div onClick={()=>{setActive("history"), navigate("/history")}} className={active=="history"?"item active":"item"}>
            <p className="p"><FaHistory /></p>
            <p>History</p>
           
        </div>
      </div>
      <div className="bottom-sidebar">
       <div className="links">
        <a href="https://github.com/Prince-Bhattrai"  target='_blank'> <p><FaGithub/></p></a>
         <a href="https://princebhattrai.vercel.app/" target='_blank'> <p><CgWebsite/></p></a>
        <a href="https://www.linkedin.com/in/prince-bhattrai-427005350/" target='_blank'><p><FaLinkedin/></p></a>
        <a href="https://x.com/bhattrai_p74771" target='_blank'><p><FaXTwitter/></p></a>
       </div>
       <p>&copy; {new Date().getFullYear()} princebhattrai. All Rights Reserved.</p>
      </div>
     
    </div>
  )
}

export default Sidebar
