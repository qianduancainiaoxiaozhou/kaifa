<template>
	<view>
		<view class="contaner">
			<common-nav></common-nav>
		      <view style="display: flex; margin-top: 20rpx;">
				  <view style="margin-left: 16rpx;"> <image src="../../static/50.png" style="width: 36rpx; height: 36rpx;" @click="back"></image> </view>
				<view style="width: 148rpx; height: 36rpx; margin: 0 auto;color: #fff7e9; font-size: 32rpx;">支付完成</view>
			  </view>
		    <view style="width: 96rpx; height: 96rpx; margin: 46rpx auto 0rpx;">
				<image src="../../static/47.png" style="width: 96rpx; height: 96rpx;"></image>
			</view>
			<view style="width: 144rpx; height: 36rpx; margin: 30rpx auto 0rpx;color: #fff7e9; font-size: 32rpx; ">支付成功</view>
		    <view style="width: 154rpx; height: 32rpx;margin: 5rpx auto;color: #ffc37e; font-size: 26rpx;">已支付￥{{price}}</view>
		</view>
		<view class="center">
			<view class="im"> <image src="../../static/48.png" style="width: 250rpx; height: 250rpx;"></image> </view>
		</view>
		<view class="item1"><text style="margin-right: 10rpx;">立即分享</text><text>领取豪礼</text></view>
		<view class="item2">立即分享</view>
		<view class="item3" @click="back">返回首页</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				price:null
			};
		},
		onLoad(option) {
			this.price=option.price
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 2
				});
			}
		}
	}
</script>

<style lang="scss">
.contaner{
	background-image: url(../../static/46.png);
	background-size: 100% 100%;
	width: 750rpx;
	height: 624rpx;
}
.center{
	background-image: url(../../static/49.png);
	background-size: 100% 100%;
	width: 314rpx;
	height: 314rpx;
	margin: -216rpx auto 0rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.item1{
	width: 334rpx;
	height: 40rpx;
	font-size: 40rpx;
	color: #5f5f5f;
	margin: 56rpx auto 0rpx;
}
.item2{
	width: 542rpx;
	height: 90rpx;
	background-color: #ffab2c;
	font-size: 40rpx;
	color: #fff;
	text-align: center;
	line-height: 90rpx;
	border-radius: 43rpx;
	margin: 48rpx auto;
	
}
.item3{
	width: 542rpx;
	height: 90rpx;
	border: 3rpx solid #ffab2c;
	font-size: 40rpx;
	color: #ffab2c;
	text-align: center;
	line-height: 90rpx;
	border-radius: 43rpx;
	margin: 48rpx auto;
}

</style>
