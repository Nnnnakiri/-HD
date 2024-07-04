<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<text class="message">今天</text>
		<view class="main">
			<scroll-view class="scorll-items" scroll-y="true">
				<view class="scorll-items-con">
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
							</view>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
							</view>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
							</view>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
							</view>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
							</view>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
							</view>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题</text>
						<view class="more-message">
							<view>
								<image src="/static/UP主_32.png" mode="aspectFill"></image>
								<text>用户昵称违规</text>
							</view>
							<view>
								<image src="/static/手机.png" mode="aspectFill"></image>
								<text>观看时间</text>
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
		name: "history",
		data() {
			return {
				title: '历史记录'
			};
		}
	}
</script>

<style lang="scss">
	.content {
		.message {
			display: flex;
			align-items: center;
			margin-left: 2vw;
			font-size: 16px;
			height: 6vh;
		}

		.main {
			.scorll-items {
				.scorll-items-con {
					// 横向布局
					display: flex;
					// 自动换行
					flex-wrap: wrap;
					height: 70vh;
					width: 75vw;
					padding: 0 1vw;

					.scroll-item {
						display: flex;
						flex-direction: column;
						width: 23vw;
						height: 30vh;
						margin-left: 1vw;
						margin-bottom: 3vh;

						image {
							width: 100%;
							height: 70%;
							border-radius: 10px;
						}

						.title {
							display: -webkit-box;
							/* 将文本显示为块元素 */
							-webkit-line-clamp: 2;
							/* 设置最大显示行数为2 */
							-webkit-box-orient: vertical;
							/* 设置块元素内部文本垂直排列 */
							overflow: hidden;
							/* 当文本溢出块元素时进行隐藏 */
							text-overflow: ellipsis;
							/* 溢出部分显示省略号 */
							height: 44px;
							margin-top: 1vh;
						}

						.more-message {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							color: #cdcdcd;
							font-size: 14px;
							view{
								display: flex;
								align-items: center;
								image{
									width: 2vw;
									height: 2vw;
									margin-right: 5px;
								}
							}
						}
					}

					.scroll-item:nth-child(3n) {
						margin-right: 1vw;
					}
				}

			}
		}
	}
</style>