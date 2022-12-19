/** @format */

import React from 'react';
import Header from '../Header/Header';
import { background } from '../../Background/Background';

export default function LoggedIn() {
  // const { token } = props;

  return (
    <div
      style={{
        backgroundImage: 'url(' + background + ')',
        height: '100vh',
      }}
    >
      <div>
        <Header />
      </div>
    </div>
  );
}
