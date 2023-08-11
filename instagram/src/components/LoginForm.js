// LoginForm.js
import React from 'react';

function LoginForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Phone number, username, or email" />
      <br />
      <input type="password" placeholder="Password" />
     <h2>Don't have account?</h2>
     </form>
      
    </div>
  );
}

export default LoginForm;

