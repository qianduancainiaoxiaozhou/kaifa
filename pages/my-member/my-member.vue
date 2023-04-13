<template>
	<view >
		<view class="contaner-top">
			<view class="contaner-item">
				<view class="contaner-item-1">
					<image src="../../static/34.png" style="width: 36rpx; height: 36rpx;" ></image>
					<image src="../../static/35.png" style="width: 36rpx; height: 36rpx;" ></image>
					<image src="../../static/36.png" style="width: 36rpx; height: 36rpx;" ></image>
					<image src="../../static/37.png" style="width: 36rpx; height: 36rpx;" ></image>
					<image src="../../static/38.png" style="width: 36rpx; height: 36rpx;" ></image>
					<text style="margin-left: 15rpx;margin-bottom: 15rpx;">5593人已开通会员</text>
				</view>
				<view style="height: 26rpx; color: #fff; margin-right: 32rpx;">购买查询</view>
			</view>
		</view>
		<view class="login-item" v-if="userInfo">
			<view class="im"> <image :src="userInfo.avatarUrl" style="width: 108rpx; height: 108rpx; border-radius: 50%;"></image> </view>
			<view style="display: flex;margin: 0rpx 0rpx 20rpx 178rpx; ">
				<view style="font-size: 36rpx; color:#7b5b21;" @click="Exit">退出登录</view>
				<view  :class="vip?'btn1':'btn'">会员</view>
			</view>
			<view style="font-size: 26rpx; color: #a48751; margin-left: 178rpx;">开通会员尊享VIP权益</view>
		</view>
		<view class="login-item" v-else>
			<view class="im"> <image src="../../static/10.png" style="width: 108rpx; height: 108rpx;"></image> </view>
			<view style="display: flex;margin: 0rpx 0rpx 20rpx 178rpx; ">
				<view style="font-size: 36rpx; color:#7b5b21;"@click="login">立即登录</view>
				<view  class="btn">会员</view>
			</view>
			<view style="font-size: 26rpx; color: #a48751; margin-left: 178rpx;">开通会员尊享VIP权益</view>
		</view>
		<!-- 写推荐套餐费用的 -->
		<view class="expense">
			<view class="expense-item1">
				<view style="font-size: 36rpx; color: #464646; margin-top: 46rpx;">12个月</view>
				<view style="font-size: 40rpx; color: #deb264; margin: 20rpx 0rpx;">￥{{topupList[0].salePrice}}</view>
				<view style="font-size: 28rpx; color: #a49fa0;text-decoration:line-through;">￥{{topupList[0].normalPrice}}</view>
				<view class="expense-btn">推荐</view>
			</view>
			<view class="expense-item">
				<view style="font-size: 36rpx; color: #464646; margin-top: 46rpx;">3个月</view>
				<view style="font-size: 40rpx; color: #deb264; margin: 20rpx 0rpx;">￥{{topupList[1].salePrice}}</view>
				<view style="font-size: 28rpx; color: #a49fa0; text-decoration:line-through;">￥{{topupList[1].normalPrice}}</view>
			</view>
			<view class="expense-item">
				<view style="font-size: 36rpx; color: #464646; margin-top: 46rpx;">1个月</view>
				<view style="font-size: 40rpx; color: #deb264; margin: 20rpx 0rpx;">￥{{topupList[2].salePrice}}</view>
				<view style="font-size: 28rpx; color: #a49fa0;text-decoration:line-through;">￥{{topupList[2].normalPrice}}</view>
			</view>
		</view>
		<!-- 写点击开通的 -->
		<view class="open-top">
			<view class="open-top-item1">恭喜</view>
			<view class="open-top-item2">您获得2折开通会员特权！</view>
		</view>
		<view class="open-bottom" @click="open">立即开通</view>
		<!-- VIP特权 -->
		<view style="background-color: #f5f7fa; height: 28rpx;"></view>
		<view style="padding-top: 22rpx; box-sizing: border-box;">
			<view style="font-size: 44rpx; margin-left: 28rpx; color: #353535;">VIP特权</view>
			<view class="privilege">
				<view class="privilege-item">
					<view class="privilege-item-left">
						<image src="../../static/42.png" style="width: 90rpx; height: 90rpx;"></image>
					</view>
					<view class="privilege-item-right">
						<view style="font-size: 32rpx; color: #484848;">1000+精品名厨菜谱</view>
						<view style="font-size: 24rpx; color: #aaaaaa;">大咖教学，轻松学会</view>
					</view>
				</view>
				<view class="privilege-item">
					<view class="privilege-item-left">
						<image src="../../static/43.png" style="width: 90rpx; height: 90rpx;"></image>
					</view>
					<view class="privilege-item-right">
						<view style="font-size: 32rpx; color: #484848;">每周上新</view>
						<view style="font-size: 24rpx; color: #aaaaaa;">新菜持续更新中</view>
					</view>
				</view>
				<view class="privilege-item">
					<view class="privilege-item-left">
						<image src="../../static/44.png" style="width: 90rpx; height: 90rpx;"></image>
					</view>
					<view class="privilege-item-right">
						<view style="font-size: 32rpx; color: #484848;">会员免广告打扰</view>
						<view style="font-size: 24rpx; color: #aaaaaa;">体验更流畅</view>
					</view>
				</view>
				<view class="privilege-item">
					<view class="privilege-item-left">
						<image src="../../static/45.png" style="width: 90rpx; height: 90rpx;"></image>
					</view>
					<view class="privilege-item-right">
					<view style="font-size: 32rpx; color: #484848;">VIP尊贵身份标识</view>
					<view style="font-size: 24rpx; color: #aaaaaa;">随时随地，与众不同</view>
					</view>
				</view>
			</view>
		</view>
		<view style="background-color: #f5f7fa; height: 28rpx;"></view>
		<!-- 会员使用说明 -->
		<view style="padding-top: 26rpx; box-sizing: border-box;padding-bottom: 50rpx; ">
			<view style="width: 660rpx; margin-left: 30rpx; ">
				<view style="font-size: 36rpx; color: #484848;">会员使用说明 </view>
				<view style="font-size: 28rpx; color: #b7b7b7; margin-top: 32rpx;">
					<view>1.会员服务一经开通，不支持退款；</view>
					<view>2.如遇到苹果手机支付问题，建议参考Apptore支付流程"</view>
					<view>3.若会员开通出现异常，请立即联系客服，我们会在2个工作日内出处理结果。</view>
					<view>4.会员常见问题、会员服务协议、会员隐私协议</view>
				</view>
			</view>
		</view>
		<!-- 底部弹出层 -->
		<u-popup :show="show" mode="bottom" @close="close" >
		        <view>
		           <my-member-popup/>
		        </view>
		</u-popup>
		<!-- 消息提示栏 -->
			<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		data() {
			return {
				show:false,
				vip:false
			};
		},
		onShow() {
			this.getUserId()
		},
		computed:{
			... mapState(['userInfo','topupList'])
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
							// console.log(res)
							// 保存用户id到本地存储,后续需要用
							uni.setStorage({
								key: 'user_id',
								data:  res.data[0]._id
							})
							console.log(res.data[0].vipdate)
							// 将时间的值进行字符串的分割
							 const mon= res.data[0].vipdate.split('/')[0]
							 const day=res.data[0].vipdate.split('/')[1].split('/')[0]
							 const year1 =res.data[0].vipdate.slice(2,9).split('/')[1]
							 console.log(year1,mon,day)
							  let nowTime =new Date()
							  let vipTime =new Date(2023,2,4)
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
							// 把vip的状态保存到当前页面
							this.vip= res.data[0].vip
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
			},
			open(){
				// 从本地存储中获取用户id
				const user_id = uni.getStorageSync("user_id")
				if(user_id ){
					this.show=true
				}else{
					this.$refs.uToast.show({
										message:'还没登录，请先登录哦'
										
									})
				}
			},
			close(){
				this.show=false
			}
		}
	}
