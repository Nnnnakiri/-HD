<template>
	<view>
		<view class="view-body">
			<!-- 每一个视频 -->
			<view class="view-body-item">
				<!-- 视频封面 -->
				<image mode="aspectFill" class="cover" :src="videoitem.video_cover" @click="goVideoDetail"></image>
				<!-- 视频详情（作者 发布时间 标题） -->
				<view class="view-body-item-message">
					<!-- 作者头像 -->
					<!-- 在电影模块中不需要 -->
					<image class="user" mode="aspectFit" :src="videoitem.user.user_imgurl"></image>
					<!-- 作品标题  作者名  发布时间 -->
					<!-- 在电影模块中不需要作者名称和发布时间 -->
					<view class="text">
						<text class="title">{{videoitem.video_title}}</text>
						<view class="author">
							<text class="author-name">{{videoitem.user.user_name}} · </text>
							<text class="author-time">{{time}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="mask">
				<view class="lable">
					<view class="left">
						<view class="item">
							<image src="/static/images/personal/播放数_32 (1).png" mode="aspectFill"></image>
							<text>2.2万</text>
						</view>
						<view class="item">
							<image src="/static/images/personal/弹幕数_32.png" mode="aspectFill"></image>
							<text>222</text>
						</view>
						
					</view>
					<view class="right">
						<text>5:22</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "cover",
		props: ['videoitem'],
		data() {
			return {

			};
		},
		computed:{
			time(){
				let date  =new Date(this.videoitem.video_time)
				return date.getMonth()+1 + '月' + date.getDate() + '日'
			}
		},
		methods: {
			goVideoDetail() {
				uni.navigateTo({
					url: `/pages/video/video?video_id=${this.videoitem.video_id}`,

				})
			},
		},
		mounted() {
			// setTimeout(()=>{console.log(this.videoitem);},2000)

		}
	}
</script>

<style lang="scss">
	.view-body {
		position: relative;
		// display: flex;
		padding: 20rpx 0 20rpx 40rpx;
		
		// 每一个视频包含封面和详情
		.view-body-item {

			// 视频封面
			.cover {
				border-radius: 4%;
				width: 540rpx;
				height: 400rpx;
				// padding-right: 40rpx;
			}

			// 视频详情
			.view-body-item-message {
				display: flex;
				
				// 头像
				.user {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}

				.text {
					margin-left: 3px;
					.title {}
					.author{
						margin-top: 3px;
						color: #b4b4b4;
						font-size: 14px;
					}
				}
			}
		}

		.mask{
			position: absolute;
			top: 360rpx;
			height: 3vw;
			z-index: 3;
			// background-color: bisque;
			border-radius: 4%;
			width: 540rpx;
			
			.lable{
				position: absolute;
				bottom: 0;
				display: flex;
				justify-content: space-between;
				width: 100%;
				color: white;
				padding: 0 1vw 1vw 1vw;
				image{
					width: 2vh;
					height: 2vh;
					margin-right: 0.5vh;
				}
				.left{
					display: flex;
					align-items: center;
					.item{
						display: flex;
						align-items: center;
						margin-right: 1vw;
					}
				}
			}
		}
	}
</style>