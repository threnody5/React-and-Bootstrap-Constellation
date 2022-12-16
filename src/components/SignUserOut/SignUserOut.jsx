import { authorization } from '../../FirebaseConfig';
import { signOut } from 'firebase/auth';

export const SignUserOut = () => {
  signOut(authorization)
    .then(() => {
      //* Sign out successful
      window.alert('Successfully signed out');
    })
    .catch((e) => {
      const error = e;
      window.alert('Error has occurred');
    })
}