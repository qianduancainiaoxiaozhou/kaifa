<template>
	<view>
		<view class="top">
			<view v-if="userInfo">
				<view class="head-picture" >
					<image :src="userInfo.avatarUrl" style="width: 116rpx; height: 116rpx; border-radius: 50%;"></image>
				</view>
				<view class="fot1" @click="Exit">退出登录</view>
				<view class="fot2">登录后可收藏喜欢的菜谱</view>
			</view>
			<view v-else>
				<view class="head-picture" >
					<image src="../../static/19.png" style="width: 116rpx; height: 116rpx;"></image>
				</view>
				<view class="fot1" @click="login">立即登录</view>
				<view class="fot2">登录后可收藏喜欢的菜谱</view>
			</view>
		</view>
		<view class="foot">
			<image src="../../static/20.png"  style="width: 688rpx; height: 118rpx;"></image>
			<view class="title">升级为VIP</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		name:"my-top",
		data() {
			return {
				vipdate:''
			};
		},
		computed:{
			... mapState(['userInfo'])
		},
		methods:{
			login(){
				// console.log(11)
				// 授权登录
				
					uni.getUserProfile({
						desc:'用于登录授权',
						success:(res)=>{
							console.log(res)
							this.$store.commit('SET_USER_INFO', res.userInfo)
							this.getCode()
						}
					})
				
				
			},
			getCode(){
				// 获取code
				uni.login({
					success: (res) => {
						console.log(res.code)
						this.getToken(res.code)
					}
				})
			},
			getToken(code){
				// 获取token
				uni.request({
					url:'http://nocat.life:4000/user/wxLogin',
					method:"POST",
					// 传相关的data参数
					data:{
						code,
						appId:'wx205976c462e084ac',
						appSecret:'6f9b9e4077842e24a54951957accbdb0',
						
					},
					success: (res) => {
						// console.log(res)
						// 保存token
					   uni.setStorage({
					   	  key:'user_token',
						  data:res.data.token
					   })
					   this.update(res.data.token)
					}
				})
			},
			update(token){
				// 更新用户信息
				uni.request({
					url:"http://nocat.life:4000/user/auth",
					method:"POST",
					data:{
						token,
						...this.userInfo
					},
					success: (res) => {
						console.log(res)
						this.getUserId()
					}
				})
			},
			// 获取用户id
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
							console.log(res)
							// 保存用户id到本地存储,后续需要用
							uni.setStorage({
								key: 'user_id',
								data:  res.data[0]._id
							})
							
							
							  // const time1 = '7/2/2023'
							  // 将时间的值进行字符串的分割
							 const mon= res.data[0].vipdate.split('/')[0]
							 const day=res.data[0].vipdate.split('/')[1].split('/')[0]
							 const year1 =res.data[0].vipdate.slice(2,9).split('/')[1]
							  let nowTime =new Date()
							  let vipTime =new Date( 2023,2,4)
							  console.log(vipTime.getTime() - nowTime.getTime())
							  if(vipTime.getTime() - nowTime.getTime()<3*24*60*60*1000
							  &&vipTime.getTime() - nowTime.getTime()>2*24*60*60*1000 ){
								   this.$refs.uToast.show({message:'您会员还有三天了哦，请尽快充值' })
							              }
							if(vipTime.getTime() - nowTime.getTime()<2*24*60*60*1000 
							&&vipTime.getTime() - nowTime.getTime()>1*24*60*60*1000 ){
															   
									this.$refs.uToast.show({message:'您会员还有二天了哦，请尽快充值' })
							           
									 }	
							if(vipTime.getTime() - nowTime.getTime()<1*24*60*60*1000){
																				   
									this.$refs.uToast.show({message:'您会员还有最后一天哦，请尽快充值' })
												           
									 }		
						}
					})
				}
			},
			Exit(){
				// 弹出确认框
				uni.showModal({
					title: '提示',
					content: '确定要退出登录吗',
					success: (res)=> {
						if (res.confirm) {
							console.log('用户点击确定');
							// 清除本地存储
							uni.removeStorageSync('user_token');
							uni.removeStorageSync('user_id');
							uni.removeStorageSync('user_vip');
							uni.removeStorageSync('user_vipdate');
							// 因为this的指向问题，上面success的普通函数，需要改成箭头函数
							this.$store.commit('SET_USER_INFO', null)
							this.$store.commit('SET_NUM', 0)
							this.$store.commit('SET_mycollect', null)
							this.$store.commit('SET_ID', null)
						} else if (res.cancel) {
							
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.top{
		position: relative;
		
	}
.head-picture{
	width: 116rpx;
	height: 116rpx;
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	left: 24rpx;
}
.fot1{
	font-size: 30rpx;
	color: #000000;
	padding: 24rpx 0rpx 24rpx 170rpx;
	box-sizing: border-box;
}
.fot2{
	font-size: 24rpx;
	color: #d7d7d7;
	margin-left: 170rpx;
}
.foot{
	width: 688rpx;
	height: 118rpx;
	margin: 32rpx auto 0rpx;
	position: relative;
}
.title{
	position: absolute;
	left: 98rpx;
	top: 20rpx;
	font-size: 24rpx;
	color: #b4853f;
}
</style>