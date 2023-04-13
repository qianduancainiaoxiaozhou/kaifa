<template>
	<view class="contaner">
		<view style="width: 326rpx;height: 100%;">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			     style="width: 326rpx;height: 100%;">
				<swiper-item v-for="item in floor[0].floor_imgs" :key="item._id" style="width: 326rpx;height: 100%;"
				  :circular="true">
					<view class="swiper-item">
						<image :src="item" style="width: 326rpx;height:358rpx;" ></image>
						<view class="title1">{{floor[0].floor_title}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view style="width: 328rpx; height: 100%;">
			<template v-for="(obj,index) in floor">
				<view v-if="index!=0" :key="obj._id" style="position: relative;">
					<view v-for="obj1 in obj.floor_imgs" :key="obj._id">
						<image :src="obj1" style="width: 328rpx; height: 174rpx;"></image>
					</view>
					<view class="title1">{{obj.floor_title}}</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import {floorApi} from '../../store/api/homeApi/homeApi.js'
	export default {
		name:"floor-item",
		data() {
			return {
				floor:[]
			};
		},
		mounted(){
			this.getFloor()
		},
		methods:{
			getFloor(){
				floorApi().then(res=>{
					this.floor=res.data.message
					console.log(res.data.message)
				})
			}
		}
	}
</script>

<style lang="scss">
 .contaner{
	 width: 686rpx;
	 height: 358rpx;
	 margin: 10rpx auto 0rpx;
	 display: flex;
	 justify-content: space-between;
 }
 .swiper-item{
	 width: 326rpx;
	 height:358rpx;
	 position: relative;
 }
 .title1{
	 width: 164rpx;
	 height: 56rpx;
	 font-size: 28rpx;
	 text-align: center;
	 line-height: 56rpx;
	 color: #fff;
	 background-color: rgba(229, 157, 102, 0.3);
	 position: absolute;
	 left: 12rpx;
	 top: 12rpx;
 }
</style>