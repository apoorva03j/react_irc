import React from "react";
import { useState } from "react";
import loginimg from "../assets/loginimg.png";
import {Link} from "react-router-dom";
import stlogin from '../assets/css/stlogin.module.css';
function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () =>{
        window.alert("Login Successful!");
    }
    return (
        <div className={stlogin.logindiv} >
            <img src={loginimg} alt="login" className={stlogin.loginImg}></img>
            <div className={stlogin.innerdiv}>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">
                    Username : 
                    <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </label>
                <br />
                <label for="password">
                    Password :   
                    <input type="password" placeholder="Password" name="password" className={stlogin.inp2} value={password} onChange={(e) => setPassword(e.target.value)}required />
                </label>
                <br />
                <Link to="/userdash">
                <button className={stlogin.btn} type="submit">LOGIN</button>
                </Link>
                <Link to="/reg">
                    <button className={stlogin.btn} type="button">SIGN UP</button>
                </Link>
            </form>
            </div>
        </div>
    );
}

export default Login;