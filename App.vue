<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	*{
		box-sizing: border-box;
	}
	uni-page-body{
		height: 100%;
		overflow: scroll;
	}
	::-webkit-scrollbar {
			width: 0;
			height: 0;
			background-color: transparent;
		} 
	.tilte {
		font-weight: bold;
		font-family: "微软雅黑";
	}
</style>
