<template>
	<view>
		<!-- 款项信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					款项信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								订金方式
							</view>
							<view class="notesR right">
								<button v-for="(item,index) in paymentInforData.typeArray " :key="index" @click="depositMethod(item.ID,index)" :class="{'on': paymentInforData.typeIndex==index?true:false}"  class="yybtn mini-btn" size="mini" type="default">{{item.NAME}}</button>
								</view>
							</view>
						<view class="cell row">
							<view class="notesL Required">
				{{paymentInforData.typeArray[paymentInforData.typeIndex].NAME==='定金'? "定金" : "订金"}}
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="paymentInforData.first_price" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								尾款
							</view>
							<view class="notesR right">
								{{last_price}}元
							</view>
						</view>
					</view>
					</view>
					<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL Required">
								
								应收总额
							</view>
							<view class="notesR right">
								 {{totalPrice}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								整车款
							</view>
							<view class="notesR right">
								 {{paymentInfor.carPrice}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								精品美容款
							</view>
							<view class="notesR right">
								 {{paymentInfor.fineBeautyPrice}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								产品款
							</view>
							<view class="notesR right">
								{{paymentInfor.companyProPrice}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								套餐款
							</view>
							<view class="notesR right">
								{{paymentInfor.SetmealPrice}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								代办款
							</view>
							<view class="notesR right">
								{{paymentInfor.agencyServicePrice}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								卡券款
							</view>
							<view class="notesR right">
								{{paymentInfor.CardvoucherPrice}}元
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>
<script>
	/*
	*
	 * paymentInfor 款项信息
	 * @description 款项信息组件
	 */
	export default {
		name: 'baseinfo',
		props: {
			carinfos: {
				type: Object
			}, //传后台--商品信息
			fineBeauty:{
				type: Array
			}, //精品美容--商品信息
			Exinsurance:  {
				type: Array
			},//延保--商品信息
			companyPro: {
				type: Array
			},//公司产品--商品信息
			Setmeal: {
				type: Array
			},//套餐产品--商品信息
			agencyService:{
				type: Array
			}, //代办业务--商品信息
			Cardvoucher: {
				type: Array
			},//卡券销售--商品信息
		},
		data() {
			return {
				paymentInfor:{//页面展示
					carPrice:0, //传后台--商品信息
					fineBeautyPrice:0, //精品美容--商品信息
					ExinsurancePrice:0,//延保--商品信息
					companyProPrice:0,//公司产品--商品信息
					SetmealPrice:0,//套餐产品--商品信息
					agencyServicePrice:0, //代办业务--商品信息
					CardvoucherPrice:0,//卡券销售--商品信息
				},
				paymentInforData:{
					type:null,//定金方式
					typeArray:[],//定金方式
					typeIndex:0,//定金方式
					first_price:0,//定金
					last_price:0,//尾款
				},
			}
		},
		computed: {
			//应收总额
			totalPrice() {
				let totalPrice = Number(this.paymentInfor.carPrice)+ Number(this.paymentInfor.fineBeautyPrice)+ Number(this.paymentInfor.ExinsurancePrice)+ Number(this.paymentInfor.companyProPrice)+ Number(this.paymentInfor.SetmealPrice)+ Number(this.paymentInfor.agencyServicePrice)+ Number(this.paymentInfor.CardvoucherPrice)
				return totalPrice
			},
			//尾款
			last_price() {
				let last_price = this.totalPrice -  this.paymentInforData.first_price
				return last_price
			},
			//非整车的每个小记
			subtotalPriceTotal(name) {
				return function(name) {
					let self_ = this,
						total = 0,
						obj = {};
					switch (name) {
						case 'fineBeauty':
							obj = self_.fineBeauty
							break;
						case 'Exinsurance':
							obj = self_.Exinsurance
							break;
						case 'companyPro':
							obj = self_.companyPro
							break;
						case 'Setmeal':
							obj = self_.Setmeal
							break;
						case 'agencyService':
							obj = self_.agencyService
							break;
						case 'Cardvoucher':
							obj = self_.Cardvoucher
							break;
					}
					obj.forEach(function(key) {
						total += Number(key.num) * Number(key.final_price);
					});
				
					return total
				}
			},
		},
		watch: {
		      paymentInforData: {
		       handler(newValue, oldValue) {
				  this.$emit('paymentInforValChange',this.paymentInforData)
		        },
		        deep: true
		      },
			carinfos: {
				handler(newValue, oldValue) {
					let that = this;
					that.paymentInfor.carPrice = that.carinfos.final_price
				},
				deep: true
			}, //传后台--商品信息
			fineBeauty:{
				handler(newValue, oldValue) {
					let that = this;
					console.log(that.subtotalPriceTotal('fineBeauty')+'-------------------')
					that.paymentInfor.fineBeautyPrice = that.subtotalPriceTotal('fineBeauty')
					
				},
				deep: true
			}, //精品美容--商品信息
			Exinsurance:  {
				handler(newValue, oldValue) {
					let that = this;
					that.paymentInfor.ExinsurancePrice = that.subtotalPriceTotal('Exinsurance')
				},
				deep: true
			},//延保--商品信息
			companyPro: {
				handler(newValue, oldValue) {
					let that = this;
					that.paymentInfor.companyProPrice = that.subtotalPriceTotal('companyPro')
				},
				deep: true
			},//公司产品--商品信息
			Setmeal: {
				handler(newValue, oldValue) {
					let that = this;
					that.paymentInfor.SetmealPrice = that.subtotalPriceTotal('Setmeal')
				},
				deep: true
			},//套餐产品--商品信息
			agencyService:{
				handler(newValue, oldValue) {
					let that = this;
					that.paymentInfor.agencyServicePrice = that.subtotalPriceTotal('agencyService')
				},
				deep: true
			}, //代办业务--商品信息
			Cardvoucher: {
				handler(newValue, oldValue) {
					let that = this;
					that.paymentInfor.CardvoucherPrice = that.subtotalPriceTotal('Cardvoucher')
				},
				deep: true
			},//卡券销售--商品信息
		},
		created() {
			this.paymentInforData = this.$store.state.saleOrderDates.paymentInforData
			this.getvalues()
		},
		methods: {
			getvalues(){//获取定金方式
			let self_ = this;
			// debugger
				let subscription_typeCodes = self_.$store.state.subscription_typeCodes;
				self_.paymentInforData.typeArray = subscription_typeCodes;
				subscription_typeCodes.forEach(function(val, index, arr){
					if(index==0){
						self_.paymentInforData.type = val.ID
					}
				});
			},
			//定金方式
			depositMethod(e,index){
					this.paymentInforData.typeIndex = index;//切换样式
					this.paymentInforData.type = e;
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>