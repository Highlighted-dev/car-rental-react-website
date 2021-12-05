import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../AuthProvider'
import './SignForms.css';

const SignIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signin} = useAuth()
    //TODO Show errors on the screen
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value);
            navigate("/Dashboard");
        }
        catch{
            
            setError('Failed to sign in')
        }
        setLoading(false)
        
    }

    return (
        <div id="home">
        {error && console.log(error)}
                <form onSubmit={handleSubmit}>
                    <h3>Sign in</h3><br />
                    <div className="input-box">
                        <span>E-mail:</span>
                        <input type="email" name="" id="" ref={emailRef} required></input>
                    </div>
                    <div className="input-box">
                        <span>Password:</span>
                        <input type="password" name="" id="" ref={passwordRef} required></input>
                    </div>
                    <input id="btn" disabled={loading} type="submit" value="Sign in"></input><br /><br />
                    <Link to="/SignUp" disabled={loading}>Need an account?</Link>
                </form>
        </div>
    )
}

export default SignIn
