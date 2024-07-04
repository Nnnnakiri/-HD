<template>
	<view class="content">
		<view class="main">
			<view class="left-con">
				<view class="left-header">
					<view class="user">
						<view  v-if="!user.length" class="login" @click="showLogin(true)">
							<text >登录</text>
						</view>
						<view  v-if="!user.length" class="login-text">
							<view class="item">
								<text>未登录</text>
								<text class="txt">探索属于你的新世界</text>
							</view>
						</view>
						<image v-if="user.length" @click="goCenter" :src="user[0].user_imgurl" mode="aspectFill"></image>
						<view  v-if="user.length" class="user-message">
							<view class="user-name">{{mine[0].user_name}}</view>
							<text>硬币：412</text><text>B币：0.0</text>
						</view>

					</view>
					<view v-if="user.length" class="user-fans">
						<text>1 动态</text>|<text>1 关注</text>|<text>1 粉丝</text>
					</view>
					<view v-if="!user.length" class="login-view"  @click="showLogin(true)">
						<text>登录/注册</text>
					</view>
				</view>

				<scroll-view scroll-y class="left-scroll">
					<view class="scroll-items">
						<view class="scroll-item" :class="selectPage=='commonFunctions'?'active':''"
							@click.stop="changePage('commonFunctions')">
							<image src="/static/images/常用功能.png"> </image>
							<text>常用功能</text>
						</view>

					</view>
					<view class="scroll-items">
						<text class="title">视频</text>
						<view class="scroll-item" :class="selectPage=='download'?'active':''"
							@click.stop="changePage('download')">
							<image src="/static/images/文件下载.png"></image>
							<text>离线缓存</text>
						</view>
						<view class="scroll-item" :class="selectPage=='history'?'active':''"
							@click.stop="changePage('history')">
							<image src="/static/images/我的历史记录.png"></image>
							<text>历史记录</text>
						</view>
						<view class="scroll-item" :class="selectPage=='myFav'?'active':''"
							@click.stop="changePage('myFav')">
							<image src="/static/images/收藏.png"></image>
							<text>我的收藏</text>
						</view>
						<view class="scroll-item" :class="selectPage=='nextTime'?'active':''"
							@click.stop="changePage('nextTime')">
							<image src="/static/images/稍后观看_44.png"></image>
							<text>稍后再看</text>
						</view>
					</view>
					<view class="scroll-items">
						<text class="title">推荐服务</text>
						<view class="scroll-item" :class="selectPage=='myLike'?'active':''"
							@click.stop="changePage('myLike')">
							<image src="/static/images/关注.png"></image>
							<text>我的关注</text>
						</view>
						<view class="scroll-item" :class="selectPage=='myMessage'?'active':''"
							@click.stop="changePage('myMessage')">
							<image src="/static/images/我的消息.png"></image>
							<text>我的消息</text>
						</view>
						<view class="scroll-item" :class="selectPage=='myClass'?'active':''"
							@click.stop="changePage('myClass')">
							<image src="/static/images/我的课程.png"></image>
							<text>我的课程</text>
						</view>
					</view>

					<view class="scroll-items">
						<text class="title">更多服务</text>
						<view class="scroll-item" :class="selectPage=='childMode'?'active':''"
							@click.stop="changePage('childMode')">
							<image src="/static/images/伞.png"></image>
							<text>青少年模式</text>
						</view>
						<view class="scroll-item" :class="selectPage=='help'?'active':''"
							@click.stop="changePage('help')">
							<image src="/static/images/客服.png"></image>
							<text>我的客服</text>
						</view>
						<view class="scroll-item" :class="selectPage=='setting'?'active':''"
							@click.stop="changePage('setting')">
							<image src="/static/images/设置.png"></image>
							<text>设置</text>
						</view>

					</view>

				</scroll-view>

			</view>


			<view class="right-con">
				<mineFunction v-if="selectPage=='commonFunctions'" :selectPage="selectPage"></mineFunction>
				<download v-if="selectPage=='download'"></download>
				<history v-if="selectPage=='history'"></history>
				<myfav v-if="selectPage=='myFav'"></myfav>
				<nexttime v-if="selectPage=='nextTime'"></nexttime>
				<mylike v-if="selectPage=='myLike'"></mylike>
				<mymessage v-if="selectPage=='myMessage'"></mymessage>
				<myclass v-if="selectPage=='myClass'"></myclass>
				<childmode v-if="selectPage=='childMode'"></childmode>
				<help v-if="selectPage=='help'"></help>
				<setting v-if="selectPage=='setting'"></setting>

			</view>


		</view>
		<view class="footer">
			<tabbar :pageUrl="pageUrl"></tabbar>
		</view>
		<loginModel v-if="isShowLogin" @hidenLogin="showLogin"></loginModel>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				pageUrl: '/pages/mine/mine',
				// 给右侧内容传递需要显示哪个页面
				// commonFunctions 常用功能
				// download 离线缓存
				// history 历史记录
				// myFav 我的收藏
				// nextTime 稍后再看
				// myLike 我的关注
				// myMessage 我的消息
				// myClass 我的课程
				// childMode 青少年模式
				// help 客服
				// setting 设置
				selectPage: 'commonFunctions',
				mine: [{
					token: "",
					user_account: "",
					user_id: null,
					user_imgurl: "",
					user_name: "",
					user_password: ""
				}],
				// 是否显示登录模态框
				isShowLogin:false

			};
		},
		computed: {
			...mapGetters([
				'user',
				'isLogin',

			])
		},
		methods: {
			// 点击更改页面
			changePage(page = 'commonFunctions') {
				this.selectPage = page

			},
			// 在其他页面跳转到 mine 页面要携带page参数 相当于修改默认显示的选项卡
			goPage() {
				// 如果跳转时携带了参数 那么说明不是点击导航栏来的
				// 需要跳转到对应的子页面
				if (this.$route.query.page) {
					this.selectPage = this.$route.query.page
				}
			},
			// 点击头像去个人中心
			goCenter() {
				// 这里需要携带用户id用于发送请求  暂时没做
				uni.navigateTo({
					url: '/pages/personal/personal',

				})
			},
			showLogin(data) {
				this.isShowLogin = data
			},

		},
		watch: {
			// 监视用户信息  如果user长度不为0 则代表数据返回了
			user: {
				handler(newVal, oldVal) {
					if (newVal.length) {
						this.mine = newVal

					}

				}
			},
		},
		mounted() {
			
			this.goPage()
		}
	}
