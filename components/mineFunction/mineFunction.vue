<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<view class="main">
			<scroll-view scroll-y class="scroll-items">
				<!-- 常用功能 -->
				<view v-if="selectPage=='commonFunctions'" class="common-functions">
					<!-- 历史记录 -->
					<view class="history">
						<text>历史记录</text>
						<text>查看更多></text>
					</view>
					<scroll-view class="scroll-item" scroll-x>
						<view class="scroll-item-con">
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
						</view>
					</scroll-view>

					<!-- 我的收藏 -->
					<view class="history">
						<text>我的收藏</text>
						<text>查看更多></text>
					</view>
					<scroll-view class="scroll-item" scroll-x>
						<view class="scroll-item-con">
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
						</view>
					</scroll-view>


					<!-- 我的关注 -->
					<view class="history">
						<text>我的关注</text>
						<text>查看更多></text>
					</view>
					<scroll-view class="scroll-item-user" scroll-x>
						<view class="scroll-item-con">
							<view v-for="(item,index) in mylike">
								<image :src="item.user_imgurl" mode="aspectFill"></image>
								<text>{{item.user_name}}</text>
							</view>


						</view>
					</scroll-view>

					<!-- 稍后再看 -->
					<view class="history">
						<text>稍后再看</text>
						<text>查看更多></text>
					</view>
					<scroll-view class="scroll-item" scroll-x>
						<view class="scroll-item-con">
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>
							<view>
								<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
								<text>标题</text>
								<text>时间</text>
							</view>

						</view>
					</scroll-view>


				</view>


			</scroll-view>
		</view>

	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: "mineFunction",
		// commonFunctions 常用功能
		// download 离线缓存
		// history 历史记录
		// myFav 我的收藏
		// nextTime 稍后再看
		// myLike 我的关注
		// myMessage 我的消息
		// myClass 我的课程
		// childMode 青少年模式
		// help 客服
		// setting 设置
		props: ['selectPage'],
		data() {
			return {
				title: '常用功能'
			};
		},
		computed: {
			...mapGetters([
				'user',
				'mylike'
			])
		},
		watch: {
			// 页面刷新后user数据会暂时丢失 这时mounted执行getMyLike获取关注列表  其中的if判断是不通过的
			// 因此需要监视user  当user有数据之后在发送数据
			// 或许之后的数据都要在这里发送了吧  (lll￢ω￢)
			user:{
				handler(){
					if(this.user.length){
						this.getMyLike()
					}
				}
			},
		},
		methods: {
			// 获取关注列表
			getMyLike() {
				if (this.user.length) {
					this.$store.dispatch('getmylike', this.user[0].user_id)
				}
			},
		},
		mounted() {
			this.getMyLike()
			
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;

		.main {
			.scroll-items {
				position: fixed;
				height: 80vh;

				.common-functions {

					.history {
						display: flex;
						justify-content: space-between;
						width: 73%;
						margin: 2vh 1vw;
					}

					.scroll-item {
						width: 73%;
						height: 33%;
						margin: 0 0 0 1vw;
						padding-bottom: 2vh;
						border-bottom: 1px solid #b4b4b4;

						.scroll-item-con {
							display: flex;


							view {
								display: flex;
								flex-direction: column;
								margin-right: 1vw;

								image {
									width: 22vw;
									height: 20vh;
								}
							}
						}

					}

					.scroll-item-user {
						width: 73%;
						height: 20%;
						margin-left: 1vw;
						padding-bottom: 2vh;
						border-bottom: 1px solid #b4b4b4;

						.scroll-item-con {
							display: flex;

							>view {
								display: flex;
								flex-direction: column;
								align-items: center;
								margin: 2vh 1vw 0 1vw;

								image {
									width: 5vw;
									height: 5vw;
									border-radius: 50%;
								}
							}
						}

					}


				}
			}
		}

	}
</style>