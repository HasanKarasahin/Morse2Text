import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import com_form from './components/com_form.vue'

import VueSocketIO from 'vue-socket.io'

Vue.component('com_form', com_form)

Vue.use(BootstrapVue)

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
