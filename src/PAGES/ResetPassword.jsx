import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const ResetPassword = (prop) => {
  const navigate = useNavigate()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleSubmit = (e) => {
    prop.handleResetPassword(e, navigate);
  }
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (

    <div className="form-cont">
      <div className="form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
        <div className="password-input-container">
          <input type={isPasswordVisible ? 'text' : 'password'}
            placeholder='Enter new password'
            value={prop.enterPassword}
            onChange={(e) => prop.setEnterPassword(e.target.value)}
            className="password-input" />
             <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}

            </span> </div>

          <div className="password-input-container">
            <input type={isPasswordVisible ? 'text' : 'password'}
              placeholder='Confirm password'
              value={prop.confirmPassword}
              onChange={(e) => prop.setconfirmPassword(e.target.value)}
              className="password-input" />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}

            </span> </div>


          <button className='btn-1' type="submit"
            onClick={() => navigate('/reset password')}
          >Submit</button>


        </form>

      </div >

    </div >
  )
}

export default ResetPassword
