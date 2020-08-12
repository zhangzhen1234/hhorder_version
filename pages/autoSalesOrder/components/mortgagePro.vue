<template>
	<view>
		<!--  -->
		<view v-if="mortgageProData.hasmortgagePro" class="mortgage-pro marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					按揭项目
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content marB20">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								额度总计
							</view>
							<view class="notesR right">
								¥0
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell split-title">
							贷款信息
						</view>
						<view class="cell row">
							<view class="notesL">
								按揭类型
							</view>
							<view class="notesR right">
								<button v-for="(item,index) in mortgageProData.mortgage_kind " :key="index" @click="mortgageType(item.ID,index)"
								 :class="{'on': mortgageProData.mortgage_kindIndex==index?true:false}" class="yybtn mini-btn" size="mini" type="default">{{item.NAME}}</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								按揭机构
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="PickerChangeMortgageInstitution" :value="mortgageProData.mechanismIndex" :range="mortgageProData.mechanismArray">
									<view class="uni-input">{{mortgageProData.mechanismArray[mortgageProData.mechanismIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								机构来源
							</view>
							<view class="notesR right">
								<button v-for="(item,index) in mortgageProData.source " :key="index" @click="mortgagesource(item.ID,index)"
								 :class="{'on': mortgageProData.sourceIndex==index?true:false}" class="yybtn mini-btn" size="mini" type="default">{{item.NAME}}</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								还款方式
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="pickerChangeRepayment" :value="mortgageProData.RepaymentTypeIndex" :range="mortgageProData.RepaymentType">
									<view class="uni-input">{{mortgageProData.RepaymentType[mortgageProData.RepaymentTypeIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								首付比例
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">%</text>
								<input class="uni-input" v-model="mortgageProDatas.first_per" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								贷款额度
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">元</text>
								<input class="uni-input" v-model="mortgageProDatas.quota" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								贷款期限
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="pickerMortgageLimit" :value="mortgageProData.Mortgage_LimitIndex" :range="mortgageProData.Mortgage_Limit">
									<view class="uni-input">{{mortgageProData.Mortgage_Limit[mortgageProData.Mortgage_LimitIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								按揭内容
							</view>
							<view class="notesR right">
								<text v-for="(item,index) in  mortgageProData.multiple_txt" :key="i">
									{{item+" "}}
								</text>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								资质要求
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="pickerChangeQualify" :value="mortgageProData.qua_Index" :range="mortgageProData.qua_Array">
									<view class="uni-input">{{mortgageProData.qua_Array[mortgageProData.qua_Index]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
								<view class="notesL Required">
									备注说明
								</view>
								<view class="notesR right">
									<textarea v-model="mortgageProDatas.info" placeholder="请输入" />
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
	 * mortgagePro 按揭项目
	 * @description 按揭项目组件
	 * @nodata = [true|false] 是否显示
	 * @example 	<mortgagePro  @mortgageProValChange="getmortgageProData"   :hasmortgagePro="baseinfoDatas.paymentMethods==='mortgage'" ref="mortgageProItem"></mortgagePro>
	 */
	import filter from '../../../common/filter.js' //filter
	export default {
		name: 'mortgagePro',
		props: {
			baseinfoData: {//是否是按揭
				type: Object
			},
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
				mortgageProData:{
					hasmortgagePro:false,
					totalline:0,// 额度总计
					mortgage_kind:[],//按揭类型
					mortgage_kindIndex:0,//按揭类型
					source:[],// 机构来源
					sourceIndex:0,// 机构来源
					Mortgage_Limit:[],//按揭期数
					Mortgage_LimitID:[],//按揭期数
					Mortgage_LimitIndex:0,//按揭期数
					qua_Array:[],//资质要求
					qua_ArrayID:[],//资质要求
					qua_Index:0,// 资质要求
					mechanismArray:[],// 按揭机构[保险公司]
					mechanismArrayID:[],// 按揭机构[保险公司]
					mechanismIndex:0,
					RepaymentType:[],//还款方式
					RepaymentTypeID:[],//还款方式
					RepaymentTypeIndex:0,//还款方式
					multiple_txt:[],//	是	string	按揭内容；将多个内容ID，用逗号进行连接，例如：1,2,3,4
				},
				mortgageProDatas:{
					org_id:"",//	是	string	按揭机构ID
					repayment_type:null,//	是	int	还款方式ID
					price:0,//	是	int	按揭金额，单位分
					deadline:null,//	是	int	贷款期限ID
					multiple_txt:"",//	是	string	按揭内容；将多个内容ID，用逗号进行连接，例如：1,2,3,4
					first_per:0,//	是	int	首付比例%，23.54%，填写23.56
					quota:0,//	是	int	贷款额度，单位分
					org_src:"",//	是	string	按揭机构来源ID
					qua_id:null,//	是	int	资质ID
					info:"",//	是	string	备注
				},
			}
		},
		watch: {
		      mortgageProData: {
		       handler(newValue, oldValue) {
				  this.$emit('mortgageProValChange',this.mortgageProData)
		        },
		        deep: true
		      },
			  mortgageProDatas: {
			   handler(newValue, oldValue) {
			  		this.$emit('mortgageProsValChange',this.mortgageProDatas)
			    },
			    deep: true
			  },
			  baseinfoData: {
			   handler(newValue, oldValue) {
				   if(this.baseinfoData.pay_type[this.baseinfoData.pay_typeIndex].NAME=='按揭消费'){
					   this.mortgageProData.hasmortgagePro = true
				   }else{
					   this.mortgageProData.hasmortgagePro = false
				   }
			    },
			    deep: true
			  },
			  carinfos: {
			  	handler(newValue, oldValue) {
			  		let that = this;
					// debugger
					// this.$nextTick
					that.$nextTick(() => {
					    console.log(that.carinfos)
						if(that.carinfos.good_name!==""){
							that.mortgageProData.multiple_txt = [];
							that.mortgageProDatas.multiple_txt = "";
							that.mortgageProData.multiple_txt.push(that.carinfos.good_name) 
							that.mortgageProDatas.multiple_txt = that.carinfos.good_id+""
						}
					  })
			  	},
			  	deep: true
			  }, //传后台--商品信息
			  fineBeauty:{
			  	handler(newValue, oldValue) {
			  		let that = this;
					that.$nextTick(() => {
						that.getmultipletxt(that.fineBeauty)
					})
			  	},
			  	deep: true
			  }, //精品美容--商品信息
			  Exinsurance:  {
			  	handler(newValue, oldValue) {
			  		let that = this;
					that.$nextTick(() => {
			  		that.getmultipletxt(that.Exinsurance)
					})
			  	},
			  	deep: true
			  },//延保--商品信息
			  companyPro: {
			  	handler(newValue, oldValue) {
			  		let that = this;
					that.$nextTick(() => {
			  		that.getmultipletxt(that.companyPro)
				})
			  	},
			  	deep: true
			  },//公司产品--商品信息
			  Setmeal: {
			  	handler(newValue, oldValue) {
			  		let that = this;
					that.$nextTick(() => {
			  		 that.getmultipletxt(that.Setmeal)
					})
			  	},
			  	deep: true
			  },//套餐产品--商品信息
			  agencyService:{
			  	handler(newValue, oldValue) {
			  		let that = this;
					that.$nextTick(() => {
			  		that.getmultipletxt(that.agencyService)
					})
			  	},
			  	deep: true
			  }, //代办业务--商品信息
			  Cardvoucher: {
			  	handler(newValue, oldValue) {
			  		let that = this;
					that.$nextTick(() => {
			  		that.getmultipletxt(that.Cardvoucher)
					})
			  	},
			  	deep: true
			  },//卡券销售--商品信息
		},
		created() {
			this.mortgageProData = this.$store.state.saleOrder.mortgageProData
			this.mortgageProDatas = this.$store.state.saleOrderDates.mortgageProDatas
			if(this.$store.state.mechanismCodes.length==0){//按揭机构
				this.getvalues()
				this.getmechanism()
			}
			
		},
		methods: {
			getmultipletxt(obj){
				let that = this;
				obj.forEach(x=>{
					if(x.good_id!==null){
						that.mortgageProData.multiple_txt.push(x.good_name)
						that.mortgageProDatas.multiple_txt += x.good_id
					}
				})
			},
			async getmechanism(){//获取机构
			let self_ = this;
				await self_.$api.HHPlatForm_P_GetMortgageCompany().then(res => {
					// 获得数据 
					self_.$store.state.mechanismCodes = res
					
					res.forEach(function(val, index, arr){
						let name = val.FName;
						if(name.length>14){
							name = name.substring(0,15)+"..."
						}
						// console.log(name)
						self_.mortgageProData.mechanismArray.push(name);
						self_.mortgageProData.mechanismArrayID.push(val.FID);
					});
					self_.mortgageProDatas.org_id = self_.mortgageProData.mechanismArrayID[0]
				 }).catch(res => {
					 console.log(res)
				 　　// 失败进行的操作
				 })
			},
			getvalues(){//获取
			// debugger
				let self_ = this;
			//按揭类型
				let mortgage_kindCodes = self_.$store.state.mortgage_kindCodes;
				self_.mortgageProData.mortgage_kind = mortgage_kindCodes;
				mortgage_kindCodes.forEach(function(val, index, arr){
					if(index==0){
						self_.mortgageProDatas.org_id = val.ID
					}
				});
			//按揭机构来源
				let org_fromCodes = self_.$store.state.org_fromCodes;
				self_.mortgageProData.source = org_fromCodes;
				org_fromCodes.forEach(function(val, index, arr){
					if(index==0){
						self_.mortgageProDatas.org_src = val.ID
					}
				});
			//按揭期限
				let Mortgage_LimitCodes = self_.$store.state.Mortgage_LimitCodes;
				Mortgage_LimitCodes.forEach(function(val, index, arr){
					self_.mortgageProData.Mortgage_Limit.push(val.NAME);
					self_.mortgageProData.Mortgage_LimitID.push(val.ID);
				});
				self_.mortgageProDatas.deadline = self_.mortgageProData.Mortgage_LimitID[0]
			//按揭资质
				let Qualification_KindCodes = self_.$store.state.Qualification_KindCodes;
				Qualification_KindCodes.forEach(function(val, index, arr){
					self_.mortgageProData.qua_Array.push(val.NAME);
					self_.mortgageProData.qua_ArrayID.push(val.ID);
				});
				self_.mortgageProDatas.qua_id = self_.mortgageProData.qua_ArrayID[0]
			//还款方式
				let payback_kindCodes = self_.$store.state.payback_kindCodes;
				payback_kindCodes.forEach(function(val, index, arr){
					self_.mortgageProData.RepaymentType.push(val.NAME);
					self_.mortgageProData.RepaymentTypeID.push(val.ID);
				});
				self_.mortgageProDatas.repayment_type = self_.mortgageProData.RepaymentTypeID[0]
				
			},
			//按揭类型
			mortgageType(e,index){
					this.mortgageProData.mortgage_kindIndex = index;//切换样式
					this.mortgageProDatas.org_id = e;
			},
			//机构来源
			mortgagesource(e,index){
					this.mortgageProData.sourceIndex = index;//切换样式
					this.mortgageProDatas.org_src = e;
			},
			//按揭结构
			PickerChangeMortgageInstitution: function(e) {
				this.mortgageProData.mechanismIndex = e.target.value
				this.mortgageProDatas.org_id = this.mortgageProData.mechanismArrayID[e.target.value]
			},
			pickerMortgageLimit: function(e) {
				this.mortgageProData.Mortgage_LimitIndex = e.target.value
				this.mortgageProDatas.deadline = this.mortgageProData.Mortgage_LimitID[e.target.value]
			},
			//资质要求
			pickerChangeQualify: function(e) {
			    this.mortgageProData.qua_Index = e.target.value
				this.mortgageProDatas.qua_id = this.mortgageProData.qua_ArrayID[e.target.value]
			},
			//还款方式
			pickerChangeRepayment: function(e) {
			    this.mortgageProData.RepaymentTypeIndex = e.target.value
				this.mortgageProDatas.repayment_type = this.mortgageProData.RepaymentTypeID[e.target.value]
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>
