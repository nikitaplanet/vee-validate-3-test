// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import {
//   ValidationProvider,
//   ValidationObserver
// } from 'vee-validate/dist/vee-validate.full';
import App from './App'
import {
  ValidationProvider,
  ValidationObserver,
  extend
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import tw from 'vee-validate/dist/locale/zh_TW';

import {
  withValidation
} from 'vee-validate';

// loop over all rules
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: tw.messages[rule] // add its message
  });
}
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
