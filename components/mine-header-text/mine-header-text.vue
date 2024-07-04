<template>
	<view class="header">
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		name: "mine-header-text",
		props:['text'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20px;
			height: 10vh;
			border-bottom: 1px solid #b4b4b4;
		}
</style>