import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import streg from '../assets/css/streg.module.css';


const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = (event) => {
    if(password!==confirmPassword)
    {
      event.preventDefault();
      window.alert("Passwords do not match!")
    }
    else{
      event.preventDefault();
        window.alert("Thank you for registering! Go to the Login Page");
    }
  };

  return (
    <div className={streg.registrationForm}>
      <h1 className={streg.h1t}>Registration Form</h1>
      <form onSubmit={handleSubmit}>
    
    <div className={streg.Maindiv}>
        <div className={streg.div1}>
        <div className={streg.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input className={streg.inputbox}
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className={streg.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input className={streg.inputbox}
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div className={streg.formGroup}>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input className={streg.inputbox}
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)} required/>
        </div>
        </div>

        <div className={streg.div1}>
        <div className={streg.formGroup}>
          <label htmlFor="username">Username</label>
          <input className={streg.inputbox}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div className={streg.formGroup}>
          <label htmlFor="password">Password</label>
          <input className={streg.inputbox}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className={streg.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className={streg.inputbox}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} required/>
        </div>
        </div>
        </div>
        <button className={streg.btn} type="submit">SUBMIT</button>
      </form>

    </div>
  );
};

export default Registration;