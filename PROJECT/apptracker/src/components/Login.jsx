import React from "react";
import { useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import stlogin from '../assets/css/stlogin.module.css';
function Login()
{
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
           const response = await axios.get(
             "http://localhost:3001/users?username=" + userName
           );
       
           if (response.data.length === 0) {
             alert("No user found with this username.");
             return;
           }
       
           const user = response.data[0];
       
           if (user.password === passWord) {
             alert("Login successful!");
             window.location.href='/userdash';
           } else {
             alert("Incorrect password. Please try again.");
           }
        } catch (error) {
           console.error("Error:", error);
        }
       };

    return (
        <div className={stlogin.logindiv} >
            <div className={stlogin.innerdiv}>
            <form onSubmit={handleSubmit} className={stlogin.formdiv}>
                <h1 className={stlogin.h1tag}>Login</h1>
                <p className={stlogin.ptag}>Don't have an account ? <Link to='/reg'>Create one now</Link></p>
                <label htmlFor="username" className={stlogin.labeltag}>
                    Username : 
                    <input type="text" placeholder="Username" name="username" value={userName} className={stlogin.inputtag} onChange={(e) => setUsername(e.target.value)} required/>
                </label>
                <br />
                <label htmlFor="password" className={stlogin.labeltag}>
                    Password :   
                    <input type="password" placeholder="Password" name="password" className={stlogin.inputtag} value={passWord} onChange={(e) => setPassword(e.target.value)}required />
                </label>
                <br />
                <button className={stlogin.btn} type="submit">LOGIN</button>
            </form>
            </div>
        </div>
    );
}

export default Login;