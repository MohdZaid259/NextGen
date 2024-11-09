import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import conf from '../conf/conf.js'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";

const firebaseConfig = conf

const GProvider = new GoogleAuthProvider()
const FirebaseApp = initializeApp(firebaseConfig); // initializing app
const auth = getAuth(FirebaseApp) // auth instance
const database = getDatabase(FirebaseApp) // connecting with db

const FirebaseContext = createContext(null); // creating context

function signUp(email,password){
  return createUserWithEmailAndPassword(auth,email,password)
}
function signUpGoogle(){
  return signInWithPopup(auth,GProvider)
}
function logIn(email,password){
  return signInWithEmailAndPassword(auth, email, password)
}
function signOutUser(){
  return signOut(auth)
}
function updateUserProfile(profile) {
  return updateProfile(auth.currentUser, profile);
}
function putData(key,data){
  return set(ref(database,key),data)
}
function getData(key) {
  return get(ref(database, key));
}

const FirebaseProvider = (props) => { 
  return (
    <FirebaseContext.Provider value={{auth,putData,signUp,signUpGoogle,logIn,signOutUser,updateUserProfile,getData}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export {FirebaseProvider,FirebaseContext}