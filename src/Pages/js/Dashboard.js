import React from 'react'
import { useNavigate} from 'react-router-dom'
import "../css/Dashboard.css"
import {useAuth} from '../../Auth/AuthProvider'

const Dashboard = () => {
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    async function handleLogout(){
        try{
            await logout();
            navigate("/SignIn");
        }catch{
            console.log("Unable to logout");
        }
    }

    return (
        <div id="home">
            <div id="container">
                <h2>Profile</h2><br />
                <span>E-mail: {currentUser}</span><br />
                <label onClick={handleLogout}>Log out</label>
            </div>  
        </div>
    )
}

export default Dashboard
