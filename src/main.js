import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'
import FastClick from 'fastclick'
import './common/style/base.css'

import {
  Popup,
  Overlay,
  Loading,
  Dialog,
  Form,
  Field,
  SwipeCell,
  Icon,
  Checkbox,
  CheckboxGroup,
  Button,
  PullRefresh,
  List,
  Tab,
  Tabs,
  Toast,
  DatetimePicker,
  Image as VanImage,
  Lazyload,
  Skeleton
} from 'vant'

Vue
  .use(Popup)
  .use(Overlay)
  .use(Loading)
  .use(Dialog)
  .use(Toast)
  .use(Form)
  .use(Field)
  .use(SwipeCell)
  .use(Icon)
  .use(Button)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(DatetimePicker)
  .use(VanImage)
  .use(Lazyload)
  .use(Skeleton)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
