<template>
	<view>
		<view class="nav">
			<common-nav></common-nav>
			  <view style="display: flex; margin-top: 20rpx;">
				  <view style="margin-left: 16rpx; width: 36rpx; height: 36rpx;"> <image src="../../static/50.png" style="width: 36rpx; height: 36rpx;" @click="fanhui"></image> </view>
				<view style="width: 148rpx; height: 36rpx; margin: 0 auto;color: #fff7e9; font-size: 32rpx;">菜谱搜索</view>
			  </view>
		</view>
		<scroll-view scroll-y="true" style="height: calc(100vh - 182rpx);">
			<view class="search1">
				<view class="search2">
					<u-search shape="square" bgColor="#fff"  height="60rpx" searchIconColor="#ee8131"
					 :placeholder="name" actionStyle="color:#fff" @custom="search" v-model="val"></u-search>
				</view>
			</view>
			    <foods-search-video/>
				<foods-search-bottom/>
			</scroll-view>
				<u-toast ref="uToast"></u-toast>
	   </view>
</template>

<script>

	
	export default {
		data() {
			return {
				name:'',
				val:'',
				
			};
		},
		onLoad(option) {
			console.log(option.text)
			this.name=option.text
		},
		
		methods:{
			fanhui(){
				console.log(11)
				uni.navigateBack();
			},
		 	search(){
				// 点击页面跳转
				if(this.val){
					uni.navigateTo({
						url: '/pages/search-result/search-result?num=1&val='+this.val
					});
				}else{
					this.$refs.uToast.show({
										message:'请输入相关的菜名哦'
										
									})
				}
			  }
		
		}
	}
</script>

<style lang="scss">
 .nav{
	 background-image: url(../../static/8.png);
	 background-size: 100% 100%;
	 height: 170rpx;
	 width: 750rpx;
	
 }
 .search1{
	 background-image: url(../../static/8.png);
	 background-size: 100% 100%;
	 height: 112rpx;
	 .search2{
		 width: 540rpx;
		 margin-left: 150rpx;
		 height: 60rpx;
	 }
 }
</style>
