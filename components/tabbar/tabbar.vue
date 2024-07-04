<template>
	<view class="tabbar">
		<view class="tabbar-item" v-for="(item,index) in data" @click="goNext(index)">
			<!-- 如果 活跃页面的index 等于 循环生成的 index  则图标为选中图标 -->
			<image v-if="pageIndex==index" mode="aspectFill" class="tabbar-icon" :src="item.selectImg"></image>
			<image v-else mode="aspectFill" class="tabbar-icon" :src="item.img"></image>
			<text :class="pageIndex==index?'active':''">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: "tabbar",
		props: ['pageUrl'],
		data() {
			return {
				data: [{
						text: '首页',
						img: '/static/images/0.png',
						selectImg: '/static/images/0_select.png',
					},
					{
						text: '动态',
						img: '/static/images/1.png',
						selectImg: '/static/images/1_select.png',
					},
					{
						text: '我的',
						img: '/static/images/2.png',
						selectImg: '/static/images/2_select.png',
					}
				],
				urlData: [
					"/",
					"/pages/developments/developments",
					"/pages/mine/mine"
				],
				flag: 1,
				pageIndex: 0
			};
		},

		computed: {
			...mapGetters([
				'user',
				'isLogin'
			])
		},
		methods: {

			goNext(index) {
				uni.redirectTo({
					url: this.urlData[index]
				})

				// 当用户登录后才能从首页跳转到 动态 和 我的  否则提示用户登录
				// if (this.user.length) {
				// 	uni.redirectTo({
				// 		url: this.urlData[index]
				// 	})
				// } else {
				// 	uni.showToast({
				// 		title: "您好像没有登录呢",
				// 		icon: "error"
				// 	})
				// }


			},
			findUrl() {
				// 箭头函数只有一条语句时才能省略return
				this.pageIndex = this.urlData.findIndex((item) => {
					return item == this.$route.path
				})
			},
			sendToken() {
				const userToken = localStorage.getItem('token')
			
				if (userToken) {
					// console.log(userToken != undefined);
					this.$store.dispatch('tokenLogin', userToken)
						.then(() => {
							// console.log('修改登录状态了');
							this.isLog()
						})
				}
			},
			isLog() {
				this.$store.dispatch('setLogin')
			}


		},
		mounted() {
			this.findUrl()
			// 发送token请求获取user
			this.sendToken()


		}


	}
</script>

<style lang="scss">
	.tabbar {
		// 定位到屏幕下方
		// display: flex;
		position: absolute;
		bottom: 0;
		// 将宽度拉满屏幕
		width: 100vw;
		height: 10vh;
		background-color: #ffffff;
		border-top: 1px solid #ccc;
		// 弹性盒模型 将tabbar的每一项居中对齐
		display: flex;
		justify-content: center;
		align-items: center;
		// padding-top: 10rpx;

		.tabbar-item {
			// 弹性盒模型 将tabbar的每一项居中对齐
			display: flex;
			// 将对齐方式改为竖向排列
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transition: background-color 0.5s ease;
			font-size: 20px;
			width: 300rpx;
			height: 10vh;
			// margin: 0 5px;

			.active {
				color: #ff2f99;
			}

			.tabbar-icon {
				height: 80rpx;
				width: 80rpx;
			}
		}
		.tabbar-item:active{
			background-color: #e3e3e3;
			
		}
	}
</style>