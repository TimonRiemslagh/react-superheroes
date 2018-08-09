import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDrbpf8Bu8DdFVD41nWsIfZsPqSsm8z1K4",
    authDomain: "superheroes-e58f3.firebaseapp.com",
    databaseURL: "https://superheroes-e58f3.firebaseio.com",
    projectId: "superheroes-e58f3",
    storageBucket: "superheroes-e58f3.appspot.com",
    messagingSenderId: "70761313938"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;