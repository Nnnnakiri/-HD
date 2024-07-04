<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<text class="message">已缓存视频</text>
		<view class="main">
			<scroll-view class="scorll-items" scroll-y="true">
				<view class="scorll-items-con">
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
					<view class="scroll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="title">视频标题</text>
						<view class="more-message">
							<text>222弹幕 222M</text>
							<text>详情页></text>
						</view>
					</view>
				</view>

			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "download",
		data() {
			return {
				title: '离线缓存'
			};
		}
	}
</script>

<style lang="scss">
	.content {
		.message {
			display: flex;
			align-items: center;
			margin-left: 4vw;
			font-size: 20px;
			height: 8vh;
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
						height: 35vh;
						margin-left:1vw;

						image {
							width: 100%;
							height: 70%;
							border-radius: 10px
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
							height: 42px;
							margin-top: 1vh;
						}

						.more-message {
							display: flex;
							justify-content: space-between;
							color: #cdcdcd;
							font-size: 14px;
						}
					}
					.scroll-item:nth-child(3n){
						margin-right: 1vw;
					}
				}

			}
		}
	}
</style>