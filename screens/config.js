import firebase from 'firebase'
require ("@firebase/firestor")

var firebaseConfig = {
    apiKey: "AIzaSyA8ahsuopwWBkw672LJ5dWySvW0jMuK9e8",
    authDomain: "project71-4af68.firebaseapp.com",
    projectId: "project71-4af68",
    storageBucket: "project71-4af68.appspot.com",
    messagingSenderId: "138045276",
    appId: "1:138045276:web:0f4371f9aca55f3a494399"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()