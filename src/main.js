import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA0bSAql-17YE7jNG6j3d7nJ498FDYorKA",
  authDomain: "vue-calendar-852c6.firebaseapp.com",
  databaseURL: "https://vue-calendar-852c6.firebaseio.com",
  projectId: "vue-calendar-852c6",
  storageBucket: "vue-calendar-852c6.appspot.com",
  messagingSenderId: "61597968067",
  appId: "1:61597968067:web:35b98d29e5d58cd46d6476"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
