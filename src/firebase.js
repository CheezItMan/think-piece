  import firebase from 'firebase/app'; // if you import 'firebase' you'll get a warning (everything)
  import 'firebase/firestore';
  import 'firebase/auth';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAGt_l2yCkS27HZfQxFYlRbj7BQTHLGzlw",
    authDomain: "thinkpiece-c951b.firebaseapp.com",
    databaseURL: "https://thinkpiece-c951b.firebaseio.com",
    projectId: "thinkpiece-c951b",
    storageBucket: "thinkpiece-c951b.appspot.com",
    messagingSenderId: "359476508570",
  };
  firebase.initializeApp(config);

  window.firebase = firebase; // not best practice, used to explore Firebase


  export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signout = () => auth.signOut();
  // This has been made to default to true and will be removed in a future date FYI
  // firestore.settings({ timestampsInSnapshots: true})

  export default firebase;