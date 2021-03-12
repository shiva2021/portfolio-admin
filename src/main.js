import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import jQuery from 'jquery'
import '@mdi/font/css/materialdesignicons.css'
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);

Vue.use(Buefy)
require('@/scss/_main.scss');

window.$ = jQuery;

Vue.filter("AWS", (string) => {
  return `https://barter-vue-app.s3.ap-south-1.amazonaws.com/${string}`;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
