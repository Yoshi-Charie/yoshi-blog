// login.vue
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
        await this.$inject('signin')(this.email, this.password); // グローバルで提供された signin を呼び出し
        this.$router.push('/dashboard');  // ログイン成功後に /dashboard にリダイレクト
      } catch (error) {
        console.error("Error logging in: ", error.message);
        this.errorMessage = error.message; // エラーメッセージを表示
      }
    },
  },
};
</script>
