import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
//there used to be an import for the seedDatabase function and then seedDatabase(firebase), deleted to avoid re-seeding.



//we need a config here
const config = {
    apiKey: "AIzaSyBf0GXcZ3Lpc80hXlOp2wV-Pb-oECVvufc",
    authDomain: "netflix-clone-e0613.firebaseapp.com",
    //databaseURL: "https://netflix-clone-e0613-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-clone-e0613",
    storageBucket: "netflix-clone-e0613.appspot.com",
    messagingSenderId: "895121874196",
    appId: "1:895121874196:web:317eaf39d931b5746bb601"

};

const firebase = Firebase.initializeApp(config);

export { firebase };