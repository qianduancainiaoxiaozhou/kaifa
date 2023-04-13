<template>
	<!-- 首页分类 -->
	<view class="contaner">
		<view class="item" v-for="item in catitems " :key="item._id" @click="search(item.name,item._id)">
			<view> <image :src="item.image_src"  style="width: 54rpx; height: 54rpx;"></image> </view>
			<view style="font-size: 16rpx;">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	import { categoriesApi } from '../../store/api/categoriesApi/categoriesApi.js';
import {catitemsApi} from '../../store/api/homeApi/homeApi.js'
import {  normalApi } from '../../store/api/searchApi/searchApi.js';
	export default {
		name:"catitems-item",
		data() {
			return {
				catitems:[]
			};
		},
		mounted(){
			this.getCatitems()
		},
		methods:{
			getCatitems(){
				catitemsApi().then(res=>{
					console.log(res.data.message)
					this.catitems=res.data.message
				})
			},
		   async search(name,id){
				if(name=='分类'){
					const res =await categoriesApi()
					console.log(res.data.message)
					this.$store.commit('SET_CATEGORIES',res.data.message)
					uni.navigateTo({
						url: '/pages/fenLei/fenLei'
					});
				}else{
					// 菜品随机推荐
					const res =await  normalApi()
					console.log(res.data.message)
					this.$store.commit('SET_MENUS',res.data.message)
					uni.navigateTo({
						url: '/pages/foods-search/foods-search?text='+name
					});
				}
			}
		}
	}
</script>

<style lang="scss">
   .contaner{
	    text-align: center;
	  display: flex;
	  flex-wrap: wrap;
	   .item{
		   width: 66rpx;
		   heiht:94rpx;
		   margin: 20rpx 40rpx;
	   }
   }
   
</style>