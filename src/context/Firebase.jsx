import conf from '../conf/conf.js'
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, deleteDoc, query, where, serverTimestamp, updateDoc } from "firebase/firestore";

const firebaseConfig = conf
const FirebaseApp = initializeApp(firebaseConfig) // initializing app
const auth = getAuth(FirebaseApp) // auth instance
const db = getFirestore(FirebaseApp) // db connection
const GProvider = new GoogleAuthProvider()

const FirebaseContext = createContext(null);

// auth functions
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
function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
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
async function getFilteredProducts(filters) {
  let q = query(collection(db, "products"));
  if (filters.category) q = query(q, where("category", "==", filters.category));
  if (filters.priceMin) q = query(q, where("price", ">=", filters.priceMin));
  if (filters.priceMax) q = query(q, where("price", "<=", filters.priceMax));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
  if (!user.name || !user.email || !user.orders || !user.joined || !user.avatar) {
    throw new Error("Missing required fields!");
  }
  await addDoc(collection(db, "users"), user)
}
async function getAllUsers() {
  const querySnapshot = await getDocs(collection(db, "users"))
  const users = []
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() })
  })
  return users
}
async function getUserProfile(id) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

// order management
async function placeOrder(id, totalAmount, status = "Pending", imageUrl = "") {
  return await addDoc(collection(db, "orders"), {
    UserID: id,
    Timestamp: serverTimestamp(),
    TotalAmount: totalAmount,
    Status: status,
    ImageURL: imageUrl
  });
}
async function cancelOrder(id) {
  const orderRef = doc(db, "orders", id);
  await updateDoc(orderRef, { Status: "Cancelled" });
}

const authFunctions = { signUp, signUpGoogle, logIn, signOutUser, resetPassword };
const productFunctions = { putProduct, getAllProducts, getProductById, getFilteredProducts, editProduct, deleteProduct };
const userFunctions = { putUser, getAllUsers, getUserProfile };
const orderFunctions = { placeOrder, cancelOrder };

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

export { FirebaseProvider,FirebaseContext }