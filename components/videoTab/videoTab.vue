<template>
	<view class="main">
		<view class="header">
			<view class="back" @click="hidenVideoTab">
				<image src="/static/images/personal/返回 (1).png" mode="aspectFill"></image>
			</view>
			<view class="title">
				<text v-if="videoTabPage==1">最近投币的视频</text>
				<text v-if="videoTabPage==2">最近点赞的视频</text>

				<text v-if="videoTabPage==3">默认收藏夹</text>
			</view>
			<view class="right">

			</view>
		</view>
		<scroll-view class="scroll-con" scroll-y="true">
			<!-- 视频集合 -->
			<view class="home-items">
				<!-- 每一个视频选项 -->
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">
					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>
				<view class="home-item">


					<view class="video">
						<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
						<view class="video-mask">
							<view class="number">
								<view>
									<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
									<text>32</text>
								</view>
								<view>
									<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
									<text>134</text>
								</view>

							</view>
							<view class="time">
								<text>5:28</text>
							</view>
						</view>
					</view>
					<view class="video-title">
						<text>这里放视频的标题</text>
					</view>
					<view class="author">
						<text>希许丶</text>
					</view>

				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: "videoTab",

		data() {
			return {

			};
		},
		computed: {
			...mapGetters([
				['videoTabPage']
			])
		},
		methods: {
			hidenVideoTab() {
				this.$store.dispatch('showVideoTab')
			},
		},
		mounted() {
			console.log(this.videoTabPage);
		}
	}
</script>

<style lang="scss">
	.main {

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 1.5vw;
			width: 100vw;
			height: 8vh;

			.back {
				image {
					width: 3vh;
					height: 3vh;
				}
			}

			.title {}

			.right {}
		}

		.scroll-con {
			padding: 0 1.5vw;

			.home-items {
				display: flex;
				// justify-content: space-between;
				flex-wrap: wrap;
				height: 92vh;

				.home-item {
					margin-right: 1vw;

					.video {
						position: relative;
						height: 20vh;

						// 封面
						.cover-con {
							border-radius: 10px;
							width: 23.5vw;
							height: 20vh;
						}

						// 追番的视频封面
						.anima-cover-con {
							border-radius: 10px;
							width: 15.3vw;
							height: 33vh;
						}

						// 遮罩
						.video-mask {
							display: flex;
							justify-content: space-between;
							position: absolute;
							bottom: 0;
							color: white;
							width: 23.5vw;
							height: 5vh;
							border-radius: 10px;
							background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

							.number {
								display: flex;

								view {
									display: flex;
									align-items: center;
									margin-left: 1vw;
									margin-bottom: 1vw;
								}

							}

							.time {
								display: flex;
								align-items: center;
								border-radius: 20px;
								height: 3vh;
								padding: 0 1vh;
								margin-right: 1vh;
								background-color: rgba(0, 0, 0, 0.3);
							}

							.fav-icon {
								position: absolute;
								right: 1.5vh;
								bottom: 0.5vh;

								image {
									width: 3vh;
									height: 3vh;
								}
							}

							image {
								width: 2vh;
								height: 2vh;
							}
						}
					}

					// 追番的视频封面盒子高度也不一样
					.anima-video {
						height: 33vh;
					}

					.video-title {
						// color: black;
					}

					.author {
						margin: 2vh 0;
						font-size: 14px;
						color: #a1a1a1;
					}

				}

				.home-item:nth-child(4n) {

					margin-right: 0;
				}


			}


		}
	}
</style>