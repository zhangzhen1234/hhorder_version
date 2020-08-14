import Vue from 'vue'
import App from './App'

import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url
Vue.config.productionTip = false

//引入公共组件
import BaseScroll from "@/components/base-scroll/base-scroll.vue";
Vue.component("BaseScroll", BaseScroll);

App.mpType = 'app'

const app = new Vue({
	...App,
	//挂载
	 store
})
app.$mount()
