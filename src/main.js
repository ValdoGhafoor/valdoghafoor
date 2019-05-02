import Vue from 'vue'
import App from '@/ui/App.vue'
import store from '@/store'
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(VeeValidate)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
