import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAYO75v2KuchIq73kgSpv7PzFu69AKmkcE",
  authDomain: "todoist-clone-88c54.firebaseapp.com",
  databaseURL: "https://todoist-clone-88c54.firebaseio.com",
  projectId: "todoist-clone-88c54",
  storageBucket: "todoist-clone-88c54.appspot.com",
  messagingSenderId: "264514965952",
  appId: "1:264514965952:web:1e00d71c5404d6e0df7825"
});

export { firebaseConfig as firebase };