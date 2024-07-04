<template>
	<!-- 在电影模块中  只需要取4条数据  而在动漫模块中要取8条数据 -->
	<view class="anime-recommend">
		<text class="tilte">番剧推荐</text>
		<view class="anime-recommend-items">
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			<view class="anime-recommend-item">
				<image src="/static/images/测试图片.jpg" mode="aspectFill"></image>
				<text>动漫标题</text>
			</view>
			
	
		</view>
	
	</view>
	
</template>

<script>
	export default {
		name: "animeRecommend",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.anime-recommend {
		margin-top: 2vh;
	
	
		.tilte {
			margin: 2vh 0 0 2vw;
		}
	
		.anime-recommend-items {
			display: flex;
			flex-wrap: wrap;
			margin: 2vh 1vw 2vh;
	
			.anime-recommend-item {
				display: flex;
				flex-direction: column;
				margin: 0 1vw;
	
				image {
					width: 22.5vw;
					height: 18.5vh;
				}
			}
		}
	}
</style>