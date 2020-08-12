<script>
	
export default {
	 onLaunch: async function() {
		 //获取大量codes
		console.log('App Launch');
		let param = {"codes":["order_kind", "sell_kind","order_channel","order_from","customer_kind","customer_from","customer_relation","mortgage_kind","payback_kind","subscription_type","give_type","address_kind","org_from","insurance_kind","yes_or_no","hangtag_kind","hangtag_stage","car_number_color","insurance_kind","car_kind","car_pay_type","pay_type","car_type","Mortgage_Limit","Qualification_Kind"]}
		await this.$api.HHPF_P_GetBaseEnumByCodes(param).then(res => {
			// 获得数据  
			if(res.Msg=='success'){
				this.$store.dispatch('getcodes', res.Data);
				//this.$store.state.codes = res.Data
				
			// let mCodes = this.$store.state.codes;
			// for(let data of mCodes) {
				
			// 	if(data.CODE=='sell_kind'){
			// 		this.$store.state.sell_kindCodes.push(data)	//是	int	销售类型
			// 	}
			// 	if(data.CODE=='order_kind'){
			// 		this.$store.state.order_kindCodes.push(data)	//是	int	订单类型
			// 	}
			// 	if(data.CODE=='order_channel'){this.$store.state.order_channelCodes.push(data)	//是	int	订单渠道
			// 	}
			// 	if(data.CODE=='order_from'){this.$store.state.order_fromCodes.push(data)	//是	int	订单来源
			// 	}
			// 	if(data.CODE=='pay_type'){this.$store.state.pay_typeCodes.push(data)	//是	int	付款方式
			// 	}
			// 	if(data.CODE=='car_type'){this.$store.state.car_typeCodes.push(data)	//是	int	车辆类型
			// 	}
			// 	if(data.CODE=='customer_kind'){this.$store.state.customer_kindCodes.push(data)	//是	int	客户类型
			// 	}
			// 	if(data.CODE=='mortgage_kind'){this.$store.state.mortgage_kindCodes.push(data)	//是	int	按揭类型
			// 	}
			// 	if(data.CODE=='customer_relation'){this.$store.state.customer_relationCodes.push(data)	//否	int	与客户关系
			// 	}
				
			// 	if(data.CODE=='customer_from'){this.$store.state.customer_fromCodes.push(data)	//否	int	与客户关系
			// 	}
			// 	// // if(data.CODE=='sell_kind'){this.$store.state.car_kindCodes.push(data)	//是	int	商品分类
			// 	// // }
			// 	if(data.CODE=='car_pay_type'){this.$store.state.car_pay_typeCodes.push(data)	//是	int	收取方式
			// 	}
			// 	if(data.CODE=='car_kind'){this.$store.state.car_kindCodes.push(data)	//是	int	收取方式
			// 	}
				
			// 	if(data.CODE=='payback_kind'){this.$store.state.payback_kindCodes.push(data)	//是	int	还款方式ID
			// 	}
			// 	if(data.CODE=='org_from'){this.$store.state.org_fromCodes.push(data)	//机构来源
			// 	}
			// 	if(data.CODE=='Mortgage_Limit'){this.$store.state.Mortgage_LimitCodes.push(data)	//按揭期数
			// 	}
				
			// 	if(data.CODE=='Qualification_Kind'){this.$store.state.Qualification_KindCodes.push(data)	//是	int	资质ID
			// 	}
			// 	if(data.CODE=='insurance_kind'){this.$store.state.insurance_kindCodes.push(data)	//是	int	保险类型
			// 	}
			// 	// if(data.CODE=='InsuranceExtend_Kind'){this.$store.state.InsuranceExtend_KindCodes.push(data)	//是	int	延保类型ID
			// 	// }
			// 	// // kind	是	int	分类
			// 	// if(data.CODE=='card_kind'){this.$store.state.card_kindCodes.push(data)	//是	int	卡券类型
			// 	// }
			// 	if(data.CODE=='give_type'){this.$store.state.give_typeCodes.push(data)	//是	int	交付方式
			// 	}
			// 	if(data.CODE=='address_kind'){this.$store.state.address_kindCodes.push(data)	//是	int	地址类型，无时填0
			// 	}
			// 	if(data.CODE=='subscription_type'){this.$store.state.subscription_typeCodes.push(data)	//是	int	订金方式
			// 	}
			// }
			
			
			
			}else{
				uni.showToast({
				    title: res.Msg,
				    duration: 2000
				})
			}
			// this.$store.state.codes = res.Data
		 }).catch(res => {
			 console.log(res)
		 　　// 失败进行的操作
		 })
		},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>
<!-- $yy-order-font-size-sm:26upx;
$yy-order-font-size-base:30upx;
$yy-order-font-size-lg:34upx;
/* 背景颜色 */
$yy-order-bg-color:#ffffff;
$yy-order-bg-color-grey:#f8f8f8;
$yy-order-bg-color-blue:#1371F7;

/* 文字颜色 */
$yy-order-txt-base:#17212E;
$yy-order-txt-blue:#1371F7;
$yy-order-txt-grey:#70767F;
$yy-order-txt-orange:#F57C40;
$yy-order-txt-white:#FFFFFF;

// 浅灰色分割底线
$yy-order-border-bottom: 1upx solid  #EFEFEF; -->
<style>
	/* 引入苹方字体 */
	@import url("./common/uni.css");
	/* 引入uni */
	@import './common/uni.css';
	@import './common/font.css';
	/* 引入uni默认样式修改 */
	@import './common/resetuni.css';
	/* 引入common */
	@import './common/common.css';
	/* pingFangSC-Medium */
        
@font-face {
	font-family: pingFangSC-regular;
	font-size: 15upx;
	src: url('/static/uni.ttf');
}	

/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: pingFangSC-regular;
	font-size: 15upx;
	src: url('/static/uni.ttf');
}
/* #endif */

</style>
