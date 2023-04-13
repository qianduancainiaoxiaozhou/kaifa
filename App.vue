<script>
	export default {
		// UNI-APP初始化完成时触发
		onLaunch: function() {
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
						
						this.$store.commit('SET_USER_INFO', res.data[0])
						
					}
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
