<template>
	<view class="content">
		<!-- 轮播图 -->
		<mySwiper></mySwiper>
		<!-- 我的追番 -->
		<myAnime></myAnime>


		<!-- 动漫推荐 -->
		<animeRecommend></animeRecommend>
		<animeRecommend></animeRecommend>



		<!-- 分类动漫 -->
		<categoryAnime></categoryAnime>
		<categoryAnime></categoryAnime>
		<categoryAnime></categoryAnime>



	</view>
</template>

<script>
	// 轮播图
	import mySwiper from './views/mySwiper.vue'
	// 我的追番组件
	import myAnime from './views/myAnime.vue'
	// 番剧推荐组件
	import animeRecommend from './views/animeRecommend.vue'
	// 分类动画推荐组件
	import categoryAnime from './views/categoryAnime.vue'
	export default {
		name: "anime",
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
	}
</style>