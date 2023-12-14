import React from "react";
import { useState } from "react";
import "../assets/Login.css"
import loginimg from "../assets/loginimg.png";
// import {Link} from "react-router-dom";
function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () =>{
        window.alert("Login Successful!");
    }
    return (
        <div className="logindiv">
            <img src={loginimg} alt="login" className="login-img"></img>
            <div className="innerdiv">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">
                    Username : 
                    <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </label>
                <br />
                <label for="password">
                    Password :   
                    <input type="password" name="password" className="inp2" value={password} onChange={(e) => setPassword(e.target.value)}required />
                </label>
                <br />
                <button type="submit">LOGIN</button>
                <button type="button">SIGN UP</button>
            </form>
            </div>
        </div>
    );
}

export default Login;