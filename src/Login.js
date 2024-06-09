import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function Login({ onLogin }) {
 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {

    setShowPassword(!showPassword);
  };

  const handleLogin = () => {

    if (email && password) {
      onLogin();
    } 
    
    else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="flex flex-col place-items-center text-center justify-center min-h-screen px-4">
      <div className="-mt-28 mb-20 grid text-gray-400 text-center">
        <h1 className='mb-7 text-5xl font-bold text-white'>
          Welcome to the login page 
        </h1>
        <p className="flex justify-center items-center text-4xl font-bold">
          Use Your Email address to login to your account
        </p>
      </div>
      <div className="p-10 border-8 border-gray-400 rounded-3xl w-full max-w-3xl">
        
        <h1 className="text-2xl text-center font-bold text-gray-300 mb-8">
          LOGIN
        </h1>
        
        <div className="mb-6">
        
          <div className="flex items-center mb-4">
        
            <input
              className="flex-1 mb-10 rounded-full p-6 text-gray-300 border-2 border-gray-400 bg-black font-bold"
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={handleEmail}
            />
         
          </div>
          
          <div className="flex items-center">
           
            <input
              className="bg-black flex-1 rounded-full p-6 text-gray-200 border-2 border-gray-400 font-bold"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
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
          className="w-40 p-4 hover:border-8 bg-emerald-400 hover:border-gray-400 rounded-full hover:text-black hover:bg-emerald-600 transition-all duration-300  font-bold text-gray-800 border border-gray-50"
          onClick={handleLogin}
        >
          LOGIN
        </button>

      </div>
    </div>
  );
}

export default Login;
