/** @format */

import 'bootstrap/dist/css/bootstrap.css';

export default function PageNotFound() {
  return (
    <div style={{
      backgroundImage: "url('https://getwallpapers.com/wallpaper/full/7/8/d/280010.jpg')",
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
