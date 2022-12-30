/** @format */

// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js'
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { SignUserOut } from '../SignUserOut/SignUserOut';

export default function Header() {
  return (
    <nav className='navbar-header navbar navbar-expand-sm fixed-top navbar-dark bg-black'>
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
            >
              Constellations
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#'
              className='nav-link'
            >
              Planets
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#'
              className='nav-link'
            >
              Contact Us
            </a>
          </li>
          <li className='nav-item'>
            <a
              onClick={SignUserOut}
              className='nav-link'
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
