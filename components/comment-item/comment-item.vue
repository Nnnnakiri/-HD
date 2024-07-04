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
				<view  ref="commentItem" @click="showRightComment" class="comment" :class="[{'comment-showAll':hidenState}]">
					
					<rich-text :nodes="replaceEmoji(comment.comment_content)"></rich-text>
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
						<image @click="showEditorInput" src="/static/images/评论,说话,留言.png" mode="aspectFill"></image>
					</view>
				</view>
				<!-- 回复评论栏 将获取的评论给reply组件 -->
				<reply v-if="thisReplyList&&!state" @showReviewDetails="showReviewDetails" :replyList="thisReplyList" ></reply>
			</view>
		</view>


	</view>
</template>

<script>
	import emoji from '../../common/emoji.js'
	import {
		mapGetters
	} from 'vuex'
import { forEach } from 'lodash';
	export default {
		name: "comment-item",
		// state用于右侧评论详情页  父组件传递一个值 值为真 这边就不显示reply组件
		// 其他组件不用传递state参数
		props: ['comment','state'],
		data() {
			return {
				emojiList: emoji.emojiList,
				// 是否显示展开 收起按钮
				isShowAll:false,
				// 评论是否展开或者收起
				// true收起状态 false展开状态
				hidenState:true,

			};
		},
		computed:{
			...mapGetters([
				// 这个视频的所有回复
				'replyList'
			]),
			// 这条评论的所有回复
			thisReplyList(){
				let list
				this.replyList.forEach((item)=>{
					if(item[0].comment_id == this.comment.comment_id){
						list = item
						return 
					}
				})
				return list

			},
	

		},
		watch:{
			// 监听comment诗数据是否有变化  有变化重新获取数据渲染
			comment:{
				deep:true,
				handler(n,o){
					this.showAll()
				}
			}
		},
		methods: {
			// 将alt属性替换为base64图片
			replaceEmoji(str) {

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
			// 是否显示展开收起按钮
			showAll(){
				// 等待dom渲染完毕后计算高度 然后判断是否显示展开收起按钮
				this.$nextTick(()=>{
					this.elHeight = this.$refs.commentItem.$el.clientHeight
					if(this.$refs.commentItem.$el.clientHeight>=125){
						this.isShowAll = true
					}else{
						this.isShowAll = false
					}
				})
				
			},
			// 展开所有评论内容
			showAllComment(){
				// true是收起状态  点击后移除掉this.$refs.commentItem上的max-height属性
					this.hidenState = !this.hidenState
			},
			getReply(){
				this.$store.dispatch('getReplyList',this.comment.comment_id)

			},
			// 通知video展示右侧全部评论
			showRightComment(){
				this.$emit("showRightComment")
			},
			// 展示评论详情
			showReviewDetails(replyList,code){
				// 这个code代表的是点击的评论图片  如果要展示这个评论详情  这个code应为undefined
				// console.log(replyList);
				// replyList是这条评论的回复 同时 还要把这条评论也传递过去
				this.$emit('showReviewDetails',replyList,this.comment,code)
			},
			// 点击评论图片回复评论 需要调用本身的展示评论详情方法进行回复评论 
			 // 但是要让它不显示评论详情则需要发送一个标志符号  代表是点击的评论图片
			showEditorInput(){
				console.log('点击了图片');	
				this.showReviewDetails(_,1)
				this.$emit('showEditorInput')
			},

		},
		mounted() {

			// 是否显示 展开收起按钮
			this.showAll(),
			// 获取这条评论的所有回复
			this.getReply()

		}
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
			.comment-showAll{
				max-height: 7.8em;
			}
			// 展开收起按钮
			.all{
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