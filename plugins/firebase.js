// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDD2mfC0RXAn41I7sSthUa924R8xc35EGg',  // ウェブAPIキー
  authDomain: 'yoshi-blog-ae6d6.firebaseapp.com',    // 認証ドメイン
  projectId: 'yoshi-blog-ae6d6',                      // プロジェクトID
  storageBucket: 'yoshi-blog-ae6d6.appspot.com',      // ストレージバケット（Cloud Storage）
  messagingSenderId: '1003145565592',                 // 送信者ID（FCM）
  appId: 'YOUR_APP_ID',                               // FirebaseアプリID（実際のIDを入れる）
};

// Firebase 初期化
const app = initializeApp(firebaseConfig);

// Firebase Authentication インスタンスを取得
const auth = getAuth(app);

// サインアップ用のメソッドをエクスポート
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

// サインイン用のメソッドをエクスポート（必要なら追加）
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

export { auth, signup, signin };
