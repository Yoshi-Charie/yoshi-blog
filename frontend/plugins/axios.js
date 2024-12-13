// plugins/axios.js
import axios from 'axios';

export default ({ $axios }, inject) => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/api',  // バックエンドのAPIのURL
  });

  // APIインスタンスを `$api` としてNuxtのコンテキストに注入
  inject('api', api);
};
