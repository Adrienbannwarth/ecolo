import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax' //import dependency
import 'vuesax/dist/vuesax.css' // import css style

Vue.use(Vuesax) // implement Vuesax throughout the application

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
