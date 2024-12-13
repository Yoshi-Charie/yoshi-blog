// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  // axiosインスタンスを作成
  const api = axios.create({
    baseURL: 'http://localhost:5000/api',  // バックエンドのAPIのURL
  });

  // axiosインスタンスをNuxtアプリに提供
  nuxtApp.provide('api', api);
});
