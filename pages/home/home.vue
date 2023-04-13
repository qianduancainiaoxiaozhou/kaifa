<template>
	<view>
		<view class="nav">
			<common-nav></common-nav>
			<view class="font1">香哈菜谱大全</view>
			<view class="font2">小白学做菜必备烹饪助手</view>
		</view>
		<view class="search">
			<u-search inputAlign="center" :showAction=false height="70rpx" bgColor="rgb(255, 255, 255)"
				searchIconColor="rgb(238, 129, 49)" placeholder="共有85724道菜" :disabled="true"
				 @click="search"></u-search>
		</view>
		<scroll-view  scroll-y="true" class="scroll">
			<view>
				<view class="uni-margin-wrap">
					<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="interval"
						:duration="duration" indicator-color="#fff">
						<swiper-item v-for="item in swiper" :key="item._id">
							<view class="swiper-item uni-bg-red">
								<image :src="item.image_src" ></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<catitems-item></catitems-item>
				<floor-item></floor-item>
				<recommend-item></recommend-item>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import {swiperdataApi} from '../../store/api/homeApi/homeApi.js'
	import {
		mapState
	} from 'vuex' //引入mapState
	export default {
		data() {
			return {
                     interval: 2000,
                     duration: 500,
					 swiper:[]
			};
		},
		onLoad() {
			this.getApp()
			
		},
		
		methods: {
			getApp() {
				swiperdataApi().then(res => {
					
					this.swiper=res.data.message
				})
			},
		  search(){
			  console.log(11)
			  uni.navigateTo({
			  	url: '/pages/foods-search/foods-search'
			  });
		  }
		}
	}
</script>

<style lang="scss">
	.nav {
		background-image: url(../../static/1.png);
		background-size: 100% 100%;
		height: 220rpx;

		.font1 {
			font-size: 32rpx;
			color: rgb(255, 255, 255);
			margin-left: 30rpx;
			margin-top: 6rpx;
		}

		.font2 {
			font-size: 24rpx;
			color: rgb(255, 255, 255);
			margin-left: 30rpx;
			margin-top: 8rpx;

		}
	}

	.search {
		width: 680rpx;
		margin: -35rpx auto 0px;
	}
	.uni-margin-wrap{
		width: 686rpx;
		height:304rpx;
		margin: 18rpx auto 0rpx;
		.swiper-item{
			width: 686rpx;
			height:304rpx;
			image{
				width: 686rpx;
				height:304rpx;
			}
		}
	}
	.swiper{
		width: 686rpx;
		height:304rpx;
	}
	.scroll{
		width: 750rpx;
		height:80vh;
	}
</style>
