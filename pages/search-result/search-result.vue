<template>
	<view>
		<common-nav />
		<view class="top">
			<image src="../../static/24.png" style="width: 100rpx; height: 60rpx;" @click="fanhui"></image>
			<view style="width: 400rpx; ">
				<u-search placeholder="请输入菜品" v-model="val" :showAction="false" bgColor="#fff" borderColor="#cccccc"
					height="60rpx" @search="search('1')"></u-search>
			</view>
		</view>
		<view style="margin: 10rpx 10rpx; font-size: 30rpx; color: #cccccc;">搜索历史</view>
		<view style="display: flex; flex-wrap: wrap;">
			<view v-for="(item,index) in arr" :key="index" class="history1" @click="search1(item)">{{item}}</view>
		</view>
		<!-- 搜索出来的菜品显示区域 -->

		<view class="contaner" v-if="menus.length!=0 && val">
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="item" v-for="item in menus" :key="item._id">
					<view class="item-left">
						<image :src="item.coverpic" style="width: 314rpx;height: 210rpx;" @click="vipVideo(item)">
						</image>
					</view>
					<view class="item-right">
						<view style="font-size: 30rpx; color: #3a3a3a; margin: 16rpx 0rpx;">{{item.name}}</view>
						<view class="fot">
							<text v-for="obj in item.ingredient" class="fot1">{{obj.name}}、</text>
						</view>
						<view style="margin-top: 34rpx;">
							<text style="font-size: 22rpx; color: #c4c4c4; margin: 0 10rpx;">{{item.pageview}}</text>
							<image src="../../static/17.png" style="width: 28rpx; height: 22rpx;"></image>
							<text
								style="font-size: 22rpx; color: #c4c4c4; margin-left:66rpx;">{{item.collections}}</text>
							<image src="../../static/18.png" style="width: 24rpx; height: 24rpx; margin-left: 10rpx;">
							</image>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
        <template v-if="menus.length==0 && num=='1'">
			<Not-Fount></Not-Fount>
		</template>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	import {
		searchMenuApi
	} from '../../store/api/searchApi/searchApi';
	export default {
		data() {
			return {
				val: '',
				menus: [],
				num:'',
				currentPage: 1,
				pageSize: 15,
				total: 0,
				
			};
		},
		// 页面生命周期函数，页面滚动到底部的事件，将分页数据累加起来
		onReachBottom() {
			console.log(111)
			this.currentPage++
			// 拉到底再调用search
			this.search()
		},
		onLoad(option) {
			this.val = option.val
			this.name = option.val
			this.num=option.num
			this.search()
			console.log(this.val)
			console.log(this.arr)
		},
		// 监听val的变化
		watch: {
			val() {
				console.log('val发生了变化')
				this.menus=[]
				this.num=''
			}
		},
		computed:{
			... mapState(['arr'])
		},
		methods: {
			fanhui() {
				uni.navigateBack();
			},
			async search(num) {
				
				const res = await searchMenuApi({
					method: 'POST',
					val: this.val,
					pageSize: this.pageSize,
					currentPage: this.currentPage
				})
				
				console.log(res.data.menus)
				this.total = res.data.total
				// 使用扩展之后再重新赋值的方式将每次获得的数据进行累加
				this.menus = [
					...this.menus,
					...res.data.menus
				]
				this.num=num
				// 使用扩展之后再重新赋值的方式将每次获得的数据进行累加
				if(!this.arr.includes(this.val)){
					this.$store.commit('SET_ARR', this.val)
				}
					
				
          },
			vipVideo(data) {
				// 将数据传入状态机
				this.$store.commit('SET_DATA', data)
				uni.navigateTo({
					url: '/pages/vipVideo/vipVideo'
				});

			},
			search1(val){
				uni.navigateTo({
					url: '/pages/search-result2/search-result2?val='+val
				});
			}
		}
	}
</script>

<style lang="scss">
	.top {
		// border: 1px solid red;
		margin-top: 15rpx;
		display: flex;
		height: 100rpx;
	}

	.contaner {
		margin-top: 74rpx;
	}

	.item {
		width: 628rpx;
		height: 210rpx;
		margin-bottom: 14rpx;
		margin-left: 32rpx;
		display: flex;
		justify-content: space-between;

		.item-left {
			width: 314rpx;
			height: 210rpx;
		}

		.item-right {
			width: 296rpx;
			height: 210rpx;
		}
	}

	.fot {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.fot1 {
		font-size: 24rpx;
		color: #dbdbdb;
	}

	.scroll-view {
		height: calc(100vh - 100rpx);
	}
	.history1{
		width:150rpx;
		height: 50rpx;
		font-size: 26rpx;
		border: 1rpx solid #ccc;
		border-radius: 25rpx;
		color: red;
		text-align: center;
		line-height: 50rpx;
		margin: 10rpx 10rpx;
		// 一行显示溢出隐藏
		overflow: hidden;
		  white-space: nowrap;
		  text-overflow: ellipsis;
	}
</style>
