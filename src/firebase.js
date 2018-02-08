import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: 'https://first-flight-with-friend-dccaf.firebaseio.com',
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
