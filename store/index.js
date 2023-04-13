// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		username:"会员",
		videoData:null,
		userInfo:null,
		menus:null,
		categories:null,
		topupList:null,
		num:0,
		mycollect:null,
		id:null,
		myrecord:null,
		arr:[]
	},
	mutations:{
	     SET_DATA(state,playload){
			 state.videoData=playload
			 
		 },
		 SET_USER_INFO(state,playload){
			 state.userInfo=playload
		 },
		SET_MENUS(state,playload){
			 state.menus=playload
		},
		SET_CATEGORIES(state,playload){
			state.categories=playload
		},
		SET_TOPUPLIST(state,playload){
			state.topupList=playload
		},
		SET_NUM(state,playload){
			state.num=playload
		},
		SET_mycollect(state,playload){
			state.mycollect=playload
		},
		SET_ID(state,playload){
			state.id=playload
		},
		SET_myrecord(state,playload){
			state.myrecord=playload
		},
		SET_ARR(state,playload){
			state.arr=[
				playload,
				...state.arr
			]
		}
	},
	// 计算属性的用法
	getters:{
		// getId:state=>{
		// 	return state.userInfo
		// }
		
		// foodList:state=>{
		//    return state.mycollect[0].ingredient
		// }
	}
})
export default store