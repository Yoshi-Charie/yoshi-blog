// signup.vue
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
        const user = await this.$inject('signup')(this.email, this.password); // グローバルで提供された signup を呼び出し
        console.log('User signed up:', user);
        this.$router.push('/dashboard');  // サインアップ後にダッシュボードへ遷移
      } catch (error) {
        console.error('Sign up failed:', error.message);
        alert('Sign up failed: ' + error.message);
      }
    }
  }
};
</script>
