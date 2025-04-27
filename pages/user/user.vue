<template>
	<view id="user" class="bg-color">
		<view class="user-info">
			<view class="upper">
				<image class="avatar" src="/static/avatar-default.png" /> 
				<view class="name-block">
					<view class="name">
						{{user.studentName || user.teacherName}}
					</view>
					<view class="career">
						{{user.role == 'student' ? '学生' : '教师'}}
					</view>
				</view>
			</view>
			<view class="lower">
				<!-- <view class="info-detail">
					学校：厦门大学
				</view> -->
				<view class="info-detail">
					学院：{{ user.department }}
				</view>
				<view v-if="user.major" class="info-detail">
					专业：{{ user.major }}
				</view>
				<view v-if="user.grade" class="info-detail">
					年级：{{ user.grade }}级
				</view>
			</view>
		</view>
		<view class="action-block" >
			<view class="item" @tap="gotoPageModifyInfo">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					修改信息
				</view>
			</view>
			
			<view class="item" @tap="gotoPageModifyPassword">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					修改密码
				</view>
			</view>
			
			<view class="item">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					关于
				</view>
			</view>
			
			<view class="item" @tap="logout">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text" style="color: red;">
					重新登录
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { globalData } from '@/utils/config.js'

const user = ref({});

const userInfo = uni.getStorageSync('userInfo');

uni.request({
	url: globalData.baseUrl + '/user/getInfo/' + userInfo.token,
	header: {
		'Content-Type': 'application/json'
	},
	success: (res) => {
		const backData = res.data;
		if(backData.code === 0) {
			user.value = backData.data;
			// console.log(user.value);
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

const logout = () => {
	// 清除本地存储的用户信息
	uni.removeStorageSync('userInfo');
	// 跳转到登录页面
	uni.redirectTo({
	    url: '/pages/user/login'
	});
}

const gotoPageModifyInfo = () => {
	if(user.value.role == 'student') {
		uni.navigateTo({
		    url: '/pages/user/modify-student'
		});
	}
}

const gotoPageModifyPassword = () => {
	uni.navigateTo({
	    url: '/pages/user/modify-password'
	});
}

</script>

<style lang="less" scoped>
#user{
	.user-info {
		margin: 30rpx 0;
		padding: 30rpx;
		background-color: #fff;
		border-top: 1rpx solid #ccc;
		border-bottom: 1rpx solid #ccc;
		.upper{
			display: flex;
			margin-bottom: 40rpx;
			.avatar{
				width: 150rpx;
				height: 150rpx;
				border-radius: 20rpx;
			}
			.name-block{
				margin: 0 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.name{
					font-size: 50rpx;
					letter-spacing: 5rpx;
				}
				.career{
					font-size: 35rpx;
					color: #8b8b8b;
				}
			}
		}
		.lower{
			.info-detail{
				font-size: 35rpx;
				line-height: 50rpx;
				color: #8b8b8b;
			}
		}
	}
	.action-block{
		margin: 50rpx 0;
		.item{
			height: 100rpx;
			background-color: #fff;
			border-top: 1rpx solid #ccc;
			border-bottom: 1rpx solid #ccc;
			padding: 0 30rpx;
			
			display: flex;
			align-items: center;

			.icon{
				height: 75rpx;
				width: 75rpx;
			}
			.text{
				margin: 0 20rpx;
				font-size: 40rpx;
				line-height: 100rpx;
			}
			&::after {
				content: '›'; /* 右箭头符号 */
				margin-left: auto; /* 让箭头靠右 */
				font-size: 70rpx;
				color: #ccc;
		  }
		}
	}
}
</style>
