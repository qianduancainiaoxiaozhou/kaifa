<template>
	<view class="contaner4">
		<scroll-view  scroll-y="true"  class="scroll-view">
			<view>
				<view :class="leftIndex==index?'active':'item'" v-for="(obj,index) in categories" :key="obj._id" @click="change(index)">
					<view :class="leftIndex==index?'active1':''"></view>
					<text>{{obj.cat_name}}</text>
				</view>
			</view>
		</scroll-view>
		<!-- 设置 scroll-into-view属性，值为值应为某子元素id， scroll-with-animation设置滚动效果,加scroll事件-->
		<scroll-view  scroll-y="true"  class="scroll-view1" :scroll-into-view=" 'a'+rightIndex " 
		:scroll-with-animation="true" @scroll="scrollHeight">
			<view >
				<view style="margin:28rpx 0rpx 0rpx 18rpx;" v-for="(obj1,index) in categories" :key="obj1._id" 
				:id="'a'+index" class="goods-classification">
					<view style="font-size: 28rpx; color: #cbcbcb; ">{{obj1.cat_name}}</view>
					<view class="child">
						<view class="item-child" v-for="(obj2,index) in obj1.children" :key="index">
							<view> <image :src="obj2.cat_icon" style="width: 100rpx; height: 100rpx;"></image> </view>
							<view >{{obj2.cat_name}}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	export default {
		name:"fenlei-categories",
		data() {
			return {
				leftIndex:0,
				rightIndex:0,
				
			};
		},
		computed:{
			... mapState(['categories'])
		},
		mounted() {
			this.init()
		},
		methods:{
			change(index){
				this.leftIndex=index
				this.rightIndex=index
			},
			// e.detail.scrollTop以顶部为参考点滑动了多少距离,再调用this.init
			scrollHeight(e){
				console.log(e.detail.scrollTop);
				 this.init(e.detail.scrollTop)
			},
			init(scrollTop){
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.goods-classification').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data);
				      let start=0;
				       let end=0;
				  data.forEach((item,index)=>{
					  // item.height：获取到每个节点的高度
					  // console.log(item.height)
					  start=end;
					 end+=item.height;
					
					   if(scrollTop>=start&&scrollTop<=end){
					       this.leftIndex=index    
					  }
				  })
				}).exec();
			}
		}
	}
</script>

<style lang="scss">
.contaner4{
	display: flex;
	.scroll-view{
		width: 180rpx;
		height: calc(100vh - 356rpx);
		background-color: #fff;
		.item{
			width: 180rpx;
			height: 136rpx;
			font-size: 28rpx;
			text-align: center;
			line-height: 136rpx;
			color: #767676;
			.item1{
				position: absolute;
				top: 43rpx;
				right: 0;
				height: 50rpx;
				width: 4rpx;
				background-color: #fff;
			}
		}
	}
}
.child{
	margin:20rpx 0rpx 0rpx 0rpx;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-around;
	flex: 0 1 auto;
	.item-child{
		width: 100rpx;
		height: 100rpx;
		margin-right: 36rpx;
		margin-left: 36rpx;
		margin-bottom: 32rpx;
		font-size: 22rpx;
		color: #cbcbcb;
		text-align: center;
	}
}
.scroll-view1{
	height: calc(100vh - 356rpx);
	background-color: #fff;
}
.active{
	width: 180rpx;
	height: 136rpx;
	font-size: 28rpx;
	text-align: center;
	line-height: 136rpx;
	color: #f1a36b;
	background-color:#f6f6f6;
	position: relative;
}
.active1{
	position: absolute;
	top: 43rpx;
	right: 0;
	height: 50rpx;
	width: 4rpx;
	background-color: #f1a36b;
}
</style>