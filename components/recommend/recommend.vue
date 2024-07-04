<template>
	<view class="con">
		<!-- 首先获取视频列表   根据视频列表中的user_id组装一个数组videoIdArray  然后监视这个数组 当数组发生改变时获取用户列表 -->
		<!-- 最后根据用户列表和视频列表中的user_id进行关联获得最终的渲染数据 videos -->
		<!-- 每次下拉刷新时需要累加视频列表中的数据 -->
		<!-- 每次重新进入该组件都需要将视频列表清空 -->
		<cover v-if="video.user" v-for="(video,index) in videos" :key="video.video_id" :videoitem="video"></cover>


	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: "recommend",
		props:['requestData'],
		data() {
			return {
				page: 0
			};
		},
		methods: {
			// 获取视频列表
			getVideoList() {
				this.$store.dispatch('getvideolist', this.page)
				this.page += 1

			},
			// 获取用户列表
			getUserList() {
				this.$store.dispatch('getuserlist', this.videoIdArray)
			},
			clearVideoList(){
				this.$store.dispatch('clearvideolist')
			}

		},
		computed: {
			...mapGetters([
				'videoList',
				'userList'
			]),
			// 计算当前视频列表中的用户ID  并组成一个数组
			videoIdArray() {
				return [...new Set(this.videoList.map(item => item.user_id))]
			},
			// 将用户信息和视频信息关联起来 这是最终要渲染的数据
			videos(){
				return this.videoList.map(video=>{
					const user = this.userList.find(user=>user.user_id == video.user_id)
					return {
						...video,
						user
					}
				})
			}

		},
		watch: {
			// 当用户ID数组发生改变时 获取用户信息

			videoIdArray: {
				handler(newVal, oldVal) {
					this.getUserList()
				}
			},
			requestData:{
				handler(newVal, oldVal) {
					this.getVideoList()
				}
			}

		},
		mounted() {
			// 清空列表
			this.clearVideoList()
			// 获取视频信息
			this.getVideoList()
			// setTimeout(()=>{
			// 	console.log(this.videoIdArray);
			// },200)
		}


	}
</script>

<style lang="scss">
	.con {
		display: flex;
		flex-wrap: wrap;

	
	}
</style>