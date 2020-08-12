<template>
	<view>
		<!-- 商品信息 -->
		<view class="Commodity-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					商品信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goshop" class="blueline-icons" src="../../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>

			<!-- <checkbox-group @change="checkboxChange"> -->
			<!-- 整车 -->
			<view v-if="carinfos.model_id!==''" class="commom-content">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<!-- <checkbox value="carinfocheckbox" :checked="true" /> -->
							<text class="txt">整车信息</text>
						</label>
					</view>
					<view class="goodsinfolist" style="padding-left:0">
						<!-- <label class="checkboxs">
							<checkbox value="vehicle" />
						</label> -->
						<view class="uni-flex uni-row newcarcell_f">
							<view class="uni-flex goodavatar marR10" style="">
								<img class="goodpicIMG" :src="carinfos.img_url">
							</view>
							<view class="carinfo">
								<view class="carname">
									{{carinfo.INTERNAL_NAME}}
								</view>
								<view class="listinfo">
									<text class="title">VIN</text>
									<text class="value">{{carinfos.chassis_num}}</text>
								</view>
								<view class="listinfo">
									<text class="title">指导价格</text>
									<text class="value">{{carinfos.guide_price}}</text>
								</view>

							</view>
						</view>
					</view>
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								成交价
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">元</text>
								<input type="text" v-model="carinfos.final_price" :disabled="false" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								颜色
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickChangeColor" :value="carinfo.carColorsIndex" :range="carinfo.carColors">
									<view class="uni-input">{{carinfo.carColors[carinfo.carColorsIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								内饰
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickChangeInterior" :value="carinfo.InteriorIndex" :range="carinfo.Interior">
									<view class="uni-input">{{carinfo.Interior[carinfo.InteriorIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								商品分类
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickChangecarkind" :value="carinfo.car_kindIndex" :range="carinfo.car_kind">
									<view class="uni-input">{{carinfo.car_kind[carinfo.car_kindIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								代收购置税
							</view>
							<!-- 默认是 -->
							<view class="notesR right">
								<button @click="purchaseTax(1)" :class="{'on': carinfos.is_tax===1}" class="yybtn mini-btn" size="mini" type="default">是</button>
								<button @click="purchaseTax(0)" :class="{'on': carinfos.is_tax===0}" class="yybtn mini-btn" size="mini" type="default">否</button>
							</view>
						</view>
						<!-- 上面是的时候才出现 -->
						<view v-show="carinfos.is_tax===1" class="cell row">
							<view class="notesL">
								收取方式
							</view>
							<button v-for="(item,index) in carinfo.car_pay_type " :key="index" @click="collectionMethod(item.ID,index)"
							 :class="{'on': carinfo.car_pay_typeIndex==index?true:false}" class="yybtn mini-btn" size="mini" type="default">{{item.NAME}}</button>
						</view>
						<view class="cell row">
							<view class="notesL">
								税率
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">%</text>
								<input class="uni-input" v-model="carinfos.tax_num" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								税额
								<view class="remarks">
									税率以官方收费为准
								</view>
							</view>
							<view class="cellR col-2 right unit">
								<text class="icon-unit">元</text>
								<input class="uni-input" :value="taxlimitm" :disabled="true" />
							</view>
						</view>

					</view>
				</view>
			</view>
			<!-- 非整车 -->
			<view class="Commodity-infor-nonvehical ">
				<!-- 精品美容 -->
				<!--  -->
				<checkbox-group @change="checkboxChange">
					<!-- 精品美容 -->
					<view v-if="fineBeauty.length>=1&&fineBeauty[0].good_id!==null" class="commom-content marB20">
						<view class="content">
							<view class="optionaltitle">
								<label>
									<!-- <checkbox value="fineBeauty" /> -->
									<text class="txt">精品美容</text>
								</label>
							</view>
							<view>
								<view v-for="(item ,i_fineBeauty) in fineBeauty" :key="i_fineBeauty">
									<view class="goodsinfolist">
										<label class="checkboxs">
											<checkbox :value="Checkbox.fineBeauty[i_fineBeauty].value" :checked="Checkbox.fineBeauty[i_fineBeauty].checked" />
										</label>
										<view class="uni-flex uni-row newcarcell_f">
											<view class="uni-flex goodavatar marR10" style="">
												<img style="width: 100%;" :src="item.img_url" />
											</view>
											<view class="carinfo">
												<view class="carname">
													{{item.good_name}}
												</view>
												<view class="listinfo">
													<text class="title">指导价格</text>
													<text class="value"> {{item.guide_price}}</text>
												</view>
											</view>
										</view>
									</view>
									<view class="">
										<view class="row">
											<view class="col-2">
												成交单价
											</view>
											<view class="col-2 right">
												{{item.final_price}}元
											</view>
										</view>
										<view class="row followCar">
											<view class="col-2">
												<text class="followCarbtn" :class="{'on': item.is_add===1}" @click="isadd(i_fineBeauty)">加装</text>
												<text class="followCarbtn" :class="{'on': item.is_with===1}" @click="isWith(i_fineBeauty)">随车</text>
												<text class="followCarbtn" :class="{'on': item.pre_installed===1}" @click="preInstalled(i_fineBeauty)">预装</text>
											</view>
											<view class="col-2 numberright">
												<view class="number-box row">
													<view class="reduce" @click="changenumber('reduce',item.num,i_fineBeauty,'fineBeauty')">
														<text class="iconfont">&#xe603;</text>
													</view>
													<view class="numberbox">
														<text class="number">{{item.num}}</text>
													</view>
													<view class="increase" @click="changenumber('increase',item.num,i_fineBeauty,'fineBeauty')">
														<text class="iconfont">&#xe602;</text>
													</view>
												</view>

											</view>
										</view>
									</view>
								</view>

								<view class="row">
									<view class="subtotal right">
										<text class="subtotaltxt">小计</text>
										<text class="subtotalicon">¥</text>
										<text class="subtotalmoney">
											{{subtotalPriceTotal('fineBeauty')}}
										</text>
									</view>
								</view>

							</view>

						</view>
					</view>

					<!-- 延保产品 -->
					<view  v-if="Exinsurance.good_id!==null"  class="commom-content marB20">
						<view class="content">
							<view class="optionaltitle">
								<label>
									<!-- <checkbox value="vehicle" /> -->
									<text class="txt">延保产品</text>
								</label>
							</view>
							<view>
								<view>
									<view class="goodsinfolist">
										<label class="checkboxs">
											<checkbox :value="Checkbox.Exinsurance.value" :checked="Checkbox.Exinsurance.checked" />
										</label>
										<view class="uni-flex uni-row newcarcell_f">
											<view class="uni-flex goodavatar marR10" style="">
												<img style="width: 100%;" :src="Exinsurance.img_url" />
											</view>
											<view class="carinfo">
												<view class="carname">
													{{Exinsurance.good_name}}
												</view>
												<view class="listinfo">
													<text class="title">指导价格</text>
													<text class="value"> {{Exinsurance.guide_price}}</text>
												</view>
											</view>
										</view>
									</view>
									<view class="">
										<view class="row">
											<view class="col-2">
												成交单价
											</view>
											<view class="col-2 right">
												{{Exinsurance.final_price}}元
											</view>
										</view>
										<view class="row followCar">
											<view class="col-2 numberright">
												<view class="number-box row">
													<view class="reduce" @click="changenumber('reduce',item.num,0,'Exinsurance')">
														<text class="iconfont">&#xe603;</text>
													</view>
													<view class="numberbox">
														<text class="number">{{Exinsurance.num}}</text>
													</view>
													<view class="increase" @click="changenumber('increase',item.num,0,'Exinsurance')">
														<text class="iconfont">&#xe602;</text>
													</view>
												</view>

											</view>
										</view>
									</view>
								</view>

								<view class="row">
									<view class="subtotal right">
										<text class="subtotaltxt">小计</text>
										<text class="subtotalicon">¥</text>
										<text class="subtotalmoney">
											{{subtotalPriceTotal('Exinsurance')}}
										</text>
									</view>
								</view>

							</view>

						</view>
					</view>
					<!-- 公司产品 -->
					<view  v-if="companyPro.length>=1&&companyPro[0].good_id!==null"  class="commom-content marB20">
						<view class="content">
							<view class="optionaltitle">
								<label>
									<!-- <checkbox value="vehicle" /> -->
									<text class="txt">公司产品</text>
								</label>
							</view>
							<view>
								<view v-for="(item ,i_companyPro) in companyPro" :key="i_companyPro">
									<view class="goodsinfolist">
										<label class="checkboxs">
											<checkbox :value="Checkbox.companyPro[i_companyPro].value" :checked="Checkbox.companyPro[i_companyPro].checked" />
										</label>
										<view class="uni-flex uni-row newcarcell_f">
											<view class="uni-flex goodavatar marR10" style="">
												<img style="width: 100%;" :src="item.img_url" />
											</view>
											<view class="carinfo">
												<view class="carname">
													{{item.good_name}}
												</view>
												<view class="listinfo">
													<text class="title">指导价格</text>
													<text class="value"> {{item.guide_price}}</text>
												</view>
											</view>
										</view>
									</view>
									<view class="">
										<view class="row">
											<view class="col-2">
												成交单价
											</view>
											<view class="col-2 right">
												{{item.final_price}}元
											</view>
										</view>
										<view class="row followCar">
											<view class="col-2 numberright">
												<view class="number-box row">
													<view class="reduce" @click="changenumber('reduce',item.num,i_companyPro,'companyPro')">
														<text class="iconfont">&#xe603;</text>
													</view>
													<view class="numberbox">
														<text class="number">{{item.num}}</text>
													</view>
													<view class="increase" @click="changenumber('increase',item.num,i_companyPro,'companyPro')">
														<text class="iconfont">&#xe602;</text>
													</view>
												</view>

											</view>
										</view>
									</view>
								</view>

								<view class="row">
									<view class="subtotal right">
										<text class="subtotaltxt">小计</text>
										<text class="subtotalicon">¥</text>
										<text class="subtotalmoney">
											{{subtotalPriceTotal('companyPro')}}
										</text>
									</view>
								</view>

							</view>

						</view>
					</view>
					<!-- 套餐产品 -->
					<view  v-if="Setmeal.length>=1&&Setmeal[0].good_id!==null"  class="commom-content marB20">
						<view class="content">
							<view class="optionaltitle">
								<label>
									<!-- <checkbox value="vehicle" /> -->
									<text class="txt">套餐产品</text>
								</label>
							</view>
							<view>
								<view v-for="(item ,i_Setmeal) in Setmeal" :key="i_Setmeal">
									<view class="goodsinfolist">
										<label class="checkboxs">
											<checkbox :value="Checkbox.Setmeal[i_Setmeal].value" :checked="Checkbox.Setmeal[i_Setmeal].checked" />
										</label>
										<view class="uni-flex uni-row newcarcell_f">
											<view class="uni-flex goodavatar marR10" style="">
												<img style="width: 100%;" :src="item.img_url" />
											</view>
											<view class="carinfo">
												<view class="carname">
													{{item.good_name}}
												</view>
												<view class="listinfo">
													<text class="title">指导价格</text>
													<text class="value"> {{item.guide_price}}</text>
												</view>
											</view>
										</view>
									</view>
									<view class="">
										<view class="row">
											<view class="col-2">
												成交单价
											</view>
											<view class="col-2 right">
												{{item.final_price}}元
											</view>
										</view>
										<view class="row followCar">
											<view class="col-2 numberright">
												<view class="number-box row">
													<view class="reduce" @click="changenumber('reduce',item.num,i_Setmeal,'Setmeal')">
														<text class="iconfont">&#xe603;</text>
													</view>
													<view class="numberbox">
														<text class="number">{{item.num}}</text>
													</view>
													<view class="increase" @click="changenumber('increase',item.num,i_Setmeal,'Setmeal')">
														<text class="iconfont">&#xe602;</text>
													</view>
												</view>

											</view>
										</view>
									</view>
								</view>

								<view class="row">
									<view class="subtotal right">
										<text class="subtotaltxt">小计</text>
										<text class="subtotalicon">¥</text>
										<text class="subtotalmoney">
											{{subtotalPriceTotal('Setmeal')}}
										</text>
									</view>
								</view>

							</view>

						</view>
					</view>
					<!-- 代办业务 -->
					<view  v-if="agencyService.length>=1&&agencyService[0].good_id!==null"  class="commom-content marB20">
						<view class="content">
							<view class="optionaltitle">
								<label>
									<!-- <checkbox value="vehicle" /> -->
									<text class="txt">代办业务</text>
								</label>
							</view>
							<view>
								<view v-for="(item ,i_agencyService) in agencyService" :key="i_agencyService">
									<view class="goodsinfolist">
										<label class="checkboxs">
											<checkbox :value="Checkbox.agencyService[i_agencyService].value" :checked="Checkbox.agencyService[i_agencyService].checked" />
										</label>
										<view class="uni-flex uni-row newcarcell_f">
											<view class="uni-flex goodavatar marR10" style="">
												<img style="width: 100%;" :src="item.img_url" />
											</view>
											<view class="carinfo">
												<view class="carname">
													{{item.good_name}}
												</view>
												<view class="listinfo">
													<text class="title">指导价格</text>
													<text class="value"> {{item.guide_price}}</text>
												</view>
											</view>
										</view>
									</view>
									<view class="">
										<view class="row">
											<view class="col-2">
												成交单价
											</view>
											<view class="col-2 right">
												{{item.final_price}}元
											</view>
										</view>
										<view class="row followCar">
											<view class="col-2 numberright">
												<view class="number-box row">
													<view class="reduce" @click="changenumber('reduce',item.num,i_agencyService,'agencyService')">
														<text class="iconfont">&#xe603;</text>
													</view>
													<view class="numberbox">
														<text class="number">{{item.num}}</text>
													</view>
													<view class="increase" @click="changenumber('increase',item.num,i_agencyService,'agencyService')">
														<text class="iconfont">&#xe602;</text>
													</view>
												</view>

											</view>
										</view>
									</view>
								</view>

								<view class="row">
									<view class="subtotal right">
										<text class="subtotaltxt">小计</text>
										<text class="subtotalicon">¥</text>
										<text class="subtotalmoney">
											{{subtotalPriceTotal('agencyService')}}
										</text>
									</view>
								</view>

							</view>

						</view>
					</view>
					<!-- 卡券销售 -->
					<view  v-if="Cardvoucher.length>=1&&Cardvoucher[0].good_id!==null"  class="commom-content marB20">
						<view class="content">
							<view class="optionaltitle">
								<label>
									<!-- <checkbox value="vehicle" /> -->
									<text class="txt">卡券销售</text>
								</label>
							</view>
							<view>
								<view v-for="(item ,i_Cardvoucher) in Cardvoucher" :key="i_Cardvoucher">
									<view class="goodsinfolist">
										<label class="checkboxs">
											<checkbox :value="Checkbox.Cardvoucher[i_Cardvoucher].value" :checked="Checkbox.Cardvoucher[i_Cardvoucher].checked" />
										</label>
										<view class="uni-flex uni-row newcarcell_f">
											<view class="uni-flex goodavatar marR10" style="">
												<img style="width: 100%;" :src="item.img_url" />
											</view>
											<view class="carinfo">
												<view class="carname">
													{{item.good_name}}
												</view>
												<view class="listinfo">
													<text class="title">指导价格</text>
													<text class="value"> {{item.guide_price}}</text>
												</view>
											</view>
										</view>
									</view>
									<view class="">
										<view class="row">
											<view class="col-2">
												成交单价
											</view>
											<view class="col-2 right">
												{{item.final_price}}元
											</view>
										</view>
										<view class="row followCar">
											<view class="col-2 numberright">
												<view class="number-box row">
													<view class="reduce" @click="changenumber('reduce',item.num,i_Cardvoucher,'Cardvoucher')">
														<text class="iconfont">&#xe603;</text>
													</view>
													<view class="numberbox">
														<text class="number">{{item.num}}</text>
													</view>
													<view class="increase" @click="changenumber('increase',item.num,i_Cardvoucher,'Cardvoucher')">
														<text class="iconfont">&#xe602;</text>
													</view>
												</view>

											</view>
										</view>
									</view>
								</view>

								<view class="row">
									<view class="subtotal right">
										<text class="subtotaltxt">小计</text>
										<text class="subtotalicon">¥</text>
										<text class="subtotalmoney">
											{{subtotalPriceTotal('Cardvoucher')}}
										</text>
									</view>
								</view>

							</view>

						</view>
					</view>
				</checkbox-group>
			</view>
		</view>

		<!-- <view class="">
			总金额：{{totalPrice}}
		</view> -->


	</view>
</template>

<script>
	/*
	 *
	 * commodityInfor 商品信息
	 * @description 商品信息组件
	 * @nodata = [true|false] 是否显示
	 * @example <commodityInfor :selectedOK="selectedOK" ref="commodityInforItem"></commodityInfor>
	 */
	export default {
		name: 'commodityInfor',
		props: {
			baseinfoData: { //基本信息
				type: Object
			}
		},
		data() {
			return {
				orderKind:'',//订单类型
				Checkbox: {},
				Checkboxsel: [], //
				carinfo: { //展示前端页面
					INTERNAL_NAME: '', //名称
					car_kind: [], //车辆销售-分类
					car_kindID: [], //车辆销售-分类
					car_kindIndex: 0, //车辆销售-分类
					car_pay_type: [], //收取方式
					car_pay_typeID: [], //收取方式
					car_pay_typeIndex: 0, //收取方式
					carColors: [], //颜色
					carColorsID: [], //颜色
					carColorsIndex: 0, //颜色
					Interior: [], //内饰
					InteriorID: [], //内饰
					InteriorIndex: 0, //内饰
				},
				carinfos: { //传后台
					brand_id: "", //	是	string	车辆品牌ID
					series_id: "", //	是	string	车系ID
					model_id: "", //	是	string	车型ID
					good_id:null,//	是	string	车型ID
					chassis_num: "", //	是	string	底盘编号，没有时填写空字符串
					trim_id: "", //	是	string	内饰ID
					color_id: "", //	是	string	颜色ID
					guide_price: 0, //	是	int	指导价，单位分
					final_price: 0, //	是	int	成交价，单位分
					kind: null, //	是	int	商品分类
					collection_type: null, //	是	int	收取方式
					is_tax: 0, //	是	int	待收购置税；无填 0
					tax_num: 0, //	是	int	税率，30.5% 填 30.5；无填 0
					tax_limit: 0, //	是	int	税额；无填 0
					img_url: "", //	是	string	图片地址
					trim_name: "", //	是	string	内饰名称
					color_name: "", //	是	string	颜色名称
					good_name: "", //	是	string	商品名称
				},
				CheckboxFlag:1,//
				fineBeauty: [{ //精品美容
					good_id: null, //	是	int	商品ID
					is_add: 0, //	是	int	是否加装； 0 否， 1 是
					is_with: 0, //	是	int	是否随车；0 否， 1 是
					pre_installed: 0, //	是	int	是否预装；0 否， 1 是
					num: 0, //	是	int	销售数量
					guide_price: 0, //	是	int	指导价，单位分
					final_price: 0, //	是	int	成交价，单位分
					noswith__price: 0, //b不随车价格 = 成交价
					good_name: "", //	是	string	商品名称
					img_url: "", //	是	string	图片地址
				}],

				Exinsurance: [ //延保
					{
						good_id: null, //	是	int	产品ID
						org_id: "", //	是	string	保险机构ID
						guide_price: 0, //	是	int	指导价，单位分
						final_price: 0, //	是	int	成交价，单位分
						noswith__price: 0, //b不随车价格 = 成交价
						num: 0, //	是	int	数量
						org_src: "", //	是	string	机构来源ID
						kind: null, //	是	int	延保类型ID
						good_name: "", //	是	string	商品名称
						img_url: "", //	是	string	图片地址
					}
				],
				companyPro: [ //公司产品
					{
						good_id: null, //	是	int	商品iD
						guide_price: 0, //	是	int	指导价，单位分
						final_price: 0, //	是	int	成交价，单位分
						noswith__price: 0, //b不随车价格 = 成交价
						num: 0, //	是	int	数量
						good_name: "", //	是	string	商品名称
						img_url: "", //	是	string	图片地址
					}
				],
				Setmeal: [ //套餐产品
					{
						good_id: null, //	是	int	商品iD
						guide_price: 0, //	是	int	指导价，单位分
						final_price: 0, //	是	int	成交价，单位分
						noswith__price: 0, //b不随车价格 = 成交价
						num: 0, //	是	int	数量
						good_name: "", //	是	string	商品名称
						img_url: "", //	是	string	图片地址
					}
				],
				agencyService: [ //代办业务
					{
						good_id: null, //	是	int	商品iD
						guide_price: 0, //	是	int	指导价，单位分
						final_price: 0, //	是	int	成交价，单位分
						noswith__price: 0, //b不随车价格 = 成交价
						num: 0, //	是	int	数量
						good_name: "", //	是	string	商品名称
						img_url: "", //	是	string	图片地址
					}
				],
				Cardvoucher: [ //卡券销售
					{
						good_id: null, //	是	int	商品iD
						kind: null, //		是	int	分类
						classId: null, //		是	int	卡券类型
						guide_price: 0, //	是	int	指导价，单位分
						final_price: 0, //	是	int	成交价，单位分
						noswith__price: 0, //b不随车价格 = 成交价
						num: 0, //	是	int	数量
						good_name: "", //	是	string	商品名称
						img_url: "", //	是	string	图片地址
					}
				],
			}
		},
		computed: {
			//计算税额
			taxlimitm() {
				let tax_num = this.carinfos.tax_num / 100
				let taxlimitm = this.carinfos.final_price * tax_num
				return taxlimitm
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
			// 总计
			totalPrice() {
				let self_ = this
				let totalPrice = 0 //总金额
				let carPrice = self_.carinfos.final_price //整车
				let fineBeautyPrice = 0 //非整车--精品美容
				self_.fineBeauty.forEach(function(key) {
					fineBeautyPrice += Number(key.num) * Number(key.final_price);
				});
				let ExinsurancePrice = 0 //非整车--延保
				ExinsurancePrice = Number(self_.Exinsurance.num) * Number(self_.Exinsurance.final_price);
				
				let companyProPrice = 0 //非整车--公司产品
				self_.companyPro.forEach(function(key) {
					companyProPrice += Number(key.num) * Number(key.final_price);
				});
				let agencyServicePrice = 0 //非整车--代办业务
				self_.agencyService.forEach(function(key) {
					agencyServicePrice += Number(key.num) * Number(key.final_price);
				});
				let SetmealPrice = 0 //非整车--套餐产品
				self_.Setmeal.forEach(function(key) {
					SetmealPrice += Number(key.num) * Number(key.final_price);
				});
				let CardvoucherPrice = 0 //非整车--卡券销售
				self_.Cardvoucher.forEach(function(key) {
					CardvoucherPrice += Number(key.num) * Number(key.final_price);
				});
				totalPrice = Number(carPrice) + Number(fineBeautyPrice) + Number(ExinsurancePrice) + Number(companyProPrice) +
					Number(agencyServicePrice) + Number(SetmealPrice) + Number(CardvoucherPrice)

				return totalPrice
			},
		},
		watch: {
			carinfo: {
				handler(newValue, oldValue) {
					this.$emit('carinfoChange', this.carinfo)
				},
				deep: true
			},
			carinfos: {
				handler(newValue, oldValue) {
					this.$emit('carinfosChange', this.carinfos)
				},
				deep: true
			},
			fineBeauty: {
				handler(newValue, oldValue) {
					this.$emit('fineBeautyChange', this.fineBeauty)
				},
				deep: true
			},
			Checkbox: {
				handler(newValue, oldValue) {
					this.$emit('CheckboxChange', this.Checkbox)
				},
				deep: true
			},
			Exinsurance: {
				handler(newValue, oldValue) {
					this.$emit('ExinsuranceChange', this.Exinsurance)
				},
				deep: true
			},
			companyPro: {
				handler(newValue, oldValue) {
					this.$emit('companyProChange', this.companyPro)
				},
				deep: true
			},
			Setmeal: {
				handler(newValue, oldValue) {
					this.$emit('SetmealChange', this.Setmeal)
				},
				deep: true
			},
			agencyService: {
				handler(newValue, oldValue) {
					this.$emit('agencyServiceChange', this.agencyService)
				},
				deep: true
			},
			Cardvoucher: {
				handler(newValue, oldValue) {
					this.$emit('CardvoucherChange', this.Cardvoucher)
				},
				deep: true
			},
			baseinfoData: {
				handler(newValue, oldValue) {
					let that = this;
					// debugger
					that.orderKind = that.baseinfoData.order_kind[that.baseinfoData.order_kindIndex].NAME
					if(that.orderKind=='非整车'){//整车清空
					// 	that.carinfo = { //展示前端页面
					// 		INTERNAL_NAME: '', //名称
					// 		car_kind: [], //车辆销售-分类
					// 		car_kindID: [], //车辆销售-分类
					// 		car_kindIndex: 0, //车辆销售-分类
					// 		car_pay_type: [], //收取方式
					// 		car_pay_typeID: [], //收取方式
					// 		car_pay_typeIndex: 0, //收取方式
					// 		carColors: ["无"], //颜色
					// 		carColorsID: [], //颜色
					// 		carColorsIndex: 0, //颜色
					// 		Interior: ["无"], //内饰
					// 		InteriorID: [], //内饰
					// 		InteriorIndex: 0, //内饰
					// 	}
					// 	that.carinfos =  { //传后台
					// 		brand_id: "", //	是	string	车辆品牌ID
					// 		series_id: "", //	是	string	车系ID
					// 		model_id: "", //	是	string	车型ID
					// 		chassis_num: "", //	是	string	底盘编号，没有时填写空字符串
					// 		trim_id: "", //	是	string	内饰ID
					// 		color_id: "", //	是	string	颜色ID
					// 		guide_price: 0, //	是	int	指导价，单位分
					// 		final_price: 0, //	是	int	成交价，单位分
					// 		kind: null, //	是	int	商品分类
					// 		collection_type: null, //	是	int	收取方式
					// 		is_tax: 0, //	是	int	待收购置税；无填 0
					// 		tax_num: 0, //	是	int	税率，30.5% 填 30.5；无填 0
					// 		tax_limit: 0, //	是	int	税额；无填 0
					// 		img_url: "", //	是	string	图片地址
					// 		trim_name: "", //	是	string	内饰名称
					// 		color_name: "", //	是	string	颜色名称
					// 	}
						that.getvalues();//
					}else{
						
						// that.fineBeauty = [{ //精品美容
						// 	good_id: null, //	是	int	商品ID
						// 	is_add: 0, //	是	int	是否加装； 0 否， 1 是
						// 	is_with: 0, //	是	int	是否随车；0 否， 1 是
						// 	pre_installed: 0, //	是	int	是否预装；0 否， 1 是
						// 	num: 0, //	是	int	销售数量
						// 	guide_price: 0, //	是	int	指导价，单位分
						// 	final_price: 0, //	是	int	成交价，单位分
						// 	noswith__price: 0, //b不随车价格 = 成交价
						// 	good_name: "", //	是	string	商品名称
						// 	img_url: "", //	是	string	图片地址
						// }]
						
						// that.Exinsurance=[ //延保
						// 	{
						// 		good_id: null, //	是	int	产品ID
						// 		org_id: "", //	是	string	保险机构ID
						// 		guide_price: 0, //	是	int	指导价，单位分
						// 		final_price: 0, //	是	int	成交价，单位分
						// 		noswith__price: 0, //b不随车价格 = 成交价
						// 		num: 0, //	是	int	数量
						// 		org_src: "", //	是	string	机构来源ID
						// 		kind: null, //	是	int	延保类型ID
						// 		good_name: "", //	是	string	商品名称
						// 		img_url: "", //	是	string	图片地址
						// 	}
						// ]
						// that.companyPro=[ //公司产品
						// 	{
						// 		good_id: null, //	是	int	商品iD
						// 		guide_price: 0, //	是	int	指导价，单位分
						// 		final_price: 0, //	是	int	成交价，单位分
						// 		noswith__price: 0, //b不随车价格 = 成交价
						// 		num: 0, //	是	int	数量
						// 		good_name: "", //	是	string	商品名称
						// 		img_url: "", //	是	string	图片地址
						// 	}
						// ]
						// that.Setmeal=[ //套餐产品
						// 	{
						// 		good_id: null, //	是	int	商品iD
						// 		guide_price: 0, //	是	int	指导价，单位分
						// 		final_price: 0, //	是	int	成交价，单位分
						// 		noswith__price: 0, //b不随车价格 = 成交价
						// 		num: 0, //	是	int	数量
						// 		good_name: "", //	是	string	商品名称
						// 		img_url: "", //	是	string	图片地址
						// 	}
						// ]
						// that.agencyService= [ //代办业务
						// 	{
						// 		good_id: null, //	是	int	商品iD
						// 		guide_price: 0, //	是	int	指导价，单位分
						// 		final_price: 0, //	是	int	成交价，单位分
						// 		noswith__price: 0, //b不随车价格 = 成交价
						// 		num: 0, //	是	int	数量
						// 		good_name: "", //	是	string	商品名称
						// 		img_url: "", //	是	string	图片地址
						// 	}
						// ]
						// that.Cardvoucher=[ //卡券销售
						// 	{
						// 		good_id: null, //	是	int	商品iD
						// 		kind: null, //		是	int	分类
						// 		classId: null, //		是	int	卡券类型
						// 		guide_price: 0, //	是	int	指导价，单位分
						// 		final_price: 0, //	是	int	成交价，单位分
						// 		noswith__price: 0, //b不随车价格 = 成交价
						// 		num: 0, //	是	int	数量
						// 		good_name: "", //	是	string	商品名称
						// 		img_url: "", //	是	string	图片地址
						// 	}
						// ]
					}
				},
				deep: true

			},
			Checkboxsel: {
				handler(newValue, oldValue) {
					let self_ = this;
					self_.$emit('CheckboxselChange', this.Checkboxsel)
					// debugger
					// if(self_.CheckboxFlag!==1){//不是第一次
						if(self_.Checkboxsel.length>0){
							self_.getnewprice()
						}else{
							uni.showToast({
							    title: '至少选择一款商品',
							    duration: 2000
							})
							self_.getnewprice()
						}
					// }
					
				},
				deep: true

			},
		},
		created() {
			let self_ = this;
			self_.carinfo = self_.$store.state.saleOrder.carinfo //回填页面数据
			self_.carinfos = self_.$store.state.saleOrderDates.carinfo //回填后台数据
			if (self_.carinfos.model_id !== "") { //车型不为空
				self_.getAutoTypeInfo(self_.carinfos.model_id);
			} else {
				self_.getvalues();
			}
// debugger
			self_.fineBeauty = self_.$store.state.saleOrderDates.fineBeauty //回填精品美容
			self_.Exinsurance = self_.$store.state.saleOrderDates.Exinsurance //回填延保
			
			self_.companyPro = self_.$store.state.saleOrderDates.companyPro //回填公司产品
			self_.Setmeal = self_.$store.state.saleOrderDates.Setmeal //回填套餐产品
			self_.agencyService = self_.$store.state.saleOrderDates.agencyService //回填代办业务
			self_.Cardvoucher = self_.$store.state.saleOrderDates.Cardvoucher //回填卡券销售

			self_.Checkbox = self_.$store.state.saleOrderDates.Checkbox //回填Checkbox
			self_.Checkboxsel = self_.$store.state.saleOrderDates.Checkboxsel //回填精品美容
			
			self_.getCheckboxes();
		},
		methods: {
			getCheckboxes() { //生成多选框数组
				// debugger
				let self_ = this;
				self_.Checkbox = {
					fineBeauty: [],
					Exinsurance: {},
					companyPro: [],
					Setmeal: [],
					agencyService: [],
					Cardvoucher: [],
				};
				for (var i = 0, lenI = self_.fineBeauty.length; i < lenI; ++i) {
					let item = {
						value: 'fineBeauty' + i,
						checked: true
					}

					if (self_.Checkboxsel.length > 0) {
						if (self_.Checkboxsel.includes(item.value)) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
					self_.Checkbox.fineBeauty.push(item)
				}

				// for (var i = 0, lenI = self_.Exinsurance.length; i < lenI; ++i) {
					let item = {
						value: 'Exinsurance0',
						checked: true
					}
					if (self_.Checkboxsel.length > 0) {
						if (self_.Checkboxsel.includes(item.value)) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
					self_.Checkbox.Exinsurance = {
						value: 'Exinsurance0',
						checked: true
					}
				// }

				for (var i = 0, lenI = self_.companyPro.length; i < lenI; ++i) {
					if(self_.Checkboxsel.length==0&&self_.companyPro[0].good_id!==null){
						self_.Checkboxsel[0] = 'companyPro0'
					}
					let item = {
						value: 'companyPro' + i,
						checked: true
					}
					if (self_.Checkboxsel.length > 0) {
						if (self_.Checkboxsel.includes(item.value)) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
					self_.Checkbox.companyPro.push(item)
				}
				for (var i = 0, lenI = self_.Setmeal.length; i < lenI; ++i) {
					let item = {
						value: 'Setmeal' + i,
						checked: true
					}
					if (self_.Checkboxsel.length > 0) {
						if (self_.Checkboxsel.includes(item.value)) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
					self_.Checkbox.Setmeal.push(item)
				}
				for (var i = 0, lenI = self_.agencyService.length; i < lenI; ++i) {
					let item = {
						value: 'agencyService' + i,
						checked: true
					}
					if (self_.Checkboxsel.length > 0) {
						if (self_.Checkboxsel.includes(item.value)) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
					self_.Checkbox.agencyService.push(item)
				}
				for (var i = 0, lenI = self_.Cardvoucher.length; i < lenI; ++i) {
					let item = {
						value: 'Cardvoucher' + i,
						checked: true
					}
					if (self_.Checkboxsel.length > 0) {
						if (self_.Checkboxsel.includes(item.value)) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
					self_.Checkbox.Cardvoucher.push(item)
				}
				console.log(self_.Checkbox)
			},
			checkboxChange: function(e) {
				let self_ = this;
				// var items = this.items,
				let values = e.detail.value;
				self_.Checkboxsel = values;
				console.log(values)
				console.log(self_.Checkbox)
				if (values.includes('fineBeauty1')) {
					console.log("1")
				}
			},
			getnewprice() { //改变checkbox，重新计算小记
				let self_ = this;
						for (var i = 0, lenI = self_.Checkbox.fineBeauty.length; i < lenI; ++i) {
							if(self_.fineBeauty[i].good_id!==null){
								if (self_.Checkboxsel.includes(self_.Checkbox.fineBeauty[i].value)) {
									self_.fineBeauty[i].final_price = self_.fineBeauty[i].noswith__price
								} else {
									self_.fineBeauty[i].final_price = 0
								}
							}
							
						}
						// for (var i = 0, lenI = self_.Checkbox.Exinsurance.length; i < lenI; ++i) {
							
						// 	if(self_.Exinsurance[i].good_id!==null){
						// 		if (self_.Checkboxsel.includes(self_.Checkbox.Exinsurance[i].value)) {
						// 			self_.Exinsurance[i].final_price = self_.Exinsurance[i].noswith__price
						// 		} else {
						// 			self_.Exinsurance[i].final_price = 0
						// 		}
						// 	}
						// }
						
						for (var i = 0, lenI = self_.Checkbox.companyPro.length; i < lenI; ++i) {
							if(self_.companyPro[i].good_id!==null){
								if (self_.Checkboxsel.includes(self_.Checkbox.companyPro[i].value)) {
									self_.companyPro[i].final_price = self_.companyPro[i].noswith__price
								} else {
									self_.companyPro[i].final_price = 0
								}
							}
						}
						
						for (var i = 0, lenI = self_.Checkbox.Setmeal.length; i < lenI; ++i) {
							if(self_.Setmeal[i].good_id!==null){
								if (self_.Checkboxsel.includes(self_.Checkbox.Setmeal[i].value)) {
									self_.Setmeal[i].final_price = self_.Setmeal[i].noswith__price
								} else {
									self_.Setmeal[i].final_price = 0
								}
							}
						}
						for (var i = 0, lenI = self_.Checkbox.agencyService.length; i < lenI; ++i) {
							if(self_.agencyService[i].good_id!==null){
								if (self_.Checkboxsel.includes(self_.Checkbox.agencyService[i].value)) {
									self_.agencyService[i].final_price = self_.agencyService[i].noswith__price
								} else {
									self_.agencyService[i].final_price = 0
								}
							}
						}
						for (var i = 0, lenI = self_.Checkbox.Cardvoucher.length; i < lenI; ++i) {
							if(self_.Cardvoucher[i].good_id!==null){
								if (self_.Checkboxsel.includes(self_.Checkbox.Cardvoucher[i].value)) {
									self_.Cardvoucher[i].final_price = self_.Cardvoucher[i].noswith__price
								} else {
									self_.Cardvoucher[i].final_price = 0
								}
							}
						}
					
			},

			getvalues() { //获取初始值
				let self_ = this;
				//收取方式
				let car_pay_typeCodes = self_.$store.state.car_pay_typeCodes;
				self_.carinfo.car_pay_type = self_.$store.state.car_pay_typeCodes;
				car_pay_typeCodes.forEach(function(val, index, arr) {
					self_.carinfo.car_pay_typeID.push(val.ID)
					if (index == 0) {
						self_.carinfos.collection_type = val.ID
					}

				});

				//车辆销售-分类
				let car_kindCodes = self_.$store.state.car_kindCodes;
				car_kindCodes.forEach(function(val, index, arr) {
					self_.carinfo.car_kind.push(val.NAME)
					self_.carinfo.car_kindID.push(val.ID)
					if (index == 0) {
						self_.carinfos.kind = val.ID
					}

				});
			},
			//根据车型商品ID查询车型、车系、品牌信息（整车）
			async getAutoTypeInfo(goodsID) {
				let self_ = this;
				let param = JSON.stringify({
					ID: goodsID
				})
				await self_.$api.HHPlatForm_P_GetAutoTypeInfo(param).then(res => {
					self_.getColorInner('1', res[0].BrandFID, res[0].SERIES_ID); //获取颜色
					self_.getColorInner('2', res[0].BrandFID, res[0].SERIES_ID); //获取内饰
					self_.carinfos.brand_id = res[0].BrandFID //	是	string	车辆品牌ID
					self_.carinfos.series_id = res[0].SERIES_ID //	是	string	车系ID
					self_.carinfos.model_id = res[0].goodsID //	是	string	车型ID
					self_.carinfos.good_id = res[0].goodsID //	是	string	车型ID
					self_.carinfos.guide_price = res[0].GuidingPrice //	是	int	指导价，单位分
					self_.carinfos.final_price = res[0].GuidingPrice //	是	int	成交价，单位分
					self_.carinfos.img_url = res[0].goodpic //	是	string	图片地址
					self_.carinfos.good_name =  res[0].OFFICIA_LNAME
					self_.carinfo.INTERNAL_NAME = res[0].SERIES_Name + res[0].OFFICIA_LNAME
				}).catch(res => {
					console.log(res)
					// 失败进行的操作
				})
			},
			//获取颜色和内饰
			async getColorInner(Type, BrandFID, SeriesFID) {
				let self_ = this;
				let param = {
					Type: Type,
					BrandFID: BrandFID,
					SeriesFID: SeriesFID
				}
				await self_.$api.HHPlatForm_P_GetColorInner(param).then(res => {
					if (res.length > 0) {
						if (Type == "1") { //颜色
							self_.carinfo.carColors = []
							self_.carinfo.carColorsID = []
							for (let data of res) {
								self_.carinfo.carColors.push(data.FNAME)
								self_.carinfo.carColorsID.push(data.FNUMBER)
							}
						} else if (Type == '2') { //内饰
							self_.carinfo.Interior = []
							self_.carinfo.InteriorID = []
							for (let data of res) {
								self_.carinfo.Interior.push(data.FNAME)
								self_.carinfo.InteriorID.push(data.FNUMBER)
							}
						}

					}
				}).catch(res => {
					console.log(res)
					// 失败进行的操作
				})
			},
			//去商城页面
			goshop() {
				if(this.orderKind!=='非整车'){
					this.$store.state.shop = 'Vehicle'
				}else{
					this.$store.state.shop = 'NoVehicle'
				}
				uni.navigateTo({
					url: '../shop-Mall/shop-Mall'
				});
			},
			//颜色
			bindPickChangeColor() {
				this.carinfo.carColorsIndex = e.target.value //切换样式
				this.carinfos.color_id = this.carinfo.carColorsID[e.target.value]; //后台
				this.carinfos.color_name = this.carinfo.carColors[e.target.value]; //后台
			},
			//内饰
			bindPickChangeInterior() {
				this.carinfo.InteriorIndex = e.target.value //切换样式
				this.carinfos.trim_id = this.carinfo.InteriorID[e.target.value]; //后台
				this.carinfos.trim_name = this.carinfo.Interior[e.target.value]; //后台
			},
			//商品分类
			bindPickChangecarkind() {
				this.carinfo.car_kindIndex = e.target.value //切换样式
				this.carinfos.kind = this.carinfo.car_kindID[e.target.value]; //后台
			},
			//是否代收购置税
			purchaseTax(e) {
				this.carinfos.is_tax = e;
			},
			//代收购置税收取方式
			collectionMethod(e, index) {
				this.carinfo.car_pay_typeIndex = index; //切换样式
				this.carinfos.collection_type = e; //改变传给后台的数值
			},
			// 是否加装
			isadd(index) {
				let self_ = this;
				if (self_.fineBeauty[index].is_add == 0) {
					self_.fineBeauty[index].is_add = 1
				} else if (self_.fineBeauty[index].is_add == 1) {
					self_.fineBeauty[index].is_add = 0
				}
			},
			//是否随车
			isWith(index) {
				let self_ = this;
				if (self_.fineBeauty[index].is_with == 0) {
					self_.fineBeauty[index].is_with = 1
					self_.fineBeauty[index].final_price = 0 //成交单价
				} else if (self_.fineBeauty[index].is_with == 1) {
					self_.fineBeauty[index].is_with = 0
					self_.fineBeauty[index].final_price = self_.fineBeauty[index].noswith__price //成交单价
				}
			},
			//是否预装
			preInstalled(index) {
				let self_ = this;
				if (self_.fineBeauty[index].pre_installed == 0) {
					self_.fineBeauty[index].pre_installed = 1
				} else if (self_.fineBeauty[index].pre_installed == 1) {
					self_.fineBeauty[index].pre_installed = 0
				}
			},
			//商品非整车（随车）
			changenumber(type, value, index, arr) {
				let self_ = this,
					value_new = 0;
				if (type === "reduce" && value > 0) { //减少
					value_new = value - 1
				}
				if (type === "reduce" && value == 0) { //减少
					value_new = 0
				}
				if (type === "increase") { //增加
					value_new = Number(value) + Number(1)
				}


				switch (arr) {
					case 'fineBeauty':
						self_.fineBeauty[index].num = value_new;
						break;
					case 'Exinsurance':
						self_.Exinsurance.num = value_new;
						break;
					case 'companyPro':
						self_.companyPro[index].num = value_new;
						break;
					case 'Setmeal':
						self_.Setmeal[index].num = value_new;
						break;
					case 'agencyService':
						self_.agencyService[index].num = value_new;
						break;
					case 'Cardvoucher':
						self_.Cardvoucher[index].num = value_new;
						break;

				}
			},

		}
	}
</script>
<style lang="scss" scoped>
	page {
		background-color: #F5F5F5;
	}

	.goodpicIMG {
		width: 100%;
	}
</style>
