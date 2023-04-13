// 子模块moduleA路径：store/modules/moduleA.js 
import {swiperdataApi} from '../api/homeApi/homeApi.js'
export default {
	state: {
		text:"我是moduleA模块下state.text的值",
		swiperdata:[]
	},
	getters: {
		
	},
	mutations: {
		swiperdata(state,playload){
			state.swiperdata=playload
		}
	},
	actions: { 
		// 获取轮播图数据
	  	getSwiperdata(context){
			swiperdataApi().then((res)=>{
				console.log(res)
				context.commit('swiperdata',res.data.message)
			})
		}
	}
}