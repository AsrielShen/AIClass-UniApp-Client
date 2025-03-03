<template>
	<view id="random-call">
		<view class="random-block">
			<block-bar title="随机点名" />
			<view class="random-action">
				<view class="action-name">
					随机点名
				</view>
				<button class="action-button" @click="randomCall">
					点名
				</button>
			</view>
		</view>
		<view class="pop-up" v-if="isShow" @click="cancelShow">
			<view class="pop-block">
				<view class="pop-title">
					点名结果
				</view>
				<view class="pop-content">
					<view>学号：{{ studentId }}</view>
					<view>姓名：{{ studentName }}</view>

				</view>
				<view class="pop-action">
					<button class="button" @click="pointSubmit">加分</button>
					<button class="button" @click="absenceSubmit">缺勤</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(false);
const studentId = ref('');
const studentName = ref('');

const cancelShow = () => {
	isShow.value = false;
}

const randomCall = () => {
	uni.request({
		url: 'http://127.0.0.1:1234/api/absence/random', // 接口地址
		method: 'GET',
		success: (res) => {
			if (res.statusCode === 200) {
				
				const studentinf = res.data;
				studentName.value = studentinf.name;
				studentId.value = studentinf.studentId;

				isShow.value = true;
			} else {
				uni.showToast({
					title: '数据获取失败',
					icon: 'none'
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				title: '网络请求失败,',
				icon: 'none'
			});
		}
	});
}

const pointSubmit = () => {
	uni.request({
		url:`http://127.0.0.1:1234/api/absence/mark-score/${studentId.value}`,
		method:'POST',
		success: () => {
			uni.showToast({
				title:'加分记录成功',
				icon:'success'
			});
			cancelShow();
		},
		fail: () => {
			uni.showToast({
				title:'加分失败，请重试',
				icon:'fail'
			});
		}
	})
	cancelShow();
}

const absenceSubmit = () => {
	uni.request({
		url:`http://127.0.0.1:1234/api/absence/mark-absence/${studentId.value}`,
		method:'POST',
		success: () => {
			uni.showToast({
				title:'缺勤记录成功',
				icon:'success'
			});
			cancelShow();
		},
		fail: () => {
			uni.showToast({
				title:'记录失败，请重试',
				icon:'ERROR'
			});
		}
	})
	cancelShow();
}
</script>



<style lang="less">
#random-call {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #F6F6F6;
	.random-block {
		padding: 0 30rpx;
		border-bottom: 1rpx solid #cbcbcb;
		background-color: #fff;
		.random-action {
			margin: 20rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.action-name {
				display: flex;
				align-items: center;
				&::before {
					content: '•';
					font-size: 40rpx;
					color: #F37B1D;
				}
			}
			.action-button {
				margin: 0;
				font-size: 24rpx;
				border-radius: 25rpx;
				color: #fff;
				background-color: #39c5bb;
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
