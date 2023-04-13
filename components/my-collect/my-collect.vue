<template>
	<view>
		<view style="margin-top: 20rpx;  background-color: #fff;">
			<scroll-view scroll-x="true" class="scroll-view">
				<view class="top">
					<view :class="id=='a'?'top-title2':'top-title1'" @click="listFood1('a')">所有食材</view>
					<view v-for="item in mycollect" :key="item._id" :class="id==item._id?'top-title2':'top-title1'"
						@click="listFood(item)">{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 渲染所有食材 -->
			<template v-for=" (obj,index) in mycollect[0].ingredient">
				<view class="item" v-if="index<=num&&id=='a'" :key="index">
					<view style="margin-left: 30rpx;">{{obj.name}}</view>
					<view class="item-font">{{obj.number}}</view>
				</view>
			</template>
			<!-- 食材的渲染部分 -->
			<template v-for=" (obj,index) in foodList">
				<view class="item" v-if="index<=num &&id!='a'" :key="index">
					<view style="margin-left: 30rpx;">{{obj.name}}</view>
					<view class="item-font">{{obj.number}}</view>
				</view>
			</template>

			<!-- 展开和收起功能 -->
			<template v-if="num==4">
				<view class="all" @click="all">展开全部</view>
			</template>
			<template v-if="num==foodList.length">
				<view class="all" @click="shouqi">收起</view>
			</template>
		</view>
		<!-- 我的菜谱 -->
		<view
			style="margin-top: 18rpx; height: 344rpx; background-color: #fff; padding-top: 12rpx;  box-sizing: border-box;">
			<view style="margin-left: 30rpx;">
				<view style="font-size: 32rpx; color: #5a5a5a;">我的菜谱</view>
				<scroll-view scroll-x="true">
					<view style="display: flex; margin-top: 34rpx; height: 300rpx;">
						<view v-for="item in mycollect" :key="item._id"
							style="margin-right: 30rpx; text-align: center;">
							<view style="width: 172rpx; height: 208rpx;">
								<image :src="item.coverpic" style="width: 172rpx; height: 208rpx;"></image>
							</view>
							<view style="font-size: 28rpx; color: #5a5a5a;">{{item.name}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

	</view>

</template>

<script>
	import {
		mapState
	} from 'vuex' //引入mapState

	export default {
		name: "my-collect",
		data() {
			return {
				foodList: [],
				id: 'a',
				num: 4
			};
		},
		// 页面显示时触发

		computed: {
			...mapState(['mycollect']),

		},

		methods: {
			listFood(item) {
				this.foodList = item.ingredient
				this.id = item._id
				this.num = 4
			},
			listFood1(id) {
				this.id = id
			},
			all() {
				this.num = this.foodList.length
			},
			shouqi() {
				this.num = 4
			}
		},
		// 所有食材的计算
		//    allFood(){

		// }	

	}
</script>

<style lang="scss">
	.scroll-view {
		// display: flex;
		// width: 100vw;
		height: 62rpx;
		border-bottom: 1px solid #f1f1f1;
		background-color: #fff;

		.top {
			display: flex;
			width: 2000rpx;
			line-height: 62rpx;
		}
	}

	.top-title1 {
		width: 108rpx;
		font-size: 24rpx;
		margin: 0rpx 25rpx;
		color: #8f8f8f;
	}

	.top-title2 {
		font-size: 30rpx;
		color: #f19658;
		margin: 0rpx 25rpx;
	}

	.item {
		width: 100%;
		height: 74rpx;
		line-height: 74rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #f1f1f1;
	}

	.item-font {
		width: 254rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.all {
		width: 100%;
		height: 52rpx;
		background-color: #fff;
		text-align: center;
		line-height: 52rpx;
		font-size: 24rpx;
		color: #5a5a5a;
	}
</style>
