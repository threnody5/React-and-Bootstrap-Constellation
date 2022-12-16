/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { background } from '../../Background/Background';

export default function Login() {
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
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Password'
            />
          </div>
          <button className='btn btn-info text-dark mt-4'>Log In</button>
        </div>
      </div>
    </div>
  );
}
