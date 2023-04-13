<template>
	<view class="contaner" v-if="menus.length!=0 && val">
		<scroll-view scroll-y="true" class="scroll-view">
			<view class="item" v-for="item in menus" :key="item._id">
				<view class="item-left">
					<image :src="item.coverpic" style="width: 314rpx;height: 210rpx;" @click="vipVideo(item)">
					</image>
				</view>
				<view class="item-right">
					<view style="font-size: 30rpx; color: #3a3a3a; margin: 16rpx 0rpx;">{{item.name}}</view>
					<view class="fot">
						<text v-for="obj in item.ingredient" class="fot1">{{obj.name}}、</text>
					</view>
					<view style="margin-top: 34rpx;">
						<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
						<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;"></image>
						<text
							style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
						<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;">
						</image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		searchMenuApi
	} from '../../store/api/searchApi/searchApi';
	export default {
		data() {
			return {
				val:'',
				menus:[]
			};
		},
		onLoad(option) {
			this.val=option.val
			console.log(option.val)
			this.search()
		},
		methods:{
			async search() {
							
							const res = await searchMenuApi({
								method: 'POST',
								val: this.val,
								pageSize: this.pageSize,
								currentPage: this.currentPage
							})
							
							console.log(res.data.menus)
							this.total = res.data.total
							// 使用扩展之后再重新赋值的方式将每次获得的数据进行累加
							this.menus = [
								...this.menus,
								...res.data.menus
							]
							
								
							
			},
		}
	}
</script>

<style lang="scss">
  .contaner {
  	margin-top: 74rpx;
  }
  
  .item {
  	width: 628rpx;
  	height: 210rpx;
  	margin-bottom: 14rpx;
  	margin-left: 32rpx;
  	display: flex;
  	justify-content: space-between;
  
  	.item-left {
  		width: 314rpx;
  		height: 210rpx;
  	}
  
  	.item-right {
  		width: 296rpx;
  		height: 210rpx;
  	}
  }
  
  .fot {
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }
  
  .fot1 {
  	font-size: 24rpx;
  	color: #dbdbdb;
  }
  
  .scroll-view {
  	height: calc(100vh - 50rpx);
  }
</style>
