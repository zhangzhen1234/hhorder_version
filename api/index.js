import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT1 = '/api/Business'
const PORT2 = '/api/HHPlatForm'

// 获取按揭金融机构列表

// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetMortgageCompany
api.HHPlatForm_P_GetMortgageCompany = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetMortgageCompany`, 'POST', params, 1)


// 商城
//获取一级商品分类
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetGoodsOneType
api.HHPlatForm_P_GetGoodsOneType = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetGoodsOneType`, 'POST', params, 1)

//根据品牌+车系获取颜色内饰
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetColorInner
api.HHPlatForm_P_GetColorInner = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetColorInner`, 'POST', params, 1)

//根据商品一级分类获取商品二、三级分类
//http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetGoods23TypeByOneType
api.HHPlatForm_P_GetGoods23TypeByOneType = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetGoods23TypeByOneType`, 'POST', params, 1)

// 根据角色属性获取用户
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetUserListByRolesProperty
api.HHPlatForm_P_GetUserListByRolesProperty = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetUserListByRolesProperty`, 'POST', params, 1)


//获取商品分类（逐级）
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetGoodsType
api.HHPlatForm_P_GetGoodsType = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetGoodsType`, 'POST', params, 1)


//获取某组织+四级分类下对应所有商品
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetGoodsList
api.HHPlatForm_P_GetGoodsList = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetGoodsList`, 'POST', params, 1)



//获取所有车系
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetAllSeries
api.HHPlatForm_P_GetAllSeries = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetAllSeries`, 'POST', params, 1)

//获取组织旗下品牌信息
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetBrandInfoByOrgID
api.HHPlatForm_P_GetBrandInfoByOrgID = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetBrandInfoByOrgID`, 'POST', params, 1)



// 通过名称或编码搜索某组织下的车型商品
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetAutoTypeListBywh
api.HHPlatForm_P_GetAutoTypeListBywh = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetAutoTypeListBywh`, 'POST', params, 1)


// 获取所有品牌
api.HHPF_P_GetAllBrand = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetAllBrand`, 'POST', params, 1)

// 根据品牌获取对应所有车系
api.HHPF_P_GetSeriesByBrand = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetSeriesByBrand`, 'POST', params, 1)
// http://117.40.131.154:8090/api/HHPlatForm/HHPlatForm_P_GetSeriesByBrand


// 车系id获取所有车型
api.HHPlatForm_P_GetAutoTypeListbySeriesFID = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetAutoTypeListbySeriesFID`, 'POST', params, 1)
// http://117.40.131.154:8090/api/HHPlatForm_P_GetAutoTypeListbySeriesFID


// 根据车型商品ID查询车型、车系、品牌信息
api.HHPlatForm_P_GetAutoTypeInfo = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetAutoTypeInfo`, 'POST', params, 1)
// http://117.40.131.154:8090/api/HHPlatForm/HHPlatForm_P_GetAutoTypeInfo


//获取某个商品详细信息
api.HHPlatForm_P_GetGoodsInfo = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetGoodsInfo`, 'POST', params, 1)
//http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetGoodsInfo

// 获取客户档案(个人)
api.HHPF_P_GetCustomer = params => request.globalRequest(`${PORT1}/HHPF_P_GetCustomer`, 'POST', params, 1)

// 获取客户档案(单位)
api.HHPF_P_GetUnitCustomer = params => request.globalRequest(`${PORT1}/HHPF_P_GetUnitCustomer`, 'POST', params, 1)

// 获取客户档案(个人)详情
api.HHPlatForm_P_GetCustomerInfoByID = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetCustomerInfoByID`, 'POST', params, 1)
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetCustomerInfoByID



// 获取客户档案(单位)
api.HHPF_P_GetUnitCustomer = params => request.globalRequest(`${PORT1}/HHPF_P_GetUnitCustomer`, 'POST', params, 1)

// 获取车辆档案信息数据
api.HHPF_P_GetCustomerCar = params => request.globalRequest(`${PORT1}/HHPF_P_GetCustomerCar`, 'POST', params, 1)

// 获取组织信息数据
api.HHPF_P_GetOrganization = params => request.globalRequest(`${PORT1}/HHPF_P_GetOrganization`, 'POST', params, 1)

// 获取品牌信息数据
api.HHPF_P_GetBrand = params => request.globalRequest(`${PORT1}/HHPF_P_GetBrand`, 'POST', params, 1)

// 获取车系信息数据
api.HHPF_P_GetSeries = params => request.globalRequest(`${PORT1}/HHPF_P_GetSeries`, 'POST', params, 1)

// 获取车型信息数据
api.HHPF_P_GetType = params => request.globalRequest(`${PORT1}/HHPF_P_GetType`, 'POST', params, 1)

// 根据 code 获取枚举数据
api.HHPF_P_GetBaseEnumByCode = params => request.globalRequest(`${PORT1}/HHPF_P_GetBaseEnumByCode`, 'POST', params, 1)

//根据 codes 批量获取基础枚举数据
api.HHPF_P_GetBaseEnumByCodes = params => request.globalRequest(`${PORT1}/HHPF_P_GetBaseEnumByCodes`, 'POST', params, 1)

// 销售订单数据写入
api.HHPF_P_AddAutoSalesOrder = params => request.globalRequest(`${PORT1}/HHPF_P_AddAutoSalesOrder`, 'POST', params, 1)

// 获取销售订单数据
api.HHPF_P_GetAutoSalesOrder = params => request.globalRequest(`${PORT1}/HHPF_P_GetAutoSalesOrder`, 'POST', params, 1)


// 修改销售订单
api.HHPF_P_UpdateAutoSalesOrder = params => request.globalRequest(`${PORT1}/HHPF_P_UpdateAutoSalesOrder`, 'POST', params, 1)

// 销售订单列表
api.HHPF_P_GetAutoSalesOrderList = params => request.globalRequest(`${PORT1}/HHPF_P_GetAutoSalesOrderList`, 'POST', params, 1)

// 获取保险机构列表
api.HHPlatForm_P_GetInsuranceCompany = params => request.globalRequest(`${PORT2}/HHPlatForm_P_GetInsuranceCompany`, 'POST', params, 1)
// http://117.40.131.154:8001/api/HHPlatForm/HHPlatForm_P_GetInsuranceCompany
// // GET请求方式
// api.test2 = params => request.globalRequest(`${PORT1}/posts`, 'GET',{}, 1)
// async Getsell_kind(){
			// 	let param = {"codes":["sell_kind"]}
			// 	await this.$api.HHPF_P_GetBaseEnumByCodes(param).then(res => {
			// 		// 获得数据 
			// 		console.log("获取客户档案"+res) 
			// 	 }).catch(res => {
			// 		 console.log(res)
			// 	 　　// 失败进行的操作
			// 	 })
			// },
export default api