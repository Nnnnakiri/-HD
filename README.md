
共用组件
anime追番模块
recommend 推荐模块
film 电影模块
cover单独的一个视频封面 用于推荐模块循环
nav-header 导航栏
tabbar自定义底部导航


首页 index  
所用组件 
	头部导航 nav-header
		公用组件  需要传递props参数显示不同内容
	推荐 recommend
		推荐组件使用了 cover 组件
	追番 anime
		包含 追番推荐 animerecommend  分类推荐 categoryanime  我的追番 myanime 轮播图 myswiper
	影视 film
		使用了 anime组件下的子组件 后期需要传递不同参数显示不同内容
	tabbar组件
		底部导航 需要传递页面地址（pageURL参数）


动态 trends
所用组件
	头部导航 nav-header
		公用组件  需要传递props参数显示不同内容
	trends-video 显示每一项图文信息

我的 mine
所用组件
	commonFunctions 常用功能
	download 离线缓存
	history 历史记录
	myFav 我的收藏
	nextTime 稍后再看
	myLike 我的关注
	myMessage 我的消息
	myClass 我的课程
	childMode 青少年模式
	help 客服
	setting 设置


