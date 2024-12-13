<template>
  <div>
    <h1>新規登録</h1>
    <form @submit.prevent="handleSignUp">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input type="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">登録</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';  // ~ はプロジェクトのルートディレクトリを指します
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSignUp() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard');  // 認証後に /dashboard にリダイレクト
      } catch (error) {
        console.error("Error signing up: ", error.message);
      }
    },
  },
};
</script>
