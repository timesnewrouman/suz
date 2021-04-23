import Vue from 'vue';
import Vuetify from 'vuetify';
// import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
// import colors from 'vuetify/lib/util/colors'
import App from './App.vue';
// import 'vuetify/src/styles/main.sass';

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify({
    theme: {
      green: '#4CAF50',
      // themes: {
      //   light: {
      //     red: '#F44336',
      //     orange: '#FF9800',
      //     green: '#4CAF50',
      //   },
      // },
    },
  }),
//  el: '#app',
  render: h => h(App),
}).$mount('#app')
