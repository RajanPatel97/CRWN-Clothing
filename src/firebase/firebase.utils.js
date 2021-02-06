import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC0gLrITQw1W4-kz2B1Ygp0g_xKeW5Xujg",
    authDomain: "crwn-db-8bb97.firebaseapp.com",
    projectId: "crwn-db-8bb97",
    storageBucket: "crwn-db-8bb97.appspot.com",
    messagingSenderId: "172647503405",
    appId: "1:172647503405:web:74c89517c7de3c8a0a4aa4"
      
};

export const createUserProfileDocument = async(userAuth, additonalData) => {
    if(!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;