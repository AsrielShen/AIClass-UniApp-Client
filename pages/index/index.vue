<template>
	<view id="index" class="bg-color">
		<view class="main-func">
			<navigator @tap="handleCreateCourse" class="item">
				<image class="pic" src="/static/main-icon/create-course.png"></image>
				<view class="text">创建课程</view>
			</navigator>
			<navigator @tap="handleJoinCourse" class="item">
				<image class="pic" src="/static/main-icon/create-course.png"></image>
				<view class="text">申请课程</view>
			</navigator>
			<navigator class="item" url="/pages/teacher/features">
				<image class="pic" src="/static/main-icon/enter-course.png"></image>
				<view class="text">进入课程</view>
			</navigator>
			<navigator @tap="handleManageCourse" class="item">
				<image class="pic" src="/static/main-icon/enter-course.png"></image>
				<view class="text">管理课程</view>
			</navigator>
		</view>
		
		<view class="more-resource func-block">
			<block-bar title="更多资源" />
			<view class="resource-box">
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
			</view>
		</view>
		
	</view>
	
</template>

<script setup>

import { ref } from 'vue'

const handleCreateCourse = () => {
	const userInfo = uni.getStorageSync('userInfo')
	if (userInfo && userInfo.role === 'student') {
		uni.showToast({
			title: '无权限访问',
			icon: 'none'
		})
	} else {
		uni.navigateTo({
			url: '/pages/courses/create-course'
		})
	}
}

const handleJoinCourse = () => {
	const userInfo = uni.getStorageSync('userInfo')
	if (userInfo && userInfo.role === 'student') {
		uni.navigateTo({
			url: '/pages/courses/join-course'
		})
	} else {
		uni.showToast({
			title: '老师不能申请课程',
			icon: 'none'
		})
	}
}

const handleManageCourse = () => {
	const userInfo = uni.getStorageSync('userInfo')
	if (userInfo && userInfo.role === 'student') {
		// 如果是学生，提示不可访问
		uni.showToast({
			title: '无权限访问',
			icon: 'none'
		})
	} else {
		uni.navigateTo({
			url: '/pages/courses/manage-course'
		})
	}
}
	
</script>

<style lang="less" scoped>
#index{
	.main-func {
		height: 230rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #cbcbcb;
		.item{
			text-align: center;
			.pic{
				width: 100rpx;
				height: 100rpx;
			}
			.text{
				font-size: small;
			}
		}
	}
	.more-resource {
		.resource-box {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.item{
				position: relative;
				margin: 20rpx;
				width: 300rpx;
				height: 200rpx;
				.pic{
					width: 100%;
					height: 100%;
					position: relative;
					&::before {
						content: '';  /* 必须有content来显示伪元素 */
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						background-color: rgba(0, 0, 0, 0.3); /* 半透明背景色 */
						z-index: 1;  /* 让毛玻璃层位于图片之上 */
					}
				}
				.text {
					position: absolute;
					top: 50%;  /* 使文字垂直居中 */
					left: 50%;  /* 使文字水平居中 */
					transform: translate(-50%, -50%);  /* 精确居中 */
					color: white;  /* 文字颜色 */
					z-index: 2;  /* 确保文字位于毛玻璃效果之上 */
				}
			}
		}
		
		
	}
	
	
}
	
</style>
