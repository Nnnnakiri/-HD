<template>
	<view class="my-anime">
		<text class="tilte">我的追番</text>
		<scroll-view scroll-x >
			<view class="scorll-items">
				<view class="scroll-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="scroll-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="scroll-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="scroll-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="scroll-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
				<view class="scroll-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>

			
			</view>

		</scroll-view>
	</view>



</template>

<script>
	export default {
		name:'myAnime'
	}
</script>

<style lang="scss" scoped>
		.my-anime {
			margin-top: 3vh;

			text {
				margin-left: 1vw;
			}

			.scorll-items {
				display: flex;
				margin: 1vh 0 0 1vw;

				.scroll-item {
					margin-right: 1vw;

					image {
						width: 20vw;
						height: 18vh;
					}

					text {
						margin-left: 0;
					}
				}
			}



		}

</style>