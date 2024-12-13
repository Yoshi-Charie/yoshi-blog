<template>
  <div>
    <h1>指定日の日記</h1>
    <div v-if="diary">
      <h2>{{ diary.title }}</h2>
      <p>{{ diary.content }}</p>
      <p><strong>日付:</strong> {{ diary.date }}</p>
    </div>
    <p v-else>指定された日の日記は存在しません。</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const diary = ref(null);

onMounted(async () => {
  const date = route.params.date;
  try {
    const response = await useNuxtApp().$api.get(`/diaries/${date}`);
    diary.value = response.data;
  } catch (error) {
    console.error("Failed to fetch diary:", error);
  }
});
</script>
