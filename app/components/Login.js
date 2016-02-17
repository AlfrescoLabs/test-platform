import React from 'react'

class Login extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        <label>Username:</label><input id="username" value="" />
        <label>Password:</label><input id="password" value="" />
        <button id="submit-login" />
      </div>
    );
  }
}

export default Login
