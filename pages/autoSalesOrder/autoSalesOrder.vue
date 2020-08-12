<template>
	<view class="submitorder-content custom-header">
		
		<!-- 基本信息 -->
		<baseinfo @baseinfoChange="getbaseinfo"></baseinfo>
		
		<carinfo v-if="order_kindNAME[indexs.order_kindIndex]!=='非整车'"/>
		<parts v-else/>
		<!-- 商城 -->
		<!-- <commodityInfor :order_kindIndex= "indexs.order_kindIndex"></commodityInfor> -->
		<view class="">
			<!-- {{order_kindCodes}} -->
		</view>
		
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import baseinfo from './components/baseinfo.vue' //基本信息
	import carinfo from './components/carinfo.vue' //基本信息
	import parts from './components/parts.vue' //基本信息
	
	import relatedOldOrder from './components/relatedOldOrder.vue' //关联原有订单
	import customerInfor from './components/customerInfor.vue'//客户信息
	import commodityInfor from './components/commodityInfor.vue'//商品信息
	import insuranceInfor from './components/insuranceInfor.vue'//保险信息
	import paymentInfor from './components/paymentInfor.vue'//款项信息
	import mortgagePro from './components/mortgagePro.vue'//按揭项目
	import deliveryInfor from './components/deliveryInfor.vue'//交付信息
	import invoiceInfor from './components/invoiceInfor.vue'//发票信息
	import test from './components/test.vue'//发票信息
	export default {
		components: {
			baseinfo,
			relatedOldOrder,
			customerInfor,
			commodityInfor,
			insuranceInfor,
			paymentInfor,
			mortgagePro,
			deliveryInfor,
			invoiceInfor,
			carinfo,
			parts,
			test
		},
		data() {
			return {
				indexs:{},//接收子组件
				param:{
					"basic": {},//销售订单基础数据
					"entry1": {},//客户补充信息
					"entry2": {},//车主信息
					"entry3": [],//车辆销售信息
					"entry4": [],//精品美容信息
					"entry5": {},//按揭信息
					"entry6": {},//保险信息
					"entry7": {},//延保产品信息
					"entry8": [],//公司产品信息
					"entry9": [],//套餐产品
					"entry10": [],//代办业务信息
					"entry11": [],//卡券销售信息
					"entry12": {},//交付信息
					"entry13": {},//款项信息
					"entry14": {},//支付信息
					"entry15": {},//发票信息
				}
			};
		},
		computed:{
			...mapGetters(['order_kindNAME'])
		},
		created() {
			// console.log(this.sell_kindID)
			//console.log(this.$store.getters.sell_kindID)
		},
		methods:{
			getbaseinfo(val){
				console.log(val)
				this.indexs = val
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f0f0f0;
}
</style>
