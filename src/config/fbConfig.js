import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAPlMXvHEJen1IjbC0iPtOgDnzUv01mtg",
    authDomain: "keith-planner.firebaseapp.com",
    databaseURL: "https://keith-planner.firebaseio.com",
    projectId: "keith-planner",
    storageBucket: "keith-planner.appspot.com",
    messagingSenderId: "291901987533"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase