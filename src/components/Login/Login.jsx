/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { authorization } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { background } from '../../Background/Background';

export default function Login() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const LogInToAccount = () => {
    signInWithEmailAndPassword(authorization, emailAddress, password)
      .then((userCredentials) => {
        //* Signed in
        const user = userCredentials.user;
        console.log(user);
        window.alert('Logged in successfully');
        setEmailAddress('');
        setPassword('');
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        window.alert('Wrong email address or password');
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url(' + background + ')',
        height: '100vh',
      }}
    >
      <div className='Auth-container justify-content-center text-center'>
        <div>
          <h3 className='text-white text-center'>Log into your Account</h3>
          <div className='form-group mt-3'>
            <label className='text-white'>Email Address</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='Email Address'
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='btn btn-info text-dark mt-4'
            onClick={LogInToAccount}
          >
            Log In
          </button>
          <br />
          <div className='text-white text-center mt-4'>
            Go back to{' '}
            <a
              href='/'
              className='text-info'
            >
              Home
            </a>{' '}
            page
          </div>
        </div>
      </div>
    </div>
  );
}
