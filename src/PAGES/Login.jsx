import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = (prop) => {
    
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    prop.handleLoginForm(e, navigate);
  }
  
  return (
    <div className="form-cont">
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            
            placeholder=" Username"
            value={prop.fullname}
            onChange={(e) => prop.setFullName(e.target.value)}
          />

          <input
            type="password"
            placeholder=" Password"
            value={prop.enterPassword}
            onChange={(e) => prop.setEnterPassword(e.target.value)}
          />
          <div className="buttons">
            <Link to="/forgot password">
              <h5>Forgot Password? </h5>
            </Link>
            <Link to="/signup">
              <h5 >Create Account </h5>
            </Link>

          </div>
          <button className="btn-1" type="submit" onClick={() => navigate('/')} >
            Login
          </button>

        </form>
        

      </div>
    </div>
  );
};

export default Login
