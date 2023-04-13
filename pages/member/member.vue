<template>
	<view>
		<view class="nav">
			<view class="font1">VIP会员</view>
		</view>
		<scroll-view :scroll-y="true" class="scroll-view">
			<member-top></member-top>
			<member-recommend></member-recommend>
			<member-like></member-like>
			<member-vipExclusive></member-vipExclusive>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
 .nav{
	 background-image: url(../../static/8.png);
	 background-size: 100% 100%;
	 height: 182rpx;
	 text-align: center;
	 position: relative;
	 .font1{
		 position: absolute;
		 left: 310rpx;
		 top:112rpx;
		 color: #fef2ea;
	 }
 }
 .scroll-view{
	 width: 100%;
	 height: calc(100vh - 182rpx);
 }
</style>
