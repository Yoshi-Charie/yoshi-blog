<template>
  <div>
    <h1>日記投稿</h1>
    <form @submit.prevent="submitDiary">
      <input v-model="title" type="text" placeholder="タイトル" required />
      <textarea v-model="content" placeholder="日記内容" required></textarea>
      <button type="submit">投稿</button>
    </form>

    <div v-if="diary">
      <h2>{{ diary.title }}</h2>
      <p>{{ diary.content }}</p>
      <p><strong>日付:</strong> {{ diary.date }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');
const diary = ref(null);

const submitDiary = async () => {
  try {
    const response = await useNuxtApp().$api.post('/diaries', {
      title: title.value,
      content: content.value,
    });
    diary.value = response.data;
  } catch (error) {
    console.error("Failed to submit diary:", error);
  }
};
</script>
