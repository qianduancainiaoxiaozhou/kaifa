<template>
	<view>
		<view class="nav">
			<common-nav/>
			<view class="nav1">
				<view class="font1">食材分类</view>
				<view class="im"> <image src="../../static/24.png" @click="fanhui"></image> </view>
			</view>
		</view>
		<view class="nav2">
			<view class="top-nav">
				<view :class="cout==0?'top-left':'top-right'" @click="top(0)">分类</view>
				<view :class="cout==1?'top-left':'top-right'" @click="top(1)">食材</view>
			</view>
			<view class="search">	
			  <u-search placeholder="想吃什么搜这里,如麻婆豆腐" shape="square" 
			  bgColor="#f1f1f1" :showAction="false" inputAlign="center" searchIconSize=0></u-search>
			  <image src="../../static/32.png" class="im1"></image>
			</view>
		</view>
		<fenLei-categories></fenLei-categories>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 cout:0
			};
		},
		methods:{
			fanhui(){
				
				uni.navigateBack();
			},
			top(cout){
				this.cout=cout
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
  .nav2{
	  background-image: url(../../static/8.png);
	  background-size: 100% 100%;
	  height: 180rpx;
	  padding-top: 10rpx;
	  box-sizing: border-box;
  }
  .top-nav{
	  width: 376rpx;
	  height: 44rpx;
	  margin: 0 auto;
	  border-radius: 22rpx;
	  border: 3rpx solid #fff;
	  font-size: 28rpx;
	  display: flex;
	  .top-left{
		  width: 192rpx;
		  height: 48rpx;
		  text-align: center;
		  line-height: 44rpx;
		  background-color: #fff;
		  border-radius: 24rpx;
		  color: #ef7d2a;
		  text-align: center;
	  }
	  .top-right{
	  		  width: 192rpx;
	  		  height: 48rpx;
	  		  text-align: center;
	  		  line-height: 44rpx;
	  		   color: #fff;
			   text-align: center;
	  }
  }
  .search{
	  width: 690rpx;
	  height: 54rpx;
	  margin: 16rpx auto 0rpx;
	  position: relative;
	  .im1{
		  position: absolute;
		  left: 132rpx;
		  top: 15rpx;
		  width: 32rpx;
		  height: 32rpx;
	  }
  }
</style>
