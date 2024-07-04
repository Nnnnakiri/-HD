<template>
	<view class="content">
		<mine-header-text :text="title"></mine-header-text>

		<view class="main">
			<scroll-view scroll-y="true" class="scroll-items-con">
				<view class="scroll-items">
					<view class="group">
						<view class="scroll-item">
							<text>帐号资料</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>安全隐私</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="group">
						<view class="scroll-item">
							<text>播放设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>离线设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="group">
						<view class="scroll-item">
							<text>推送设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>消息设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="group">
						<view class="scroll-item">
							<text>深色设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="group">
						<view class="scroll-item">
							<text>清理存储空间</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>其他设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="group">
						<view class="scroll-item">
							<text>我的客服</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>用户协议</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>隐私政策</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>隐私权限设置</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>第三方信息数据共享</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
						<view class="scroll-item">
							<text>关于哔哩哔哩</text>
							<image src="/static/images/personal/查看更多.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="group">
						<view class="log-out" @click="signOut">
							<text>退出登录</text>
						</view>
						<view class="blank">
							
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "setting",
		data() {
			return {
				title: '设置'

			}
		},
		methods:{
			// 清空token  清空用户信息 刷新页面
			signOut(){
				
				localStorage.removeItem('token')
				this.$router.go(0)
			}
		},

	}
</script>

<style lang="scss">
	.content {
		.main{
			padding-bottom: 1vw;
			background-color: #ededed;
			.scroll-items-con{
				height: 80vh;
				.scroll-items{
					// height: 80vh;
					
					.group{
						margin: 1vw 0;
						width: 100%;
						
						
						.scroll-item{
							display: flex;
							justify-content: space-between;
							align-items: center;
							background-color: white;
							height: 6vh;
							border-bottom: 1px solid #ccc;
							transition: background-color 0.5s ease;
							text{
								margin-left: 1vw;
							}
							image{
								margin-right: 1vw;
								width: 3vh;
								height: 3vh;
							}
						}
						.scroll-item:active{
							background-color: #e6e6e6;
						}
					
						.log-out{
							display: flex;
							justify-content: center;
							align-items: center;
							height: 7vh;
							background-color: white;
							transition: background-color 0.5s ease;
						}
						.log-out:active{
							background-color: #e6e6e6;
						}
						.blank{
							height: 2vw;
							background-color: #ededed;
						}
					
					}
				}
			}
		}
	}
</style>