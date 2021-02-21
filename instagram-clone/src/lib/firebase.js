import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyDmC3Dmys3sVldMBLTUDz5l7pwZQyH5itE",
    authDomain: "instagram-amy.firebaseapp.com",
    projectId: "instagram-amy",
    storageBucket: "instagram-amy.appspot.com",
    messagingSenderId: "775584445165",
    appId: "1:775584445165:web:7f8120f40713050f8912e4"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };