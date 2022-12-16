/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { authorization } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { background } from '../../Background/Background';

export default function SignUp() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const createAccount = () => {
    if (emailAddress.length < 9) {
      window.alert('Please enter a valid email address');
      return;
    }
    if (password !== reEnterPassword) {
      window.alert('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      window.alert('Please enter a password with at least 8 characters');
      return;
    }

    createUserWithEmailAndPassword(authorization, emailAddress, password)
      .then(() => {
        //* account is created
        window.alert('Account has been created');
        setEmailAddress('');
        setPassword('');
        setReEnterPassword('');
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
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
          <h3 className='text-white text-center'>Create an Account</h3>
          <div className='form-group mt-3'>
            <label className='text-white'>Full Name</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='e.g. John Doe'
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Email Address</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='Enter Email'
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Re-enter Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Re-enter Password'
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
            />
            <div>
              <button
                className='btn btn-info text-dark mt-4'
                onClick={createAccount}
              >
                Create Account
              </button>
            </div>
          </div>
          <br />
          <div className='text-white text-center'>
            Go back to{' '}
            <a
              className='text-info'
              href='/'
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
