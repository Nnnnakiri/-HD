<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<view class="main">
			<scroll-view class="scroll-items-con" scroll-y="true">
				<view class="scroll-items-body-con">
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频视频标频标题视频标题频标频标题视频标题标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
					<view class="scorll-item">
						<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<text class="video-title">视频标频标题视频标题频标频标题视频标题</text>
						<view>
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>作者ID</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "nexttime",
		data() {
			return {
				title: "稍后再看"
			};
		}
	}
</script>

<style lang="scss">
	.content {
		.main {
			.scroll-items-con {

				.scroll-items-body-con {
					display: flex;
					flex-wrap: wrap;
					width: 75vw;
					height: 80vh;

					.scorll-item {
						display: flex;
						flex-direction: column;
						width: 23vw;
						height: 30vh;
						margin: 2vh 1vw;

						image {
							width: 100%;
							height: 20vh;
							border-radius:8px;
						}

						.video-title {
							height: 44px;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;

						}

						view {
							display: flex;
							align-items: center;
							margin-top: 2vh;

							image {
								width: 2vw;
								height: 2vw;
								margin-right: 1vw;

							}

						}
					}
				}
			}
		}
	}
</style>