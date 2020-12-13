import { useState, useEffect } from 'react';
import firebase from '../firebase';
//import { useCollectionData } from 'react-firebase-hooks/firestore';
import LocationsListItem from './LocationsListItem';
import AddLocationButton from './AddLocationButton';
import logo from '../images/logo.svg';

const GetLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('locations')
      .onSnapshot(snapshot => {
        const newLocations = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLocations(newLocations);
      });
  }, []);

  return locations;
};

const LocationsList = () => {
  const [signedIn, setSignedIn] = useState(false);

  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        if (result.user) {
          setSignedIn(true);
        }
      });
  };

  const locations = GetLocations();

  let locationsList = [];

  for (let i = 0; i < locations.length; i++) {
    locationsList.push(<LocationsListItem location={locations[i]} key={i} />);
  }

  return (
    <div className='LocationsList'>
      <div className='locationListHeader'>
        <img
          className='logo'
          src={logo}
          alt='Gensym Tech'
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            location.href = 'https://locations.gensymtech.xyz/';
          }}
        />
        <div className='headerTitle'>
          <h1>Locations</h1>
          <button onClick={signIn} hidden={signedIn} id='signIn'>
            Sign In With Google
          </button>
        </div>
      </div>
      <div className='list'>{locationsList}</div>
      <AddLocationButton />
    </div>
  );
};

export default LocationsList;
