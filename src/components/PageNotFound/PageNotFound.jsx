/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import { background } from '../../Background/Background';

export default function PageNotFound() {
  return (
    <div style={{
      backgroundImage: 'url('+ background +')',
      height: '100vh'
    }}>
      <div>
        <h1 className='pageNotFound text-white text-center'>Page not found</h1>
      </div>
      <div className='text-white text-center'>
        Go back to {' '}<a className='text-info' href="/">Home</a>{' '} page
      </div>
    </div>
  );
}
