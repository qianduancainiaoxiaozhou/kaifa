<template>
	<view>
		<view class="contaner">
			<view style="font-size: 40rpx; color: #303030;">VIP最新推荐</view>
			<scroll-view scroll-x="true"  class="scroll-view ">
				<view class="item-new">
					<view class="item-1" v-for="item in recommend" :key="item._id">
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
		<view class="contaner1">
			<view style="font-size: 40rpx; color: #303030;">限时免费体验</view>
			<scroll-view scroll-x="true"  class="scroll-view ">
				<view class="item-new">
					<view class="item-1" v-for="item in free" :key="item._id">
						<image :src="item.coverpic" style="width:314rpx; height:220rpx;" @click="freeVideo(item)"></image>
						<view style="font-size: 32rpx; color:#575757; margin-top: 16rpx ">{{item.name}}</view>
						<view class="item-time"> <image src="../../static/16.png" style="width: 82rpx; height: 24rpx;"></image> </view>
						
						<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
						<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;" ></image> 
						<text style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
						<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;" ></image> 
						
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	// 引入mapState
	import { mapState } from 'vuex'
	import {recommendApi,freeApi} from '../../store/api/memberApi/memberApi.js'
	export default {
		name:"member-recommend",
		data() {
			return {
				recommend:[],
				free:[]
			};
		},
		mounted(){
			this.getRecommend()
			this.getFree()
		},
		methods:{
		async getRecommend(){
			   const res= await	recommendApi();
			   console.log(res.data.menus)
			   this.recommend=res.data.menus
			},
			async getFree(){
						const res =await freeApi()
						 this.free=res.data.menus
						 console.log(res.data.menus)
					},
			freeVideo(data){
				// 将数据传入状态机
				this.$store.commit('SET_DATA', data)
				uni.navigateTo({
					url: '/pages/freeVideo/freeVideo'
				});
			},
			vipVideo(data){
				// 将数据传入状态机
				this.$store.commit('SET_DATA', data)
				uni.navigateTo({
					url: '/pages/vipVideo/vipVideo'
				});
			}
		},
	  
	}
</script>

<style lang="scss">
  .contaner{
	  margin-top: 42rpx;
	  margin-left: 32rpx;
	  display: block;
	  height: 370rpx;
  }
  .contaner1{
  	  margin-top: 42rpx;
  	  margin-left: 32rpx;
  	  
  	  
  }
  .item-new{
	  display: flex;
	  .item-1{
		  width: 314rpx;
		  height: 330rpx;
		  margin-right: 12rpx;
		  position: relative;
		  .item-time{
			  position: absolute;
			  right: 17rpx;
			  bottom: 124rpx;
		  }
	  }
  }
  .scroll-view {
	  margin-top: 28rpx;
	  height: 330rpx;
  }
</style>