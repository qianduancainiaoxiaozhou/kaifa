<template>
	<view>
		<view class="contaner3">
			<view style="font-size: 40rpx; color: #303030;">猜你喜欢</view>
			
				<view class="item-new">
					<view class="item-1" v-for="item in like" :key="item._id">
						<image :src="item.coverpic" style="width:334rpx; height:248rpx;"></image>
						<view style="font-size: 36rpx; color:#575757; margin: 16rpx 0rpx;">{{item.name}}</view>
						<view>
						<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
						<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;" ></image> 
						<text style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
						<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;" ></image> 
						</view>
					</view>
				</view>
			
		</view>
	</view>
</template>

<script>
	import {likeApi} from '../../store/api/memberApi/memberApi.js'
	export default {
		name:"member-like",
		data() {
			return {
				like:[]
			};
		},
		mounted(){
			this.getLike()
			
		},
		methods:{
			async getLike(){
				const res = await likeApi()
				this.like=res.data.menus
			},
		  
		}
	}
</script>

<style lang="scss">
 .contaner3{
	  margin-top: 42rpx;
	  margin-left: 32rpx;
	 
	  
  }
  .item-new{
	  display: flex;
	  flex-wrap: wrap;
	   margin-top: 28rpx;
	  .item-1{
		  width: 334rpx;
		  height: 378rpx;
		  margin-right: 20rpx;
		  position: relative;
		  
	  }
  }
 
</style>