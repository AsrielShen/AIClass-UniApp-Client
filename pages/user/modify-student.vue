<template>
	<view id="register" class="bg-color">
		<view class="register-block">
			<block-bar-other title="修改个人信息" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">学号/工号</view>
					<text>{{student.studentNumber}}</text>
				</view>
				<view class="action-item">
					<view class="title">姓名</view>
					<text>{{student.studentName}}</text>
				</view>
				<view class="action-item">
					<view class="title">性别</view>
					<radio-group @change="selectGender" class="radio-box">
						<label class="radio-item">
							<radio value="男" :checked="student.gender === '男'" color="#39c5bb"
								style="transform:scale(0.7)" />
							男
						</label>
						<label class="radio-item">
							<radio value="女" :checked="student.gender === '女'" color="#39c5bb"
								style="transform:scale(0.7)" />
							女
						</label>
					</radio-group>
				</view>
				<view class="action-item">
					<view class="title">年级</view>
					<picker  @change="pickerChange" mode="date" fields="year" class="picker-box">
						<text v-if="student.grade">{{ student.grade }}级</text>
						<text v-else style="color: #666;">请选择入学年份</text>
					</picker>
				</view>
				<view class="action-item">
					<view class="title">学院</view>
					<input v-model="student.department" class="input-box" type="text" placeholder="输入所在学院" />
				</view>
				<view class="action-item">
					<view class="title">专业</view>
					<input v-model="student.major" class="input-box" type="text" placeholder="输入所在专业" />
				</view>
				<view class="action-item">
					<view class="title">电话</view>
					<input v-model="student.phone" class="input-box" type="text" placeholder="输入联系电话" />
				</view>
				<button @click="modify" class="button">提交</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { globalData } from '@/utils/config.js'

const student = ref({});

// 选择性别
const selectGender = (e) => {
	student.value.gender = e.detail.value
}

const pickerChange = (e) => {
	student.value.grade = parseInt(e.detail.value);
}

const userInfo = uni.getStorageSync('userInfo');
uni.request({
	url: globalData.baseUrl + '/user/getInfo/' + userInfo.token,
	header: {
		'Content-Type': 'application/json'
	},
	success: (res) => {
		const backData = res.data;
		if(backData.code === 0) {
			student.value = backData.data;
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

const modify = () => {	
	uni.request({
		url: globalData.baseUrl + '/user/modify/student/' + userInfo.token,
		method: 'POST',
		data: {
			gender: student.value.gender,
			department: student.value.department,
			major: student.value.major,
			grade: student.value.grade,
			phone: student.value.phone,
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			if(backData.code === 0) {
				uni.showToast({
					title: "修改成功",
					icon: "success"
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

				.radio-box {
					flex: 1;
					font-size: 32rpx;
					margin: 0 20rpx;

					.radio-item {
						margin-right: 20rpx;
					}
				}

				.picker-box {
					flex: 1;
					font-size: 32rpx;
					margin: 0 20rpx;
				}
			}

			.tip-block {
				border: 0;
				font-size: 24rpx;
				color: gray;

				.blue {
					margin-left: 5rpx;
					color: #39c5bb;
					font-weight: bold;
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