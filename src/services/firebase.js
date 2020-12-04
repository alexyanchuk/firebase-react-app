import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7RLKQtSnrKjYxE0MAu-bF4T-tY9iyALA",
    authDomain: "fir-test-alex-6061b.firebaseapp.com",
    projectId: "fir-test-alex-6061b",
    storageBucket: "fir-test-alex-6061b.appspot.com",
    messagingSenderId: "347096906700",
    appId: "1:347096906700:web:6b1c9569abdacad0147b69"
};

// Initialize Firebase
firebase?.initializeApp(firebaseConfig);

export default firebase;
