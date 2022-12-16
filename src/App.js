/** @format */

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
