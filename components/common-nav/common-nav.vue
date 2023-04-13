<template>
	<view>
		<!-- 占位的盒子 -->
		<view :style="{height:statusBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"common-nav",
		data() {
			return {
				statusBarHeight:0
			};
		},
		mounted(){
			uni.getSystemInfo({
				success:(res)=>{
					console.log(res.statusBarHeight)
					this.statusBarHeight=res.statusBarHeight
				}
			})
		}
	}
</script>

<style>

</style>