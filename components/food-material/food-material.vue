<template>
	<view class="contaner5">
		<view class="top1">
			<view style=" vertical-align: middle;">
				<image src="../../static/28.png" style="width: 36rpx; height: 36rpx;" ></image>
				<text>30分钟以上</text>
			</view>
			<view>
				<image src="../../static/29.png" style="width: 36rpx; height: 36rpx;" ></image>
				<text>切墩（初级）</text>
			</view>
		</view>
		<view  class="content">
			<view class="title">
				<view>用料</view>
				<view style="color: #f5b488;">加入购物清单</view>
			</view>
			<view class="item" v-for=" (obj,index) in videoData.ingredient" :key="index">
				<view>{{obj.name}}</view>
				<view class="item-font">{{obj.number}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		name:"food-material",
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
.contaner5{
	margin-top: 30rpx;
	background-color: #fff;
	padding-top:32rpx;
	box-sizing: border-box;
	padding-bottom: 45rpx;
	.top1{
		width: 400rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		font-size: 20rpx;
		color: #686868;
		// 文字和图片对齐
		 vertical-align: middle;
		text{
			margin-left: 10rpx;
		}
	}
}
.content{
	width: 690rpx; 
	margin: 20rpx auto 0rpx;
	font-size: 32rpx;
	color: #686868;
}
.title{
	display: flex;
	height: 60rpx;
	border-bottom:2rpx solid #f1f1f1 ;
	justify-content: space-between;
}
.item{
	width: 100%;
	height:74rpx;
	line-height: 74rpx;
	display: flex;
	justify-content: space-between;
	border-bottom:2rpx solid #f1f1f1 ;
}
.item-font{
	width: 254rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>