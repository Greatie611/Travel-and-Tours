import React from 'react'
import {useNavigate } from 'react-router-dom';

const ForgotPassword = (prop) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    prop.handleForgotPassword(e, navigate);
  };
  return (

    <div className="form-cont">
      <div className="form">
        <h2>Forgot Password?</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id=""
            placeholder='Enter Email or Phone number'
            value={prop.email}
            onChange={(e) => prop.setEmail(e.target.value)} />


         
          <button className='btn-1' type="submit"
          onClick={() => navigate('/forgot password')}>
          Submit
          </button>

         
          
        </form>

      </div>

    </div>
  )
}

export default ForgotPassword
