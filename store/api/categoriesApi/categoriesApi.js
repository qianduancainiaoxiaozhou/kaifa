import request from '../../../utils/request.js'
// 分类接口
export const categoriesApi=()=>{
	return request('categories')
}