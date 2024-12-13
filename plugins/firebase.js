// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDD2mfC0RXAn41I7sSthUa924R8xc35EGg',  // ウェブAPIキー
  authDomain: 'yoshi-blog-ae6d6.firebaseapp.com',    // 認証ドメイン
  projectId: 'yoshi-blog-ae6d6',                      // プロジェクトID
  storageBucket: 'yoshi-blog-ae6d6.appspot.com',      // ストレージバケット（Cloud Storage）
  messagingSenderId: '1003145565592',                 // 送信者ID（FCM）
  appId: 'YOUR_APP_ID',                               // FirebaseアプリID（まだ設定されていない場合は追加）
};

// Firebase初期化
const app = initializeApp(firebaseConfig);

// Firebase Authentication インスタンスを取得
const auth = getAuth(app);

export { auth };
