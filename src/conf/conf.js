const conf = {
  apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
};

export const cloudinaryConf = {
  cloudinaryUrl: String(import.meta.env.VITE_CLOUDINARY_URL)
}

export const razorpayConf = {
  razorpayApiKey: String(import.meta.env.VITE_RAZORPAY_API_KEY)
}

export default conf