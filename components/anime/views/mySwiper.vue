<template>
	<view class="swiper">
		<swiper indicator-dots circular previous-margin="25vw" indicator-active-color="white">
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="/static/images/测试图片.jpg"></image>
					<text>动漫标题</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:'mySwiper'
	}
</script>

<style lang="scss" scoped>
	.swiper {


		swiper {
			height: 40vh;
			width: 100vw;

			swiper-item {
				// swiper-item会继承swiper组件的大小 需要用important覆盖掉
				// 多余的大小可以当做外边距
				width: 46vw !important;

				.swiper-item {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;

					text {
						position: absolute;
						bottom: 10px;
						left: 20px;
						color: white;
					}

					image {
						width: 45vw;
						height: 40vh;
					}
				}
			}


		}
	}
</style>