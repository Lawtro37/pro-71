import firebase from "firebase";
//require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyD-Jmpk6OksnrejwBpAu1qYehMDd_naNSU",
    authDomain: "e-ride-app-8126b.firebaseapp.com",
    projectId: "e-ride-app-8126b",
    storageBucket: "e-ride-app-8126b.appspot.com",
    messagingSenderId: "1051659244771",
    appId: "1:1051659244771:web:de2c68bf6a7a1c26c921d6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
