import conf from '../conf/conf.js'
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, deleteDoc, query, where, updateDoc } from "firebase/firestore";

const firebaseConfig = conf
const FirebaseApp = initializeApp(firebaseConfig) // initializing app
const auth = getAuth(FirebaseApp) // auth instance
const db = getFirestore(FirebaseApp) // db connection
const GProvider = new GoogleAuthProvider()

const FirebaseContext = createContext(null);

// auth functions
async function signUp(email,password){
  return await createUserWithEmailAndPassword(auth,email,password)
}
async function signUpGoogle(){
  return await signInWithPopup(auth,GProvider)
}
async function logIn(email,password){
  return await signInWithEmailAndPassword(auth, email, password)
}
async function signOutUser(){
  return await signOut(auth)
}
async function resetPassword(email) {
  return await sendPasswordResetEmail(auth, email);
}

// product management
async function putProduct(product) {
  if (!product.name || !product.category || !product.price || !product.stock || !product.image) {
    throw new Error("Missing required fields!");
  }
  await addDoc(collection(db, "products"), product)
}
async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"))
  const products = []
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() })
  })
  return products
}
async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}
async function editProduct(id,updatedData) {
  const productRef = doc(db, "products", id);
  await updateDoc(productRef, updatedData);
}
async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
}

// user management
async function putUser(user) {
  if (!user.displayName || !user.email || !user.photoURL) {
    throw new Error("Missing required fields!");
  }

  const q = query(collection(db, "users"), where("email", "==", user.email));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) return
  
  const d = new Date();
  const auth = user.email=='razvizaid259@gmail.com' ? 'Admin' : 'Customer'
  const userToAdd = { ...user, orders: 0, auth: auth, joined: `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`}
  await addDoc(collection(db, "users"), userToAdd)
}
async function getAllUsers() {
  const querySnapshot = await getDocs(collection(db, "users"))
  const users = []
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() })
  })
  return users
}
async function getCurrentUser() {
  const email = auth?.currentUser?.email;
  if (!email) return

  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q)
  const doc = querySnapshot.docs[0]
  return {...doc.data()} || null
}

// order management
async function placeOrder(orderData) {
  return await addDoc(collection(db, "orders"), {
    orderId:orderData.orderId,
    UserID: orderData.userId,
    Timestamp: orderData.timestamp,
    TotalAmount: orderData.totalAmount,
    Status: orderData.status
  });
}
async function getAllOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"))
  const orders = []
  querySnapshot.forEach((doc) => {
    orders.push({ ...doc.data() })
  })
  return orders
}
async function cancelOrder(id) {
  const orderRef = doc(db, "orders", id);
  await updateDoc(orderRef, { Status: "Cancelled" });
}

const authFunctions = { signUp, signUpGoogle, logIn, signOutUser, resetPassword };
const productFunctions = { putProduct, getAllProducts, getProductById, editProduct, deleteProduct };
const userFunctions = { putUser, getAllUsers, getCurrentUser };
const orderFunctions = { placeOrder, getAllOrders, cancelOrder };

const FirebaseProvider = ({children}) => { 
  const value = {
    auth,
    db,
    ...authFunctions,
    ...productFunctions,
    ...userFunctions,
    ...orderFunctions,
  }
  
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseProvider, FirebaseContext }