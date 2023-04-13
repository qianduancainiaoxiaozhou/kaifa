<template>
	<view>
		<header-navigation/>
		<scroll-view scroll-y="true" class="scroll-view" >
			<view class="top">
				<image src="../../static/22.png" class="nav-icon0"></image>
				<image src="../../static/26.png"  class="nav-icon" @click="getCollect(videoData._id)"></image>
				<image src="../../static/27.png"  class="nav-icon1"></image>
			</view>
			<video :src="videoData.vid" controls style="width: 750rpx; height: 386rpx;" v-if="vip" ></video>
			<view class="big" v-else>
				<image :src="videoData.coverpic"  style="width: 750rpx; height: 386rpx;" ></image>
				<view class="model">
					<view class="model-item">
						<view >开通会员观看视频做法</view>
						<view> <button @click="buyVip">立即开通</button> </view>
						<view>已是会员，立即登录</view>
					</view>
				</view>
			</view>
			<vip-button/>
			<food-material/>
			<template v-if="vip">
				<food-details></food-details>
			</template>
		</scroll-view>
		<!-- 消息提示栏 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	import { collectApi, recordApi, topupListApi } from '../../store/api/myApi/myApi';
	export default {
		data() {
			return {
				vip:false
			};
		},
		onShow() {
			// 每次进入页面时判断vip的状态
			this.getUserId()
			// 取出用户id
			const user_id = uni.getStorageSync("user_id")
			if(user_id){
				this.getRecord(user_id)
			}
			
		},
		computed:{
			... mapState(['videoData'])
		},
		methods:{
			// 收藏商品
		  async	getCollect(id){
			  // 从本地存储中获取用户id
				const user_id = uni.getStorageSync("user_id")
				if(user_id){
					const res = await collectApi({user_id,menu_id:id,method:'POST'})
					// console.log(res)
					this.code=res.data.code
					if(res.data.code==1){
						uni.showToast({
							title:'收藏成功'
						})
					}
					if(res.data.code==0){
						this.$refs.uToast.show({
											message:'取消收藏'
											
										})
					}
				}else{
					// 未登录时，弹出确认框
					 uni.showModal({
					 	title: '提示',
					 	content: '您还未登录哦，请前往登录页登录',
					 	success: (res)=> {
					 		if (res.confirm) {
					 			// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
								uni.switchTab({
									url: '/pages/my/my'
								});
					 		} else if (res.cancel) {
					 			
					 		}
					 	}
					 });
				}
				
			},
		   async buyVip(){
				const res =await topupListApi()
				// console.log(res.data.data)
				this.$store.commit('SET_TOPUPLIST', res.data.data)
				uni.navigateTo({
					url: '/pages/my-member/my-member'
				});
			},
			// 浏览记录
		   async getRecord(id){
				const res =await recordApi({user_id:id,menu_id:this.videoData._id,method:'POST'})
				// console.log(res)
			},
			getUserId(){
				// 从本地中取出token
				const token = uni.getStorageSync("user_token")
				if (token) {
					uni.request({
						url: "http://nocat.life:4000/user/getUserInfo",
				
						data: {
							token,
						},
						header: {
							Authorization: token
						},
						success: (res) => {
							// console.log(res.data[0].vip)
							this.vip=res.data[0].vip
						},
					})
					}
				},
		}
	}
</script>

<style lang="scss">
.top{
		background-image: url(../../static/8.png);
		background-size: 100% 100%;
		width: 750rpx;
		height: 50rpx;
		position: relative;
	}
.nav-icon0{
			 width: 50rpx;
			 height: 50rpx;
			 position: absolute;
			 left: 50rpx;
			 top: 5rpx;
		 }
 .nav-icon{
		 width: 50rpx;
		 height: 50rpx;
		 position: absolute;
		 left: 604rpx;
		 top: 5rpx;
	 }
	 .nav-icon1{
	 		 width: 50rpx;
	 		 height: 50rpx;
	 		 position: absolute;
	 		 left: 670rpx;
	 		 top: 5rpx;
	 }
	 .scroll-view{
		 width: 750rpx;
		 height: calc(100vh - 176rpx);
		 background-color: #f6f7f8;
	 }
	 .big{
		 width: 750rpx;
		 height: 386rpx;
		 position: relative;
	 }
	 .model{
		 width: 750rpx;
		 height: 386rpx;
		 position: absolute;
		 left: 0;
		 top: 0;
		 background-color: rgba(0, 0, 0, 0.5);
		 .model-item{
			 width: 330rpx;
			 height: 200rpx;
			 margin: 80rpx auto 0rpx;
			 font-size: 32rpx;
			 color: #fff;
			 button{
				 width: 250rpx;
				 height: 50rpx;
				 border: none;
				 border-radius: 25rpx;
				 margin: 20rpx auto;
				 font-size: 32rpx;
				 background-color: #e7b665;
				 color: #ee7b2d;
				 line-height: 50rpx;
				 
			 }
		 }
	 }
</style>
