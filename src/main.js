import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faSpinner, faAlignLeft, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner, faAlignLeft, faBars, faTimes)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
