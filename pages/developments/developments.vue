<template>
	<view class="main">
		<view class="header">
			<view class="text">
				<view class="item" ref="btn1" @click.stop="changeNavigator(0)" :class="{'active':selectPage==0}">
					<text>视频</text>
				</view>
				<view class="item" @click.stop="changeNavigator(1)" :class="{'active':selectPage==1}">
					<text>综合</text>
				</view>
			</view>
			<view ref="navigatorLine" class="line">

			</view>
		</view>
		<view class="body">
			<swiper :current="selectPage" :disable-touch="isScroll" @change="swiperChange" @transition="slideSwiper"
				@animationfinish="slideEnd">
				<swiper-item class="swiper-item-con">
					<view class="swiper-item">
						<view class="left">
							<scroll-view scroll-y="true" @scroll.stop="userScroll">
								<view class="scroll-items">
									<view class="scroll-item">
										<view class="all">
											<image src="/static/动态 (1).png" mode="aspectFill"></image>
										</view>
										<text>全部动态</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>
									<view class="scroll-item">
										<image src="/static/images/头像.jpg" mode="aspectFill"></image>
										<text>希许</text>
									</view>

								</view>
							</scroll-view>
						</view>
						<view class="right">
							<scroll-view scroll-y="true" @scroll.stop="onScroll">
								<view class="scroll-items">
									<view ref="mineAnime" class="scroll-item">
										<view class="title">
											<text>我的追番·追剧</text>
											<text class="all">全部> </text>
										</view>
									</view>
									<view class="scroll-video-item">
										<myTrends ref="videos" class="item" v-for="(item,index) in Data" :item="item"
											:page="'developments'"></myTrends>
									</view>
								</view>


							</scroll-view>
						</view>


					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						222
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer">
			<tabbar></tabbar>
		</view>

	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				Data: [{
					video_id: '1'
				}, {
					video_id: '2'
				}, {
					video_id: '3'
				}],
				// 滚动结束后的定时器
				scrollTimer: null,
				// 定时播放视频的定时器
				videoTimer: null,
				isScroll: false,
				selectPage: 0,
				lineLeft: 0
			};
		},
		computed:{
			...mapGetters([
				'user'
			])
		},
		methods: {
			// 用户列表滚动
			userScroll() {
				// 用户滚动时禁止左右翻页
				this.isScroll = true
				clearTimeout(this.scrollTimer)
				this.scrollTimer = setTimeout(() => {
					// 滚动结束后允许翻页
					this.isScroll = false
				}, 250)
			},
			// 视频列表滚动
			onScroll(e) {
				this.isScroll = true
				clearTimeout(this.scrollTimer)
				this.scrollTimer = setTimeout(() => {
					this.isScroll = false

				}, 250)
				clearTimeout(this.videoTimer)
				this.videoTimer = setTimeout(() => {

					this.getTop()
				}, 2000)

			},
			getTop() {
				// 要把顶部标题和导航栏加起来的高度给子组件 
				let h = window.innerHeight * 0.1 + this.$refs.mineAnime.$el.clientHeight
				// console.log(this.$refs.navigatorBar.$el.getBoundingClientRect().top);
				uni.$emit('getTop', h)
			},
			// 其它视频暂停播放
			videoPause(thisVideo) {
				const myVideos = this.$refs.videos
				myVideos.forEach((video) => {
					if (video.$refs.vi !== thisVideo) {
						video.$refs.vi.pause()
					}

				})
			},
			swiperChange(e) {
				// 更改页码标记
				this.selectPage = e.detail.current
				// 如果翻到了下一页  那么所有视频都暂停
				if (this.selectPage == 1) {
					const myVideos = this.$refs.videos
					myVideos.forEach((video) => {
						video.$refs.vi.pause()
					})
				} else {
					// 如果翻回来了  那个则判断是否自动播放
					this.onScroll()
				}

				console.log(this.selectPage);
			},
			slideSwiper(e) {
				// 计算页面滑动了多少百分比
				let slideX = parseFloat(e.detail.dx / window.innerWidth).toFixed(2)
				// 重新获取基准值
				let nowLeft = this.lineLeft
				// console.log(nowLeft);
				nowLeft = parseFloat(nowLeft.slice(0, nowLeft.length - 2))
				// 更新线条的left值  (基准值+按钮宽度*百分比)
				this.$refs.navigatorLine.$el.style.left = parseFloat(nowLeft) + parseFloat(this.$refs.btn1.$el
					.clientWidth * slideX) + 'px'
			},
			// 滑动结束后修改基准值
			slideEnd() {
				this.lineLeft = this.$refs.navigatorLine.$el.style.left
				console.log(this.lineLeft);
			},
			// 点击翻页
			changeNavigator(page) {
				this.selectPage = page
			}

		},
		mounted() {
			// 线条位置初始化
			this.$refs.navigatorLine.$el.style.left = this.$refs.btn1.$el.offsetLeft + this.$refs.btn1.$el
				.clientWidth / 4 + 'px'
			// 基准值初始化
			this.lineLeft = this.$refs.btn1.$el.offsetLeft + this.$refs.btn1.$el
				.clientWidth / 4 + 'px'
			uni.$on('video-play', this.videoPause)
			this.onScroll()
			
			setTimeout(()=>{
				console.log(this.user);
			},200)
			
		}
	}
</script>

<style lang="scss">
	.main {
		height: 100vh;
		background-color: #e3e3e3;

		.header {
			position: relative;
			display: flex;
			justify-content: center;
			height: 8vh;
			width: 100%;
			background-color: white;

			.text {
				display: flex;
				justify-content: center;

				.item {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 8vw;
					background-color: white;
					transition: background-color 0.5s ease;

				}

				.item:active {
					background-color: #e3e3e3;
					color: #fb8ec6;
				}

				.active {
					color: #ff78a8;
				}

			}

			.line {
				position: absolute;
				bottom: 0;
				height: 5px;
				width: 48px;
				background-color: #ff78a8;
			}
		}

		.body {

			// swiper组件
			swiper {
				margin-top: 1vh;
				height: 81vh;

				// swiper-item组件
				.swiper-item-con {
					display: flex;
					justify-content: center;

					// swiper-item盒子
					.swiper-item {
						display: flex;

						width: 70%;

						// 左侧用户列表
						.left {
							background-color: #ededed;
							width: 30%;

							// 滚动元素父盒子
							.scroll-items {
								display: flex;
								flex-direction: column;
								height: 81vh;

								// 滚动元素每一项
								.scroll-item {
									display: flex;
									align-items: center;
									margin-left: 1vw;
									height: 7vw;
									padding: 1vw 0;

									image {
										width: 5vw;
										height: 5vw;
										margin-right: 1vw;
										border-radius: 50%;
									}

									// 全部动态
									.all {
										display: flex;
										align-items: center;
										justify-content: center;
										width: 5vw;
										height: 5vw;
										margin-right: 1vw;
										border-radius: 50%;
										background-color: #ff78a8;

										image {
											width: 3vw;
											height: 3vw;
											margin-right: 0;
										}
									}

								}
							}
						}

						.right {
							flex: 1;

							.scroll-items {

								height: 81vh;

								.scroll-item {
									background-color: white;

									.title {
										display: flex;
										justify-content: space-between;
										font-weight: bold;

										.all {
											font-weight: normal;
											color: #a2a2a2;
										}
									}
								}

								.scroll-video-item {
									.item {
										margin-bottom: 1vw;
									}
								}
							}
						}

					}

				}

			}

		}

		.footer {}
	}
</style>