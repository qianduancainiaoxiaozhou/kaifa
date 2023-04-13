<template>
	<view>
		
		<view class="nav">
			<common-nav/>
			<view class="nav1">
				<view class="font1">{{videoData.name}}</view>
				<view class="im"> <image src="../../static/24.png" @click="fanhui"></image> </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		name:"header-navigation",
		data() {
			return {
				
			};
		},
		computed:{
			... mapState(['videoData'])
		},
		methods:{
			fanhui(){
				
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
  .nav{
  	 background-image: url(../../static/8.png);
  	 background-size: 100% 100%;
  	 height: 176rpx;
  	 text-align: center;
  	 // position: relative;
	 padding-top: 22rpx;
	 box-sizing: border-box;
	 
  	 .font1{
  		 
  		 color: #fef2ea;
  	 }
  	 image{
  		 width: 240rpx; 
  		 height: 88rpx;
  		// position: absolute;
		 
  	 }
	
  }
  .nav1{
	position: relative;
  }
  .im{
	  position: absolute;
	  top: -10rpx;
	  left: 32rpx;
  }
</style>