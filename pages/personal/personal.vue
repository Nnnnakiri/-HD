<template>
	<view class="container" v-if="user.length">
		<!-- 返回按钮和用户姓名的遮罩 -->
		<view ref="mask" class="h-mask" :style="{height:MaskH+'px'}">
			<view class="back" :class="{showName:isShowName}" @click="back">
				<image v-if="!isShowName" src="/static/images/personal/返回.png" mode="aspectFill"></image>
				<image v-if="isShowName" src="/static/images/personal/返回 (1).png" mode="aspectFill"></image>
			</view>
			<view v-if="isShowName" class="u-name">
				<text>{{user[0].user_name}}</text>
			</view>
			<view class="more">
				<view class="search" :class="{showName:isShowName}">
					<image v-if="!isShowName" src="/static/images/personal/搜索.png" mode="aspectFill"></image>
					<image v-if="isShowName" src="/static/images/personal/搜索 (1).png" mode="aspectFill"></image>
				</view>
				<view class="share" :class="{showName:isShowName}">
					<image v-if="!isShowName" src="/static/images/personal/Android更多.png" mode="aspectFill"></image>
					<image v-if="isShowName" src="/static/images/personal/Android更多 (1).png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 主体区域 -->
		<scroll-view class="main" scroll-y="true" @scroll="onScroll">

			<!-- 头部用户信息  头像  等级啥的 -->
			<view class="user-message">
				<!-- 上方背景 -->
				<view class="h-bac">
					<image src="/static/images/personal/背景预览.png" mode="aspectFill"></image>
				</view>
				<!-- 下方用户信息 -->
				<view class="h-user">
					<!-- 用户头像那一栏 -->
					<view class="h-user-img">
						<!-- 用户头像 -->
						<view class="img" @click="showAvatarMask">
							<image class="img-con" :src="user[0].user_imgurl" mode="aspectFill"></image>
						</view>
						<!-- 右侧关注粉丝获赞 和 编辑按钮 -->
						<view class="message">
							<view class="item">
								<text>0</text>
								<text class="text">粉丝</text>
							</view>
							<text class="text">|</text>
							<view class="item">
								<text>0</text>
								<text class="text">关注</text>
							</view>
							<text class="text">|</text>
							<view class="item">
								<text>0</text>
								<text class="text">获赞</text>
							</view>
						</view>
						<view class="btn">
							<button>编辑资料</button>
						</view>
					</view>
					<!-- 用户昵称那一栏 -->
					<view class="h-user-name">
						<text class="name">{{user[0].user_name}}</text>
						<view class="vip">
							<!-- 是vip -->
							<view class="Yesvip">

							</view>
							<!-- 不是vip -->
							<view class="Novip">
								<text>大会员</text>
							</view>
						</view>
						<!-- 粉丝勋章 -->
						<view class="medal fan-medal">
							<image src="../../static/手机.png" mode="aspectFill"></image>
							<text>粉丝勋章</text>
						</view>
						<!-- 成就勋章 -->
						<view class="medal achievement-medal">
							<image src="/static/手机.png" mode="aspectFill"></image>
							<text>成就勋章</text>
						</view>
					</view>
					<view class="h-user-level">
						<view class="level-img">
							<image src="/static/images/personal/ic_user level_6.png" mode="aspectFill"></image>
							<view class="level-number">
								<text>35040/--</text>
							</view>
						</view>
						<view class="level-bar">

						</view>
					</view>
					<view class="h-user-address">
						<view class="message">
							<image src="../../static/手机.png" mode="aspectFill"></image>
							<text>IP属地：湖北</text>
							<view class="school">
								<image src="/static/images/video_detail/添加.png" mode="aspectFill"></image>
								<text>添加学校信息</text>
							</view>
						</view>
						<view @click="showMessage" class="more">
							<text v-if="!isShowMessage">详情</text>
							<text v-if="isShowMessage">收起</text>
						</view>
					</view>
					<view v-if="isShowMessage" class="h-user-message">
						<view class="message">
							<text>这个人很神秘，什么都没有写</text>
						</view>
						<view class="UID">
							<image src="/static/UP主_32.png" mode="aspectFill"></image>
							<text>153451354</text>
						</view>
					</view>

				</view>
			</view>
			<!-- 滑动的导航栏 -->
			<view ref="navigatorBarCon" class="navigator-con">
				<view ref="navigatorBar" class="navigator-bar">
					<view ref="barItems" class="bar-items">
						<view ref="home" class="bar-item" :class="{'active':selectPage==0}"
							@click.stop="changeNavigator('home',$event)">
							<text>主页</text>
						</view>
						<view ref="trends" class="bar-item" :class="{'active':selectPage==1}"
							@click.stop="changeNavigator('trends',$event)">
							<text>动态</text>
						</view>
						<view ref="video" class="bar-item" :class="{'active':selectPage==2}"
							@click.stop="changeNavigator('video',$event)">
							<text>投稿</text>
						</view>
						<view ref="fav" class="bar-item" :class="{'active':selectPage==3}"
							@click.stop="changeNavigator('fav',$event)">
							<text>收藏</text>
						</view>
						<view ref="anima" class="bar-item" :class="{'active':selectPage==4}"
							@click.stop="changeNavigator('anima',$event)">
							<text>追番</text>
						</view>
					</view>
					<view ref="navigatorLine" class="bar-line">

					</view>
				</view>
			</view>

			<swiper ref="swiper" :current="selectPage" @transition="slideSwiper" @change="swiperChange"
				@animationfinish="slideEnd">

				<swiper-item>
					<view class="swiper-item">
						<personal-model :page="0"></personal-model>
					</view>
				</swiper-item>

				<swiper-item>
					<view ref="trends" class="swiper-item trends">
						<myTrends v-for="(item,index) in Data" :item="item"></myTrends>
						<view ref="blank" class="blank" :style="{height:blankH+'px'}">
						</view>
					</view>
				</swiper-item>

				<swiper-item>
					<view class="swiper-item">
						<personal-model :page="2"></personal-model>
					</view>
				</swiper-item>

				<swiper-item>
					<view class="swiper-item">
						<personal-model :page="3"></personal-model>
					</view>
				</swiper-item>

				<swiper-item>
					<view class="swiper-item">
						<personal-model :page="4"></personal-model>
					</view>

				</swiper-item>
			</swiper>

		</scroll-view>

		<!-- 最近投币、点赞和收藏夹的具体内容 -->
		<view class="video-tab"  v-if="isShowVideoTab">
			<videoTab></videoTab>
		</view>
		
		<transition name="showshowAvatarAnimate" @before-enter="avatarMaskBeforeEnter" @enter="avatarMaskEnter" @leave="avatarMaskLeave">
			<view v-if="isShowAvatarMask"  @click="showAvatarMask" class="user-avatar-mask" >
				<view class="header">
					<image src="/static/images/personal/关闭.png" mode="aspectFill"></image>
				</view>
				<view class="body">
					<image class="avatar" :src="user[0].user_imgurl" mode="aspectFill"></image>
					<view class="btm-item">
						<text>更换头像挂件</text>
					</view>
					<view class="btm-item" @click.stop="chooseImage">
						<text>更换头像</text>
					</view>
					<view class="btm-item">
						<text>保存图片</text>
					</view>
				</view>
			</view>
			
		</transition>
		
	</view>

