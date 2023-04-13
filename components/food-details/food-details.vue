<template>
	<view class="contaner8">
		<view style="width: 688rpx; margin: 0 auto;">
			<view class="item" v-for="(obj,index) in videoData.method" :key="obj.img">
				<view style="font-size: 30rpx; color: #2c2c2c;">步骤{{index+1}}</view>
				<view style="width: 688rpx; height: 440rpx; margin: 28rpx 0rpx;"> 
				<image :src="obj.img" style="width: 688rpx; height: 440rpx;"></image> 
				</view>
				<view style="font-size: 30rpx; color: #686868;">{{obj.describe}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		name:"food-details",
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
.contaner8{
	background-color: #fff;
	box-sizing: border-box;
	padding-bottom: 100rpx;
}
.item{
	box-sizing: border-box;
	padding-top: 40rpx;
}
</style>