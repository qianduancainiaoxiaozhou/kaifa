<template>
	<view style="width: 750rpx; height: 300rpx; background-color: #fff; padding-top: 26rpx; box-sizing: border-box;">
		<button class="btn">会员低至2元/月,免广告、看10000+名厨视频</button>
		<view class="fot3">{{videoData.name}}</view>
		<view class="center">
			<text>会员专享</text>
			<image src="../../static/30.png" style="width: 26rpx; height: 26rpx;"></image>
			<text>2.8万浏览</text>
			<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;"></image>
			<text>117收藏</text>
			<image src="../../static/18.png" style="width: 24rpx; height: 24rpx;"></image>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		name:"vip-button",
		data() {
			return {
				
			};
		},
		computed:{
			... mapState(['videoData'])
		},
	}
</script>

<style lang="scss">
.btn{
	width: 686rpx;
	height: 88rpx;
	border-radius: 16rpx;
	background-color: #e7b665;
	margin: 0rpx auto ;
	font-size: 30rpx;
	color: #fff;
	line-height: 88rpx;
	
}
.fot3{
	font-size: 32rpx;
	margin: 50rpx auto 32rpx;
	text-align: center;
}
.center{
	width: 374rpx;
	margin: 0 auto;
	font-size: 18rpx;
	color: #adadad;
	image{
		margin-right: 20rpx;
	}
}
</style>