</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				// 是否显示个人简介和UID
				isShowMessage: false,
				// 遮罩的默认高度
				MaskH: window.innerHeight * 0.06,
				isShowName: false,
				// 检测滚动事件结束的timer
				scrollTimer: null,
				// 用于判断现在选中的是哪个页面
				selectPage: 0,
				// 滑动计算的基准值  在页面初始化和滑动结束之后被修改
				lineLeft: 0,
				// 空白区域高度
				blankH: 0,
				Data: [{
					video_id: '1'
				}, {
					video_id: '2'
				}, {
					video_id: '3'
				}],
				isShowAvatarMask:false

			};
		},
		computed: {
			...mapGetters([
				'isShowVideoTab',
				'user'
			])
		},
		watch:{
			user:{
				handler(n,o){
					if(n.length){
						// 等待页面渲染后在进行样式初始化的操作
						this.$nextTick(()=>{
							// 设置主页内容高度
							this.$refs.swiper.$el.style.height = this.$refs.swiper.$children[0].$children[0].$el.clientHeight + 'px'
							// 设置空白区域高度
							this.setblankH()
							// 线条位置初始化 
							this.$refs.navigatorLine.$el.style.left = this.$refs.barItems.$el.offsetLeft + this.$refs.home.$el
								.clientWidth / 4 + 'px'
							// 初始化基准值
							this.lineLeft =  this.$refs.barItems.$el.offsetLeft + this.$refs.home
								.$el
								.clientWidth / 4 + 'px'
							// this.$refs.home.$el.offsetLeft - (this.$refs.navigatorLine.$el.clientWidth - this.$refs.home.$el.clientWidth) / 2 + 'px'
							
						})

						// 更新页面
						console.log(this.user);

					}
				}
			}
		},
		methods: {

			// 是否显示个人简介和UID
			showMessage() {
				this.isShowMessage = !this.isShowMessage
			},
			// 返回上一页
			back() {
				uni.navigateBack({

				})
			},
			// 触发动态页面的事件总线  让动态内的视频根据位置自动播放和暂停
			getTop() {
				// 要把顶部标题和导航栏加起来的高度给子组件 
				let h = this.$refs.navigatorBar.$el.getBoundingClientRect().top + this.$refs.navigatorBar.$el.clientHeight
				// console.log(this.$refs.navigatorBar.$el.getBoundingClientRect().top);
				uni.$emit('getTop', h)
			},
			// 页面开始滑动
			onScroll(e) {


				clearTimeout(this.scrollTimer)
				// 滚动时不断清空定时器 然后重新设置  当滚动结束后就会判断 如果导航栏没复位则复位导航栏
				this.scrollTimer = setTimeout(() => {
					if (this.$refs.navigatorBarCon.$el.getBoundingClientRect().top > window.innerHeight * 0.12) {
						this.$refs.navigatorBar.$el.style = null
					}
					// 调用全局事件总线 让动态的视频自动播放
					if (this.selectPage == 1) {
						this.getTop()
					}
				}, 30)

				// getBoundingClientRect方法可以获取元素的位置信息
				// console.log(this.$refs.navigatorBar.$el.getBoundingClientRect().top);
				if (this.$refs.navigatorBarCon.$el.getBoundingClientRect().top < window.innerHeight * 0.18) {
					// 当 导航栏距离窗口顶部的距离小于18vh时  将头部遮罩过渡为白色 否则为透明色
					this.$refs.mask.$el.style.transition = 'background-color 0.5s ease-in-out'
					this.$refs.mask.$el.style.backgroundColor = 'white'
					this.isShowName = true

					// 当 导航栏距离窗口顶部的距离小于12vh时 将导航栏固定到 12vh 的位置,将头部遮罩的大小固定为12vh
					// 否则遮罩大小等于 导航栏距离窗口顶部的距离, 遮罩大小在 12vh 到 18vh 之间
					if (this.$refs.navigatorBarCon.$el.getBoundingClientRect().top < window.innerHeight * 0.12) {
						// 小于之后设置固定的 高度 
						this.MaskH = window.innerHeight * 0.12
						// 设置固定定位
						this.$refs.navigatorBar.$el.style.position = 'fixed'
						this.$refs.navigatorBar.$el.style.top = window.innerHeight * 0.12 + 'px'
					} else {
						this.MaskH = this.$refs.navigatorBarCon.$el.getBoundingClientRect().top
						this.$refs.navigatorBar.$el.style = null
					}

				} else {
					this.isShowName = false
					this.$refs.mask.$el.style.transition = 'background-color 0.2s ease-in-out'
					this.$refs.mask.$el.style.backgroundColor = 'transparent'
					// 动画结束后将高度改为6vh 避免遮罩遮挡其他元素
					this.$refs.mask.$el.addEventListener('animationend', () => {
						this.MaskH = window.innerHeight * 0.06
					})

				}

			},
			// 点击导航栏改变显示页面 
			changeNavigator(item, e) {
				switch (item) {
					case 'home':
						// 设置 selectPage 这会让swiper的current更改  从而跳转页面
						this.selectPage = 0
						// 根据点击的按钮给相应的按钮添加类名  动画结束后移除这个类
						this.$refs.home.$el.classList.add('click-animate')
						this.$refs.home.$el.addEventListener('animationend', () => {
							this.$refs.home.$el.classList.remove('click-animate')
						})

						break;
					case 'trends':
						this.selectPage = 1
						this.$refs.trends.$el.classList.add('click-animate')
						this.$refs.trends.$el.addEventListener('animationend', () => {
							this.$refs.trends.$el.classList.remove('click-animate')
						})


						break;
					case 'video':
						this.selectPage = 2
						this.$refs.video.$el.classList.add('click-animate')
						this.$refs.video.$el.addEventListener('animationend', () => {
							this.$refs.video.$el.classList.remove('click-animate')
						})

						break;
					case 'fav':

						this.selectPage = 3
						this.$refs.fav.$el.classList.add('click-animate')
						this.$refs.fav.$el.addEventListener('animationend', () => {
							this.$refs.fav.$el.classList.remove('click-animate')
						})

						break;
					case 'anima':
						this.selectPage = 4
						this.$refs.anima.$el.classList.add('click-animate')
						this.$refs.anima.$el.addEventListener('animationend', () => {
							this.$refs.anima.$el.classList.remove('click-animate')
						})

						break;
				}
			},
			// swiper current改变时触发
			swiperChange(e) {

				// e.detail.current 返回的是当前这个swiper-item的索引
				// 点击或者滑动会更改页面
				this.selectPage = e.detail.current
				// console.log(this.selectPage);
				// 自动设置高度
				// 获取到swiper这个组件 然后找到放内容的盒子 自动设置大小
				this.$refs.swiper.$el.style.height = this.$refs.swiper.$children[e.detail.current].$children[0].$el
					.clientHeight + 'px'


				// console.log(this.$refs.swiper.$el.style.height);

				// console.log(e.detail.current);
			},
			// 滑动时触发  e.detail.dx是滑动元素滑动了多少px
			slideSwiper(e) {
				// 计算页面滑动了多少百分比
				let slideX = parseFloat(e.detail.dx / window.innerWidth).toFixed(2)
				// 重新获取基准值
				let nowLeft = this.lineLeft
				nowLeft = parseFloat(nowLeft.slice(0, nowLeft.length - 2))
				// 更新线条的left值  (基准值+按钮宽度*百分比)
				this.$refs.navigatorLine.$el.style.left = parseFloat(nowLeft) + parseFloat(this.$refs.home.$el
					.clientWidth * slideX) + 'px'
			},
			// 滑动结束后修改基准值
			slideEnd() {
				this.lineLeft = this.$refs.navigatorLine.$el.style.left
			},
			// 设置空白区域的大小
			setblankH() {
				if (this.$refs.trends.$el.clientHeight < window.innerHeight * 0.82) {
					this.blankH = window.innerHeight * 0.82 - this.$refs.trends.$el.clientHeight
				}
			},
			// 切换显示遮罩
			showAvatarMask(){
				this.isShowAvatarMask = !this.isShowAvatarMask
			},
			// 在过渡动画开始调用
			avatarMaskBeforeEnter(e){
				e.style.transformOrigin='10% 20%'
				e.style.transform = 'scale(0)'
			},
			avatarMaskEnter(e,done){
				e.offsetWidth
				
				e.style.transition = 'transform 0.3s ease-out'
				e.style.transform = 'scale(1)'
				// 执行下一步动作
				done()
			},
			avatarMaskLeave(e,done){
				
				e.style.transition = 'transform 0.3s ease-out'
				e.style.transform = 'scale(0)'
				setTimeout(()=>{
					// this.isShowAvatarMask =false
					done()
				},500)
				
			},
			// 页面中触发上传图片的操作
			chooseImage(){
				uni.chooseImage({
					count:1,
					success:(res)=>{
						const tempFilePaths = res.tempFilePaths
						// 选择成功后上传图片
						this.unloadImage(this.user[0],tempFilePaths[0])
						console.log(tempFilePaths);
					},
				})
			},
			// 上传图片
			unloadImage(user,filePath){
				this.$store.dispatch('unloadImage',{user,filePath})
			},
		},
		mounted() {
			// // 设置主页内容高度
			// this.$refs.swiper.$el.style.height = this.$refs.swiper.$children[0].$children[0].$el.clientHeight + 'px'
			// // 设置空白区域高度
			// this.setblankH()
			// // 线条位置初始化 
			// this.$refs.navigatorLine.$el.style.left = this.$refs.barItems.$el.offsetLeft + this.$refs.home.$el
			// 	.clientWidth / 4 + 'px'
			// // 初始化基准值
			// this.lineLeft = this.$refs.navigatorLine.$el.style.left = this.$refs.barItems.$el.offsetLeft + this.$refs.home
			// 	.$el
			// 	.clientWidth / 4 + 'px'
			// // this.$refs.home.$el.offsetLeft - (this.$refs.navigatorLine.$el.clientWidth - this.$refs.home.$el.clientWidth) / 2 + 'px'
			
			// 发送请求获取用户数据
			this.$store.dispatch('tokenLogin',localStorage.getItem('token'))

		},
		onReady() {
			
			
		}

	}
