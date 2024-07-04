<template>
	<view ref="personalModel" class="content">
		<!-- 主页内容 -->
		<view class="home" v-if="page==0">
			<!-- 视频 -->
			<view class="video">
				<!-- 视频 头部标题 -->
				<view class="title">
					<view class="left">
						<text class="text">视频</text>
						<text class="number">3</text>
					</view>
					<view class="right">
						<text>查看更多</text>
						<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
					</view>
				</view>
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

				</view>

			</view>

			<!-- 收藏 -->
			<view class="fav">
				<!--  头部标题 -->
				<view class="title">
					<view class="left">
						<text class="text">收藏</text>
						<text class="number">11</text>
						<image src="/static/images/personal/关闭眼睛.png" mode="aspectFill"></image>
					</view>
					<view class="right">
						<text>查看更多</text>
						<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
					</view>
				</view>
				<!-- 视频集合 -->
				<view class="home-items">
					<!-- 每一个视频选项 -->
					<view class="home-item">

						<view class="video">
							<!-- 封面 -->
							<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<!-- 遮罩 -->
							<view class="video-mask">
								<view class="fav-icon">
									<image src="/static/images/艾特.png" mode="aspectFill"></image>
								</view>
							</view>
						</view>
						<view class="video-title">
							<text>默认收藏夹</text>
						</view>
						<view class="author">
							<text>私密/26个内容</text>
						</view>

					</view>

				</view>

			</view>
			<!-- 追番 -->
			<view class="anima">
				<!-- 视频 头部标题 -->
				<view class="title">
					<view class="left">
						<text class="text">追番</text>
						<text class="number">144</text>
						<image src="/static/images/personal/关闭眼睛.png" mode="aspectFill"></image>
					</view>
					<view class="right">
						<text>查看更多</text>
						<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
					</view>
				</view>
				<!-- 视频集合 -->
				<view class="home-items">
					<!-- 每一个视频选项 -->
					<view class="home-item anime-item">

						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>

						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>

					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					
				</view>

			</view>

			<!-- 最近投币的视频 -->
			<view class="coining">
				<!-- 视频 头部标题 -->
				<view class="title" @click="showVideoTab(1)">
					<view class="left">
						<text class="text">最近投币的视频</text>
						<text class="number">14</text>
						<image src="/static/images/personal/关闭眼睛.png" mode="aspectFill"></image>
					</view>
					<view class="right">
						<text>查看更多</text>
						<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
					</view>
				</view>
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

				</view>

			</view>
			<!-- 最近点赞的视频 -->
			<view class="like">
				<!-- 视频 头部标题 -->
				<view class="title"  @click="showVideoTab(2)">
					<view class="left">
						<text class="text">最近点赞的视频</text>
						<text class="number">599</text>
						<image src="/static/images/personal/关闭眼睛.png" mode="aspectFill"></image>
					</view>
					<view class="right">
						<text>查看更多</text>
						<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
					</view>
				</view>
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

				</view>

			</view>

		</view>

		<!-- 投稿 -->
		<view class="submission home" v-if="page==2">
			<view class="submission-title">
				<view class="continue-playing">
					<image src="/static/images/personal/播放.png" mode="aspectFill"></image>
					<text>继续播放</text>
				</view>
				<view class="new">
					<image src="/static/images/personal/3.1列表.png" mode="aspectFill"></image>
					<text>最新发布</text>
				</view>
			</view>
			<view class="video">
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

					</view>

				</view>

				<view class="no-more">
					<text>再怎么找也没有啦</text>
				</view>
			</view>

		</view>

		<!-- 收藏 -->
		<view class="collect home" v-if="page==3">
			<view class="video">
				<!-- 视频集合 -->
				<view class="home-items">
					<!-- 每一个视频选项 -->
					<view class="home-item"  @click="showVideoTab(3)">
						<view class="video">
							<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="collect-video-mask">
								<text>26</text>
								<image src="/static/images/personal/文件夹.png" mode="aspectFill"></image>

							</view>
						</view>
						<view class="video-title">
							<text>默认收藏夹</text>
						</view>
						<view class="author">
							<text>私密/26个内容</text>
						</view>
					</view>
					<view class="home-item"  @click="showVideoTab(3)">
						<view class="video">
							<image class="cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
							<view class="collect-video-mask">
								<text>26</text>
								<image src="/static/images/personal/文件夹.png" mode="aspectFill"></image>
					
							</view>
						</view>
						<view class="video-title">
							<text>默认收藏夹</text>
						</view>
						<view class="author">
							<text>私密/26个内容</text>
						</view>
					</view>
					
					
				</view>

			</view>

		</view>
		
		<!-- 追番 -->
		<view class="subscribe-anime home" v-if="page==4">
			<view class="anima">
				<!-- 视频集合 -->
				<view class="home-items">
					<!-- 每一个视频选项 -->
					<view class="home-item anime-item">
			
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
			
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
			
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
								
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
								
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
					<view class="home-item anime-item">
					
						<view class="video anima-video">
							<image class="anima-cover-con" src="/static/images/测试图片.jpg" mode="aspectFill"></image>
					
						</view>
						<view class="video-title">
							<text>这里放视频的标题</text>
						</view>
						<view class="author">
							<text>更新至11话</text>
						</view>
					
					</view>
	
				</view>
			
			</view>
		</view>
		<!-- 底部空白 -->
		<view ref="blank" class="blank" :style="{height:blankH+'px'}">

		</view>

		
	</view>
