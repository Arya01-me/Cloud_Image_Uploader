import React, { useState } from 'react';
import { Eye, EyeOff, User2Icon } from 'lucide-react';
import { GoogleLogin } from 'react-google-login';

function Signup({ onSignupComplete }) {
 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmail = (e) => {
   
    const emailValue = e.target.value;
    
    setEmail(emailValue);
    
    if (!emailValue.includes('@gmail.com')) {
      setEmailError('Please enter a valid Gmail address.');
    } 
    
    else {
      setEmailError('');
    }

  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

  };

  const handleClick = () => {

    setShowPassword(!showPassword);
  };

  const handleSignup = () => {

    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }
    if (!email.includes('@gmail.com')) {
      alert('Please enter a valid email address.');
      return;
    }
    onSignupComplete();
  };

  
  const responseGoogle = (response) => {
    console.log(response);
    
    if (response.profileObj) {
    
      onSignupComplete();
    } else {
      console.error('Google login failed');
    }
  };

  return (
    <div className="flex flex-col place-items-center text-center justify-center min-h-screen px-4">
  
      <div className="-mt-28 mb-20 grid text-gray-400 text-center">
        <h1 className='mb-7 text-5xl font-bold text-white'>
  
  
          Welcome to the signup page
  
        </h1>
  
        <p className="flex justify-center items-center text-4xl font-bold">
  
          Use your email address to create an account
        </p>
  
      </div>
  
      <div className="p-10 border-8 border-gray-400 rounded-3xl w-full max-w-3xl">
  
        <h1 className="text-2xl text-center font-bold text-gray-300 mb-8">
          SIGN UP
        </h1>
  
        <div className="mb-6">
  
          <div className="flex items-center mb-4">
  
            <input
            
              className={`flex-1 mb-10 rounded-full p-6 text-gray-300 border-2 border-gray-400 bg-black font-bold ${emailError && 'border-red-500'}`}
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={handleEmail}
              required
            />

            <User2Icon className="text-gray-50 h-8 w-8 ml-2" />
          </div>

          {emailError && <p className="text-red-500">{emailError}</p>}
          
          
          <div className="flex items-center">
          
            <input
              className="bg-black flex-1 rounded-full p-6 text-gray-200 border-2 border-gray-400 font-bold"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
              required
            />

            <div className="cursor-pointer ml-2" onClick={handleClick}>
            
              {showPassword ? (
                <EyeOff className="text-gray-50 h-8 w-8" />
              ) : (
                <Eye className="text-gray-50 h-8 w-8" />
              )}
            </div>

          </div>
        </div>
        <button
          className="w-40 p-4 hover:border-8 bg-emerald-400 hover:border-gray-400 rounded-full hover:text-black hover:bg-emerald-600 transition-all duration-300 font-mono font-bold text-gray-800 border border-gray-50"
          onClick={handleSignup}
        >
          SIGN UP
        </button>

      </div>
      
      <div className='text-center bg-white place-items-center justify-center border-4 w-full mt-10 rounded-full border-white flex'>
        
       <GoogleLogin
        
        clientId="775582617493-flpffu73aihh6hm26tvqd74tjg1qtu19.apps.googleusercontent.com"
          buttonText="Login with Google"
        
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
}

export default Signup;
