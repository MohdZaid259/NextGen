import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import conf from '../conf/conf.js'

const firebaseConfig = conf
console.log(firebaseConfig)

const FirebaseApp = initializeApp(firebaseConfig); // initializing app
const database = getDatabase(FirebaseApp) // connecting with db

const FirebaseContext = createContext(null); // creating context

const FirebaseProvider = (props) => { 

  function putData(key,data){
    set(ref(database,key),data)
  }

  return (
    <FirebaseContext.Provider value={{putData}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export {FirebaseProvider,FirebaseContext}