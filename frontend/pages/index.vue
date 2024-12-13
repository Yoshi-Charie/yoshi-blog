<template>
  <div>
    <h1>日記ブログ</h1>
    <p>{{ diaryMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diaryMessage: ''
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get('/diary');
      this.diaryMessage = response.data.message;
    } catch (error) {
      console.error('API request failed:', error);
    }
  }
};
</script>
