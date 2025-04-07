import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = (prop) => {
  const navigate = useNavigate()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const handleSubmit = (e) => {
    prop.handleSignUpForm(e, navigate);
  }
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (

    <div className="form-cont">
      <div className="form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Full name'
            value={prop.fullName}
            onChange={(e) => prop.setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={prop.email}
            onChange={(e) => prop.setEmail(e.target.value)}
          />
          <input type="number" placeholder='Enter Phone Number'
            value={prop.phone}
            onChange={(e) => prop.setPhone(e.target.value)}
          />

          <div className="password-input-container">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Enter Password"
              value={prop.enterPassword}
              onChange={(e) => prop.setEnterPassword(e.target.value)}
              className="password-input"
            />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}

            </span>
          </div>
          <div className="password-input-container">
            <input type={isPasswordVisible ? 'text' : 'password'}
              placeholder='Confirm Password'
              value={prop.confirmPassword}
              onChange={(e) => prop.setconfirmPassword(e.target.value)}
              className="password-input"
            />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}

            </span>
          </div>



          <button className="btn-1" type="submit"
            onClick={() => navigate('/signup')}>
            Submit
          </button>

        </form>

        <h3 className='already'>Already have an account?</h3>
        <Link to="/">
        <button className='btn-2' type="submit">Log In</button>
        </Link>
      </div>
    </div>




  )
}

export default SignUp




