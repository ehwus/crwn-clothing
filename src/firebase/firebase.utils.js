import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDt8lBDgKd7uN2gZgCKYohnPa7bCpr4YLM",
  authDomain: "aws-crwn-db.firebaseapp.com",
  projectId: "aws-crwn-db",
  storageBucket: "aws-crwn-db.appspot.com",
  messagingSenderId: "108493492399",
  appId: "1:108493492399:web:bbb7a61d26f844a9ff045a",
  measurementId: "G-5F49VQT7M6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      console.log(displayName);
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log("Error creating user: ", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
