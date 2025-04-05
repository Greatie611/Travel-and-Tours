import React from 'react'

import { useNavigate } from 'react-router-dom';
const SignUp = (prop) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    prop.handleSignUpForm(e, navigate);
  }
  return (

    <div className="form-cont">
      <div className="form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit }>
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
          <input
            type="password"
            placeholder="Enter Password"
            value={prop.enterPassword}
            onChange={(e) => prop.setEnterPassword(e.target.value)}
          />
          <input type="password" placeholder='Confirm Password'
            value={prop.confirmPassword}
            onChange={(e) => prop.setconfirmPassword(e.target.value)}
          />


          <button className="btn-1" type="submit"
            onClick={() => navigate('/signup')}>
            Submit
          </button>

        </form>


      </div>
    </div>




  )
}

export default SignUp




