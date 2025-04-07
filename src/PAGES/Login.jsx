import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (prop) => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    prop.handleLoginForm(e, navigate);
  };

            const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form-cont">
      <div className="form">
        <h2>Login</h2>
        <span className='error'>
          {prop.error}
          </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder=" Fullname"
            value={prop.fullname}
            onChange={(e) => prop.setFullName(e.target.value)}
          />
         
     
          <div className="password-input-container">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder=" Password"
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

          <div className="buttons">
            <Link to="/forgot password">
              <h5>Forgot Password? </h5>
            </Link>
            <Link to="/signup">
              <h5>Create Account </h5>
            </Link>
          </div>
          <button className="btn-1" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;