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
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p> <!-- エラーメッセージ表示 -->
  </div>
</template>

<script>
import { auth, signin } from '~/plugins/firebase'; // auth と signin をインポート

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // エラーメッセージを保持するための変数
    };
  },
  methods: {
    async handleLogin() {
      try {
        await signin(this.email, this.password); // signin メソッドを呼び出す
        this.$router.push('/dashboard');  // ログイン成功後に /dashboard にリダイレクト
      } catch (error) {
        console.error("Error logging in: ", error.message);
        this.errorMessage = error.message; // エラーメッセージを表示
      }
    },
  },
};
</script>
