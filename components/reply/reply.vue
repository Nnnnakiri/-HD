<template>
	<view class="reply-con">
		<view @click="showReviewDetails" class="reply-items">
			<view  class="reply-item" v-for="(item,index) in threeReply">
				<rich-text :nodes="replaceEmoji(item.reply_content)"></rich-text>
			</view>
			<view v-if="isShowAll" class="all">
				<text>共{{replyListLength}}条回复</text>
				<image class="right-con" src="/static/展开.png" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>

	import emoji from '../../common/emoji.js'
	export default {
		name: "reply",
		props: ['replyList'],
		data() {
			return {
				// 表情库
				emojiList: emoji.emojiList,
				// 是否展示共多少条回复
				isShowAll: true,
				threeReply:[]
			};
		},
		computed: {
			// 评论数量小于三的不展示 共**条回复
			replyListLength() {
				// console.log(this.replyList.length);
				if (this.replyList.length < 3) {
					this.isShowAll = false
					return 0
				} else {

					// console.log(this.replyList.length);
					return this.replyList.length
				}

			},
			

		},
		methods: {
			// 将评论内容中的标识符替换为img标签
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
			// 截取前三条回复用于展示
			replaceReply(){
				// 截取前三条回复
				let list = JSON.parse(JSON.stringify(this.replyList.slice(0, 3))) 
				
				// 匹配p标签
				let regex = /<p.*?>/
				// 循环替换文本 要把回复人名字放到p标签内
				for (let item of list) {
					let match = item.reply_content.match(regex)
					if (match) {
						let text = match[0]
						let a = `<a class="user" href="#">${item.user_name}</a>`
						let newText = item.reply_content.replace(text, text + a + '：')
						item.reply_content = newText
					}
				
				}
				this.threeReply =  list
			},
		
			showReviewDetails(){
				// 这个 replyList 是comment-item组件传过来的thisReplyList 是这条评论的回复内容
				this.$emit('showReviewDetails',this.replyList)
			},
		},
		mounted() {
			this.replaceReply()
		}
	}
</script>

<style lang="scss">
	.reply-con {

		.reply-items {
			background-color: #efefef;
			padding: 1vh 0;
			margin-bottom: 2vh;

			.reply-item {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				margin: 1vh 2vh;

				// 回复文本
				p {
					line-height: 1.8em;
				}

				// 回复用户名
				.user {
					color: #008ac5
				}

				// 回复表情
				.dom_emoji {
					width: 24px;
					height: 24px;
				}
			}

			.all {
				display: flex;
				align-items: center;
				color: #008ac5;
				margin-left: 2vh;
				margin-bottom: 2vh;
				font-size: 12px;

				.right-con {
					margin-left: 1vw;
					width: 20px;
					height: 20px;
				}
			}
		}
	}
</style>