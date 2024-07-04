<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<view class="main">
			<view class="main-header-button">
				<text :class="buttonIndex==index?'active':''" @click="changeButtonIndex(index)"
					v-for="(item,index) in buttonList">{{item}}</text>

			</view>

			<scroll-view v-if="buttonIndex==0" class="scroll-items-con" scroll-y="true">
				<view class="scroll-body-con">
					<!-- 输入框 -->
					<view class="scroll-input">
						<image src="/static/images/放大镜.png" mode="aspectFill"></image>
						<input ref="inp" @blur="hideButton" @focus="showButton" class="inp" type="text"
							placeholder="搜索我的关注">
						<view ref="btn" class="button" @click="blur">
							<text>取消</text>
						</view>
					</view>

					<view v-for="(item,index) in myLikeClass" class="scroll-class-item" :key="index">
						<!-- 分组 -->
						<view @click="showChild(item)" class="scroll-item">

							<text class="title">{{item.className}}</text>
						</view>

						<view v-if="item.isShowList" class="scroll-item-child-con">
							<!-- 每个组别的内容 -->
							<view v-for="(user,index) in item.classData" class="scroll-item-child" :key="index">
								<image :src="user.image" mode="aspectFill"></image>
								<view class="message">
									<text class="username">{{user.username}}</text>
									<text class="usertext">{{user.usertext}}</text>
								</view>
							</view>
						</view>
					</view>

				</view>

			</scroll-view>
			<scroll-view v-if="buttonIndex==1" class="scroll-items-con" scroll-y="true">
				<view class="scroll-body-con">

					<view class="scroll-class-item">

						<view class="scroll-item-child-con">
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
							<view class="scroll-item-child">
								<image src="/static/images/头像.jpg" mode="aspectFill"></image>
								<view class="message">
									<text class="username">用户名</text>
									<text class="usertext">用户签名</text>
								</view>
							</view>
						</view>
					</view>

				</view>

			</scroll-view>

		</view>


	</view>
</template>

<script>
	export default {
		name: "mylike",
		data() {
			return {
				title: "我的关注",
				buttonList: ['关注', '粉丝'],
				buttonIndex: 0,
				myLikeClass: [{
						className: '特别关注',
						classData: [{
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}],
						isShowList: false
					},
					{
						className: '默认分组',
						classData: [{
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}, {
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}, {
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}, {
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}, {
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}, {
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}, {
							image: '/static/images/头像.jpg',
							username: '百鬼衣',
							usertext: '哈哈哈哈哈哈哈哈哈哈或'
						}],
						isShowList: false
					}
				],
				pageIndex: 0

			};
		},
		methods: {
			// 切换 关注 粉丝 页面
			changeButtonIndex(index) {
				this.buttonIndex = index
			},
			// 显示取消按钮
			showButton() {
				this.$refs.btn.$el.style = 'display:block'

			},
			// 隐藏取消按钮

			hideButton() {
				this.$refs.btn.$el.style = 'display:none'

			},
			// 折叠/不折叠详细列表
			showChild(item) {
				item.isShowList = !item.isShowList
			},

		}
	}
</script>

<style lang="scss">
	.content {
		.main {
			.main-header-button {
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 8vh;
				font-size: 18px;
				border-bottom: 1px solid #b4b4b4;

				text {
					display: block;
					line-height: 8vh;
					height: 100%;
				}

				.active {
					color: #ff2f99;
					border-bottom: 3px solid #ff2f99;
				}
			}

			.scroll-items-con {
				.scroll-body-con {
					width: 75vw;
					height: 72vh;

					.scroll-input {
						position: relative;
						display: flex;
						align-items: center;
						height: 8vh;
						padding: 0 1vw;
						border-bottom: 1px solid #b4b4b4;

						image {
							position: absolute;
							margin-left: 1vw;
							width: 3vw;
							height: 3vw;
						}

						input {
							width: 100%;
							height: 6vh;
							border-radius: 30px;
							padding-left: 5vw;
							background-color: #b4b4b4;
						}


						.button {
							z-index: 20;
							display: none;
							text-align: center;
							width: 8vw;
							font-size: 22px;
							color: #ff2f99;
						}

					}

					.scroll-class-item {

						.scroll-item {
							height: 8vh;
							line-height: 8vh;
							border-bottom: 1px solid #b4b4b4;

							.title {
								font-weight: bold;
								font-size: 20px;
								margin-left: 5vw;
							}

						}

						.scroll-item-child-con {

							.scroll-item-child {
								display: flex;
								align-items: center;
								margin-left: 1vw;
								height: 10vh;
								border-bottom: 1px solid #b4b4b4;

								image {
									height: 8vh;
									width: 8vh;
									margin-right: 1vw;
									border-radius: 50%;
								}

								.message {
									display: flex;
									flex-direction: column;

									.username {
										color: #ff74a5;
									}

									.usertext {
										font-size: 14px;
										color: #b7b7b7;
									}
								}
							}
						}
					}
				}
			}

		}
	}
</style>