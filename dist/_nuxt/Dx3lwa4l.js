import{_ as a,K as d,v as u,x as e,L as t,M as i,N as p,t as m}from"./CXUq6K0K.js";const f={data(){return{email:"",password:""}},methods:{async handleLogin(){try{await d(auth,this.email,this.password),this.$router.push("/dashboard")}catch(l){console.error("Error logging in: ",l.message)}}}};function w(l,r,g,v,o,n){return m(),u("div",null,[r[6]||(r[6]=e("h1",null,"ログイン",-1)),e("form",{onSubmit:r[2]||(r[2]=p((...s)=>n.handleLogin&&n.handleLogin(...s),["prevent"]))},[e("div",null,[r[3]||(r[3]=e("label",{for:"email"},"メールアドレス",-1)),t(e("input",{type:"email","onUpdate:modelValue":r[0]||(r[0]=s=>o.email=s),required:""},null,512),[[i,o.email]])]),e("div",null,[r[4]||(r[4]=e("label",{for:"password"},"パスワード",-1)),t(e("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=s=>o.password=s),required:""},null,512),[[i,o.password]])]),r[5]||(r[5]=e("div",null,[e("button",{type:"submit"},"ログイン")],-1))],32)])}const x=a(f,[["render",w]]);export{x as default};
