<template>
	<view ref="trends" class="my-trends" :style="{width:(page=='developments'?'49vw':'70vw')}">
		<view refw="title" class="title">
			<view class="user">
				<view class="user-img">
					<image src="/static/images/头像.jpg" mode="aspectFill"></image>
				</view>
				<view class="user-message">
					<view class="user-name">
						<text>希许丶</text>
					</view>
					<view class="time">
						<text>11月3日·投稿了视频</text>
					</view>
				</view>
			</view>
			<view class="more">
				<image src="/static/images/personal/Android更多 (1).png" mode="aspectFill"></image>
			</view>

		</view>
		<view ref="video" class="video-con">
			<!-- 不播放时放图片  播放时在加载视频 -->
			<!-- 封面 -->
			<image v-if="!isPlay" src="/static/images/测试图片.jpg" mode="aspectFill" :style="{height:(page=='developments'?'40vh':'55vh')}"></image>
			<!-- 视频 -->
			<video ref="vi" v-show="isPlay" class="video" :id="item.video_id" :muted="isMute" :controls="false"
				@timeupdate="videoTimeUpData" @loadedmetadata="getVideoAllTime"
				@ended="videoEnd" @play="videoPlay" @pause="videoPause" src="/static/videos/video_1.mp4" :style="{height:(page=='developments'?'40vh':'55vh')}"></video>
			<!-- 音量 -->
			<!-- 静音按钮 -->
			<view class="volume" @click.stop="videoMute" v-show="isShowMuteBtn">
				<image v-if="!isMute" src="/static/images/personal/音量.png" mode="aspectFill"></image>
				<image v-if="isMute" src="/static/images/personal/静音.png" mode="aspectFill"></image>
			</view>
			<!-- 进度条 -->
			<view v-if="isPlay&&!isShowEndMask" class="progress" :style="{width:progressWidth}">
			</view>
			<!-- 重播遮罩 -->
			<view v-if="isShowEndMask" class="replay">
				<view @click.stop="videoReplay">
					<image src="/static/images/personal/重播.png" mode="aspectFill"></image>
					<text>重播</text>
				</view>
				
			</view>
		</view>
		<view class="footer">
			<view class="video-title">
				<text>这里是是视频标题</text>
			</view>
			<view class="video-icon">
				<view class="item">
					<image src="/static/转发.png" mode="aspectFill"></image>
					<text>转发</text>
				</view>
				<view class="item">
					<image src="/static/评论.png" mode="aspectFill"></image>
					<text>1</text>
				</view>
				<view class="item">
					<image src="/static/点赞.png" mode="aspectFill"></image>
					<text>3</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myTrends",
		props: ['item','page'],
		data() {
			return {
				// video上下文
				videoContext: {},
				// 视频是否播放
				isPlay: false,
				// 视频总时长
				duration: 0,
				// 保存播放进度
				currentTime: 0,
				// 进度条百分比
				progressWidth: '0%',
				// 是否静音
				isMute: true,
				// 是否显示静音按钮
				isShowMuteBtn: false,
				// 定时隐藏静音按钮
				showMuteBtnTimer:null,
				// 是否显示结束页面
				isShowEndMask:false
			};
		},
		watch: {
			isPlay: {
				handler(n, o) {
					this.$nextTick(() => {
						if (n && !o) {
							// 视频跳转到上次播放的位置
							this.videoContext.seek(this.currentTime)
						}
						// console.log(this.videoContext);
					})
				}
			}
		},
		methods: {
			// 滚动是判断是否自动播放
			autoPlay(data) {
				
				let top = this.$refs.video.$el.getBoundingClientRect().top - data
				let bottom = this.$refs.video.$el.getBoundingClientRect().bottom - data
				let viewHeight = window.innerHeight - data


				// Math.min(bottom,viewHeight)-Math.max(top,0) 计算元素在可视区域的高度 高度大于某个值则播放视频
				if (Math.min(bottom, viewHeight) - Math.max(top, 0) > this.$refs.video.$el.clientHeight *
					0.57) {
					this.isPlay = true
					this.isShowEndMask = false
					// 视频加载完后在创建上下文
					this.$nextTick(() => {
						this.videoContext = uni.createVideoContext(this.item.video_id.toString(),
							this)

						this.videoContext.play()
						// 是否显示静音按钮
						this.isShowMuteBtn = true
						// 定时隐藏静音按钮
						clearTimeout(this.showMuteBtnTimer)
						this.showMuteBtnTimer = setTimeout(()=>{
							this.isShowMuteBtn = false
						},5000)
					})

				} else {
					this.isPlay = false
					this.$nextTick(() => {
						this.isShowMuteBtn = false
						this.videoContext = uni.createVideoContext(this.item.video_id.toString(),
							this)
						this.videoContext.pause()
						this.isShowMuteBtn = false
					})

				}


			},
			// 视频播放时间更新触发
			videoTimeUpData(e) {
				this.currentTime = e.detail.currentTime
				this.progressWidth = parseFloat((this.currentTime / this.duration * 100).toFixed(2)) + '%'
				// console.log(this.progressWidth);
				// console.log(this.currentTime);
			},
			// 视频资源加载触发
			getVideoAllTime(e) {
				// 获取视频总时长
				this.duration = e.detail.duration

			},
			// 视频静音
			videoMute() {
				this.isMute = !this.isMute
			},
			// 视频播放完后显示重播遮罩
			videoEnd(){
				this.isShowEndMask = true
			},
			// 重新播放
			videoReplay(){
				this.isShowEndMask = false
				this.videoContext.play()
			},
			// 视频播放时触发video-play事件总线 总而暂停其它的视频播放
			videoPlay(){
				uni.$emit('video-play',this.$refs.vi)
			},
			videoPause(){
				this.isPlay = false
				this.isShowMuteBtn = false
				
			}
		},

		mounted() {
			
			// console.log('绑定事件');
			uni.$on('getTop', this.autoPlay)

		},
		beforeDestroy() {
			// console.log('销毁');
			uni.$off('getTop')
		}

	}
