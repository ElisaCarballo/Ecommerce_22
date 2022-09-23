import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCKZ5Sp7JeIpI_KxlJ0hyxVoDqxi5y86Q",
  authDomain: "proyecto_ecommerce.firebaseapp.com",
  projectId: "proyecto_ecommerce",
  storageBucket: "proyecto_ecommerce.appspot.com",
  messagingSenderId: "928359458039",
  appId: "1:928359458039:web:0d4b0114688787e97b5ff2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
