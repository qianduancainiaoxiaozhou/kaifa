<template>
	<view>
		<view class="contaner3">
			<view class="item-new">
					<view class="item-1" v-for="item in myrecord" :key="item._id">
						<image :src="item.coverpic" style="width:334rpx; height:248rpx;"></image>
						<view style="font-size: 36rpx; color:#575757; margin: 16rpx 0rpx;">{{item.name}}</view>
						<view>
						<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
						<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;" ></image> 
						<text style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
						<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;" ></image> 
						</view>
					</view>
				</view>
			
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex'//引入mapState
	export default {
		name:"my-record",
		data() {
			return {
				
			};
		},
		computed:{
			... mapState(['myrecord'])
		},
	}
</script>

<style lang="scss">
.contaner3{
	 
	  margin-left: 32rpx;
	  background-color: #fff;
	  
  }
  .item-new{
	  display: flex;
	  flex-wrap: wrap;
	   margin-top: 28rpx;
	  .item-1{
		  width: 334rpx;
		  height: 378rpx;
		  margin-right: 20rpx;
		  position: relative;
		  
	  }
  }
 
</style>