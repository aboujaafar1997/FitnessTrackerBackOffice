import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCNxjSr0pk8qHZX2-utUgXx-1W61V4C7Hk",
    authDomain: "fitness-7871f.firebaseapp.com",
    databaseURL: "https://fitness-7871f-default-rtdb.firebaseio.com",
    projectId: "fitness-7871f",
    storageBucket: "fitness-7871f.appspot.com",
    messagingSenderId: "560116022880",
    appId: "1:560116022880:web:25054bb5b8678eec468d05",
    measurementId: "G-4EYTW9NFRT"
};
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;