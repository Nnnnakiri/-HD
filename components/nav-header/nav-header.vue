<template>
	<!-- 通过判断当前页面来动态显示相应的导航栏 -->
	<!-- 需要传递props参数 page  代表页面类型  有 index和trends两种参数 -->
	<!-- select参数用于切换选中样式 通过触发nav-header组件上的 @selectNum 自定义事件完成 -->
	<view class="nav-header" :class="page=='index' ? '' : 'trendsPage'">
		<!-- 左侧用户头像和搜索框 -->
		<view class="nav-header-user" v-if="page=='index'">
			<!-- 用户登录后显示头像没有登录显示未登录  点击让用户登录 -->
			<image v-if="isLogin" @click="toMine('commonFunctions')" class="user" mode="aspectFill" :src="user[0].user_imgurl"></image>
			<!-- 用户未登录 -->
			<view v-else @click="showLoginModal" class="user" >
				<text >登录</text>
			</view>
			<image class="glass" mode="aspectFit" src="/static/images/放大镜.png"></image>
			<input type="text">
		</view>
		<!-- 中间导航项目 -->
		<view class="nav-header-items">
			<view v-if="page=='index'" class="page-category">
				<view class="nav-header-item" :class="index == select ? 'select':''" v-for="(item,index) in indexData"
					@click="sendSelectNum(index)">
					{{item}}
				</view>
			</view>
			<view v-else class="page-category">
				<view class="nav-header-item" :class="index == select ? 'select':''" v-for="(item,index) in trendsData"
					@click="sendSelectNum(index)">
					{{item}}
				</view>
			</view>
		</view>
		<!-- 右侧用户历史记录和用户消息 -->
		<view class="nav-header-message" v-if="page=='index'">
			<image  @click="toMine('history')" mode="aspectFit" src="../../static/images/历史记录.png"></image>
			<image  @click="toMine('myMessage')" src="../../static/images/消息.png"></image>
		</view>

	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name: "nav-header",
		props: ['select', 'page'],
		data() {
			return {
				indexData: ['推荐', '追番', '电影'],
				trendsData: ['视频', '综合'],
				isLogin:false
			};
		},
		computed:{
			...mapGetters([
				'user'
			])
		},
		watch:{
			user:{
				handler(newVal,oldVal){
					this.getToken()
				}
			}
		},
		methods: {
			sendSelectNum(index) {
				this.$emit('selectNum', index)
			},
			// 需要传递去哪一个页面
			toMine(page){
				uni.redirectTo({
					url:`/pages/mine/mine?page=${page}`
				})
			},
			// 如果有token 则获取token 更改登录状态isLogin 并发送token进行登录
			// 如果没有token  那么就要点击登录按钮进行表单登录
			getToken(){
				if(this.user.length){

					if(!localStorage.getItem('token')){
						localStorage.setItem('token',this.user[0].token)
					}
					
					this.isLogin = true
				}
				// localStorage.setItem('token','123')
				
				
			},
			// 弹出登录模态框
			showLoginModal(){

				this.$emit('showLogin',true)
				
			}

		},
		mounted() {
				this.getToken()
		}
	}
</script>

<style lang="scss">
	.nav-header {

		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		padding: 20rpx 40rpx 0 40rpx;

		// 左侧头像及搜索栏
		.nav-header-user {
			display: flex;
			align-items: center;
			width: 610rpx;

			.user {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				height: 120rpx;
				width: 120rpx;
				background-color: #f0f0f0;
				color: #ff78a8;
			}

			.glass {
				position: relative;
				top: 0;
				left: 35px;
				height: 40rpx;
				width: 40rpx;
			}

			input {
				border-radius: 40rpx;
				padding-left: 80rpx;
				margin-left: 10rpx;
				width: 300rpx;
				height: 80rpx;
				background-color: #f0f0f0;
			}

		}

		// 中间导航按钮
		.nav-header-items {

			.page-category {
				display: flex;

				justify-content: center;
				align-items: center;

				.nav-header-item {
					margin: 0 20rpx;
					padding: 20px 0;
					font-size: 36rpx;
				}
			}

		}

		.select {
			color: #ff78a8;
			border-bottom: 3px solid #ff78a8;
		}

		// 右侧历史记录及消息
		.nav-header-message {
			display: flex;
			justify-content: end;
			width: 610rpx;

			image {
				margin-left: 40rpx;
				height: 80rpx;
				width: 80rpx;
			}
		}
	}
	.trendsPage{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>