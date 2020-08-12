<template>
	<view>
		<!-- 保险信息 -->
		<view class="Insurance-infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					保险信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goInsurance" class="blueline-icons" src="../../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			<view v-show="hasinsurance">
				<view class="Insurance-infor-title">	
							{{insurance.name}}
				</view>
				<view class="Insurance-infor-list">
					<view class="cell row">
						<view class="col-2">
							交强险
						</view>
						<view class="cellR col-2 right">
							<input type="number"v-model="insurance.jqx_price" @blur="mblur"/>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							车船税
						</view>
						<view class="cellR col-2 right">
							<input type="number" v-model="insurance.ccs_price" @blur="mblur"/>
							<!-- 0 <text>元</text> -->
						</view>
					</view>
					
					<view class="cell row">
						<view class="col-2">
							商业险
						</view>
						<view class="cellR col-2 right">
							<input type="number" v-model="insurance.syx_price"  @blur="mblur"/>
							<!-- 0  <text>元</text> -->
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							其他
						</view>
						<view class="cellR col-2 right">
							<input type="number" v-model="insurance.other_price"  @blur="mblur"/>
						<!-- 0  <text>元</text> -->
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							保险类型
						</view>
						<view class="cellR col-2 right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<picker @change="bindPickChangeType" :value="insurance.TypeIndex" :range="insurance.TypeArray">
								<view class="uni-input">{{insurance.TypeArray[insurance.TypeIndex]}}</view>
							</picker>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							保险优惠
							<view class="tax-rate">
								税率以官方收费为准
							</view>
							<view class="view-policy" @click="checkpolicy">
								查看政策
							</view>
							<uni-popup class="popbox" ref="insurancePolicyPopup" type="center" :animation="true">
								<view class="insurancePolicyPopup-content">
									0
								</view>
							</uni-popup>
						</view>
						<view class="cellR col-2 right">
							<input type="number" v-model="insurance.discount_price"  @blur="mblur"/>
							<!-- 0 <text>元</text> -->
						</view>
					</view>
					
					<view class="cell row">
						<view class="col-2">
							备注
						</view>
						<view class="cellR col-2 right">
							<textarea value="" placeholder="请填写" auto-height/>
						</view>
					</view>
					<view class="row">
						<view class="subtotal right">
							<text class="subtotaltxt">小计</text>
							<text class="subtotalicon">¥</text>
							<text class="subtotalmoney">{{subtotal}}</text>
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
	 * insuranceInfor 保险信息
	 * @description 保险信息组件
	 * hasinsurance = [true|false] 是否显示
	 * @example <insuranceInfor @insuranceInforValChange="getinsuranceInforData"  ref="insuranceInforItem"></insuranceInfor>
	 */
	export default {
		name: 'insuranceInfor',
		data() {
			return {
				hasinsurance:false,//保险信息是否已经选好
				insurance:{
					org_id:'',//保险机构FID
					org_src:'',//机构来源编号
					name:'',//保险机构名称
					jqx_price:0,//交强险
					ccs_price:0,//车船险
					syx_price:0,//商业险
					discount_price:0,//保险优惠
					other_price:0,//其他金额
					TypeArray:[],//保险类型
					TypeArrayID:[],//保险类型
					TypeIndex:0,
					kind:null,//	是	int	保险类型
					info:'',//备注
					
				},//保险信息
			}
		},
		computed: {
			//计算税额
			subtotal(){
				let subtotal = Number(this.insurance.jqx_price) + Number(this.insurance.ccs_price) + Number(this.insurance.syx_price) + Number(this.insurance.discount_price) + Number(this.insurance.other_price) 
				// console.log(subtotal)
				 return subtotal
			},
		},
		created() {
			let that = this;
			
			that.insurance = that.$store.state.saleOrderDates.insurance//重新拿保险数据
			that.getInsuranceKind();//获取保险类型
			if(that.insurance.org_id!==""){//如果保险机构FID不为空，有数据
				that.hasinsurance = true
			}
		},
		watch:{
			//保险具体信息改变
			insurance: {
			 handler(newValue, oldValue) {
				 // console.log('保险信息变化了', newValue, oldValue)
				this.$emit('insuranceInforValChange',this.insurance)
			  },
			  deep: true
			}
		},
		methods: {
			// //失去焦点
			mblur(){
				console.log(event.detail)
				// event.detail = {value: value}
			},
			// 保险类型的获取
			getInsuranceKind(){
				// debugger
				let that = this;
				let insurance_kindCodes = that.$store.state.insurance_kindCodes;
				
				if(that.insurance.TypeArray.length>0){
					return 
				}
				that.insurance.TypeArray=[];//每次清空
				that.insurance.TypeArrayID=[];//每次清空
				for(var i = 0;i<insurance_kindCodes.length;i++){
					that.insurance.TypeArray.push(insurance_kindCodes[i].NAME)
					that.insurance.TypeArrayID.push(insurance_kindCodes[i].ID)
				}
				that.insurance.kind	= that.insurance.TypeArrayID[0]
				//console.log(that.$store.state.insurance.TypeArray)
			},
			
			//去选择保险
			goInsurance(){
				uni.navigateTo({
				    url: '../Insuranceinstitutions/Insuranceinstitutions'
				});
			},
			//查看政策
			checkpolicy(){
				this.$refs.insurancePolicyPopup.open()
			},
			//保险类型
			bindPickChangeType: function(e) {
			    this.insurance.TypeIndex = e.target.value
				this.insurance.kind = this.insurance.TypeArrayID[e.target.value]
			},
		}
	}
	</script>
<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>