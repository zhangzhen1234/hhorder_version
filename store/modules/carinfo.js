const carinfo = {
	state: {
		carinfo: [],
		obj: {
			// "brand_id": "", //	是	string	车辆品牌ID
			// "series_id": "", //	是	string	车系ID
			// "model_id": "", //	是	string	车型ID
			// "chassis_num": "", //	是	string	底盘编号，没有时填写空字符串
			// "trim_id": "", //	是	string	内饰ID
			// "color_id": "", //	是	string	颜色ID
			// "guide_price": 0, //	是	int	指导价，单位分
			// "final_price": 0, //	是	int	成交价，单位分
			// "kind": 0, //	是	int	商品分类
			// "collection_type": 0, //	是	int	收取方式
			// "is_tax": 0, //	是	int	待收购置税；无填 0
			// "tax_num": 0, //	是	int	税率，30.5% 填 30.5；无填 0
			// "tax_limit": 0, //	是	int	税额；无填 0
			// "img_url": "", //	是	string	图片地址
			// "trim_name": "", //	是	string	内饰名称
			// "color_name": "", //	是	string	颜色名称
		},
	},
	getters: {
		carinfo: state => state.carinfo
	},
	mutations: {
		getcarM(state, obj) {
			state.carinfo.push(obj),
			console.log(state.carinfo,"111")
				obj = {}
		}
	},
	actions: {
		getcar(context, obj) {
			context.commit('getcarM', obj)
		},
	}
}
export default carinfo
