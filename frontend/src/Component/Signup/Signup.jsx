import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import { server } from '../../../server'
import { toast } from 'react-toastify'

const Signup = () => {
  const [signup, setSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (signup) {
        if (!email || !name || !password) {
          toast.error("All field are required!", { theme: "dark" })
          return;
        }
        const response = await axios.post(`${server}/v1/api/user/signup`, { name, email, password })
        console.log(response.data)
        if (response.data.success) {
          toast.success(response.data.message, { theme: "dark" })
          setSignup(false)
          setEmail("")
          setName("")
          setPassword("")

        }

      }
      else {
        if (!email || !password) {
          toast.error("All field are required!", { theme: "dark" })
          return;
        }
        const response = await axios.post(`${server}/v1/api/user/login`, { email, password })
        console.log(response.data.token)

        if (response.data.success) {
          toast.success(response.data.message, { theme: "dark" })
          const stringifyData = JSON.stringify(response.data.data)
          localStorage.setItem("user", stringifyData)
          localStorage.setItem("token", response.data.token)
          setEmail("")
          setName("")
          setPassword("")
          window.location.href = "/"


        }

      }

    } catch (error) {
      console.error(error)
      toast.error("Something went wrong.")
    }
  }
  return (
    <div className='signup-container'>
      <h1>{signup ? "Sign up" : "Log in "}</h1>
      <form action="" onSubmit={submitHandler}>
        {!signup ? "" : <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your full name" />}
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter secure password' />
        <button type='submit'>Submit</button>
        <div className="signup-buttom">
          <input type="checkbox" required />
          {signup ? <p>Already have an account? <span onClick={() => setSignup(!signup)}>Log in</span>
          </p> : <p>Do not have an account? <span onClick={() => setSignup(!signup)}>Signup</span></p>}
        </div>
      </form>
    </div>
  )
}

export default Signup
