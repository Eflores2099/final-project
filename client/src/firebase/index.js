import firebase from 'firebase/app'
import 'firebase/storage'

// initialize firebase
var config = {
    apiKey: process.env.REACT_API_APIKEY,
    authDomain: "my-final-project-6e47f.firebaseapp.com",
    databaseURL: "https://my-final-project-6e47f.firebaseio.com",
    projectId: "my-final-project-6e47f",
    storageBucket: "my-final-project-6e47f.appspot.com",
    messagingSenderId: "370199198265"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }