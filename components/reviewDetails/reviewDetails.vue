<template>
	<view>
		<view class="scroll-item">
			<!-- 头像栏 -->
			<!-- 左侧头像 -->
			<view class="user-img">
				<image :src="comment.user_imgurl" mode="aspectFill"></image>
			</view>
			<!-- 右侧内容 -->
			<view class="comment-con">
				<!-- 用户名栏 -->
				<view class="user-name">
					<view class="name">
						<text>{{comment.user_name}}</text>
						<image src="/static/images/ic_user level_6.png" mode="aspectFill"></image>
					</view>
					<view class="time">
						<text>10月1日</text>
					</view>
				</view>
				<!-- 评论内容 -->
				<view ref="commentItem" @click="showRightComment" class="comment"
					:class="[{'comment-showAll':hidenState}]">

					<rich-text :nodes="replaceEmoji(comment.reply_content)"></rich-text>
				</view>
				<!-- 是否展示全部评论内容 -->
				<view v-if="isShowAll" class="all" @click="showAllComment">
					<text v-if="hidenState">展开</text>
					<text v-else>收起</text>
				</view>
				<!-- 控件栏 -->
				<view class="label">
					<view class="label-item good">
						<image src="/static/images/赞.png" mode="aspectFill"></image>
						<text>253</text>
					</view>
					<view class="label-item bad">
						<image src="/static/images/踩.png" mode="aspectFill"></image>
					</view>
					<view class="label-item comment">
						<image src="/static/images/评论,说话,留言.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import emoji from '../../common/emoji.js'
	export default {
		name: "reviewDetails",
		props: ['comment'],
		data() {
			return {
				emojiList: emoji.emojiList,
				// 是否显示展开 收起按钮
				isShowAll:false,
				// 评论是否展开或者收起
				// true收起状态 false展开状态
				hidenState:true
			};
		},
		methods: {
			// 将alt属性替换为base64图片
			replaceEmoji(str) {
				// console.log(this.comment);
				// 将文本中的换行符转为 br 标签
				str = str.replace(/\n/g, '<br/>')
				// 比如输入框的内容中存在"[爱心]",那么正则会匹配这个 "[]"
				// 匹配到后,再根据里面的中文名字,拿到表情库中的base64图片
				// 动态创建img标签，显示渲染出来
				let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {

					//console.log("item: " + item);
					for (let i = 0; i < this.emojiList.length; i++) {
						let EM = this.emojiList[i];
						if (EM.alt == item) {
							// 这块是表情图标，给了一个class(便于在<style>代码块中写样式)
							// src直接设置表情库中的base64编码
							// 小程序比较特殊,img标签上的class不能识别,只能在写行内style样式

							// #ifndef MP
							// 除了小程序平台,都编译这段代码
							let imgstr = `<img src="${EM.base64}" class="dom_emoji" />`
							// #endif

							// #ifdef MP
							// 仅在小程序平台编译,表情样式必须在这里写,不能外部class
							let imgstr = `<img src="${EM.base64}"
								style="width: 20px;height:20px;display: inline-block;vertical-align: middle;"
							/>`
							// #endif

							return imgstr;
						}

					}
				});

				// 默认给个容器包裹
				return `<div>${replacedStr}</div>`;
			},
		
		showAll(){
			// console.log(this.comment);
			if(this.$refs.commentItem.$el.clientHeight>=125){
				this.isShowAll = true
			}
		},
		// 展开所有评论内容
		showAllComment(){
			// true是收起状态  点击后移除掉this.$refs.commentItem上的max-height属性
				this.hidenState = !this.hidenState
		
		},
		},
	}
</script>

<style lang="scss">
	.scroll-item {
		display: flex;
		margin: 2vh 0;
		padding: 0 2vh;
		border-bottom: 1px solid #ccc;

		.user-img {
			image {
				width: 4vw;
				height: 4vw;
				border-radius: 50%;
			}
		}

		.comment-con {
			display: flex;
			flex: 1;
			flex-direction: column;
			margin-left: 2vh;

			.user-name {
				margin-bottom: 1vh;

				.name {
					display: flex;
					align-items: center;
				}

				.time {
					font-size: 14px;
					color: #ccc;
				}

				image {
					width: 3vw;
					height: 3vw;
				}
			}

			// 评论主体内容
			.comment {

				line-height: 1.3;
				overflow: hidden;
				margin: 1vh 0;

				.dom_emoji {
					width: 30px;
				}
			}

			// 设置最大高度
			.comment-showAll {
				max-height: 7.8em;
			}

			// 展开收起按钮
			.all {
				color: blue;
			}

			// 控件栏
			.label {
				display: flex;
				margin: 1vh 0;

				.label-item {
					display: flex;
					align-items: center;
					margin-right: 2vh;
				}

				.good {

					color: #a2a2a2;
				}

				image {
					width: 3vh;
					height: 3vh;
				}
			}
		}

	}
</style>