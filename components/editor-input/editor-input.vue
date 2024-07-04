<template>
	<view class="main">
		<view class="mask-bac" @click="hidenEditor">
			<view class="editor-con" @click.stop="stop">
				<!-- 这是输入栏 -->
				<view class="editor-inp">
					<editor id="editor" @ready="onEditorReady" class="ql-container" placeholder="请友善发言哦~~"></editor>
					<!-- 这个富文本不做展示 用来保存第一个富文本的输入内容  并将表情转为"[**]"类型的文本 -->
					<editor v-show="false" id="editor2" @ready="onEditor2Ready"></editor>
					<image src="/static/images/video_detail/full-screen填充灰色.png" mode="aspectFill"></image>
				</view>
				<!-- 这是转发到动态的控件栏 -->
				<view class="emoji-con">
					<view class="radio">
						<view class="yuan">
						</view>
						<text>转到动态</text>
					</view>
					<!-- 控件栏 -->
					<view class="icon-list">
						<view class="img-list">
							<image src="/static/images/video_detail/表情.png" mode="aspectFill"></image>
							<image src="/static/images/video_detail/艾特.png" mode="aspectFill"></image>
							<image src="/static/images/video_detail/添加.png" mode="aspectFill"></image>
						</view>

						<view class="btn">
							<button @click="sendComment">发布</button>
						</view>
					</view>
				</view>
				<!-- 表情列表 -->
				<view class="emoji-list">
					<!-- 常用的表情列表 -->
					<view class="emoji-recommond">
						<view class="image-item" v-for="(em,index) in emojiCommonList">
							<image class="image" :src="em.base64" mode="aspectFill" @click="addEmoji(em)"></image>
						</view>
					</view>
					<!-- 点开后所有的表情列表 -->
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import emoji from '../../common/emoji.js'
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: "editor-input",
		props: ['state', 'inputHtml', 'comment'],
		data() {
			return {
				// 表情列表
				emojiList: emoji.emojiList,
				// 这是要发送的评论数据
				editorVal: '',
			};
		},
		computed: {
			...mapGetters([
				'user'
			]),
			// 计算最开始下面的表情列表 
			emojiCommonList() {
				return this.emojiList.slice(0, 14)
			}
		},
		methods: {
			// 通知video关闭遮罩
			hidenEditor() {
				// 获取第一个富文本的内容  这个是展示用的
				this.editorCtx.getContents({
					success: (res) => {
						// 将富文本内容发送到video组件用于展示用户输入了什么
						this.$emit('showEditorInput', this.state, res.html)
					}
				})

			},
			// 初始化富文本内容  继续上次的记录输入
			getInputHtml() {
				this.editorCtx.setContents({

					html: this.inputHtml || ''

				})

			},
			stop() {

			},
			// 往第一个富文本中添加表情
			addEmoji(em) {
				this.editorCtx.insertImage({
					src: em.base64,
					extClass: 'image',
					width: '30px',
					height: '30px',
					alt: em.alt

				})
			},
			// 第一个富文本用于输入和展示输入内容
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
				// #endif

				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
					this.getInputHtml()
					// console.log(this.editorCtx);
				}).exec()

				// #endif
			},
			// 第二个富文本用于保存并发送第一个的内容 
			onEditor2Ready() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
				// #endif

				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery().select('#editor2').context((res) => {
					this.editorCtx2 = res.context
					
					// console.log(this.editorCtx2);
				}).exec()

				// #endif
			},
			// 发布评论
			sendComment() {
				// console.log('处罚而');
				// 获取第一个富文本的内容  这个是展示用的
				this.editorCtx.getContents({
					success: (res) => {
						// 获取到富文本的内容后  设置第二个富文本的内容等于第一个
						// 第二个富文本永远隐藏
						this.editorCtx2.setContents({
							html: res.html,
							success: () => {
								// 随后替换掉第二个富文本内的img标签 同时设置要发送出去的评论内容
								this.repalceImageAltTags(),
									this.editorCtx2.getContents({
										success: (res2) => {
											this.editorVal = res2.html
											// 如果state等于1和2  则发送视频评论  如果等于3  则发送回复评论 回复评论额外需要评论id
											if (this.state == 1 || this.state == 2) {
												let comment = {
													user_id: this.user[0].user_id,
													user_name: this.user[0].user_name,
													user_imgurl: this.user[0]
														.user_imgurl,
													video_id: this.$route.query
														.video_id,
													comment_content: this.editorVal,
												}
												console.log(comment);
												// 发送评论
												this.$store.dispatch('sendCommentList',
													comment)
												// 关闭遮罩  
												this.$emit('showEditorInput')
											}
											if (this.state == 3) {
												let comment = {
													user_id: this.user[0].user_id,
													user_name: this.user[0].user_name,
													user_imgurl: this.user[0]
														.user_imgurl,
													video_id: parseInt(this.$route
														.query.video_id),
													comment_id: this.comment[0]
														.comment_id,
													reply_content: this.editorVal,
												}
												// console.log(comment);
												this.$store.dispatch('sendReplyList',
													comment)
												this.$emit('showEditorInput')
											}

											// console.log(comment);
										}
									})
							}
						})
					}
				})
			},
			// 替换掉html中的img标签  用于之后存入数据库
			repalceImageAltTags() {
				// 获取到第二个富文本的元素
				var edi2 = document.querySelector('#editor2')
				// 获取到其中所有的图片
				var imgTags = edi2.querySelectorAll('img')
				// 遍历图片元素
				imgTags.forEach((img) => {
					// 获取到单个图片的alt属性
					var altText = img.getAttribute('alt')
					// 创建文本节点用于接收alt属性值
					var altTextNode = document.createTextNode(altText)
					// 图片的父元素替换掉这个图片
					img.parentNode.replaceChild(altTextNode, img)

				})

			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.main {
		position: absolute;
		z-index: 102;

		.mask-bac {
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.2);

			.editor-con {
				position: absolute;
				bottom: 0px;
				width: 100vw;
				background-color: white;
				border-radius: 10px 10px 0 0;

				.editor-inp {
					display: flex;

					.ql-container {
						display: flex;
						flex-direction: column;
						align-items: center;
						text-align: center;
						width: 95vw;
						font-size: 24px;
						padding: 10px;
						img {
							margin: 0 auto;
						}

					}

					image {
						position: absolute;
						right: 10px;
						top: 10px;
						width: 2vw;
						height: 2vw;

					}
				}

				.emoji-con {
					display: flex;

					margin: 20px 0;

					.radio {
						display: flex;
						align-items: center;
						margin-right: 20px;

						.yuan {
							width: 2vh;
							height: 2vh;
							border-radius: 50%;
							border: 3px solid #ccc;
							margin-right: 5px;
						}
					}

					.icon-list {
						display: flex;
						flex: 1;
						align-items: center;
						justify-content: space-between;

						.img-list {
							image {
								width: 3vw;
								height: 3vw;
								margin-right: 20px;
							}
						}

						.btn {

							button {
								display: flex;
								align-items: center;
								justify-content: center;
								width: 8vw;
								height: 3vw;
								color: #ccc;
								background-color: #ff78a8;
								border-radius: 40px;
							}

						}
					}

				}

				.emoji-list {
					height: 5vw;
					width: 100vw;

					.emoji-recommond {
						height: 5vw;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 1vw;
						border-top: 1px solid #ccc;

						.image-item {


							.image {
								width: 3vw;
								height: 3vw;
							}
						}
					}
				}

			}
		}

	}
</style>