</script>

<style lang="scss">
	.my-trends {
		display: flex;
		flex-direction: column;
		width: 70vw;
		background-color: white;
		padding: 1vh;
		margin-bottom: 1vh;

		.title {
			display: flex;
			justify-content: space-between;

			.user {
				display: flex;

				.user-message {
					display: flex;
					flex-direction: column;
					justify-content: center;

					.user-name {
						font-size: 18px;
						margin-bottom: 0.5vh;
					}

					.time {
						font-size: 14px;
						color: #bababa;
					}
				}

				.user-img {
					margin-right: 2vh;

					image {
						width: 4vw;
						height: 4vw;
						border-radius: 50%;
					}
				}
			}

			.more {
				display: flex;
				align-items: center;

				image {
					width: 3vh;
					height: 3vh;
				}
			}
		}

		.video-con {
			position: relative;
			flex: 1;

			image {
				width: 100%;
				height: 55vh;
				border-radius: 5px;
			}

			.video {
				width: 100%;
				height: 55vh;
				border-radius: 5px;
			}

			.volume {
				position: absolute;
				bottom: 2vh;
				right: 2vh;

				image {
					width: 3vh;
					height: 3vh;
				}
			}

			.progress {
				position: absolute;
				bottom: 4px;
				// width: 100%;
				height: 0.5vh;
				border-radius: 5px;
				background-color: #ff78a8;
			}
		
			.replay{
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.7);
				view{
					display: flex;
					align-items: center;
					color: white;
					image{
						width: 4vh;
						height: 4vh;
						margin-right: 2vh;
					}
				}
			}
		}

		.footer {
			display: flex;
			flex-direction: column;

			.video-title {
				font-weight: bold;
			}

			.video-icon {
				display: flex;
				justify-content: space-around;
				margin: 2vh 0;

				.item {
					display: flex;
					align-items: center;

					image {
						width: 3vh;
						height: 3vh;
						margin-right: 0.5vh;
					}
				}
			}

		}
	}
</style>