import request from '../../../utils/request.js'
// 精品名厨视频
export const videoApi=()=>{
	return request('search/memberRecommend')
}
// 菜单详情
export const menuDetailApi=(data)=>{
	return request('search/menuDetail',data)
}
// 随机推荐
export const normalApi=()=>{
	return request('search/normalRecommend')
}
// 菜品搜索
export const searchMenuApi=(data)=>{
	return request('search/searchMenu',data)
}