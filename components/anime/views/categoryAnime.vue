<template>
	<view class="category-anime-recommend">
		<view class="categoryCard">
			<text class="tilte">热血·番剧</text>
			<view class="categoryCard-items">
				<view class="categoryCard-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="categoryCard-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="categoryCard-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="categoryCard-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="categoryCard-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="categoryCard-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "categoryAnime",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.category-anime-recommend {
		.categoryCard {
			padding: 2vh 1vw 2vh 2vw;
	
			.tilte {
				font-size: 24px;
			}
	
			.categoryCard-items {
				display: flex;
				margin-top: 2vh;
	
				.categoryCard-item {
					margin-right: 1vw;
	
					image {
						width: 15.1vw;
						height: 30vh;
					}
				}
			}
		}
	}
</style>