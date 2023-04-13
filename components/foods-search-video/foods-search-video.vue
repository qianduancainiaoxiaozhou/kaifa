<template>
	<view>
		<view class="contaner">
			<view style="font-size: 36rpx; color: #303030;">
				<text>精品名厨视频-会员专享</text>
				<image src="../../static/25.png" style="width: 50rpx; height: 50rpx; margin-left: 15rpx;" ></image>
			</view>
			<scroll-view scroll-x="true"  class="scroll-view ">
				<view class="item-new">
					<view class="item-1" v-for="item in memberRecommend" :key="item._id">
						<image :src="item.coverpic" style="width:314rpx; height:220rpx;" @click="vipVideo(item)"></image>
						<view style="font-size: 32rpx; color:#575757; margin-top: 10rpx ">{{item.name}}</view>
						<view class="item-time"> <image src="../../static/16.png" style="width: 82rpx; height: 24rpx;"></image> </view>
						<view>
						<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
						<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;" ></image> 
						<text style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
						<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;" ></image> 
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { videoApi } from '../../store/api/searchApi/searchApi';

	export default {
		name:"foods-search-video",
		data() {
			return {
				memberRecommend:[]
			};
		},
		mounted(){
			this.getVideo()
			
		},
		methods:{
			async getVideo(){
						     const res=await videoApi()
							 console.log(res.data.message)
							 this.memberRecommend=res.data.message
					},
				  vipVideo(data){
				  	// 将数据传入状态机
				  	this.$store.commit('SET_DATA', data)
				  	uni.navigateTo({
				  		url: '/pages/vipVideo/vipVideo'
				  	});
				  }
		}
	  
	}
</script>

<style lang="scss">
 .contaner{
	  margin-top: 42rpx;
	  margin-left: 32rpx;
	  display: block;
	  height: 370rpx;
  }
  .scroll-view {
  	  margin-top: 28rpx;
  	  height: 330rpx;
  }
  .item-new{
  	  display: flex;
  	  .item-1{
  		  width: 314rpx;
  		  height: 330rpx;
  		  margin-right: 12rpx;
		  background-color: #f9f9f9;
  		  position: relative;
  		  .item-time{
  			  position: absolute;
  			  right: 17rpx;
  			  bottom: 124rpx;
  		  }
  	  }
  }
</style>