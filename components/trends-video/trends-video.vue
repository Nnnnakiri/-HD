<template>
	<view class="item">
		<view class="item-header">
			<image class="user" :src="video.user.user_imgurl" mode="aspectFill"></image>
			<text class="user-name">{{video.user.user_name}}</text>
		</view>
		<view class="item-main">
			<image class="cover" :src="video.video_cover" mode="aspectFill"></image>
			<text
				class="title">{{video.video_title}}</text>
		</view>
		<view class="item-footer">
			<view class="share">
				<image src="/static/转发.png" mode="aspectFill"></image>
				<text>555</text>
			</view>
			<view class="comments">
				<image src="/static/评论.png" mode="aspectFill"></image>
				<text>555</text>
			</view>
			<view class="like">
				<image src="/static/点赞.png" mode="aspectFill"></image>
				<!-- <image src="/static/点赞 (1).png" mode="aspectFill"></image> -->
				<text>555</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "trends-video",
		props:['video'],
		data() {
			return {

			};
		},
		watch:{
			video:{
				handler(newVal,oldVal){

				}
			}
		}
	}
</script>

<style lang="scss">
	.item {
		display: flex;
		flex-direction: column;
		width: 50vw;
		height: 60vh;
		background-color: white;
		margin-bottom: 2vh;

		.item-header {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 2vw;
			padding-top: 2vh;

			.user {
				width: 5vw;
				height: 5vw;
				border-radius: 50%;
				margin-right: 1vw;
			}

			.user-name {
				width: 100px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

		.item-main {
			display: flex;
			flex-direction: column;
			margin: 1vh 1vw;

			.cover {
				height: 40vh;
				width: 100%;
			}

			.title {
				font-weight: bold;
				margin-top: 1vh;
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.item-footer {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;

			image {
				width: 3vh;
				height: 3vh;
			}

			>view {
				display: flex;
				justify-content: center;
				align-items: center;
			}

		}


	}
</style>