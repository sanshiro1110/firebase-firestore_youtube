import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase';

//設定情報
const firebaseConfig = {
  apiKey: "AIzaSyD9X3RCGGQ01crNUqj4JMYhQr3O0Yp9pHo",
  authDomain: "test1-fbb48.firebaseapp.com",
  databaseURL: "https://test1-fbb48.firebaseio.com",
  projectId: "test1-fbb48",
  storageBucket: "test1-fbb48.appspot.com",
  messagingSenderId: "992353020834",
  appId: "1:992353020834:web:81e8a41e7dfd0a698060fb",
  measurementId: "G-MWV779RK3M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
