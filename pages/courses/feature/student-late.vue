<template>
	<view id="manage-course" class="bg-c">
		<view class="item-block">
			<block-bar-other title="迟到管理" />
			<view class="item" v-for="index in students" :key="index.studentId">
				<view class="header">
					<view class="title">学号：{{index.studentNumber}}</view>
					<view class="title">姓名：{{index.studentName}}</view>
					<view class="date">次数：{{index.absenceCount}}</view>
					<button @click="cancelLate(index)" class="more-btn">
						取消
					</button>
				</view>
			</view>
		</view>
		<view class="pop-up" v-if="isShow" @click="cancelShow">
			<view class="pop-block" @click.stop>
				<view class="pop-title">
					删除一次迟到记录
				</view>
				<view class="pop-content">
					<view>学号：{{studentSubmit.studentNumber}}</view>
					<view>姓名：{{studentSubmit.studentName}}</view>
				</view>
				<view class="pop-action">
					<button class="button" @click="submit">提交</button>
					<button class="button" @click="cancelShow">取消</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from "vue"
import { globalData } from '@/utils/config.js'

const courseTeacher = uni.getStorageSync('courseTeacher');
const isShow = ref(false);
const students = ref([]);
const studentSubmit = ref();

const cancelShow = ()=> {
	isShow.value = false;
}

const cancelLate = (student) => {
	studentSubmit.value = student;
	isShow.value = true;
}

const getData = () => {
	uni.request({
		url: globalData.baseUrl + '/courseManage/absence/allStudent/' + courseTeacher.id,
		method: 'GET',
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			if(backData.code === 0) {
				students.value = backData.data;
				// console.log(students);
			}
			
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}

const submit = () => {
	console.log(studentSubmit.value);
	uni.request({
		url: globalData.baseUrl + '/courseManage/absence/decrease',
		method: 'POST',
		data: {
			studentId: studentSubmit.value.studentId,
			courseId: courseTeacher.id,
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			console.log(backData);
			if(backData.code === 2) {
				uni.showToast({ title: "错误！"||backData.msg, icon: 'error' })
			}
			else {
				uni.showToast({ title: "操作成功", icon: 'success' });
				cancelShow();
				getData();
			}
			
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}

getData();

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
				.title {
					font-size: 36rpx;
					margin: 15rpx 0;
				}
				.date {
					color: #8d8d8d;
				}
				.more-btn {
					display: flex;
					align-items: center;
					background-color: #39c5bb;
					height: 50rpx;
					position: absolute;
					right: 0;
					top: calc(50% - 25rpx);
					color: #fff;
				}
			}
		}
	}
	.pop-up {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		.pop-block {
			width: 80%;
			box-sizing: border-box;
			padding: 30rpx;
			border-radius: 10rpx;
			background: white;
			font-size: 28rpx;
			text-align: center;
			.pop-content {
				margin: 30rpx 0;
				padding: 30rpx;
				background-color: #F6F6F6;
			}
			.pop-action {
				display: flex;
				justify-content: center;
				.button {
					font-size: 28rpx;
					width: 200rpx;
					margin: 0 50rpx;
					border-radius: 25rpx;
					color: red;
					border: 1rpx solid red;
					background-color: #fff;
					&:first-child {
						color: #fff;
						background-color: #39c5bb;
						border: none
					}
				}
			}
		}
	}
}
</style>