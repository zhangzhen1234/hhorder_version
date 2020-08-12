<template>
	<view>
		<view class="blueline-title row">
			<view class="col-2 blueline-infor">
				基本信息
				<text class="blueline"></text>
			</view>
		</view>
		<view class="marB20 commom-content">
			<view class="content">
				<view class="list">
					<view class="cell row">
						<view class="notesL">
							订单类型
						</view>
						<view class="notesR right">
							<button v-for="(item,index) in order_kindCodes" :key="index" @click="orderType(index)" :class="{'on': indexs.order_kindIndex==index?true:false}"  class="yybtn mini-btn" size="mini" type="default">{{item.NAME}}</button>
						</view>
					</view>
					<view class="cell row">
						<view class="notesL">
							销售类型
						</view>
						<view class="notesR right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<picker @change="PickChangeSell_kind" :value="indexs.sell_kindIndex" :range="sell_kindNAME">
								<view class="uni-input">{{sell_kindNAME[indexs.sell_kindIndex]}}</view>
							</picker>
						</view>
					</view>
					
					
					
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
		export default {
			name: 'baseinfo',
			data() {
				return {
					indexs:{
						order_kindIndex:0,//订单类型
						sell_kindIndex:0,//销售类型
					}
				}
			},
			
			computed:{
				...mapGetters(['sell_kindID','sell_kindNAME','order_kindCodes'])
			},
			watch: {
			      indexs: {
			       handler(newValue, oldValue) {
					  this.$emit('baseinfoChange',this.indexs)
			        },
			        deep: true
			      },
			},
			created() {
				
			},
			methods: {
				PickChangeSell_kind(e){
					this.indexs.sell_kindIndex = e.target.value //切换样式
				},
				// 订单类型
				orderType(index){
					this.indexs.order_kindIndex = index;//切换样式
				},
			}
		}
	</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>