import React from 'react';


function Login () {
    return(
      <div>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button onClick={() => {window.location.href='/board'}}>login</button>
      </div>
    )
}
   

export default Login;