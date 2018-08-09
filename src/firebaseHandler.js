import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './firebaseConfig';

firebase.initializeApp(config);
const database = firebase.database();

export default database;