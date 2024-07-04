<template>
	<view class="main">
		<view class="video-main" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
			<view class="video" :style="{height:videoH+'px'}" :class="[{'video-full':videoIsFullScreen}]">
				<!-- 视频 -->
				<video v-if="video" id="myVideo" @loadedmetadata="getVideoAllTime" @timeupdate="videoTimeUpData"
					@play="videoPlay" @pause="videoPause" @click="showMask" muted autoplay :controls="false"
					:style="{height:videoH+'px'}" :src="thisVideo[0].video_url"></video>

				<view class="mask" @touchstart.stop="progressTouchStart" @touchmove.stop="progressTouchMove"
					@touchend.stop="progressTouchEnd" @click="showMask" :class="[{'video-mask-header-pink':isPink}]"
					:style="{height:videoH+'px'}">
					<!-- 头部遮罩 -->
					<view @click.stop="showMask" class="video-mask-header"
						:class="[{'video-mask-header-active':!isPink&&isShowHeader},{show:isShowHeader}]  "
						:style="{height:videoH/2+'px'}">
						<view class="header-con">
							<view class="back">
								<image @click.stop="back" src="/static/images/video_detail/返回.png" mode="aspectFill">
								</image>
								<text class="title" v-if="videoIsFullScreen">视频标题啊</text>
							</view>
							<!-- 立即播放 -->
							<view @click.stop="play" class="play" v-if="isPink">
								<image src="/static/images/video_detail/播放器-播放（小电视）.png" mode="aspectFill"></image>
								<text>立即播放</text>
							</view>

							<view class="more">
								<view v-if="videoIsFullScreen" class="full">
									<image src="/static/images/video_detail/32_ic_赞.png" mode="aspectFill"></image>
									<image src="/static/images/video_detail/32_ic_踩.png" mode="aspectFill"></image>
									<image src="/static/images/video_detail/B币_32.png" mode="aspectFill"></image>

									<image src="/static/images/video_detail/收藏_32.png" mode="aspectFill"></image>
									<image src="/static/images/video_detail/收藏（填充粉色）.png" mode="aspectFill"></image>
									<image src="/static/images/video_detail/转发.png" mode="aspectFill"></image>
								</view>

								<!-- 小窗口播放 -->
								<image v-if="!isPink&&!videoIsFullScreen" src="/static/images/video_detail/小窗播放.png"
									mode="aspectFill">
								</image>
								<image src="/static/images/video_detail/Android更多.png" mode="aspectFill"></image>
							</view>
						</view>


					</view>
					<!-- 控件遮罩 -->
					<view @click.stop="showMask" class="video-mask-progress video-mask-progress-active"
						:style="{height:videoH/2+'px'}" :class="[{show:isShowHeader&&!isPink}]">
						<!-- 全屏的进度条 -->
						<view v-if="videoIsFullScreen" class="full-progress">
							<view class="left-text">
								<text>{{videoNowTime}}</text>
							</view>
							<!-- 全屏进度条 -->
							<view id="progress-full" @click.stop="seektoPosition" class="progress-con">
								<view class="progress-bar" :style="{width:progress}">

								</view>
							</view>


							<view class="right-text">
								<text>{{videoAllTime}}</text>
							</view>

						</view>
						<view class="video-mask-progress-con ">
							<!-- 暂停和播放按钮 -->
							<view class="pause">
								<!-- 上一页 -->
								<image src="/static/images/video_detail/上一首.png" mode="aspectFill"></image>
								<!-- 暂停 -->
								<image v-if="videoState" @click.stop="pausedVideo"
									src="/static/images/video_detail/暂停.png" mode="aspectFill"></image>
								<!-- 播放 -->
								<image v-if="!videoState" @click.stop="playVideo"
									src="/static/images/video_detail/播放2.png" mode="aspectFill"></image>
							</view>
							<!-- 弹幕显示 -->
							<view @click.stop="danmu" v-if="videoIsFullScreen" class="danmu">
								<image src="/static/images/video_detail/播放器-弹幕（开）_44.png" mode="aspectFill"></image>
								<image src="/static/images/video_detail/播放器-弹幕（关）_44.png" mode="aspectFill"></image>
								<input type="text" placeholder="发个友善的弹幕见证当下">
							</view>
							<!-- 进度条(不是全屏模式) -->
							<view v-if="!videoIsFullScreen" class="video-progress">
								<view id="progress" @click.stop="seektoPosition" class="progress-con">
									<view class="progress-bar" :style="{width:progress}">

									</view>
								</view>
								<text>{{videoNowTime}}/{{videoAllTime}}</text>
							</view>
							<!-- 倍速和全屏播放 -->
							<view class="full-screen">
								<text>倍速</text>
								<text v-if="videoIsFullScreen">1080p</text>
								<!-- 全屏播放 -->
								<image @click.stop="fullScreen" src="/static/images/video_detail/full-screen.png"
									mode="aspectFill"></image>
							</view>
						</view>


					</view>

					<!-- 拖动进度条时显示时间 -->
					<view class="time-mask" v-if="showTimeMask">
						<text>{{tempTimeStr}}/{{videoAllTime}}</text>
					</view>

				</view>

			</view>
			<!-- 评论 -->
			<view class="video-comment">
				<!-- 作者 -->
				<view class="video-author">
					<!-- 作者头像 -->
					<view class="user-img">
						<image :src="thisVideo[1].user_imgurl" mode="aspectFill"></image>
					</view>
					<!-- 作者名字 -->
					<view class="user-name">
						<text>{{thisVideo[1].user_name}}</text>
						<text class="fans">266万粉丝</text>
					</view>
					<!-- 关注按钮 -->
					<view class="like">
						<image src="/static/images/video_detail/增加.png" mode="aspectFill"></image>
						<text>关注</text>
					</view>
					<!-- 发送弹幕 -->
					<view class="send-danmu">

						<view class="inp-con" :class="!isShowDanmu?'hiden':'show'">
							<input :class="!isShowDanmu?'hiden':'show'" type="text" placeholder="点 我 发 弹 幕">
						</view>


						<view class="btn" @click="showDanmu"
							:class="!isShowDanmu?'hiden-border-radius':'show-border-radius'">
							<image v-if="isShowDanmu" src="/static/images/video_detail/播放器-弹幕（开黑色.png"
								mode="aspectFill"></image>
							<image v-if="!isShowDanmu" src="/static/images/video_detail/播放器-弹幕（关黑色）_44.png"
								mode="aspectFill"></image>
						</view>
					</view>
				</view>

				<!-- 评论滚动 和 发送评论 -->
				<view class="video-comment-con">
					<!-- 发送评论 -->
					<view class="input-con" :style="{bottom:inpBottom+'px'}">
						<view ref="input1" @click.stop="showEditorInput(1)" class="input">

						</view>

						<image @click.stop="showEditorInput(1)" class="image" src="/static/images/video_detail/可爱表情.png"
							mode="aspectFill"></image>
					</view>
					<!-- 滚动列表的高度有两个状态 一个是当视频缩小后  一个是视频正常大小 -->
					<!-- 根据不同的状态要设置不同的高度 以适应页面大小 -->
					<!-- 如果上面的占了40%  那么滚动列表就要占60%  大了多出的在页面外无法显示 小了页面会有空白 -->
					<scroll-view @scroll="onScroll" @scrolltoupper="scrollToUpper" class="video-comment-scroll"
						:style="{height:scrollH+'px'}" :scroll-y="isScroll">
						<view class="scroll-items" ref="videoScroll">
							<view ref="videoMessage" class="video-message">
								<view class="title">
									<text>【彩虹六号】怪医还在不妙屋</text>
								</view>
								<view class="message">
									<!-- 播放量 -->
									<view class="playback-volume">
										<image src="/static/images/video_detail/播放数_32 (1).png" mode="aspectFill">
										</image>
										<text>7.7万</text>
									</view>
									<!-- 弹幕数 -->
									<view class="comments-number">
										<image src="/static/images/video_detail/弹幕数_32.png" mode="aspectFill"></image>
										<text>564</text>
									</view>
									<!-- 视频发布时间 -->
									<view class="time">
										<text>2020年12月3日</text>
									</view>
									<!-- 多少人再看 -->
									<view class="people">
										<image src="/static/images/video_detail/用户群体-业务查询.png" mode="aspectFill">
										</image>
										<text>666人在看</text>
									</view>
									<!-- 视频id -->
									<view class="video-id">
										<text>BV13jkdf1</text>
									</view>
									<!-- 转载禁止 -->
									<view class="stop">
										<image src="/static/images/video_detail/禁止.png" mode="aspectFill"></image>
										<text>未经作者授权禁止转载</text>
									</view>
								</view>
								<view class="label">
									<view class="label-item">
										<image src="/static/images/video_detail/32_ic_赞填充灰色.png" mode="aspectFill"></image>
										<text>5.5万</text>
									</view>
									<view class="label-item">
										<image src="/static/images/video_detail/32_ic_踩填充灰色.png" mode="aspectFill"></image>
										<text>不喜欢</text>
									</view>
									<view class="label-item">
										<image src="/static/images/video_detail/B币_填充灰色.png" mode="aspectFill"></image>
										<text>4.2万</text>
									</view>
									<view class="label-item">
										<image src="/static/images/video_detail/收藏_32填充灰色.png" mode="aspectFill"></image>
										<text>2.5万</text>
									</view>
									<view class="label-item">
										<image src="/static/images/video_detail/转发填充灰色.png" mode="aspectFill"></image>
										<text>3.2万</text>
									</view>
								</view>
							</view>
							<!-- 评论内容 -->
							<view ref="comment">
								<comment-item @showEditorInput="showEditorInput(3)" @showReviewDetails="showReviewDetails" @showRightComment="showRightComment"
									v-for="(comment,index) in value" :key="comment.comment_id"
									:comment="comment"></comment-item>
							</view>
							
							<view ref="firstComment" class="firstComment" v-if="isShowFirstComment">
								<text>快发布第一条评论吧~~</text>
								<text class="send" @click.stop="showEditorInput(1)">立即评论</text>
							</view>
							<view ref="commentEnd" class="commentEnd">
								<text>╮(╯▽╰)╭再怎么翻也没有啦~~</text>
							</view>
						</view>
					</scroll-view>
				</view>


			</view>

		</view>
		<transition name="showRepltAnimate">
			<!-- 右侧全部评论 -->
			<view v-show="isShowRightComment" class="reply-right">
				<view class="title">
					<text>全部评论</text>
					<image @click="hidenRightComment" src="/static/取消.png" mode="aspectFill"></image>
				</view>
				<scroll-view scroll-y="true">
					<view class="scroll-items">
						<view class="content">
							<comment-item @showReviewDetails="showReviewDetails" v-for="(comment,index) in value"
								:key="comment.comment_id" :comment="comment"></comment-item>
						</view>
						<view class="input-con">
							<view ref="input2" @click.stop="showEditorInput(2)" class="input">

							</view>
							<image @click.stop="showEditorInput(2)" class="image"
								src="/static/images/video_detail/可爱表情.png" mode="aspectFill"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</transition>

		<transition name="showRepltAnimate">
			<!-- 右侧评论详情 -->
			<view v-show="isShowRightReviewDetails" class="reply-right">
				<view class="title">
					<text>评论详情</text>
					<image @click="hidenRightReviewDetails" src="/static/取消.png" mode="aspectFill"></image>
				</view>
				<scroll-view scroll-y="true">
					<view class="scroll-items">
						<view class="thisComment">
							<comment-item v-for="(comment,index) in thisComment" :comment="comment"
								:state="1"></comment-item>
						</view>
						<view class="thisReply">
							<reviewDetails v-for="(reply,index) in thisReplyList" :key="reply.reply_id"
								:comment="reply">
							</reviewDetails>
						</view>
						<view class="input-con">
							<view ref="input3" @click.stop="showEditorInput(3)" class="input">

							</view>
							<image @click.stop="showEditorInput(3)" class="image"
								src="/static/images/video_detail/可爱表情.png" mode="aspectFill"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</transition>
		<!-- 右侧推荐视频列表 -->
		<view class="video-list">
			<view class="video-list-con">
				<scroll-view class="video-list-scroll" scroll-y="true">
					<view class="scroll-items">
						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题需要两行显示省略号需要两行显示省略号这里是视频标题需要两行显示省略号需要两行显示省略号 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>

						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题需要两行显示省略号需要两行显示省略号这里是视频标题需要两行显示省略号需要两行显示省略号 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>

						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题需要两行显示省略号需要两行显示省略号这里是视频标题需要两行显示省略号需要两行显示省略号 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>


						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>
						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>
						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>
						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>
						<view class="scroll-item">
							<view class="cover">
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							</view>
							<view class="message">
								<view class="title">
									<text>这里是视频标题 需要两行显示省略号</text>
								</view>
								<view class="author">
									<text>这里是作者</text>
								</view>
								<view class="label">
									<text>这里是播放量和评论数</text>
								</view>
							</view>
						</view>

					</view>
				</scroll-view>
			</view>
		</view>

		<!-- 输入评论遮罩层 -->
		<editor-input @showEditorInput="showEditorInput" :state="editorState" :inputHtml="inputHtml"
			:comment="thisComment" v-if="isShowEditor"></editor-input>


	</view>
