<template>
	<view id="manage-course" class="bg-c">
		<view class="item-block">
			<block-bar-other title="学生管理" />
			<view class="item" v-for="index in students" :key="index.studentId">
				<view class="header">
					<view class="left">
						<view class="title">学号：{{index.studentNumber}}</view>
						<view class="title">姓名：{{index.studentName}}</view>
					</view>
					<view class="right">
						<button @click="absenceSubmit(index)" class="more-btn">
							迟到
						</button>
						<button @click="deleteStudent(index)" class="more-btn red">
							删除
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
import { globalData } from '@/utils/config.js'

const courseTeacher = uni.getStorageSync('courseTeacher');
const students = ref([]);

const getStudents = () => {
	uni.request({
		url: globalData.baseUrl + '/courseManage/students/' + courseTeacher.id,
		method: 'GET',
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			if(backData.code === 0) {
				students.value = backData.data;
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

const deleteStudent = (student) => {
	uni.request({
		url: globalData.baseUrl + '/courseManage/deleteStudent/course/' + courseTeacher.id + '/student/' + student.studentId,
		method: 'GET',
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			if(backData.code === 0) {
				uni.showToast({
					title: "删除成功",
					icon: "success"
				});
				getStudents();
			}
			else {
				uni.showToast({
					title: "异常"||backData.msg,
					icon: "error"
				});
			}
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}

const absenceSubmit = (student) => {
	uni.request({
		url: globalData.baseUrl + '/courseManage/absence/add',
		method: 'POST',
		data: {
			studentId: student.studentId,
			courseId: courseTeacher.id
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			console.log(backData)
			if(backData.code === 0) {
				uni.showToast({
					title: "已添加为迟到",
					icon: "success"
				});
			}
			else {
				uni.showToast({
					title: "异常"||backData.msg,
					icon: "error"
				});
			}
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}

getStudents();
</script>

<style lang="less" scoped>
.bg-c {
	background-color: #F6F6F6;
}
#manage-course {
	.item-block {
		.item {
			margin: 10rpx 0;
			padding: 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			.header {
				position: relative;
				display: flex;
				justify-content: space-between;
				.left {
					.title {
						font-size: 36rpx;
						margin: 15rpx 0;
					}
					.dead-line {
						color: #8d8d8d;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				.right {
					margin: auto 0;
					.more-btn {
						margin: 10rpx 0;
						display: flex;
						align-items: center;
						background-color: #39c5bb;
						height: 50rpx;
						color: #fff;
					}
					.red {
						color: red;
						border: 1rpx solid red;
						background-color: #fff;
					}
				}
				
			}
		}
	}
}
</style>