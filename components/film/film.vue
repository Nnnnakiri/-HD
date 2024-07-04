<template>
	<view class="content">
		<!-- 轮播图 -->
		<mySwiper></mySwiper>
		<!-- 我的追番 -->
		<myAnime></myAnime>


		<!-- 动漫推荐 -->
		<animeRecommend></animeRecommend>



		<!-- 分类动漫 -->
		<categoryAnime></categoryAnime>
		<categoryAnime></categoryAnime>
		<categoryAnime></categoryAnime>
		<categoryAnime></categoryAnime>
		
		<text class="title">猜你喜欢</text>
		<recommend></recommend>>
	</view>
</template>

<script>
	// 轮播图
	import mySwiper from '../anime/views/mySwiper.vue'
	// 我的追番组件
	import myAnime from '../anime/views/myAnime.vue'
	// 番剧推荐组件
	import animeRecommend from '../anime/views/animeRecommend.vue'
	// 分类动画推荐组件
	import categoryAnime from '../anime/views/categoryAnime.vue'
	export default {
		name: "film",
		components: {
			categoryAnime,
			animeRecommend,
			myAnime,
			mySwiper
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	image {
		border-radius: 10px;
	}

	.content {
		display: flex;
		flex: 1;
		overflow: auto;
		flex-direction: column;
		.title{
			margin: 2vh 0 1vh 2vw;
			font-weight: bold;
			font-family: "微软雅黑";
		}
	}

</style>