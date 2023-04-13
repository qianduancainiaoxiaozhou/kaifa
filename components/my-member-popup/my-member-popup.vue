<template>
	<view>
		<view style="font-size: 32rpx; color:#5a5a5a; width: 184rpx; margin: 10rpx auto;">开通VIP会员</view>
		<scroll-view scroll-y="true" class="scroll-view">
			<view>
				<view class="expense">
					<view :class="num==1?'expense-item1':'expense-item'" @click="choose({num:1,mon:'12',price:topupList[0].salePrice})">
						<view style="font-size: 36rpx; color: #464646; margin-top: 46rpx;">12个月</view>
						<view style="font-size: 40rpx; color: #deb264; margin: 20rpx 0rpx;">￥{{topupList[0].salePrice}}</view>
						<view style="font-size: 28rpx; color: #a49fa0;text-decoration:line-through;">￥{{topupList[0].normalPrice}}</view>
						<view class="expense-btn">推荐</view>
					</view>
					<view :class="num==2?'expense-item1':'expense-item'" @click="choose({num:2,mon:'3',price:topupList[1].salePrice})">
						<view style="font-size: 36rpx; color: #464646; margin-top: 46rpx;">3个月</view>
						<view style="font-size: 40rpx; color: #deb264; margin: 20rpx 0rpx;">￥{{topupList[1].salePrice}}</view>
						<view style="font-size: 28rpx; color: #a49fa0; text-decoration:line-through;">￥{{topupList[1].normalPrice}}</view>
					</view>
					<view :class="num==3?'expense-item1':'expense-item'" @click="choose({num:3,mon:'1',price:topupList[2].salePrice})">
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
				<view class="open-bottom" @click="buy">立即购买</view>
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
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
import { openVipApi } from '../../store/api/myApi/myApi';
	export default {
		name:"my-member-popup",
		data() {
			return {
				num:1,
				mon:'',
				price:null
			};
		},
		computed:{
			... mapState(['topupList'])
		},
		methods:{
			choose(option){
				this.num=option.num
				this.mon=option.mon
				this.price=option.price
			},
		  async	buy(){
			  // 从本地存储中获取用户id
			  const user_id = uni.getStorageSync("user_id")
			  const res = await openVipApi({_id:user_id,date:this.mon})
			  console.log(res)
			  if(res.data.code==1){
				  uni.navigateTo({
				  	url: '/pages/pay-success/pay-success?price='+this.price
				  });
			  }
			}
		}
	}
</script>

<style lang="scss">
.scroll-view{
	height: 516rpx;
}
</style>