import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1qL3ZD2rUvUb85Z7iSTJdtMNfiATfT5w",
    authDomain: "memory-game-b2bcf.firebaseapp.com",
    projectId: "memory-game-b2bcf",
    storageBucket: "memory-game-b2bcf.appspot.com",
    messagingSenderId: "712840434921",
    appId: "1:712840434921:web:94514e3a995514c5fccc78",
    measurementId: "G-YFLXD26S03"
  };

  export const firebase = firebase.initalizeApp(firebaseConfig)