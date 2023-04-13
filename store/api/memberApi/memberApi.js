import request from '../../../utils/request.js'
// 最新推荐
export const recommendApi=()=>{
	return request('vip/getRecommendMenuList')
}
// 限时免费
export const freeApi=()=>{
	return request('vip/getisFreeMenuList')
}
// 猜你喜欢
export const likeApi=()=>{
	return request('vip/likeMenu')
}
// VIP专享(精品名厨)
export const vipApi=()=>{
	return request('vip/vipExclusive')
}