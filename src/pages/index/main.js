import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1e90ff',
    navigationBarTitleText: 'demo',
    navigationBarTextStyle: 'white'
  }
}
