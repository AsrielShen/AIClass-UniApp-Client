<template>
	<view id="modify-course" class="bg-color">
		<view class="create-block">
			<block-bar-other title="创建课程" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">
						课程名
					</view>
					<input v-model="course.name" class="input-box" type="text" placeholder="请输入课程名" />
				</view>
				<view class="detail-block">
					<view class="title">
						课程描述
					</view>
					<textarea v-model="course.description" class="large-textarea" type="text" auto-height disable-default-padding
						placeholder="请输入描述信息" />
				</view>
				<button @click="formSubmit" class="button">提交</button>
				<button @click="formReset" class="button red">重置</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
import { globalData } from '@/utils/config.js'

const courseName = ref("");
const courseDes = ref("");
const fileName = ref("");
const course = ref({});
let filePath = '';
const userInfo = uni.getStorageSync('userInfo');
course.value = uni.getStorageSync('courseTeacher');

const formSubmit = () => {
	uni.request({
		url: globalData.baseUrl + '/course/modify/' + userInfo.token,
		method: 'POST',
		data: {
			id: course.value.id,
			courseName: course.value.name,
			description: course.value.description,
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			if(backData.code === 0) {
				uni.setStorageSync('courseTeacher', {
					id: course.id,
					name: course.courseName,
					teacherId: course.teacherId,
					description: course.description
				});
				uni.showToast({
					title: "修改成功！",
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
const formReset = () => {
	fileName.value = "";
	filePath = "";
	console.log("here is reset");
}

</script>

<style lang="less" scoped>
#modify-course {
	.create-block {
		.action-block {
			margin: 20rpx 0;
			padding: 0 30rpx;
			background-color: #fff;

			.action-item {
				display: flex;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ccc;

				.input-box {
					flex: 1;
					margin-left: 20rpx;
				}

				.file-name {
					margin: 0 20rpx;
					flex: 1;
					color: gray;
					white-space: nowrap;
					/* 禁止换行 */
					overflow: hidden;
					/* 超出部分隐藏 */
					text-overflow: ellipsis;
					/* 超出部分显示省略号 */
				}

				.upload-button {
					font-size: 24rpx;
					border-radius: 15rpx;
					color: #fff;
					background-color: #39c5bb;
					border: none
				}
			}

			.detail-block {
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ccc;

				.large-textarea {
					width: 100%;
					min-height: 250rpx;
					margin-top: 20rpx;
					padding: 20rpx 15rpx;
					box-sizing: border-box;
					border: 1px solid #ccc;
					border-radius: 10rpx;
				}
			}

			.tip-block {
				border: 0;
				font-size: 24rpx;
				color: gray;

			}

			.button {
				font-size: 32rpx;
				margin: 20rpx 0;
				border-radius: 50rpx;
				color: #fff;
				background-color: #39c5bb;
				border: none
			}

			.red {
				color: red;
				border: 1rpx solid red;
				background-color: #fff;
			}
		}
	}

}
</style>