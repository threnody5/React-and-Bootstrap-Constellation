/** @format */

import { authorization } from '../../FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignUserOut = () => {
  const navigate = useNavigate();

  let userAnswer = window.confirm('Sign out?');

  if (userAnswer === true) {
    signOut(authorization)
      .then(() => {
        //* Sign out successful
        window.alert('Successfully signed out');
      })
      .catch((e) => {
        const error = e;
        window.alert('Error has occurred');
      });
      navigate('/');
  }
};
