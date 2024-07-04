<template>
	<view class="content">
		<view class="header">
			<nav-header ref="header" :page="pageText" :select="select" @selectNum="getSelectNum"></nav-header>
		</view>
 
		<view class="trendsBody">
			<view class="main-con">
				<!-- 左侧滚动条 -->
				<!-- 我的关注列表 -->
				<scroll-view class="tab-con" scroll-y>
					<view class="item" :class="userIndex==index ?'active':''" v-for="(item,index) in mylike"
						:key="item.user_id" @click="changeUserIndex(index,item)">
						<image class="user" :src="item.user_imgurl" mode="aspectFill"></image>
						<text class="user-name">{{item.user_name}}</text>
					</view>

				</scroll-view>
				<!-- 右侧滚动条 -->
				<scroll-view class="tab-main" scroll-y>
					
					<trends-video v-for="(item,index) in likeArr" :video="item"></trends-video>

				</scroll-view>
			</view>

		</view>

		<tabbar :pageUrl="pageUrl"></tabbar>

	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	// 首先根据登录的用户信息 获取到 该用户的关注列表
	// 然后根据关注的用户列表获取 该用户的视频列表
	export default {
		data() {
			return {
				select: 0,
				pageUrl: '/pages/trends/trends',
				pageText: 'trends',
				// 用来控制选中样式
				userIndex: null,
				// 当前选中的被关注人的信息
				likeUser: [],
				// 当前选中被关注人的整个信息  个人信息+视频列表
				likeArr: [],
				Data: [{
					video_id: '1'
				}, {
					video_id: '2'
				}, {
					video_id: '3'
				}],

			};
		},
		computed: {
			...mapGetters([
				// 当前用户信息
				'user',
				// 关注人列表
				'mylike',
				// 被关注人的视频列表
				'mylikeVideoList'
			])
		},
		methods: {
			// 改变选中样式
			getSelectNum(num) {
				this.select = num
			},
			// 获取关注列表
			getMyLike() {
				if (this.user.length) {
					this.$store.dispatch('getmylike', this.user[0].user_id)
				}
			},
			// 该变关注列表样式
			// 接受被关注人信息 并保存
			// 发送请求
			changeUserIndex(index, item) {
				this.userIndex = index
				this.likeUser = item
				this.$store.dispatch('getmylikeVideoList', this.likeUser.user_id)
			},

		},
		watch: {
			// 用户刷新  重新获取数据
			user:{
				handler(){
					if(this.user.length){
						// 获取关注列表
						this.getMyLike()
						// 关注列表选中第一项
						this.userIndex = 0
						// 异步获取视频列表
						setTimeout(() => {
							this.$store.dispatch('getmylikeVideoList', this.mylike[0].user_id)
						}, 200)
					}
				}
			},
			// 当关注列表有值之后  自动更改likeUser的值为第一项
			// 后面会发送请求 getmylikeVideoList 用来获取第一个被关注人的视频信息
			// 然后会将 likeUser 插入到 mylikeVideoList中去  并赋值给 likeArr 用来循环
			// 后续的请求根据点击的关注人发送不同的请求  点击会传送被关注人的详细信息
			
			mylike:{
				handler(){
					if(this.mylike){
						this.likeUser = this.mylike[0]
					}
				}
			},
			// 信息整合
			mylikeVideoList: {
				handler(newVal, oldVal) {
					this.likeArr = []
					// 将用户信息添加到每一个视频信息中去
					this.mylikeVideoList.map((item, index) => {
						this.likeArr.push(
							Object.assign({}, item, {
								user: this.likeUser
							})
						);
					});

				}
			}
		},
		mounted() {
			// 如果有登录的用户信息就获取数据  这代表用户是通过tabbar跳转过来的 用户信息还没有丢失
			// 如果是刷新的  那么用户信息就会丢失 新的信息没有传回来就将id作为参数发送 就会报错
			// 所以这套获取数据的逻辑还需要监听 user 的变化 如果用户在这个页面刷新 当数据返回时 在重新获取数据
			if(this.user.length){
				// 获取关注列表
				this.getMyLike()
				// 关注列表选中第一项
				this.userIndex = 0
				// 异步获取视频列表
				setTimeout(() => {
					this.$store.dispatch('getmylikeVideoList', this.mylike[0].user_id)
				}, 200)
			}
		

		}
	}
</script>

<style lang="scss">
	.content {

		display: flex;
		flex-direction: column;
		align-items: center;



		.header {
			// 固定到屏幕顶部
			position: fixed;
			top: 0;
			z-index: 100;
			// 头部设置固定高度
			height: 10vh;
			width: 100vw;
			background-color: white;
		}

		.trendsBody {
			display: flex;
			justify-content: center;
			height: 100vh;
			background-color: #ebebeb;
			width: 100vw;

			.main-con {
				display: flex;
				width: 70vw;

				// 左侧滚动条
				.tab-con {
					position: fixed;
					margin-top: 12vh;
					width: 20%;
					height: 78vh;
					background-color: #f0f0f0;
					border: 1px solid #dddddd;

					.item {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						width: 20vw;
						height: 10vh;
						padding-left: 2vw;

						.user {
							width: 5vw;
							height: 5vw;
							border-radius: 50%;
							margin-right: 1vw;
						}

						.user-name {
							width: 100px;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}

					.active {
						background-color: white;
					}


				}

				// 右侧滚动条
				.tab-main {
					position: fixed;
					margin-top: 12vh;
					margin-left: calc(20vw + 2px);
					width: 80%;
					height: 78vh;


				}
			}

		}

	}
</style>