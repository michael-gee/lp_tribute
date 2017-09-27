import Vue from 'vue'
import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'

import App from './App'
  import router from './router'

Vue.use(Vuetify);
Vue.use(VueResource);

Vue.http.options.root = 'https://linkin-park-tribute.firebaseio.com/';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
