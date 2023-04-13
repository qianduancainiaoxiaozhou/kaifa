import request from '../../../utils/request.js'
// 我的收藏
export const myCollectApi=(data)=>{
	return request('user/getcollect',data)
}
// 收藏餐品
export const collectApi=(data)=>{
	return request('user/collect',data)
}
// 套餐列表
export const topupListApi=()=>{
	return request('user/topupList')
}
// 开通会员
export const openVipApi=(data)=>{
	return request('user/openVip',data)
}
// 浏览餐品
export const recordApi=(data)=>{
	return request('user/record',data)
}
// 我的浏览记录
export const myRecordApi=(data)=>{
	return request('user/getrecord',data)
}
