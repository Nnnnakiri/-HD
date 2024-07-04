<template>
	<view class="content">
		<mine-header-list @changePage='changePageIndex' :list="title"></mine-header-list>

		<!-- 视频页面 -->
		<view v-if="pageIndex==0" class="main">
			<text @click="changeVideoListIndex(index)" :class="videoListIndex==index?'active':''"
				v-for="(item,index) in videoList" class="message">{{item}}</text>
			<!-- 我创建的收藏夹页面 -->
			<view v-if="videoListIndex==0">
				<view class="fav-class">
					<text>默认收藏夹</text>
				</view>
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
							</view>
						</view>
					</view>

				</scroll-view>
			</view>
			<!-- 订阅合集与收藏夹 -->
			<view v-if="videoListIndex==1">
				<scroll-view class="scorll-items" scroll-y="true">
					<view class="scorll-items-con">
						<view class="scorll-items-con-x">

							<!-- 头部文字 -->
							<view class="header">
								<view>
									<text class="header-title">武器的进化</text>
									<text class="header-title-small">创建者 作者名字</text>
								</view>
								<text>查看全部></text>

							</view>

							<scroll-view class="scorll-items-x" scroll-x="true">
								<!-- 滚动体 -->
								<view class="scroll-items">
									<!-- 每一个视频 -->
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
								</view>

							</scroll-view>

							<view class="header">
								<view>
									<text class="header-title">艾尔登法环</text>
									<text class="header-title-small">创建者 作者名字</text>
								</view>
								<text>查看全部></text>

							</view>
							<scroll-view class="scorll-items-x" scroll-x="true">
								<view class="scroll-items">
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
								</view>

							</scroll-view>

							<view class="header">
								<view>
									<text class="header-title">焦点饭堂</text>
									<text class="header-title-small">创建者 作者名字</text>
								</view>
								<text>查看全部></text>

							</view>
							<scroll-view class="scorll-items-x" scroll-x="true">
								<view class="scroll-items">
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
									<view>
										<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
										<text>视频标题</text>
									</view>
								</view>

							</scroll-view>
						</view>

					</view>

				</scroll-view>
			</view>
		</view>

		<!-- 追番页面 -->
		<view v-if="pageIndex==1" class="main">
			<view class="anime-header-con">
				<view @click="changeAnimeList(index)" :class="animeListIndex==index?'anime-active':''"
					v-for="(item,index) in animeList" class="animelist">
					<text>{{item}}</text>

				</view>
			</view>
			<view class="anime-body-con">
				<scroll-view scroll-y="true" class="anime-scroll-con">
					<view class="scroll-items-con">
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="length">全24话</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="length">全24话</text>
								<text class="time">时间</text>
							</view>
						</view><view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="length">全24话</text>
								<text class="time">时间</text>
							</view>
						</view><view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="length">全24话</text>
								<text class="time">时间</text>
							</view>
						</view><view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="length">全24话</text>
								<text class="time">时间</text>
							</view>
						</view><view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="length">全24话</text>
								<text class="time">时间</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>


		</view>

		<view v-if="pageIndex==2" class="main">
			<view class="anime-header-con">
				<view @click="changeAnimeList(index)" :class="animeListIndex==index?'anime-active':''"
					v-for="(item,index) in animeList" class="animelist">
					<text>{{item}}</text>

				</view>
			</view>
			<view class="anime-body-con">
				<scroll-view scroll-y="true" class="anime-scroll-con">
					<view class="scroll-items-con">
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						<view class="scroll-item">
							<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="scroll-item-message">
								<text class="title">视频标题</text>
								<text class="time">类别 | 地区</text>
								<text class="time">时间</text>
							</view>
						</view>
						
					</view>
				</scroll-view>
			</view>


		</view>


	</view>
</template>

<script>
	export default {
		name: "myfav",
		data() {
			return {
				title: ['视频', '追番', '追剧'],
				videoList: ['我创建的收藏夹', '订阅合集与收藏夹'],
				animeList: ['想看', '再看', '看过'],
				// 更改title对应的index
				pageIndex: 0,
				// 更改videoList对应index
				videoListIndex: 1,
				animeListIndex: 0
			}
		},
		methods: {
			changePageIndex(index) {
				this.pageIndex = index
			},
			changeVideoListIndex(index) {
				this.videoListIndex = index
			},
			changeAnimeList(index) {
				this.animeListIndex = index
			}
		}
	}
</script>

<style lang="scss">
	.content {

		.main {
			.message {
				display: inline-block;
				line-height: 6vh;
				margin-left: 1vw;
				font-size: 18px;
				height: 6vh;
			}
			// 追番头部
			.anime-header-con {
				display: flex;
				border-bottom: 1px solid #bdbdbd;

				.animelist {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 5vw;
					height: 4vh;
					margin: 1vh 1vw;
					border-radius: 4px;
				}

				.anime-active {
					color: #ff2f99;
					background-color: #ffe5fb;
				}
			}
			// 追番滚动体
			.anime-body-con{
				.anime-scroll-con{
					.scroll-items-con{
						height: 70vh;
						width: 75vw;
						padding-left: 2vh;
						.scroll-item{
							display: flex;
							margin: 2vh 0;
							border-bottom: 1px solid #ccc;
							image{
								
								margin-right: 1vw;
								margin-bottom: 2vh;
								width: 10vw;
								height: 25vh;
								border-radius: 5px;
							}
							.scroll-item-message{
								display: flex;
								flex-direction: column;
								text{
									margin-bottom: 1vh;
								}
								.length{
									color: #ff2f99;
									font-size:10px
								}
								.time{
									font-size: 14px;
									color: #b2b2b2;
								}
							}
						}
					}
				}
			}

			.active {
				color: #ff2f99;
				border-bottom: 2px solid #ff2f99;
			}

			.fav-class {

				margin: 2vh 2vw;
			}

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

							view {
								display: flex;
								align-items: center;

								image {
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

					.scorll-items-con-x {
						padding: 0 1vw;

						.header {
							display: flex;
							justify-content: space-between;

							view {
								display: flex;
								align-items: center;

								.header-title {
									font-size: 20px;
									margin-right: 1vw;
								}

								.header-title-small {
									font-size: 14px;
									color: #bdbdbd;
								}
							}

						}

						.scorll-items-x {
							margin: 2vh 0;

							.scroll-items {
								display: flex;
								width: 70vw;
								height: 30vh;
								border-bottom: 1px solid #ccc;

								view {
									width: 20vw;
									height: 30vh;
									margin-right: 2vw;

									image {
										width: 20vw;
										height: 70%;
										border-radius: 10px;
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