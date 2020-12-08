import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCZV-MRGQrCLjfjtIVFC1L3z1MGYYzzEZ0',
  authDomain: 'location-tracker-45ba1.firebaseapp.com',
  databaseURL: 'https://location-tracker-45ba1.firebaseio.com',
  projectId: 'location-tracker-45ba1',
  storageBucket: 'location-tracker-45ba1.appspot.com',
  messagingSenderId: '435425438268',
  appId: '1:435425438268:web:15e23aec7be101c5393139',
  measurementId: 'G-BEYC8JL66C',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
