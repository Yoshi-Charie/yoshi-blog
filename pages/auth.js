// middleware/auth.js
import { auth } from '@/firebase';

export default defineNuxtRouteMiddleware((to, from) => {
  const user = auth.currentUser;
  if (!user) {
    return navigateTo('/login');  // ユーザーがログインしていなければログインページへリダイレクト
  }
});