</script>

<style lang="scss">

	.content {
		height: 100vh;
		

		.main {
			display: flex;
			flex-direction: row;
			height: 100%;

			.left-con {
				width: 25%;
				height: 90%;
				border-right: 1px solid #b4b4b4;

				.left-header {
					position: relative;
					top: 0;
					height: 20vh;
					padding: 2vh;
					border-bottom: 1px solid #b4b4b4;

					.user {
						display: flex;
						align-items: center;
						
						image {
							width: 5vw;
							height: 5vw;
							border-radius: 50%;
							margin-right: 2vw;
						}
						.login {
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 50%;
							height: 120rpx;
							width: 120rpx;
							background-color: #f0f0f0;
							color: #ff78a8;
						}
						.login-text{
							display: flex;
							
							.item{
								display: flex;
								flex-direction: column;
								justify-content: center;
							}

							margin-left: 1vw;
							.txt{
								font-size: 14px;
								color: #b4b4b4;
							}
						}

						.user-message {
							.user-name {}

							text {
								margin-right: 1vw;
								color: #b4b4b4;
								font-size: 14px;
							}
						}
					}

					.user-fans {
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-top: 2vh;
						color: #b4b4b4;

						text {
							font-size: 14px;
						}
					}
					.login-view{
						display: flex;
						justify-content: center;
						align-items: center;
						color: white;
						background-color: #ff78a8;
						width: 100%;
						height: 5vh;
						border-radius: 20px;
						margin-top: 2vh;
					}


				}

				.left-scroll {
					position: fixed;
					width: 25%;
					height: 70vh;

					.scroll-items {
						width: 100%;
						border-bottom: 1px solid #b4b4b4;

						.title {
							display: inline-block;
							font-size: 20px;
							padding-left: 2vw;
							padding-top: 2vh;

						}

						.scroll-item {
							display: flex;
							justify-content: start;
							align-items: center;
							width: 100%;
							height: 8vh;
							padding-left: 2vw;


							image {
								width: 3vh;
								height: 3vh;
								margin-right: 1vw;
							}
						}

						.active {
							background-color: #f4f4f4;
						}
					}


				}
			}

			.right-con {
				flex: 1;
				height: 90%;

			}
		}
	}
</style>