// middleware/auth.js
import firebase from '~/plugins/firebase';  // ~ はプロジェクトのルートディレクトリを指します


export default defineNuxtRouteMiddleware((to, from) => {
  const user = auth.currentUser;
  if (!user) {
    return navigateTo('/login');  // ユーザーがログインしていなければログインページへリダイレクト
  }
});
