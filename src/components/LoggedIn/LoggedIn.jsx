/** @format */

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { background } from '../../Background/Background';
import { useLocation } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from '../../FirebaseConfig';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

export default function LoggedIn() {
  const { state } = useLocation();
  const [serverData, setServerData] = useState();
  const [populatedServerData, setPopulatedServerData] = useState(false);

  useEffect(() => {
    const retrieveData = ref(database, 'users/' + state + '/constellationData');
    onValue(retrieveData, (snapshot) => {
      const data = snapshot.val();
      setServerData(data);
      setPopulatedServerData(true);
    });
  }, []);

  console.log(serverData);

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
      <div>
        {!populatedServerData && (
          <div>
            <h1 className='loading-text'>Loading constellations from Database...</h1>
          </div>
        )}
        {populatedServerData &&
          serverData.map((item, key) => (
            <Card
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
