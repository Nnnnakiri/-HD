<template>
	<view class="header">
		<text @click="changeListIndex(index)" 
		:class="listIndex == index ?'active' : ''"
		v-for="(item,index) in list">{{item}}</text>
	</view>
</template>

<script>
	export default {
		name: "mine-header-list",
		props: ['list'],
		data() {
			return {
				listIndex: 0
			};
		},
		methods: {
			changeListIndex(index) {
				this.listIndex = index;
				this.$emit('changePage',this.listIndex)
			}
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
		// border-bottom: 1px solid #b4b4b4;

		text {
			margin: 0 2vw;
		}
		.active{
			color: #ff2f99;
		}
	}
</style>