</template>

<script>
	import emoji from '../../common/emoji.js'
	import _ from 'lodash'
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				// 是否启用评论列表滚动
				isScroll: false,
				// 视频是否在播放
				isPlay: true,
				// 触摸屏幕的起始位置 改变视频大小的
				startY: 0,
				// 步长  需要计算
				deltaY: 0,
				// 视频高度
				videoH: 0,
				// 是否将遮罩背景改为粉色  有阴影就不为粉色  有粉色就没阴影
				isPink: false,
				// 是否显示头部遮罩
				isShowHeader: false,
				// 视频实例对象
				videoContext: {},
				// 视频是否在播放
				videoState: true,
				// 视频是否全屏播放
				videoIsFullScreen: false,
				// 视频总时长 最后会计算成一个字符串
				videoAllTime: 0,
				// 视频总时长 数字
				videoAllTimeNumber: 0,
				// 视频当前播放进度时间 数字
				time: 0,
				// 视频当前播放进度时间 字符串
				videoNowTime: 0,
				// 进度条的百分比
				progress: '0%',
				// 起始位置  改变进度条的
				startX: 0,
				// 步长 进度条的
				deltaX: 0,
				// 临时时间 用来保存拖动开始时视频的时间  也用来计算时间遮罩内的字符串时间
				tempTime: 0,
				// 拖动进度条时显示时间遮罩
				showTimeMask: false,
				// 是否展示弹幕
				isShowDanmu: true,
				// 输入栏在底部的定位  0为显示出来
				inpBottom: 0,
				// 是否显示输入遮罩
				isShowEditor: false,
				// 引入表情库
				emojiList: emoji.emojiList,
				// 临时的评论内容  后面要从服务器获取数据
				value: "",
				scrollH: 0,
				// 是否展示右侧全部评论
				isShowRightComment: false,
				// 是否展示右侧评论详情
				isShowRightReviewDetails: false,
				// 评论详情的数据
				thisReplyList: [],
				// 当前评论详情的评论
				thisComment: [],
				// 输入框状态 用于判断是通过哪个输入框显示了输入遮罩
				editorState: 0,
				// 输入框的html内容  发送给遮罩层初始化输入数据  即获取上次输入的记录
				inputHtml: ' ',
				// 当前视频信息  给一个初始值 避免最开始没有信息报错 后面监听请求数据更改
				thisVideo: [{
						"user_id": 1,
						"video_id": 1,
						"video_cover": "http://127.0.0.1:8088/video_cover/cover.jpg",
						"video_url": "http://127.0.0.1:8088/video/video_1.mp4",
						"video_title": "这是测试视频",
						"video_time": "0000-00-00 00:00:00"
					},
					{
						"user_id": 1,
						"user_name": "张三",
						"user_account": "111",
						"user_password": "111",
						"user_imgurl": "http://127.0.0.1:8088/user_images/user.jpg",
						"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMSIsImlhdCI6MTY5ODQ5NzI5NCwiZXhwIjoxNjk4NTgzNjk0fQ.gaISSSkS5RHeA_AOk2GbED7_peL3lbVb--iUzg6fo5M"
					}
				],
				isShowFirstComment:false
			};
		},
		computed: {
			...mapGetters([
				// 评论列表
				'commentsList',
				// 当前登录用户
				'user',
				// 当前视频信息
				'video'
			]),
			// 临时时间字符
			tempTimeStr() {
				return this.getTime(this.tempTime)
			},
			// 计算输入框底边距用
			aa() {
				// console.log(window.innerHeight*0.08 + this.inpBottom);
				return window.innerHeight * 0.08 + this.inpBottom
			}

		},
		watch: {
			commentsList: {
				handler(n, o) {
					console.log(n);
					// 将value设置成最新获取的评论列表
					this.value = n
					if(!this.value.length){
						this.isShowFirstComment =true
						this.$nextTick(()=>{
							// 没有评论时 发送第一条评论盒子的高度
							this.$refs.firstComment.$el.style = `height:${window.innerHeight*0.76+ 'px'}`
						})
					}else{
						this.isShowFirstComment =false
						this.$nextTick(()=>{
							if(this.$refs.comment.$el.clientHeight<window.innerHeight*0.74){
								this.$refs.commentEnd.$el.style = `height:${window.innerHeight*0.7-this.$refs.comment.$el.clientHeight+ 'px'}`
							}
							
						})
						

					}
				}
			},
			inpBottom: {
				handler(n, o) {
					this.scrollH = window.innerHeight - this.videoH - window.innerHeight * 0.08 - this.aa

				}
			},
			videoH: {
				handler(n, o) {
					this.scrollH = window.innerHeight - this.videoH - window.innerHeight * 0.08 - this.aa

				}
			},
			video: {
				handler(n, o) {
					this.thisVideo = n
					// console.log(n, o);
				}
			}

		},
		methods: {
			// 返回上一级
			back() {
				uni.navigateBack()
			},
			// 立即播放
			play() {
				// 视频放到原来大小  并开始播放
				this.videoH = window.innerHeight * 0.55
				// 视频开始播放
				this.videoContext.play()
				// 修改视频播放状态
				this.videoState = true
				// 头部样式不为粉色
				this.isPink = false
			},
			onTouchStart(e) {
				// 获取起始位置
				this.startY = e.touches[0].clientY

			},

			onTouchMove: _.throttle(function(e) {

				// 当视频全屏播放时  不触发事件
				if (this.videoIsFullScreen) {
					return
				}
				if (e.touches[0].clientY > window.innerWidth * 0.6) {
					return
				}
				// 当视频正在播放时
				// 	可以滚动评论列表  不能缩放视频大小
				if (this.isPlay) {
					this.isScroll = true
				} else {
					// 当视频暂停时
					// 	可以缩放视频大小  当视频缩放到一定程度时可以滚动评论列表
					// 当视频重新开始播放 或者点击 立即播放栏  视频回到原本大小 

					// 移动到的位置减去上一个起始位置就是移动的距离
					this.deltaY = e.touches[0].clientY - this.startY
					// 视频的最小大小和最大大小  最小高度为 10%窗口大小  最大为55%
					if (this.videoH + this.deltaY < window.innerHeight * 0.1) {
						this.videoH = window.innerHeight * 0.1
					} else if (this.videoH + this.deltaY > window.innerHeight * 0.55) {
						this.videoH = window.innerHeight * 0.55
					} else {
						// 步长太大时固定为5
						// if (this.deltaY > 50) {
						// 	this.deltaY = 25
						// } else if (this.deltaY < -50) {
						// 	this.deltaY = -20
						// }

						this.videoH += this.deltaY
						// console.log(this.deltaY);
						// console.log(this.videoH);
					}
					// 当视频缩小到 15%  将背景改为粉红
					if (this.videoH <= window.innerHeight * 0.15) {
						this.isShowHeader = true
						this.isPink = true
					} else {
						this.isPink = false
					}
					// 当视频缩小到10%  那么就可以开始滚动评论
					if (this.videoH == window.innerHeight * 0.1) {
						this.isScroll = true
					} else {
						this.isScroll = false
					}
					// 将移动到的位置设置成新的起始位置
					this.startY = e.touches[0].clientY
				}
				// console.log(this.aa);
				// 计算滚动条的高度
				// this.scrollH = window.innerHeight - this.videoH - window.innerHeight * 0.08
			}, 40),


			onTouchEnd(e) {

			},
			// 滚动到顶部复位输入框
			scrollToUpper() {
				// 如果 this.inpBottom 不等于 -8vh  那么就是没有复位
				if (this.inpBottom != window.innerHeight * -0.08) {
					// 只有当 this.inpBottom 等等于了 -8vh  才会停止执行
					while (this.inpBottom != window.innerHeight * -0.08) {
						// 如果 this.inpBottom-1 仍然大于 -8vh  才能继续缩小
						// 这是为了防止 因为小数导致 this.inpBottom-1 小于-8vh的情况
						if (this.inpBottom - 1 > window.innerHeight * -0.08) {
							this.inpBottom += -1
						} else {
							this.inpBottom = window.innerHeight * -0.08
						}

					}
				}
			},
			
			onScroll(e) {

				// 当视频缩小到10%  那么就可以开始滚动评论
				if (this.videoH == window.innerHeight * 0.1) {
					this.isScroll = true
				}
				// 输入框
				if (e.detail.scrollTop >= window.innerHeight * 0.1) {
					// 输入框往上滑
					if (this.inpBottom + 3 <= 0) {
						this.inpBottom += 3
					} else {
						this.inpBottom = 0
					}
				} else {

					if (this.inpBottom - 3 >= window.innerHeight * -0.08) {
						this.inpBottom += -3
					} else {
						this.inpBottom = window.innerHeight * -0.08
					}

				}



			},
			// 视频开始播放  评论列表可以滚动 视频大小回到原来大小
			videoPlay() {
				this.isPlay = true
				this.isScroll = true
				// 如果没有评论  那么就要设置没有评论盒子的高度
				if(!this.value.length){
					this.$refs.firstComment.$el.style = `height:${window.innerHeight*0.29+ 'px'}`
				}
				
				// 不全屏播放时在回到原来大小
				if (!this.videoIsFullScreen) {
					this.videoH = window.innerHeight * 0.55
				}


			},
			// 视频暂停  评论列表在视频缩小后可以滚动  
			videoPause() {
				this.isPlay = false
				this.isScroll = false
				// 如果没有评论  那么就要设置没有评论盒子的高度
				if(!this.value.length){
					this.$refs.firstComment.$el.style = `height:${window.innerHeight*0.76+ 'px'}`
				}

			},
			// 切换是否显示遮罩  点击切换
			showMask() {
				this.isShowHeader = !this.isShowHeader

				// 五秒没有操作隐藏遮罩  还没有做节流  有bug
				// const timer = setTimeout(() => {
				// 	this.isShowHeader = false
				// }, 5000)
			},
			// 播放视频
			playVideo() {
				console.log('播放视频');

				this.videoContext.play()
				this.videoState = true
			},
			// 暂停视频
			pausedVideo() {
				console.log('暂停视频');
				this.videoContext.pause()
				this.videoState = false
			},
			// 全屏播放
			fullScreen() {

				// 切换全屏播放状态
				this.videoIsFullScreen = !this.videoIsFullScreen
				if (this.videoIsFullScreen) {
					this.videoH = window.innerHeight
				} else {
					this.videoH = window.innerHeight * 0.55
				}


			},
			danmu() {
				console.log('111')
			},
			getVideoAllTime(e) {
				// console.log(e.detail.duration);
				// 获取视频总时间  一个数字 一个转为字符串
				this.videoAllTimeNumber = e.detail.duration
				this.videoAllTime = this.getTime(e.detail.duration)
				// console.log(this.videoAllTime);
			},
			// 视频进度变化时触发大约250ms左右触发一次
			videoTimeUpData(e) {
				// console.log(e.detail.currentTime);
				// 当前视频的时间
				this.time = e.detail.currentTime
				// 更改字符串类型的时间
				this.videoNowTime = this.getTime(this.time)
				// 进度条跟着时间变
				this.progress = (this.time / e.detail.duration * 100) + '%'

			},
			// 转换时间  将秒数转为时分秒格式
			getTime(t) {
				let h = parseInt(t / 60 / 60 % 24)
				let m = parseInt(t / 60 % 60)
				let s = parseInt(t % 60)
				//三元表达式 补零 如果小于10 则在前边进行补零 如果大于10 则不需要补零
				if (h) {
					h = h < 10 ? '0' + h : h
					m = m < 10 ? '0' + m : m
					s = s < 10 ? '0' + s : s
					return h + ':' + m + ':' + s

				} else {
					m = m < 10 ? '0' + m : m
					s = s < 10 ? '0' + s : s
					return m + ':' + s

				}

			},

			// 进度条拖动
			// 获取起始位置  然后计算步长  给视频当前时间加上步长 然后跳转
			progressTouchStart(e) {
				this.startX = e.touches[0].clientX
				this.tempTime = this.time
			},
			progressTouchMove(e) {
				this.showTimeMask = true
				this.deltaX = e.touches[0].clientX - this.startX
				if (this.deltaX > 0) {
					// 如果拖动之后时间超过或小于0秒 那么就不加了
					if (this.tempTime + 1 <= this.videoAllTimeNumber) {
						this.tempTime += 1
					}
				} else {
					if (this.tempTime + -1 >= 0) {
						this.tempTime += -1
					}
				}
				this.startX = e.touches[0].clientX
			},
			progressTouchEnd(e) {
				// 拖动结束后跳转到对应位置
				this.videoContext.seek(this.tempTime)
				// 同时隐藏时间遮罩
				this.showTimeMask = false
			},
			// 点击进度条跳转到对应位置
			seektoPosition(e) {
				// 首先要获取点击位置在进度条的哪个像素点
				// 然后根据位置计算百分比 要获取大小
				// 然后根据百分比计算要跳到哪一秒钟
				let clickX = e.detail.x - e.target.offsetLeft
				let id = e.target.id
				// 判断点击的是哪个进度条  根据视频是否全屏播放判断
				if (this.videoIsFullScreen) {
					var progressBar = document.querySelector("#progress-full")

				} else {
					var progressBar = document.querySelector("#progress")
				}
				let clickPercent = clickX / progressBar.offsetWidth
				let newPercent = clickPercent * this.videoAllTimeNumber
				this.videoContext.seek(newPercent)

			},
			// 切换展示弹幕,
			showDanmu() {
				this.isShowDanmu = !this.isShowDanmu
			},
			// 是否显示输入遮罩层   发送评论后需要重新获取评论列表
			showEditorInput(state, html) {
				// console.log(state,html);
				this.editorState = state
				// console.log(state);
				// 根据state判断更改的是哪个输入框
				// 1是视频下方滚动评论的输入框
				// 2是右侧全部评论
				// 3是右侧评论详情
				switch (state) {
					case 1:
						this.inputHtml = this.$refs.input1.$el.innerHTML
						this.$refs.input1.$el.innerHTML = html || ''
						
						break;
					case 2:
						this.inputHtml = this.$refs.input2.$el.innerHTML
						this.$refs.input2.$el.innerHTML = html || ''
						
						break;
					case 3:
						this.inputHtml = this.$refs.input3.$el.innerHTML
						this.$refs.input3.$el.innerHTML = html || ''
						
						break;
				}

				// console.log(html);
				this.isShowEditor = !this.isShowEditor
				// 如果评论遮罩关闭了  就发送请求获取评论
				if (!this.isShowEditor) {
					this.getComment()
				}
			},
			// 将alt属性替换为base64图片
			replaceEmoji(str) {
				// 将文本中的换行符转为 br 标签
				str = str.replace(/\n/g, '<br/>')
				// 比如输入框的内容中存在"[爱心]",那么正则会匹配这个 "[]"
				// 匹配到后,再根据里面的中文名字,拿到表情库中的base64图片
				// 动态创建img标签，显示渲染出来
				let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
					//console.log("item: " + item);
					for (let i = 0; i < this.emojiList.length; i++) {
						let EM = this.emojiList[i];
						if (EM.alt == item) {
							// 这块是表情图标，给了一个class(便于在<style>代码块中写样式)
							// src直接设置表情库中的base64编码
							// 小程序比较特殊,img标签上的class不能识别,只能在写行内style样式

							// #ifndef MP
							// 除了小程序平台,都编译这段代码
							let imgstr = `<img src="${EM.base64}" class="dom_emoji" />`
							// #endif

							// #ifdef MP
							// 仅在小程序平台编译,表情样式必须在这里写,不能外部class
							let imgstr = `<img src="${EM.base64}"
								style="width: 20px;height:20px;display: inline-block;vertical-align: middle;"
							/>`
							// #endif

							return imgstr;
						}

					}
				});

				// 默认给个容器包裹
				return `<div>${replacedStr}</div>`;
			},
			// 获取评论列表 需要传递query参数  传递的是视频id 
			getComment() {
				this.$store.dispatch('getCommentList', this.$route.query)

			},
			userLogin() {
				if (!this.user.length) {
					if (localStorage.getItem('token')) {
						this.$store.dispatch('tokenLogin', localStorage.getItem('token'))
					}

				}

			},
			// 点击评论显示右侧所有评论
			showRightComment() {
				if (this.isShowRightReviewDetails) {
					this.isShowRightReviewDetails = false
					this.isShowRightComment = true
				} else {
					this.isShowRightComment = !this.isShowRightComment
				}

			},
			// 显示右侧评论详情
			showReviewDetails(thisReplyList, thisComment,code) {
				// 这个code 由comment-item组件传递  用于分辨是否由点击评论图片而来
				// 不是点击图片来的应为undefind
				if(!code){
					this.isShowRightReviewDetails = true
				}
				// console.log(code);
				// 显示右侧评论详情
				
				this.thisReplyList = thisReplyList
				this.thisComment = []
				this.thisComment.push(thisComment)

			},
			// 隐藏评论详情
			hidenRightReviewDetails() {
				this.isShowRightReviewDetails = false
			},
			// 隐藏全部评论
			hidenRightComment() {
				this.isShowRightComment = false
			},
			getVideo() {
				this.$store.dispatch('getVideo', this.$route.query.video_id || 1)
			}

		},
		mounted() {
			// 视频高度初始化
			this.videoH = window.innerHeight * 0.55
			// 输入评论的位置初始化  在屏幕下方
			this.inpBottom = window.innerHeight * -0.08
			// 评论滚动列表高度初始化  页面高度减去视频高度  作者栏高度
			this.scrollH = window.innerHeight - this.videoH - window.innerHeight * 0.08

			this.videoContext = uni.createVideoContext('myVideo', this)
			this.getComment()
			this.userLogin()
			this.getVideo()



		}

	}
