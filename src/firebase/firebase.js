import * as firebase from 'firebase'
require("firebase/firestore")


const firebaseConfig = {
    apiKey: BOILERPLATE,
    authDomain: BOILERPLATE,
    databaseURL: BOILERPLATE,
    projectId: BOILERPLATE,
    storageBucket: BOILERPLATE,
    messagingSenderId: BOILERPLATE,
    appId: BOILERPLATE,
    measurementId: BOILERPLATE
  }

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
let firestore = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, firestore, googleAuthProvider,  database as default }