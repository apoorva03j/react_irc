import React, { useState } from 'react';
import strep from '../assets/css/strep.module.css';

const Registration = () => {
  const [Name, setName] = useState('');
  const [Comment, setComment] = useState('');

  const handleSubmit = () => {
    window.alert("We will get back to you shortly");
  };

  return (
    <div className={strep.registrationForm}>
      <h1 className={strep.h1t}>Report Issue</h1>
      <form onSubmit={handleSubmit}>
    
    <div className={strep.Maindiv}>
        <div className={strep.div1}>
        <div className={strep.formGroup}>
          <label htmlFor="Name">Name</label>
          <div>
          <input className={strep.inputbox}
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)} required />
          </div>
        </div>
        <div className={strep.formGroup}>
          <label htmlFor="Comment">Comment</label>
          <div>
          <input className={strep.inputbox} style={{height: '100px'}}
            type="text"
            id="Comment"
            value={Comment}
            onChange={(e) => setComment(e.target.value)} required/>
          </div>
        </div>
        </div>
        </div>
        <button className={strep.btn} type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Registration;