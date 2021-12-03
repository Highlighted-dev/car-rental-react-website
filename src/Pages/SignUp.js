import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import {useAuth} from '../AuthProvider'
const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    //TODO Show errors on the screen
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value)
        {
            return setError("Password do dont match")
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        }
        catch{
            
            setError('Failed to create an account')
        }
        setLoading(false)
        
    }

    return (
        <div id="home">
        {error && console.log(error)}
            <form onSubmit={handleSubmit}>
                <label>E-mail:</label>
                <input type="email" ref={emailRef} required></input>
                <label>Password:</label>
                <input type="password" ref={passwordRef} required></input>
                <label>Confirm Password:</label>
                <input type="password" ref={passwordConfirmRef} required></input>
                <input disabled={loading} type="submit" value="Sign up"></input>
                <Link to="/SignIn">Already have account?</Link>
            </form>
        </div>
    )
}

export default SignUp
