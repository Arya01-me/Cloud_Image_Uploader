import React, { useState } from 'react';
import './style.css';
import Headbar from './Headbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  
  const handleSignupComplete = () => {
    setIsSignedUp(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='App'>
     
      {!isSignedUp && <Signup onSignupComplete={handleSignupComplete} />}
     
      {isSignedUp && !isLoggedIn && <Login onLogin={handleLogin} />}
      
      {isLoggedIn && (
        
        <div className="grid h-screen w-screen">
        
          <div className='mt-5 ml-6 place-items-start text-start'>
            <Headbar />
          </div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;