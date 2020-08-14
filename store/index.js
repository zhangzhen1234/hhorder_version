import Vue from 'vue'
import Vuex from 'vuex'


import codes from './modules/codes.js'
import carinfo from './modules/carinfo.js' 
import parts from './modules/parts.js' 
import baseinfo from './modules/baseinfo.js' 
import customerInfo from './modules/customerInfo.js' 
import insuranceInfo from './modules/insuranceInfo.js' 
import paymentInfo from './modules/paymentInfo.js' 
import mortgage from './modules/mortgage.js' 
import deliveryInfo from './modules/deliveryInfo.js' 
import invoiceInfo from './modules/invoiceInfo.js' 

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		orgID:'nzIAAAAACTjM567U',//顾问人员组织ID,
		OrgName:'抚州一汽-大众',//顾问人员组织名称,
		adviser:'nzIAAAAAhdaA733t',//顾问人员ID,
		DeptID:'nzIAAAAACi7M567U',//顾问人员部门ID,
		DeptName:'信息技术中心',// 顾问人员部门名称,
		JOB_ID:'kUMrH4HWSRe1LZfwVc8s-XSuYS4_',// 顾问人员岗位ID,
		JOB_NAME:'项目经理',// 顾问人员岗位名称,
		B_NAME:'刘志青' ,//顾问人员名称
		shop:"Vehicle",//是否是整车
	},
	modules:{
		codes,
		baseinfo,
		carinfo,
		parts,
		customerInfo,
		insuranceInfo,
		paymentInfo,
		mortgage,
		deliveryInfo,
		invoiceInfo
	}
})

export default store
