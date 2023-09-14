// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut as firebaseSignOut,
}
    from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9xvEppPOWCLbUfYt7WKCXSy9-k-GEd0g",
    authDomain: "razer-clone-642c7.firebaseapp.com",
    projectId: "razer-clone-642c7",
    storageBucket: "razer-clone-642c7.appspot.com",
    messagingSenderId: "628206759295",
    appId: "1:628206759295:web:167e8a1097cd734dcebe4a",
    measurementId: "G-9L27FFNWFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return true
    } catch (error) {
        return { error: error.message }
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        return true
    } catch (error) {
        return { error: error.message }
    }
};

export const signOut = async () => {
    try {
        await firebaseSignOut(auth)
        return true
    } catch (error) {
        return false
    }
};