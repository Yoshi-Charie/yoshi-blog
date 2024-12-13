// middleware/auth.js
import firebase from "C:\Users\ngfgm\Git\yoshi-blog\plugins\firebase.js";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = auth.currentUser;
  if (!user) {
    return navigateTo('/login');  // ユーザーがログインしていなければログインページへリダイレクト
  }
});
