// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';
import { Button, Tree } from 'element-ui';
// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue)
Vue.use(Button)
Vue.use(Tree);
// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
  // Register App Component
  components: {
    app: App
  },
});