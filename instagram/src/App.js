import React, { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="App">
      <Header />
      {isLoginView ? <LoginForm /> : <SignupForm />}
      <button onClick={toggleView}>
        {isLoginView ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default App;
