<template>
	<view>
		<my-top></my-top>
		<view class="body-item">
			<my-nav></my-nav>
			<template v-if="num==1 && id">
				<my-collect></my-collect>
			</template>
			<template v-if="num==2 && id">
				<my-record></my-record>
			</template>
			
			<view class="contaner2">
				<view class="contaner2-top">
					<image src="../../static/22.png"  class="im"></image>
					<text style="margin-left: 92rpx;">去App Store给菜谱大全评分</text>
				</view>
				<view class="contaner2-bottom">
					<image src="../../static/31.png"  class="im"></image>
					<text style="margin-left: 92rpx;">反馈问题</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		data() {
			return {
			 
			};
		},
		// 页面显示时触发
		onShow() {
			// 页面加载完成时修改num的值
			this.$store.commit('SET_NUM',0)
		},
		computed:{
			... mapState(['num','id'])
		},
	}
</script>

<style lang="scss">
.body-item{
	width: 100%;
	background-color: #f5f5f5;
	// height: 500rpx;
	padding-top:20rpx;
	box-sizing: border-box;
	padding-bottom: 22rpx;
}
.contaner2{
	height: 190rpx;
	background-color: #fff;
	margin: 22rpx 0rpx;
	font-size: 30rpx;
	color: #5a5a5a;
}
.contaner2-top{
	height: 92rpx;
	border-bottom: 3rpx solid #f5f5f5;
	position: relative;
	line-height: 92rpx;
}
.contaner2-bottom{
	position: relative;
	line-height:98rpx ;
}
.im{
	width: 44rpx;
	height: 44rpx;
	position: absolute;
	left: 24rpx;
	top: 24rpx;
}
</style>