</script>

<style lang="scss">
	.container {
		position: relative;

		.h-mask {
			display: flex;
			justify-content: space-between;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100vw;
			height: 3vh;

			image {
				width: 3vh;
				height: 3vh;
			}

			.back {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 2vh 2vh 0 2vh;
				width: 4vh;
				height: 4vh;
				border-radius: 50%;
				transition: background-color 0.2s ease-in-out;
				background-color: rgba(47, 47, 47, 0.6);
			}

			.showName {
				transition: background-color 0.5s ease-in-out;
				background-color: white;
			}

			.u-name {
				font-size: 22px;
				margin: 2vh 0 0 0;
			}

			.more {
				display: flex;

				.search,
				.share {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 2vh 2vh 0 0;
					width: 4vh;
					height: 4vh;
					border-radius: 50%;
					transition: background-color 0.2s ease-in-out;

					background-color: rgba(47, 47, 47, 0.6);
				}

				.showName {
					transition: background-color 0.5s ease-in-out;
					background-color: white;
				}

			}
		}

		.main {

			width: 100vw;
			height: 100vh;
			overflow: hidden;

			.user-message {

				.h-bac {
					width: 100vw;
					height: 20vh;

					image {
						width: 100vw;
						height: 20vh;
					}
				}

				.h-user {
					display: flex;
					flex-direction: column;
					width: 100vw;

					padding-left: 2vw;
					padding-right: 2vw;
					padding-bottom: 2vh;


					// 用户头像那一栏
					.h-user-img {
						display: flex;
						height: 8vh;

						.img {
							position: relative;
							width: 40vw;

							.img-con {
								position: absolute;
								top: -5vh;
								left: 5vh;
								width: 12vh;
								height: 12vh;
								border-radius: 50%;
							}
						}

						.message {
							display: flex;
							justify-content: center;
							align-items: center;
							flex: 1;

							.item {
								display: flex;
								flex-direction: column;
								align-items: center;
								width: 5vw;
							}

							.text {
								color: #a9a9a9;
							}
						}

						.btn {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 25vw;

							button {
								width: 25vw;
								margin-right: 2vw;
								border: 2px solid #ff2f99;
								color: #ff2f99;
								background-color: transparent;
							}
						}
					}

					// 用户姓名那一栏
					.h-user-name {
						display: flex;
						align-items: flex-end;
						margin-top: 2vh;

						.name {
							font-size: 24px;
							margin-right: 2vw;
						}

						.vip {
							.Novip {
								display: flex;
								justify-content: center;
								width: 7vw;
								border-radius: 20px;
								font-size: 18px;
								color: white;

								background-color: #9d9d9d;
								font-family: '幼圆';
							}
						}

						.medal {
							display: flex;
							align-items: center;
							margin-left: 1vw;
							color: #a9a9a9;

							image {
								width: 3vh;
								height: 3vh;
							}
						}
					}

					// 用户等级那一栏
					.h-user-level {
						.level-img {
							display: flex;
							align-items: center;
							height: 40px;
							font-size: 12px;
							color: #a9a9a9;

							image {
								width: 40px;
								height: 40px;
								margin-right: 1vw;

							}
						}

						.level-bar {
							width: 12vw;
							height: 4px;
							background-color: red;
						}

					}

					.h-user-address {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
						margin-right: 20px;

						.message {
							display: flex;
							align-items: center;
							margin-top: 2vh;

							.school {
								display: flex;
								align-items: center;
								justify-content: center;
								border-radius: 20px;
								margin-left: 10px;
								border: 2px dashed #ccc;
								width: 12vw;
								background-color: #f3f3f3;

								image {
									margin-right: 1vh;
								}
							}

							image {
								width: 20px;
								height: 20px;
								margin-right: 1vh;
							}
						}

						.more {
							color: royalblue;
						}

					}

					.h-user-message {
						display: flex;
						flex-direction: column;
						margin-top: 2vh;

						.message {
							font-size: 14px;
							color: #a9a9a9;
						}

						.UID {
							display: flex;
							align-items: center;
							font-size: 12px;
							color: #a9a9a9;
							margin-top: 2vh;
						}

						image {
							width: 2vh;
							height: 2vh;
							margin-right: 1vh;
						}
					}
				}
			}

			.navigator-con {
				width: 100vw;
				height: 6vh;

				.navigator-bar {
					position: relative;
					display: flex;
					justify-content: center;
					z-index: 2;
					width: 100vw;
					border-top: 1px solid #ccc;
					border-bottom: 1px solid #ccc;
					margin-bottom: 2vh;
					background-color: white;

					.bar-items {
						display: flex;
						justify-content: space-around;
						width: 60vw;
						// padding: 2vh 0;

						.bar-item {
							display: flex;
							justify-content: center;
							align-items: center;
							z-index: 1;
							width: 12vw;
							height: 6vh;
							font-size: 24px;

						}

						// 选中更改字体颜色
						.active {
							color: #ff2f99;
						}

						// 点击后选中的过渡动画
						.click-animate {
							// background-color: red;
							animation: itemBac 1s;
						}

						@keyframes itemBac {
							0% {
								background-color: rgba(177, 177, 177, 0.5);
							}

							100% {
								background-color: white;
							}
						}
					}

					.bar-line {
						position: absolute;
						z-index: 2;
						left: 0;
						bottom: 0;
						width: 6vw;
						height: 0.5vh;
						background-color: #ff2f99;
					}
				}

			}

			swiper {
				height: 100vh;

				swiper-item {

					.swiper-item {

						display: flex;
						flex-direction: column;

						image {
							height: 320px;
						}

						.blank {
							background-color: #e4e4e4;
						}
					}

					.trends {
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #e4e4e4;
					}
				}
			}



		}

		.video-tab {
			position: fixed;
			top: 0;
			z-index: 3;
			width: 100vw;
			height: 100vh;
			background-color: white;
			
		}

		.user-avatar-mask{
			position: absolute;
			top: 0;
			z-index: 8;
			width: 100vw;
			height: 100vh;
			background-color: black;
			padding: 2vh;
			
			
			.header{
				height: 5vh;
				image{
					height: 3vh;
					width: 3vh;
				}
			}
			.body{
				display: flex;
				flex: 1;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				.avatar{
					width: 55vh;
					height: 55vh;
				}
				.btm-item{
					display:flex;
					align-items: center;
					justify-content: center;
					border-radius: 5px;
					font-size: 1em;
					color: white;
					width: 30vw;
					height: 6vh;
					background-color: rgba(236, 236, 236, 0.2);
					margin: 2vh;
				}
			}
		}

	
	}
</style>