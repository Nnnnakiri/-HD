<template>
	<view class="loginModel">
		<view class="model-main">
			<view class="main-header">
				<view @click.stop="hiden">
					<image src="/static/取消.png" mode="aspectFill"></image>
				</view>
				<view class="title">
					<text>登录</text>
				</view>
				<view>
					<text>查看帮助</text>
				</view>
			</view>
			<view class="main-body">
				<view class="imgLogin">
					<view class="title">
						<text>手机扫码登录/注册</text>
					</view>
					<view class="img">
						<image src="/static/二维码.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="fromLogin">
					<view class="title">
						<text>密码登录</text>
					</view>
					<view class="form">
						<view class="inp-item">
							<text>帐号</text>
							<input class="username" v-model:value="userForm.user_account" type="number" name="username"
								placeholder="请输入帐号">

						</view>
						<view class="inp-item">
							<text>密码</text>
							<input class="password" v-model:value="userForm.user_password" type="number" name="password"
								placeholder="请输入密码">
						</view>

						<view class="btn">
							<button class="reg" @click="reg">注册</button>
							<button class="log" @click="log">登录</button>
						</view>
					</view>
				</view>
			</view>
			<view class="main-footer">
				<label class="radio">
					<checkbox :checked="isChecked" @click="changeChecked" value="1" /><text>我已阅读并同意</text><text
						class="a">用户协议</text><text>和</text><text class="a">隐私政策</text>
				</label>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		// 该页面需要收集用户密码和用户名  动态绑定
		// 收集好数据后  根据点击的按钮发送不同的请求
		// 点击注册 将数据发送到后端  将用户信息加入到数据库  需要自动生成用用户ID
		// 点击登录 将数据发送到后端 后端匹配服务器数据  正确后返回token 和 登录成功的信息还有用户信息
		name: "loginModel",
		data() {
			return {
				isChecked: false,
				userForm: {
					user_account: '',
					user_password: ''
				}
			};
		},
		computed:{
			...mapGetters([
				'user'
			])
		},
		methods: {
			changeChecked(e) {
				this.isChecked = !this.isChecked
			},
			// 隐藏模态框
			hiden() {
				this.$emit('hidenLogin', false)
			},
			reg() {
				this.$store.dispatch('register', this.userForm)
				// 清空表单信息
				this.userForm = {
					user_account: '',
					user_password: ''
				}
				console.log(this.userForm);
			},

			// 用户点击登录按钮发送请求
			// 有token需要自动发送请求
			// 如果有token 携带token请求  如果没有则携带用户信息
			// 后台根据携带的参数   有token就先验证token在数据库中是否存在 然后验证token是否过期
			log() {
				this.$store.dispatch('login', this.userForm)
				this.userForm = {
					user_account: '',
					user_password: ''
				}

				setTimeout(()=>{
					if(this.user.length){
						this.hiden(),
						uni.showToast({
							title:'登录成功',
							icon:'success',
							duration:2000
						})
					}else{
						uni.showToast({
							title:'请检查用户名或者密码',
							icon:'error',
							duration:1000
						})
					}
				},50)
				
			}

		}
	}
</script>

<style lang="scss">
	.loginModel {
		z-index: 100;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);

		.model-main {
			display: flex;
			flex-direction: column;
			width: 70vw;
			height: 60vh;
			border-radius: 10px;
			background-color: #e2e6e7;

			.main-header {
				display: flex;
				justify-content: space-between;
				height: 8vh;
				padding: 0 3vh;
				background-color: white;
				box-shadow: 0 2px 5px #ccc;

				view {
					display: flex;
					align-items: center;
					justify-content: center;

					image {
						width: 3vh;
						height: 3vh;
					}
				}

				.title {
					font-size: 20px;
				}

			}

			.main-body {
				display: flex;

				height: 32vh;

				.imgLogin {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-end;
					width: 30vw;

					.title {
						margin-bottom: 3vh;
					}

					.img {
						image {
							width: 15vw;
							height: 15vw;
						}
					}

				}

				.fromLogin {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-end;

					.title {
						margin-bottom: 3vh;
					}

					.form {
						height: 15vw;

						.inp-item {
							display: flex;
							align-items: center;
							margin-bottom: 1px;

							text {
								// display: inline-block;
								position: fixed;
								margin-left: 1vw;

							}

							input {
								padding-left: 6vw;
								width: 30vw;
								height: 4vw;
								background-color: white;
							}

							.username {
								border-radius: 5px 5px 0 0;
							}

							.password {
								border-radius: 0 0 5px 5px;
							}
						}

						.btn {
							display: flex;
							margin-top: 2vw;

							button {
								width: 13vw;
								height: 4vw;
							}

							.reg {
								background-color: rgba(0, 0, 0, 0);
								color: #ff78a8;
								border-radius: 5px;
								border: 2px solid #ff78a8;
							}

							.log {
								background-color: #ff78a8;
								color: white;
							}
						}
					}

				}
			}


			.main-footer {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;

				.radio {

					.a {
						color: blue;
					}
				}
			}
		}
	}
</style>