import Vue from 'vue'
import Vuex from 'vuex'


import codes from './modules/codes.js'
import carinfo from './modules/carinfo.js' 

Vue.use(Vuex)

const store = new Vuex.Store({
	
	modules:{
		codes,
		carinfo
	}
})

export default store
