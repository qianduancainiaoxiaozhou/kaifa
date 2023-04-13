const baseUrl ='http://nocat.life:4000/'
export default function request(url,options={}){
	
	return new Promise((resolve,reject)=>{
		// 显示loading
		 uni.showLoading();
		   uni.request({
			   url:baseUrl+url,
			   method:options.method?options.method:'GET',
			   data:options,
			   success:(res)=>{
				   // 只要接口到达服务器，则会执行success回调，无论状态是否为200
				    switch(res.statusCode){
					   case 200:
					   resolve(res);
					   break;
					   default:
					   reject(res)
				   }
			   },
			   complete() {
			   	// 无论成功失败，都会执行的函数
				uni.hideLoading()
			   }
		   })
	})
}