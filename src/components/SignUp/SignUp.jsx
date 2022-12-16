/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons';

export default function SignUp() {
  return (
    <div
      style={{
        backgroundImage: "url('https://getwallpapers.com/wallpaper/full/7/8/d/280010.jpg')",
        height: '100vh',
      }}
    >
      <div className='Auth-container justify-content-center text-center'>
        <div className=''>
          <h3 className='accountCreation text-white text-center'>Create an Account</h3>
          <div className='form-group mt-3'>
            <label className='text-white'>Full Name</label>
            {/* <i className="bi bi-envelope-at-fill icon-white"> */}
            <input
              type='text'
              className='form-control mt-1'
              placeholder='e.g. John Doe'
            />
            {/* </i> */}
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Email Address</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='Enter Email'
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Enter Password'
            />
          </div>
          <div className='form-group mt-3'>
            <label className='text-white'>Re-enter Password</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Re-enter Password'
            />
          </div>
          <br />
          <div className='text-white text-center'>
        Go back to {' '}<a className='text-info' href="/">Home</a>{' '} page
      </div>
        </div>
      </div>
    </div>
  );
}
