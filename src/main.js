import Vue from 'vue'
import App from '@/ui/App.vue'
import store from '@/store'
import { Plugin } from '@backmarket/modal'
import VeeValidate from 'vee-validate'
import '@/ui/_commons'

Vue.config.productionTip = false
Vue.use(Plugin)
Vue.use(VeeValidate)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