</script>

<style lang="scss">
	.main {
		display: flex;
		height: 100vh;
		overflow: hidden;

		// 左侧视频及下方评论列表
		.video-main {
			width: 60vw;


			// 视频盒子
			.video {
				position: relative;
				width: 60vw;

				video {
					z-index: 10;
					width: 100%;
				}


				.mask {
					position: absolute;
					top: 0;
					width: 100%;
					z-index: 11;

					// 视频遮罩  头部
					.video-mask-header {
						position: absolute;
						top: 0;
						display: none;
						width: 100%;
						color: white;

						.header-con {
							display: flex;
							justify-content: space-between;
							align-items: center;
							height: 5vw;
							padding: 1vw;

							image {
								width: 3vw;
								height: 3vw;
							}

							.back {
								display: flex;
								align-items: center;

								.title {
									margin-left: 2vw;
								}
							}

							.play {
								display: flex;
								align-items: center;
								height: 100%;

								image {
									margin-right: 1vw;
								}
							}

							.more {
								display: flex;
								align-items: center;

								image {
									margin-right: 2vw;
								}

								.full {
									display: flex;
								}
							}
						}


					}

					// 视频遮罩  控件
					.video-mask-progress {
						position: absolute;
						display: none;
						bottom: 0;
						width: 100%;
						color: white;

						image {
							width: 2vw;
							height: 2vw;
						}

						// 全屏进度条
						.full-progress {
							position: absolute;
							bottom: 50px;
							display: flex;
							align-items: center;
							width: 100%;

							.left-text {

								width: 4%;
								margin: 2vh 2vw;


							}

							.right-text {
								width: 4%;
								margin: 2vh 2vw;

							}


							.progress-con {
								width: 80%;
								height: 6px;
								margin-right: 1vw;
								background-color: rgba(240, 240, 240, 0.5);
								border-radius: 3px;
								margin: 2vh 2vw;

								.progress-bar {
									height: 100%;
									background-color: #ff78a8;
								}
							}


						}

						// 底部遮罩栏控制
						.video-mask-progress-con {
							display: flex;
							align-items: center;
							width: 100%;
							// justify-content: space-around;
							position: absolute;
							bottom: 2vw;

							// 暂停和播放
							.pause {
								display: flex;
								justify-content: space-around;
								width: 10%;
							}

							// 弹幕控件
							.danmu {
								display: flex;
								align-items: center;
								width: 70%;
								font-size: 12px;

								image {
									width: 3vw;
									margin-left: 1vw;
								}

								input {
									flex: 1;
									margin-left: 2vw;
									padding-left: 2vw;
									height: 5vh;
									background-color: #ccc;
									color: black;
									border-radius: 20px;
								}
							}

							// 非全屏进度条
							.video-progress {
								display: flex;
								align-items: center;
								width: 70%;
								font-size: 12px;
								margin-left: 1vw;

								.progress-con {
									width: 80%;
									height: 6px;
									margin-right: 1vw;
									background-color: rgba(240, 240, 240, 0.5);
									border-radius: 3px;

									.progress-bar {
										height: 100%;
										background-color: #ff78a8;
									}
								}

								// progress {
								// 	width: 80%;
								// 	margin-right: 1vw;
								// }
							}

							// 全屏播放
							.full-screen {
								display: flex;
								align-items: center;
								justify-content: space-around;

								width: 20%;
							}
						}
					}

					// 拖动显示时间
					.time-mask {
						position: absolute;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 20px 20px;
						height: 30px;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						background-color: rgba(0, 0, 0, 0.4);
						color: white;
						border-radius: 10px;
					}

					// 设置遮罩阴影
					.video-mask-header-active {

						background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
						/* 默认渐变位置从上往下 */
					}

					.video-mask-progress-active {

						background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));

					}



					// 控制遮罩层是否隐藏
					.show {
						display: block;
					}
				}



				// 定义过渡动画  将背景改为粉色
				@keyframes pink {
					0% {
						background-color: rgba(255, 120, 168, 0);
					}

					100% {
						background-color: rgba(255, 120, 168, 1);
					}
				}

				// 添加这个类名触发动画
				.video-mask-header-pink {

					background-color: rgba(255, 120, 168, 1);
					animation-name: pink;
					animation-duration: 1s
				}

			}


			// 视频全屏
			.video-full {
				width: 100vw;
				height: 100vw;
			}

			// 视频信息和视频评论
			.video-comment {
				position: relative;
				width: 60vw;
				background-color: white;

				// 视频作者栏
				.video-author {

					display: flex;
					align-items: center;
					height: 8vh;
					border-bottom: 1px solid #ccc;

					.user-img {
						margin: 1vh 2vh;

						image {
							width: 6vh;
							height: 6vh;
							border-radius: 50%;

						}
					}

					.user-name {
						display: flex;
						flex-direction: column;
						width: 10vw;

						.fans {
							font-size: 12px;
							color: #b6b6b6;
						}
					}

					.like {
						display: flex;
						align-items: center;
						justify-content: center;
						color: white;
						width: 8vw;
						height: 4vh;
						background-color: #ff78a8;

						image {
							height: 2vh;
							width: 2vh;
							margin-right: 1vh;
						}
					}

					.send-danmu {
						position: absolute;
						right: 0;
						display: flex;
						width: 17vw;
						height: 6vh;
						margin-right: 2vw;

						input {
							padding-left: 20px;
							width: 17vw;
							height: 6vh;
							background-color: #ccc;
							border-radius: 50px;
						}

						.btn {
							position: absolute;
							right: 0;
							display: flex;
							align-items: center;
							justify-content: center;
							width: 6vw;
							height: 6vh;
							background-color: white;
							border: 1px solid #ccc;
							border-radius: 0 50px 50px 0;

							image {
								height: 4vh;
								width: 4vh;
							}
						}

						.hiden {

							width: 0;
							margin-left: 6vw;
							animation: hiden 0.5s;
						}

						.show {
							width: 17vw;
							margin-left: 0;
							animation: show 0.5s;
						}

						.show-border-radius {
							border-radius: 0 50px 50px 0;
							background-color: white;
							animation: show-border-radius 1s;
						}

						.hiden-border-radius {
							border-radius: 50px;
							background-color: #ccc;
							animation: hiden-border-radius 1s;
						}

						// 隐藏输入框
						@keyframes hiden {
							0% {
								width: 17vw;
								margin-left: 0;
							}

							100% {
								width: 0;
								margin-left: 6vw;
							}
						}

						// 显示输入框
						@keyframes show {
							0% {
								width: 0;
								margin-left: 6vw;
							}

							100% {
								width: 17vw;
								margin-left: 0;

							}
						}

						// 显示输入框按钮动画
						@keyframes show-border-radius {
							0% {
								border-radius: 50px;
								background-color: #ccc;
							}

							100% {
								border-radius: 0 50px 50px 0;
								background-color: white;
							}
						}

						// 隐藏输入框按钮动画
						@keyframes hiden-border-radius {
							0% {
								border-radius: 0 50px 50px 0;
								background-color: white;
							}

							100% {
								border-radius: 50px;
								background-color: #ccc;
							}
						}
					}



				}

				// 视频评论栏（滚动列表）
				.video-comment-con {

					.input-con {
						display: flex;
						align-items: center;
						position: fixed;
						z-index: 2;
						bottom: 0;
						height: 8vh;
						width: 60vw;
						border-top: 1px solid #ccc;
						background-color: white;

						.image {
							width: 5vh;
							height: 5vh;
							margin-right: 2vw;
						}

						.input {
							display: flex;
							align-items: center;
							flex: 1;
							height: 6vh;
							border-radius: 40px;
							margin: 0 1vw;
							padding-left: 20px;
							padding-right: 20px;
							background-color: #e0e0e0;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}

					// 评论列表
					.video-comment-scroll {
						height: 82vh;

						.scroll-items {

							// height: 40vh;
							// 视频详细信息（标题 简介等
							.video-message {
								margin-left: 1vw;

								// 视频标题
								.title {
									margin-top: 2vh;
									font-weight: bold;
								}

								// 视频播放数等信息
								.message {
									display: flex;
									align-items: center;
									font-size: 12px;
									margin-top: 2vh;

									view {
										display: flex;
										align-items: center;
										margin-right: 3vh;
									}

									image {
										height: 2.5vh;
										width: 2.5vh;
									}
								}

								// 一键三连加分享
								.label {
									display: flex;
									align-items: center;
									height: 10vh;

									border-bottom: 1px solid #ccc;
									color: #b8b8b8;


									image {
										width: 3vw;
										height: 3vw;
									}

									.label-item {
										display: flex;
										align-items: center;
										margin-right: 2vw;
									}
								}


							}

							.firstComment{
								display: flex;
								flex-direction: column;
								align-items: center;
								width: 100%;
								padding-top: 2vw;
								text{
									margin-bottom: 1vw;
								}
								.send{
									color: #008ac5;
								}
							}
							.commentEnd{
								display: flex;
								justify-content: center;
								color: #b6b6b6;
								font-size: 14px;
							}

							.scroll-item {
								display: flex;
								margin: 2vh 0;
								padding: 0 2vh;
								border-bottom: 1px solid #ccc;

								.user-img {
									image {
										width: 4vw;
										height: 4vw;
										border-radius: 50%;
									}
								}

								.comment-con {
									display: flex;
									flex-direction: column;
									margin-left: 2vh;

									.user-name {
										margin-bottom: 1vh;

										.name {
											display: flex;
											align-items: center;
										}

										.time {
											font-size: 14px;
											color: #ccc;
										}

										image {
											width: 3vw;
											height: 3vw;
										}
									}

									.comment {
										line-height: 1.3;
										max-height: 7.8em;
										overflow: hidden;
										margin: 1vh 0;

										.dom_emoji {
											width: 30px;
										}
									}

									.label {
										display: flex;
										margin: 1vh 0;

										.label-item {
											display: flex;
											align-items: center;
											margin-right: 2vh;
										}

										.good {

											color: #a2a2a2;
										}

										image {
											width: 3vh;
											height: 3vh;
										}
									}

								}

							}




						}


					}
				}
			}
		}

		// 右侧全部评论和评论详情
		.reply-right {
			position: absolute;
			right: 0;
			background-color: white;
			width: 40vw;
			z-index: 5;

			.title {
				position: absolute;
				top: 0;
				z-index: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 1vw;
				height: 5vh;
				width: 40vw;
				font-weight: bold;
				background-color: white;
				border-bottom: 1px solid #ccc;

				image {
					width: 16px;
					height: 16px;
				}
			}

			scroll-view {
				height: 92vh;
			}

			.scroll-items {
				background-color: #e4e4e4;

				.content {
					margin-top: 5vh;
					background-color: white;
				}

				.thisComment {
					background-color: white;
					margin-top: 6vh;
					margin-bottom: 3vh;
				}

				.thisReply {
					background-color: white;
					padding-top: 2vh;
				}

				.input-con {
					display: flex;
					align-items: center;
					position: fixed;
					z-index: 2;
					bottom: 0;
					height: 8vh;
					width: 40vw;
					border-top: 1px solid #ccc;
					background-color: white;

					.image {
						width: 5vh;
						height: 5vh;
						margin-right: 2vw;
					}

					.input {
						flex: 1;
						height: 6vh;
						border-radius: 40px;
						margin: 0 1vw;
						padding-left: 20px;
						background-color: #e0e0e0;
					}
				}
			}
		}

		// 开始动画和动画结束之后宽度都为0
		.showRepltAnimate-enter .showRepltAnimate-leave-to {
			width: 0;
		}

		// 显示和隐藏使用相反的动画
		.showRepltAnimate-enter-active {
			animation: showReply 0.5s ease-in-out;
		}

		.showRepltAnimate-leave-active {
			animation: hidenReply 0.5s ease-in-out;
		}

		// 开始动画之后和隐藏动画开始宽度都为40
		.showRepltAnimate-enter-to .showRepltAnimate-leave {
			width: 40vw;
		}

		@keyframes showReply {
			0% {
				width: 0;
			}

			100% {
				width: 40vw;
			}
		}

		@keyframes hidenReply {
			0% {
				width: 40vw;
			}

			100% {
				width: 0vw;
			}
		}

		// 右侧视频推荐列表和全部评论等
		.video-list {
			box-shadow: -5px 0px 10px 0px #ccc;
			width: 40vw;
			z-index: 3;
			background-color: white;

			.video-list-con {

				.video-list-scroll {
					height: 100vh;

					.scroll-items {

						.scroll-item {
							display: flex;
							width: 40vw;
							height: 14vh;
							margin: 1vh 1vw;

							.cover {
								width: 35%;
								height: 100%;

								image {
									width: 100%;
									height: 100%;
								}
							}

							.message {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								width: 65%;

								.title {
									width: 98%;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
								}

								.author {}

								.label {}
							}
						}
					}
				}
			}
		}
	}
</style>