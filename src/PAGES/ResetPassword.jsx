import React from 'react'
import { useNavigate } from 'react-router-dom';

const ResetPassword = (prop) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    prop.handleResetPassword(e, navigate);
  };
  return (

    <div className="form-cont">
      <div className="form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="password" name="" id=""
            placeholder='Enter new password'
            value={prop.enterPassword}
            onChange={(e) => prop.setEnterPassword(e.target.value)} />

          <input type="password" name="" id=""
            placeholder='Confirm password'
            value={prop.confirmPassword}
            onChange={(e) => prop.setconfirmPassword(e.target.value)} />



          <button className='btn-1' type="submit"
            onClick={() => navigate('/reset password')}
          >Submit</button>


        </form>

      </div>

    </div>
  )
}

export default ResetPassword
