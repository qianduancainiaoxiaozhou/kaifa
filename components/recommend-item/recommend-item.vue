<template>
	<!-- 商品推荐 -->
	<view class="contaner">
		<view class="item" v-for="item in recommend " :key="item._id">
			<image :src="item.coverpic"  style="width: 332rpx; height: 244rpx;" @click="details(item._id)"></image>
			<view style="font-size: 24rpx; color: rgb(87, 87, 87);">{{item.name}}</view>
			<view> 
			<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
			<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;" ></image> 
			<text style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
			<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;" ></image> 
			</view>
		</view>
	</view>
</template>

<script>
	import {recommendApi} from '../../store/api/homeApi/homeApi.js'
import { menuDetailApi } from '../../store/api/searchApi/searchApi.js';
	export default {
		name:"recommend-item",
		data() {
			return {
				recommend:[]
			};
		},
		mounted(){
			this.getRecommend()
		},
		methods:{
			getRecommend(){
				recommendApi().then(res=>{
					// console.log(res.data.message)
					this.recommend=res.data.message
				})
			},
		   async details(id){
				 const res =await  menuDetailApi({_id:id,method:'POST'})
				 console.log(res)
			}
		}
	}
</script>

<style lang="scss">
 .contaner{
	 width: 686rpx;
	 margin: 24rpx auto 0rpx;
	 display: flex;
	 flex-wrap: wrap;
 }
 .item{
	 width: 332rpx;
	 height: 340rpx;
	 margin-bottom: 14rpx;
	 margin-right: 11.5rpx;
 }
</style>