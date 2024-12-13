<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'; // firebase設定ファイルをインポート

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async signup() {
      try {
        // Firebase のサインアップメソッド
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        console.log('User signed up:', userCredential.user);
        // サインアップ成功後に別ページにリダイレクト（例: ダッシュボードページ）
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Error during sign up:', error.message);
        // エラーメッセージを表示
        alert('Sign up failed: ' + error.message);
      }
    }
  }
};
</script>
