import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import conf from '../conf/conf.js'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const firebaseConfig = conf

const GProvider = new GoogleAuthProvider()
const FirebaseApp = initializeApp(firebaseConfig); // initializing app
const auth = getAuth(FirebaseApp) // auth instance
const database = getDatabase(FirebaseApp) // connecting with db

const FirebaseContext = createContext(null); // creating context

function signUp(email,password){
  createUserWithEmailAndPassword(auth,email,password)
}
function signUpGoogle(){
  signInWithPopup(auth,GProvider)
}
function logIn(email,password){
  signInWithEmailAndPassword(auth, email, password)
}
function signOutUser(){
  signOut(auth)
}
function putData(key,data){
  set(ref(database,key),data)
}

const FirebaseProvider = (props) => { 
  return (
    <FirebaseContext.Provider value={{putData,signUp,signUpGoogle,logIn,signOutUser}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export {FirebaseProvider,FirebaseContext}