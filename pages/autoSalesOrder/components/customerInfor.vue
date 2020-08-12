<template>
	<view>
		<!-- 客户信息 -->
		<view class="customer-Infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="selectCustomers" class="blueline-icons" src="../../../static/images/icons/icon-Line-qiehuan.png"
					 mode="widthFix"></image>
				</view>
			</view>

			<view v-if="customerInfor.customer_id!==null">
				<view v-if="customerInfor.kindinfo=='个人'" class="content">
					<view class="cell-headportrait row">
						<view class="col-2 row">
							<image class="character" src="../../../static/images/icons/character.png" mode="widthFix"></image>
							<view class="name">
								{{customerInfor.customer_name}}
							</view>
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2 Required">
							<text class="Required-star">*</text>
							客户电话
						</view>
						<view class="infoR col-2 right">
							<input class="uni-input" :value="customerInfor.customer_phone" :disabled="false" />
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2 Required">
							<text class="Required-star">*</text>
							身份证号
						</view>
						<view class="infoR col-2 right">
							<input class="uni-input" :disabled="false" :value="customerInfor.customer_IDcard" />
						</view>
					</view>
					<view v-if="customerInfor.sourceArray.length !==0" class="info row">
						<view class="infoL col-2 Required">
							<text class="Required-star">*</text>
							客户来源
						</view>
						<view class="infoR col-2 right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<picker @change="sourceChange" :value="customerInfor.sourceindex" :range="customerInfor.sourceArray">
								<view class="uni-input">{{customerInfor.sourceArray[customerInfor.sourceindex]}}</view>
							</picker>
						</view>
					</view>
					<view v-if="customerInfor.relationshiparray.length !==0" class="info row">
						<view class="infoL col-2 Required">
							<text class="Required-star">*</text>
							与车主关系
						</view>
						<view class="infoR col-2 right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<picker @change="relationshipChange" :value="customerInfor.relationshipindex" :range="customerInfor.relationshiparray">
								<view class="uni-input">{{customerInfor.relationshiparray[customerInfor.relationshipindex]}}</view>
							</picker>
						</view>
					</view>
					<view class="ownerinfo">
						<view class="title">
							车主信息
						</view>
						<view class="list">
							<view class="cell row">
								<view class="cellL col-2">
									车主姓名
								</view>
								<view class="cellR col-2 right">
									<input class="uni-input" v-model="customerInfor.name" placeholder-style="color:#C3C3C3" placeholder="请输入" />
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									车主电话
								</view>
								<view class="cellR col-2 right">
									<input class="uni-input" v-model="customerInfor.phone" value="" placeholder-style="color:#C3C3C3" placeholder="请输入" />
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									证件类型
								</view>
								<view class="cellR col-2 right">
									身份证
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									证件号码
								</view>
								<view class="cellR col-2 right">
									<input class="uni-input" v-model="customerInfor.identity" value="" placeholder-style="color:#C3C3C3"
									 placeholder="请输入" />
								</view>
							</view>
						</view>
					</view>
				</view>

				<view v-else class="content">
						<view class="cell-headportrait row">
							<view class="row">
								<image class="character" src="../../../static/images/icons/character.png" mode="widthFix"></image>
								<view class="name">
									{{customerInfor.company_NAME}}
								</view>
							</view>
							
						</view>
						<view class="info row">
							<view class="infoL col-2">
								委托人姓名
							</view>
							<view class="infoR col-2 right">
								<input class="uni-input" v-model="customerInfor.entrust_name" placeholder-style="color:#C3C3C3" placeholder="请输入"/>
							</view>
						</view>
						<view class="info row">
							<view class="infoL col-2">
								委托人电话
							</view>
							<view class="infoR col-2 right">
								<input class="uni-input"  v-model="customerInfor.entrust_phone"  value="" placeholder-style="color:#C3C3C3" placeholder="请输入"/>
							</view>
						</view>
						<view class="info row">
							<view class="infoL col-2">
								机构代码
							</view>
							<view class="infoR col-2 right">
								<input class="uni-input"  :value="customerInfor.company_CODE" :disabled="false" />
							</view>
						</view>					
						<view class="info row">
							<view class="infoL col-2">
								注册地址
							</view>
							<view class="infoR col-2 right">
								<input class="uni-input"  :value="customerInfor.company_ADDRESS" :disabled="false" />
							</view>
						</view>
						<!-- <view class="info row">
							<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
								委托关系
							</view>
							<view class="infoR col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickerChange" :value="customerInfor.delegationindex" :range="customerInfor.delegationarray">
									<view class="uni-input">{{customerInfor.delegationarray[customerInfor.delegationindex]}}</view>
								</picker>
							</view>
						</view> -->
						<view v-if="customerInfor.relationshiparray.length !==0" class="info row">
							<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
								委托关系
							</view>
							<view class="infoR col-2 right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="relationshipChange" :value="customerInfor.relationshipindex" :range="customerInfor.relationshiparray">
									<view class="uni-input">{{customerInfor.relationshiparray[customerInfor.relationshipindex]}}</view>
								</picker>
							</view>
						</view>
						<view class="ownerinfo">
							<view class="title">
								上牌信息
							</view>
							<view class="list">
								<view class="cell row">
									<view class="cellL col-2">
										公司名称
									</view>
									<view class="cellR col-2 right">
										<input class="uni-input"  :value="customerInfor.company_NAME" :disabled="false" />
									</view>
								</view>
								<view class="cell row">
									<view class="cellL col-2">
										营业执照
									</view>
									<view class="cellR col-2 right">
										<input class="uni-input" :value="customerInfor.company_REGIST_NO" :disabled="false" />
									</view>
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
	 * customerInfor 客户信息
	 * @description 客户信息组件
	 * @nodata = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'customerInfor',
		data() {
			return {
				customerInfor: {
					customer_id: null, //客户ID
					kindinfo: '个人', //客户类型
					customer_name: '', //客户姓名
					customer_phone: '', //客户电话
					customer_IDcard: '', //客户身份证号码
					entrust: 0, //	是	int	是否委托；0个人 ，1 公司
					entrust_name: "", //	否	string	委托人姓名；委托为否时可以不传
					entrust_phone: "", //	否	string	委托人电话；委托为否时可以不传
					entrust_relation: null, //	否	int	与客户关系；委托为否时可以不传
					entrust_relation_txt: "", //		否	string	与客户关系是其他是，进行补充填写；委托为否时可以不传
					company_NAME: "", //公司名称
					company_REGIST_NO: "", //营业执照
					company_CODE: "", //机构代码
					company_ADDRESS: "", //注册地址
					name: "", //	是	string	车主姓名
					phone: "", //		是	string	车主电话
					identity: "", //		是	string	车主身份证
					relation: null, //		是	int	与客户关系
					relationshiparray: [], //关系
					relationshipID: [], //关系
					relationshipindex: 0, //关系
					sourceArray: [], //来源
					sourceID: [], //来源
					sourceindex: 0, //来源
				}, //客户数据
			}
		},
		created() {
			var that = this;
			that.$nextTick(() => {
				that.customerInfor = that.$store.state.saleOrderDates.customerInfor
				if (that.customerInfor.customer_id !== null) { //回填数据
					let id = that.customerInfor.customer_id;
					if (that.customerInfor.kindinfo == '个人') {
						that.getCustomerInfoByID(id, '1');
					} else {
						that.getCustomerInfoByID(id, '2');
					}
				} else { //初始值
					this.getvalues();
				}
			});

		},
		watch: {
			customerInfor: {
				handler(newValue, oldValue) {
					this.$emit('customerInforValChange', this.customerInfor)
				},
				deep: true
			}
		},
		methods: {
			getvalues() { //获取默认值和请求数据
				let self_ = this;

				//关系
				let customer_relationCodes = self_.$store.state.customer_relationCodes;
				customer_relationCodes.forEach(function(val, index, arr) {
					self_.customerInfor.relationshiparray.push(val.NAME)
					self_.customerInfor.relationshipID.push(val.ID)
					if (index == 0) {
						self_.customerInfor.relation = val.ID
						self_.customerInfor.entrust_relation = val.ID
					}

				});

				//来源
				let customer_fromCodes = self_.$store.state.customer_fromCodes;
				customer_fromCodes.forEach(function(val, index, arr) {
					self_.customerInfor.sourceArray.push(val.NAME)
					self_.customerInfor.sourceID.push(val.ID)
					// if(index==0){
					// 	self_.customerInfor.relation = val.ID
					// 	self_.customerInfor.entrust_relation = val.ID
					// }

				});


			},
			//客户详情
			async getCustomerInfoByID(id, CusType) {
				let param = JSON.stringify({
					ID: id,
					CusType: CusType
				})
				await this.$api.HHPlatForm_P_GetCustomerInfoByID(param).then(res => {
					console.log(res)
					if (CusType == '1') {
						this.customerInfor.customer_name = res[0].BD_NAME // 客户姓名
						this.customerInfor.customer_phone = res[0].COM_PHONE // 客户电话
						this.customerInfor.customer_IDcard = res[0].CER_ID_NO // 客户身份证号
					}else{
						this.customerInfor.company_NAME = res[0].UNIT_NAME//单位名称
						this.customerInfor.company_CODE = res[0].REGIST_NO//organizationCode
						this.customerInfor.company_ADDRESS = res[0].REGISTER_SITE//注册地址
						this.customerInfor.company_REGIST_NO = res[0].REGIST_NO//营业执照
					}
				}).catch(res => {
					console.log(res)
					// 失败进行的操作
				})
			},
			//客户信息
			selectCustomers() {
				// 去客户列表页面
				let role = this.customerInfor.kindinfo == '个人' ? '1' : '2'
				// debugger
				uni.navigateTo({
					url: "../search/search?role=" + role
				});
			},
			//客户来源
			sourceChange: function(e) {
				this.customerInfor.sourceindex = e.target.value
			},
			//与车主关系
			relationshipChange: function(e) {
				this.customerInfor.relationshipindex = e.target.value
				this.customerInfor.relation = this.customerInfor.relationshipID[e.target.value]
				this.customerInfor.entrust_relation = this.customerInfor.relationshipID[e.target.value]
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F5F5F5;
	}
</style>
