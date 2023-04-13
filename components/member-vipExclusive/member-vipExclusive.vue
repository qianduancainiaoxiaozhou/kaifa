<template>
	<view>
		<view>
			<view class="contaner3">
				<view style="font-size: 40rpx; color: #303030;">精品名厨(会员专享)</view>
				 <view class="item-new">
						<view class="item-1" v-for="item in vipMenus" :key="item._id">
							<image :src="item.coverpic" style="width:334rpx; height:248rpx;" @click="vipVideo(item)"></image>
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
	</view>
</template>

<script>
import { vipApi } from '../../store/api/memberApi/memberApi';
	export default {
		name:"member-vipExclusive",
		data() {
			return {
				vipMenus:null
			};
		},
		mounted() {
		    this.getVip()	
		},
		methods:{
		   async getVip(){
				const res = await vipApi()
				console.log(res.data.menus)
				this.vipMenus=res.data.menus
			},
			vipVideo(data){
				// 将数据传入状态机
				this.$store.commit('SET_DATA', data)
				uni.navigateTo({
					url: '/pages/vipVideo/vipVideo'
				});
			}
		}
	}
</script>

<style lang="scss">
.contaner3{
	  margin-top: 42rpx;
	  margin-left: 32rpx;
	 box-sizing: border-box;
	 padding-bottom: 100rpx;
	  
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