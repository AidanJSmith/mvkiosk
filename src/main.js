import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueResizeText from 'vue-resize-text';
import * as mdbvue from 'mdbvue'
import { rtdbPlugin  } from 'vuefire'
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";


for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
Vue.use(VueResizeText)
Vue.use(rtdbPlugin)

import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
