<template>
    <div>
      <h1>ログイン</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">メールアドレス</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">パスワード</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '@/firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/dashboard');  // ログイン成功後に /dashboard にリダイレクト
        } catch (error) {
          console.error("Error logging in: ", error.message);
        }
      },
    },
  };
  </script>
  