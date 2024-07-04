<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<view class="main">
			<scroll-view class="scroll-con" scroll-y="true">

				<view class="scroll-items-con">
					<view class="scroll-items-header">
						<view class="scroll-item-header">
							<image src="/static/images/回复我的.png" mode="aspectFill"></image>
							<text>回复我的</text>
						</view>
						<view class="scroll-item-header">
							<view class="at">
								<image src="/static/images/艾特.png" mode="aspectFill"></image>
							</view>
							<text>@我</text>

						</view>
						<view class="scroll-item-header">
							<image src="/static/images/赞_填充.png" mode="aspectFill"></image>
							<text>收到的赞</text>

						</view>
						<view class="scroll-item-header">
							<image src="/static/images/音量.png" mode="aspectFill"></image>
							<text>系统通知</text>

						</view>
					</view>

					<view class="item-tltle">
						<text>聊天列表</text>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/头像.jpg" mode="aspectFill"></image>
						<view class="scroll-item-message">
							<text class="name">名字</text>
							<text class="new-message">最新一条消息</text>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "mymessage",
		data() {
			return {
				title: "消息"
			};
		}
	}
</script>

<style lang="scss">
	.content {
		.main {
			.scroll-con {
				.scroll-items-con {
					height: 80vh;
					width: 75vw;
					background-color: #ccc;

					.scroll-items-header {
						display: flex;
						justify-content: space-around;
						align-items: center;
						height: 12vh;
						background-color: white;
						margin-bottom: 2vh;

						.scroll-item-header {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;

							.at {
								display: flex;
								justify-content: center;
								align-items: center;
								background-color: orange;
								border-radius: 50%;
								width: 3vw;
								height: 3vw;
							}

							image {
								width: 3.5vh;
								height: 3.5vh;

							}

							text {
								margin-top: 2vh;
							}
						}
					}


					.item-tltle {
						padding: 1vh 1vw;
						background-color: white;
						border-bottom: 1px solid #ccc;
					}

					.scroll-item {
						display: flex;
						align-items: center;
						background-color: white;
						border-bottom: 1px solid #ccc;
						height: 10vh;

						image {
							width: 5vw;
							height: 5vw;
							border-radius: 50%;
							margin: 2vh;
						}

						.scroll-item-message {
							display: flex;
							flex-direction: column;
							text{
								margin: 0.5vh 0;
							}
						}
					}
				}
			}
		}
	}
</style>