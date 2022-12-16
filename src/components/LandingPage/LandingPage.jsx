/** @format */

import 'bootstrap/dist/css/bootstrap.css';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: "url('https://getwallpapers.com/wallpaper/full/7/8/d/280010.jpg')",
        height: '100vh',
      }}
    >
      <nav className='navbar navbar-expand-sm navbar-dark bg-transparent'>
        <div className='container'>
          <a
            href='#'
            className='navbar-brand'
          >
            Constellation.Map()
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                href='login'
                className='nav-link'
              >
                <button className='btn btn-light text-dark'>Login</button>
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='signup'
                className='nav-link'
              >
                <button className='btn btn-light text-dark'>Sign Up</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className=''>
        <h1 className='welcome text-white text-center'>Welcome to the Stars!</h1>
      </div>
      <div>
        <nav className='navbar fixed-bottom navbar-dark bg-transparent'>
          <div className='container'>
            <a
              href='#'
              className='navbar-brand'
            ></a>
            <p className='text-white'>Created by Threnody5</p>
          </div>
        </nav>
      </div>
    </div>
  );
}
