<template>
	<view>
		<header-navigation/>
		<scroll-view scroll-y="true" class="scroll-view" >
			<view class="top">
				<image src="../../static/26.png"  :class="code==0?'nav-icon':'active'" @click="getCollect(videoData._id)"></image>
				<image src="../../static/27.png"  class="nav-icon1"></image>
			</view>
			<video :src="videoData.vid" controls style="width: 750rpx; height: 386rpx;" ></video>
			<vip-button/>
			<food-material/>
		</scroll-view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
import { collectApi } from '../../store/api/myApi/myApi';
	export default {
		data() {
			return {
				code:0
			};
		},
		computed:{
			... mapState(['videoData'])
		},
		
		methods:{
			// 收藏商品
		  async	getCollect(id){
			  // 从本地存储中获取用户id
				const user_id = uni.getStorageSync("user_id")
				const res = await collectApi({user_id,menu_id:id,method:'POST'})
				console.log(res)
				// 保存code到本地存储
				this.code=res.data.code
			
				if(res.data.code==1){
					uni.showToast({
						title:'收藏成功'
					})
				}
				if(res.data.code==0){
					uni.showToast({
						title:'取消收藏'
					})
				}
			}
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
	 .active{
		 width: 50rpx;
		 height: 50rpx;
		 position: absolute;
		 left: 604rpx;
		 top: 5rpx;
		  // background-color: red;
	 }
</style>
