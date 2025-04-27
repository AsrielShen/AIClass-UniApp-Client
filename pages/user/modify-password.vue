<template>
	<view id="register" class="bg-color">
		<view class="register-block">
			<block-bar-other title="修改密码" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">旧密码</view>
					<input v-model="password.old" class="input-box" type="password" placeholder="输入当前密码" />
				</view>
				<view class="action-item">
					<view class="title">新的密码</view>
					<input v-model="password.new" class="input-box" type="password" placeholder="输入新密码" />
				</view>
				<view class="action-item">
					<view class="title">确认密码</view>
					<input v-model="password.confirm" class="input-box" type="password" placeholder="请确认新密码" />
				</view>
				<button @click="modify" class="button">提交</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { globalData } from '@/utils/config.js'

const password = ref({
	old: '',
	new: '',
	confirm: ''
})

const userInfo = uni.getStorageSync('userInfo');

const modify = () => {
	console.log(password.value);
	if(password.value.old == password.value.new) {
		uni.showToast({
			title: "旧密码和新密码相同",
			icon: "error"
		});
		return ;
	}
	else if(password.value.new != password.value.confirm) {
		uni.showToast({
			title: "确认密码与新密码不同",
			icon: "error"
		});
		return ;
	}
	uni.request({
		url: globalData.baseUrl + '/user/modify/password/' + userInfo.token,
		method: 'POST',
		data: {
			oldPassword: password.value.old,
			newPassword: password.value.new,
			confirmPassword: password.value.confirm
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			if(backData.code === 0) {
				uni.showToast({
					title: "修改成功，重新登录",
					icon: "success"
				});
				// 清除本地存储的用户信息
				uni.removeStorageSync('userInfo');
				// 跳转到登录页面
				uni.redirectTo({
				    url: '/pages/user/login'
				});
			}
			else if(backData.code === 1) {
				uni.showToast({
					title: "密码错误",
					icon: "error"
				});
			} 
			else {
				uni.showToast({
					title: "认证错误，请重新登录",
					icon: "error"
				});
				uni.removeStorageSync("userInfo");
				uni.redirectTo({
				    url: "/pages/user/login" 
				});
			}
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}
</script>

<style lang="less" scoped>
#register {
	.register-block {
		.action-block {
			margin: 20rpx 0;
			padding: 10rpx 30rpx;
			background-color: #fff;

			.action-item {
				display: flex;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ccc;

				text,.input-box {
					flex: 1;
					font-size: 32rpx;
					margin: 0 20rpx;
				}
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