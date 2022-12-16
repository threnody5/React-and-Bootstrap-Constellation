/** @format */

// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js'
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
  return (
      <nav className='navbar navbar-expand-sm fixed-top navbar-dark bg-black'>
        <div className='container'>
          <a
            href='#'
            className='navbar-brand'
          >
            Constellations.Map()
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link'
              >Products</a>
            </li>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link'
              >Shop</a>
            </li>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link'
              >Contact Us</a>
            </li>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link'
              >Login</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
