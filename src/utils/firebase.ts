import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useEffect, useState} from "react";

var firebaseConfig = {}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const signIn = (email: string, password: string) =>  firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const useUser = () => {
    const [user, setUser] = useState<firebase.User | null>();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(u => setUser(u));
    }, []);
    return user
}
