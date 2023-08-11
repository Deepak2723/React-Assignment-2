// SignupForm.js
import React from 'react';

function SignupForm() {
  return (
    <div>
      <form>
      <p>Enter Your Username</p>
      <input type="text" placeholder="Username" />
      <br />
      <p>Enter Your Password</p>
      <input type="password" placeholder="Password" />
      <br />
      <p>Enter Your Username</p>
      <input type="text" placeholder="Name" />
      <br />
      <p>Enter Your Email</p>
      <input type="email" placeholder="Email" />
      <br />
      <p>Enter Your Date of Birth</p>
      <input type="text" placeholder="DOB" />
      <br />
      </form>

      <h2>Have an account ?</h2>
      
    </div>
  );
}

export default SignupForm;
