<template>
	<view id="login" class="bg-color">
		<view class="login-block">
			<block-bar-other title="用户登录" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">学号</view>
					<input v-model="userNumber" class="input-box" type="text" placeholder="输入学号" />
				</view>
				<view class="action-item">
					<view class="title">密码</view>
					<input v-model="password" class="input-box" type="password" placeholder="输入密码" />
				</view>
				<view class="action-item tip-block">
					提示：若未注册账号，请
					<navigator url="/pages/user/register" style="color: #39c5bb;">注册</navigator>
				</view>
				<button @click="login" class="button">登录</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { globalData } from '@/utils/config.js'

// 双向绑定数据
const userNumber = ref('')
const password = ref('')

// 登录方法
const login = () => {
	if (!userNumber.value || !password.value) {
	    uni.showToast({
			title: '请输入学号和密码',
			icon: 'error'
	    });
		return ;
	}
	
	uni.request({
		url: globalData.baseUrl + '/auth/login',
		method: 'POST',
		data: {
			userNumber: userNumber.value,
			password: password.value,
			openid: null
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const data = res.data
			if (data.code === 0) {
				uni.setStorageSync('userInfo', {
					userId: data.data.userId,
					userNumber: data.data.userNumber,
					userName: data.data.userName,
					role: data.data.role,
					token: data.data.token,
				});
				
				uni.showToast({ title: '登录成功', icon: 'success' });
				// 登录成功后跳转到 index 页面
				uni.switchTab({
					url: '/pages/index/index'
				});
				
			} else {
				uni.showToast({ title: data.msg || "登录异常", icon: 'error' });
			}
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}

</script>

<style lang="less" scoped>
#login {
	.login-block {
		.action-block {
			margin: 20rpx 0;
			padding: 10rpx 30rpx;
			background-color: #fff;
			.action-item {
				display: flex;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ccc;
				.input-box {
					flex: 1;
					font-size: 32rpx;
					margin: 0 20rpx;
				}
			}
			.tip-block {
				border: 0;
				font-size: 24rpx;
				color: gray;
			}
			.button {
				font-size: 32rpx;
				margin: 10rpx 0;
				border-radius: 50rpx;
				color: #fff;
				background-color: #39c5bb;
				border: none
			}
		}
	}
}
</style>