</template>

<script>
	export default {
		name: "personal-model",
		props: ['page'],
		data() {
			return {
				// 空白区域高度
				blankH: 0,
				

			};
		},
		methods: {
			// 设置空白区域的高度  让内容少的页面也能滚动
			setblankH() {
				if (this.$refs.personalModel.$el.clientHeight < window.innerHeight * 0.82) {
					this.blankH = window.innerHeight * 0.82 - this.$refs.personalModel.$el.clientHeight
				}
			},
			showVideoTab(page){
				this.$store.dispatch('showVideoTab',page)
			}
		},

		mounted() {
			this.setblankH()

		}
	}
</script>

<style lang="scss">
	.content {
		
		// 主页的样式
		.home {
			padding: 0 1.5vw;

			.video,
			.fav,
			.anima,
			.coining,
			.like {
				.title {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 2vh 0;

					.left {
						display: flex;
						align-items: center;

						.text {
							margin-right: 1vh;
						}

						.number {
							color: #a1a1a1;
							font-size: 14px;
						}

						image {
							width: 3vh;
							height: 3vh;
							margin-left: 1vw;
						}
					}

					.right {
						display: flex;
						align-items: center;
						color: #a1a1a1;

						image {
							width: 3vw;
							height: 3vw;
						}
					}
				}

				.home-items {
					display: flex;
					// justify-content: space-between;
					flex-wrap: wrap;

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
						.anima-video{
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
					// 追番是6个一行   因此第四个不能设置为0
					.anime-item:nth-child(4n) {

						margin-right: 1vw;
					}
					.anime-item:nth-child(6n){
						margin-right: 0;
					}

				}

			
			}


		}

		.submission {
			.submission-title{
				display: flex;
				justify-content: space-between;
				margin: 1vh 0 ;
				.continue-playing,.new{
					display: flex;
					align-items: center;
					image{
						width: 3vh;
						height: 3vh;
						margin-right: 1vw;
					}
				}
				.new{
					color: #a1a1a1;
				}
			}
			.video {
				.no-more {
					display: flex;
					justify-content: center;
					margin-top: 5vh;
					color: #a1a1a1;
					font-size: 16px;
				}
			}
		}
		.collect{
			margin-top: 2vw;
			.collect-video-mask{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				position: absolute;
				right: 0;
				top: 0;
				height: 100%;
				width: 33%;
				background-color: rgba(0, 0, 0, 0.7);
				color: white;
				border-radius: 0 10px 10px 0;
				image{
					width: 3vh;
					height: 3vh;
					margin-top: 2vh;
				}
			}
		}
		.subscribe-anime{
			margin-top: 1vw;
		}
	
	

	}
</style>