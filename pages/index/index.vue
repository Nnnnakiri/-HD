<template>
	<view class="content">
		<view class="header">
			<!-- select是当前页面编号  通知子组件更改样式 -->
			<!-- 通过绑定自定义事件切换显示的内容 -->
			<nav-header :page="pageText" :select="select" @selectNum="getSelectNum" @showLogin="show"></nav-header>
		</view>
		<!-- 模态框 根据isShowLogin确定是否显示 默认为false 点击未登录为true  点击模态框内部叉号隐藏 -->
		<loginModel v-if="isShowLogin" @hidenLogin="show"></loginModel>
		<view class="scorll-con">
			<scroll-view @scrolltolower="getVideolist" scroll-y="true" class="viedo-content">
				<view class="scroll-items-con">

					<recommend v-if="select==0" :request-data="requestData"></recommend>
					<anime v-if="select==1"></anime>
					<film v-if="select==2"></film>
				</view>
			</scroll-view>
		</view>

		<view class="footer">
			<tabbar :pageUrl="pageUrl"></tabbar>
		</view>
	</view>
</template>

<script>
	// 进入页面需要判断用户是否登录  可以根据游览器的本地存储进行判断
	export default {
		data() {
			return {
				select: 0,
				pageUrl: '/',
				pageText: 'index',
				requestData: true,
				// 是否显示登录模态框
				isShowLogin: false

			}
		},
		methods: {
			getSelectNum(num) {

				this.select = num

			},
			getVideolist() {
				this.requestData = !this.requestData
			},
			show(data) {
				this.isShowLogin = data
			},
			// 获取游览器token  没有的话会返回null
			// 有token则发送请求
			// 已经更改到导航栏来发送请求  因为导航栏三个页面都需要
			// sendToken() {
			// 	const userToken = localStorage.getItem('token')
			// 	if(userToken){
			// 		this.$store.dispatch('tokenLogin',userToken)
			// 	}
			// }

		},
		mounted() {

			// this.sendToken()
		}

	}
</script>

<style lang="scss">
	.content {
		// 让头部和内容竖向排列
		display: flex;

		flex-direction: column;

		.header {
			// 固定到屏幕顶部
			position: fixed;
			top: 0;
			z-index: 100;
			// 头部设置固定高度
			height: 10vh;
			width: 100vw;
			background-color: white;


		}

		.scorll-con {
			margin-top: 10vh;


			.viedo-content {
				height: 80vh;

				.scroll-items-con {}
			}
		}




	}
</style>