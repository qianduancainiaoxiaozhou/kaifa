import request from '../../../utils/request.js'
// 轮播图
export const swiperdataApi=()=>{
	return request('home/swiperdata')
}
// 首页分类
export const catitemsApi=()=>{
	return request('home/catitems')
}
// 楼层
export const floorApi=()=>{
	return request('home/floorsdata')
}
// 商品推荐
export const recommendApi=()=>{
	return request('home/recommend')
}