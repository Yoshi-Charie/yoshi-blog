// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase 設定
const firebaseConfig = {
  apiKey: 'AIzaSyDD2mfC0RXAn41I7sSthUa924R8xc35EGg',
  authDomain: 'yoshi-blog-ae6d6.firebaseapp.com',
  projectId: 'yoshi-blog-ae6d6',
  storageBucket: 'yoshi-blog-ae6d6.appspot.com',
  messagingSenderId: '1003145565592',
  appId: 'YOUR_APP_ID',  // 実際の appId を使用
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// サインイン用のメソッド
const signin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Sign in error:', error.message);
    throw error;
  }
};

// サインアップ用のメソッド
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Sign up error:', error.message);
    throw error;
  }
};

export { auth, signin, signup };