</script>

<style lang="scss">
.contaner-top{
	background-color: #313131;
	width: 100%;
	height: 304rpx;
	border-bottom-left-radius: 124rpx ;
	border-bottom-right-radius: 124rpx ;
	padding-top: 10rpx;
	box-sizing: border-box;
	.contaner-item{
		
		display: flex;
		justify-content: space-between;
	}
}
.contaner-item-1{
	width: 434rpx;
	height: 48rpx;
	background-color: #5c5c5c;
	border-bottom-right-radius: 24rpx ;
	border-top-right-radius: 24rpx ;
	padding-left: 15rpx;
	padding-top: 5rpx;
	box-sizing: border-box;
	// line-height: 48rpx;
	font-size: 26rpx;
	color: #cdcdcd;
}
.login-item{
	background-image: url(../../static/39.png);
	width: 678rpx;
	height: 302rpx;
	margin: -210rpx 0rpx 0rpx 20rpx;
	padding-top: 68rpx;
	box-sizing: border-box;
	position: relative;
	.im{
		width: 108rpx;
		height: 108rpx;
		border-radius: 50%;
		position: absolute;
		top:64rpx;
		left: 55rpx;
		
	}
}
.btn{
	width: 106rpx; 
	height: 32rpx;
	color: #f6e9c3;
	font-size: 20rpx;
	background-color: #a5a5a5;
	border-radius: 16rpx;
	text-align: center;
	line-height: 32rpx;
	margin-left: 8rpx;
	margin-top: 10rpx;
}
.btn1{
	width: 106rpx; 
	height: 32rpx;
	color: #fff;
	font-size: 20rpx;
	background-color: #ecbe7e;
	border-radius: 16rpx;
	text-align: center;
	line-height: 32rpx;
	margin-left: 8rpx;
	margin-top: 10rpx;
}
.expense{
	width: 690rpx;
	margin: 50rpx auto 0rpx;
	display: flex;
	justify-content: space-between;
}
.expense-item{
	width: 212rpx;
	height: 232rpx;
	border-radius: 16rpx;
	border: 2rpx solid #e0e0e0;
	background-color: #fbfcfe;
	text-align: center;
	position: relative;
}
.expense-item1{
	width: 212rpx;
	height: 232rpx;
	border-radius: 8rpx;
	border: 2rpx solid #e5c88f;
	background-color: #fbf7ef;
	text-align: center;
	position: relative;
	
}
.expense-btn{
		background-image: url(../../static/40.png);
		width: 98rpx;
		height: 48rpx;
		position: absolute;
		top: -24rpx;
		left: 0;
		font-size: 28rpx;
		color: #fff;
		text-align: center;
		line-height: 48rpx;
	}
.open-top{
	margin: 24rpx 0rpx 36rpx 26rpx;
	display: flex;
	.open-top-item1{
		background-image: url(../../static/41.png);
		width: 92rpx;
		height: 42rpx;
		margin-left: 5rpx;
		color: #dfb467;
		font-size: 28rpx;
		text-align: center;
		line-height: 42rpx;
		
	}
	.open-top-item2{
		font-size: 28rpx;
		color: #917747;
		margin-top: 5rpx;
	}
}
.open-bottom{
	width: 686rpx;
	height: 80rpx;
	background-color: #fcf1d3;
	color: #a98c4f;
	font-size: 36rpx;
	text-align: center;
	line-height: 80rpx;
	margin: 0 auto;
	border-radius: 16rpx;
	margin-bottom: 72rpx;
}
.privilege{
	margin: 36rpx 0rpx 0rpx 36rpx;
	.privilege-item{
		display: flex;
		justify-content: space-between;
	}
}
.privilege-item-right{
	width: 572rpx;
	height: 100rpx;
	border-bottom: 2rpx solid #f9f9f9;
	
}
</style>
