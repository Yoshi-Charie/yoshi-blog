// middleware/auth.js
import firebase from '~/firebase';

export default defineNuxtRouteMiddleware((to, from) => {
  const user = auth.currentUser;
  if (!user) {
    return navigateTo('/login');  // ユーザーがログインしていなければログインページへリダイレクト
  }
});
