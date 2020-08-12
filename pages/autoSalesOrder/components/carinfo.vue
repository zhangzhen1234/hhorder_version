<template>
	<view class="">
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
		<view class="commom-content">
			整车
			<view v-if="false" class="content">
				<view class="optionaltitle">
					<label>
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
		
	</view>
	</view>
</template>

<script>
	export default {
		name: 'carinfo',
		props: {
		},
		data() {
			return {
				carinfo:[],
				obj:{
					"brand_id":"",//	是	string	车辆品牌ID
					"series_id":"",//	是	string	车系ID
					"model_id":"",//	是	string	车型ID
					"chassis_num":"",//	是	string	底盘编号，没有时填写空字符串
					"trim_id":"",//	是	string	内饰ID
					"color_id":"",//	是	string	颜色ID
					"guide_price":0,//	是	int	指导价，单位分
					"final_price":0,	//	是	int	成交价，单位分
					"kind":0,	//	是	int	商品分类
					"collection_type":0,	//	是	int	收取方式
					"is_tax":0,	//	是	int	待收购置税；无填 0
					"tax_num":0,	//	是	int	税率，30.5% 填 30.5；无填 0
					"tax_limit":0,	//	是	int	税额；无填 0
					"img_url":"",//	是	string	图片地址
					"trim_name":"",//	是	string	内饰名称
					"color_name":"",//	是	string	颜色名称
				},
				
				
			}
		},
		methods:{
			goshop(){
				uni.navigateTo({
				    url: '../shop/shop'
				});
			}
		}
	}
				
</script>

<style>
</style>
