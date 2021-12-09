import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/SignForms.css'
import {useAuth} from '../../Auth/AuthProvider'
import Alert from '../../Components/Alert'
const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [isActive,setActive] = useState(false);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    async function handleSubmit(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        setActive(!isActive);
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate("/Dashboard");
      } catch {
        setLoading(false);
        setError("Failed to create an account");
        setActive(!isActive);
      }
  
     
    }

    return (
      <>
      {isActive ? <Alert warning={error}/> : ""}
      <div id="home">
        
            <form onSubmit={handleSubmit} id="signForm">
                <h3>Sign up</h3><br />
                <div className="input-box">
                    <span>E-mail:</span>
                    <input type="email" ref={emailRef} required></input>
                </div>
                <div className="input-box">
                    <span>Password:</span>
                    <input type="password" ref={passwordRef} required></input>
                </div>
                <div className="input-box">
                    <span>Confirm Password:</span>
                    <input type="password" ref={passwordConfirmRef} required></input>
                </div>
                <input id="btn" disabled={loading} type="submit" value="Sign up"></input><br /><br />
                <Link to="/SignIn">Already have account?</Link>
            </form>
        </div>
      </>
        
    )
}

export default SignUp
