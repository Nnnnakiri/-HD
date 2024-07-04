// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: { //存放状态
		// 视频列表
		videoList: [],
		// 用户列表 用于和视频列表进行信息关联
		userList: [],
		// 当前登录用户
		user: [],
		// 存放用户是否登录状态
		isLogin:false,
		// 当前登录用户的关注列表
		mylike:[],
		// 关注列表中某个人的视频列表
		mylikeVideoList:[],
		// 一级评论列表
		commentsList:[],
		// 回复评论列表
		replyList:[],
		// 当前视频信息
		video:[],
		// personal页面是否显示Videotab组件
		isShowVideoTab:false,
		// videotab组件显示的页面
		videoTabPage:0
	},
	actions: {
		// 获取视频列表
		// 将视频列表中的用户id拿出来组成一个数组发送请求  请求这些用户的身份信息
		// 然后遍历到网页上时判断遍历所用的用户id是否和请求到的用户ID相同 
		// 如果相同  那么这个用户就是这个视频的作者  就展示他的头像
		async getvideolist({
			commit
		}, page) {
			let list
			await uni.request({
				url: 'http://localhost:8088/getvideolist?page=' + page,
				method: 'POST',
				success(data) {

					list = JSON.parse(data.data.data)
					commit('GETVIDEOLIST', list)
				}

			})
		},
		// 获取用户信息
		async getuserlist({
			commit
		}, arr) {
			// list用于接收请求来的数据
			let list
			await uni.request({
				url: 'http://localhost:8088/getuserlist',
				method: 'POST',
				data: {
					videoArr: arr
				},
				success(data) {
					// 不知道为什么会多出一个空对象  如果结果为这个空对象 就跳过  避免JSON报错
					if (Object.keys(data.data.data).length == 0) {
						return
					}

					list = JSON.parse(data.data.data)
					commit('GETUSERLIST', list)
				}

			})
		},
		// 清除视频列表
		clearvideolist({
			commit
		}) {
			commit('CLEARVIDEOLIST')
		},
		// 注册  发送请求 根据返回的code判断是否注册成功
		async register({
			commit
		}, userArr) {
			await uni.request({
				url: 'http://127.0.0.1:8088/reg',
				method: 'POST',
				data: {
					user: userArr
				},
				success: (data) => {
					console.log(data);
					// 注册成功code是1  失败是2
					if (data.data.code == 1) {
						uni.showToast({
							title: '注册成功',
							icon: 'success',
							duration: 2000
						})
					} else {
						uni.showToast({
							title: '用户名已存在',
							icon: 'error',
							duration: 2000
						})
					}
				}

			})
		},
		// 用户密码登录
		async login({
			commit
		}, userArr) {
			await uni.request({
				url: 'http://127.0.0.1:8088/login',
				method: 'POST',
				data: {
					user: userArr
				},
				success: (data) => {
					let user = JSON.parse(data.data.data)
					if (user.length) {
						// console.log(user);
						commit('LOGIN', user)
					}

				}

			})
		},
		// 使用token登录
		async tokenLogin({commit}, userToken) {
			await uni.request({
				url: 'http://127.0.0.1:8088/login',
				method: 'POST',
				data: {
					token: userToken
				},
				success: (data) => {
					// code为2  token失效  删除
					if (data.data.code == 2) {

						console.log('删除token');
						localStorage.removeItem('token')
					}

					let user = JSON.parse(data.data.data)
					if (user.length) {
						commit('LOGIN', user)
					} else {
						// console.log(user);
						console.log('长度为0');
						// 如果登录后返还的信息长度为0  那么删除token
						localStorage.removeItem('token')
					}

				}

			})
		},
		// 获取关注列表
		async getmylike({commit}, id) {
			await uni.request({
				url: 'http://127.0.0.1:8088/getmylike',
				method: 'POST',
				data: {
					user_id: id
				},
				success: (data) => {
					// console.log(JSON.parse(data.data.data));	
					commit('GETMYLIKE',JSON.parse(data.data.data))
				}
		
			})
		},
		// 获取关注人的视频列表
		async getmylikeVideoList({commit}, id) {
			await uni.request({
				url: 'http://127.0.0.1:8088/getmylikevideo',
				method: 'POST',
				data: {
					user_id: id
				},
				success: (data) => {
					// console.log(JSON.parse(data.data.data));	
					commit('GETMYLIKEVIDEOLIST',JSON.parse(data.data.data))
				}
		
			})
		},
		// 修改登陆信息
		setLogin({commit}){
			commit('SETLOGIN')
		},
		// 获取评论列表
		async getCommentList({
			commit
		},id) {
			
			let list
			await uni.request({
				url: 'http://localhost:8088/getcomments',
				method: 'POST',
				data:{
					video_id:id.video_id
				},
				success(data) {

					list = JSON.parse(data.data.data)
					// console.log(list);
					commit('GETCOMMENTLIST', list)
		
				}
		
			})
		},
		// 发送评论
		async sendCommentList({
			commit
		},comment) {
			// console.log(comment);
			let list
			await uni.request({
				url: 'http://localhost:8088/sendComment',
				method: 'POST',
				data:{
					comment:comment
				},
				success(data) {
					
					console.log('发送成功');
		
				}
		
			})
		},
		// 获取回复列表
		async getReplyList({
			commit
		},commentId) {
			// console.log(commentId);
			let list
			await uni.request({
				url: 'http://localhost:8088/getreply',
				method: 'POST',
				data:{
					commentId:commentId
				},
				success(data) {
					// console.log(JSON.parse(data.data.data));
					list = JSON.parse(data.data.data)
					// console.log(list.length);
					if(list.length){
						commit('GETREPLYLIST',list)
					}
					
					// console.log('发送成功');
		
				}
		
			})
		},
		// 发送评论回复
		async sendReplyList({
			commit
		},comment) {
			console.log(comment);
			let list
			await uni.request({
				url: 'http://localhost:8088/sendreply',
				method: 'POST',
				data:{
					comment:comment
				},
				success(data) {
					
					console.log('发送成功');
		
				}
		
			})
		},
		// 获取当前的视频信息(包括作者信息)
		async getVideo({
			commit
		},video_id) {

			let list
			await uni.request({
				url: 'http://localhost:8088/getvideo',
				method: 'POST',
				data:{
					video_id:parseInt(video_id) 
				},
				success(data) {
					list = JSON.parse(data.data.data)
					// console.log(list);
					commit('GETVIDEO',list)
					// console.log(JSON.parse(data.data.data) );
		
				}
		
			})
		},
	
		showVideoTab({commit},page){
			commit('SHOWVIDEOTAB',page)
		},
		async unloadImage({
			commit
		},Obj) {
			let str  = JSON.stringify(Obj.user)

			await uni.uploadFile({
				url:'http://localhost:8088/uploadImage',
				// 提交的文件路径
				filePath:Obj.filePath,
				// 表单数据对应的key  这里和后端的single要对应
				name:'file',
				// 这里可以传递表单数据
				formData:{
					user:str
				},
				// 上传成功回调
				success: (res) => {
					console.log('上传成功了');
				},
				fail: (res) => {
					console.log('失败了');
				},
			})

		},
		
	},

	mutations: {
		GETVIDEOLIST(state, list) {
			state.videoList = [...state.videoList, ...list] || []
			// 去除重复值
			state.videoList = Array.from(new Set(state.videoList.map(JSON.stringify)), JSON.parse)
			// console.log(state.videoList);
		},
		GETUSERLIST(state, list) {

			state.userList = [...state.userList, ...list] || []

			state.userList = Array.from(new Set(state.userList.map(JSON.stringify)), JSON.parse)
			// console.log(state.userList);
		},
		CLEARVIDEOLIST(state) {
			state.videoList = []
			state.userList = []
		},
		LOGIN(state, user) {
			state.user = user
		},
		GETMYLIKE(state,list){
			state.mylike = list
		},
		GETMYLIKEVIDEOLIST(state,list){
			state.mylikeVideoList = list
		},
		SETLOGIN(state){
			state.isLogin = true
		},
		GETCOMMENTLIST(state,list){
			state.commentsList = list

		},
		GETREPLYLIST(state,list){
			state.replyList.push(list)
			// console.log(state.replyList);

		},
		GETVIDEO(state,list){
			state.video = list
		},
		SHOWVIDEOTAB(state,page){
			state.isShowVideoTab = !state.isShowVideoTab
			state.videoTabPage = page
		}
	},
	getters: {
		videoList: state => state.videoList,
		userList: state => state.userList,
		user: state => state.user,
		mylike:state => state.mylike,
		mylikeVideoList:state => state.mylikeVideoList,
		isLogin:state => state.isLogin,
		commentsList:state => state.commentsList,
		replyList:state => state.replyList,
		video:state => state.video,
		isShowVideoTab:state => state.isShowVideoTab,
		videoTabPage:state => state.videoTabPage,
	}
})
export default store