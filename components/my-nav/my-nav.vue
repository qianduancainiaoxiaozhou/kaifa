<template>
	<view class="main">
		<view class="center">
			<view class="item"  @click="show(1)"> 
			<image src="../../static/18.png"  style="width: 44rpx; height: 44rpx;"></image> 
			 <view>我的收藏</view>
			 </view>
			 <view class="item" @click="show1(2)">
			 <image src="../../static/21.png"  style="width: 44rpx; height: 44rpx;"></image> 
			  <view >浏览记录</view>
			  </view>
			  <view class="item" @click="show2(3)">
			  <image src="../../static/22.png"  style="width: 44rpx; height: 44rpx;"></image> 
			   <view >点赞</view>
			   </view>
		</view>
		<u-toast ref="uToast"></u-toast>
		
	</view>
</template>

<script>
	import {myCollectApi,myRecordApi} from '../../store/api/myApi/myApi.js'
	export default {
		name:"my-nav",
		data() {
			return {
				
			};
		},
		methods:{
			// 我的收藏
			show(num){
					this.$store.commit('SET_NUM', num)
				const user_id = uni.getStorageSync("user_id")
				if(user_id){
					this.getcollect({_id:user_id })
					this.$store.commit('SET_ID', user_id)
				}else{
					this.$refs.uToast.show({
										message:'请先登录'
									    })
				}
				
			},
			// 我的浏览
			show1(num){
					this.$store.commit('SET_NUM', num)
				const user_id = uni.getStorageSync("user_id")
				if(user_id){
					this.getrecord({_id:user_id })
					this.$store.commit('SET_ID', user_id)
				}else{
					this.$refs.uToast.show({
										message:'请先登录'
									    })
				}
				
			},
			// 收藏的请求函数
			async getcollect(data){
							const res = await myCollectApi(data)
							console.log(res.data.mycollect)
							this.$store.commit('SET_mycollect', res.data.mycollect)
						},
						// 浏览的请求函数
						async getrecord(data){
									  const res= await myRecordApi(data)
									  console.log(res.data.record)
									  this.$store.commit('SET_myrecord', res.data.record)
							}
		}
	}
</script>

<style lang="scss">
.main{
	width: 750rpx;
	height: 122rpx;
	background-color: #fff;
	padding-top: 14rpx;
	box-sizing: border-box;
	
}
.center{
	width: 650rpx;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.item{
	text-align: center;
	font-size: 30rpx;
	color: #5a5a5a;
}
</style>