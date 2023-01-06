/** @format */

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { background } from '../../Background/Background';
import { useLocation, redirect, useNavigate } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from '../../FirebaseConfig';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AuthGuard from '../AuthGuard/AuthGuard';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

export default function LoggedIn() {
  const { state } = useLocation();

  const navigate = useNavigate();

  // const currentUserStatus = state;
  // console.log(currentUserStatus);
  // const authGuard = new AuthGuard;
  const [serverData, setServerData] = useState();
  const [populatedServerData, setPopulatedServerData] = useState(false);
  let [userStatus, setUserStatus] = useState(0);

  useEffect(() => {
    setUserStatus(state);
    const retrieveData = ref(database, 'users/' + state + '/constellationData');
    onValue(retrieveData, (snapshot) => {
      const data = snapshot.val();
      setServerData(data);
      setPopulatedServerData(true);
      // console.log(`User ${userStatus}`);
    });
  }, []);

  if (parseInt(state.length === 0)) {
    // console.log(state);
    return navigate('/login');
    // console.log(`User ${userStatus}`);
  }

  // console.log(userStatus);

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
      {/* <div>
      <AuthGuard userStatus={userStatus} />
      </div> */}
      <div>
        {!populatedServerData && (
          <div>
            <h1 className='loading-text'>
              Loading constellations from Database...
            </h1>
          </div>
        )}
        {populatedServerData &&
          userStatus !== 0 &&
          serverData.map((item, key) => (
            <Card
              key={key}
              border='dark'
              className='card-container'
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant='top'
                src={{ uri: item.url }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.information}</Card.Text>
                <Button variant='primary'>Viewed</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
