<template>
	<view id="create-course" class="bg-color">
		<view class="create-block">
			<block-bar-other title="创建课程" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">
						课程名
					</view>
					<input v-model="courseName" class="input-box" type="text" placeholder="请输入课程名" />
				</view>
				<view class="detail-block">
					<view class="title">
						课程描述
					</view>
					<textarea v-model="courseDes" class="large-textarea" type="text" auto-height disable-default-padding
						placeholder="请输入描述信息" />
				</view>
				<view class="action-item">
					<view class="title">
						学生名单
					</view>
					<view class="file-name">{{fileName}}</view>
					<button class="upload-button" @click="selectFile">选择文件</button>
				</view>
				<view class="action-item tip-block">
					提示：可选择提交格式为excel，首行元素分别为studentNumber,studentName
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
let filePath = '';
const userInfo = uni.getStorageSync('userInfo');

const formSubmit = () => {
	uni.uploadFile({
	    url: globalData.baseUrl + "/course/create", // 你的后端接口
	    filePath: filePath,
	    name: 'file',
	    formData: {
			courseName: courseName.value,
			description: courseDes.value,
			token: userInfo.token
	    },
	    success: (res) => {
			const backData = JSON.parse(res.data);
			if (backData.code == 0) {
				uni.showToast({
					title: "创建成功！",
					icon: "success"
				});
			}
			else {
				uni.showToast({
					title: "创建失败！",
					icon: "error"
				});
			}
	    },
	    fail: (err) => {
			console.error(err);
			uni.showToast({
				title: "上传失败",
				icon: "error"
			});
	    }
	  });
}
const formReset = () => {
	fileName.value = "";
	filePath = "";
	console.log("here is reset");
}

const selectFile = () => {
	wx.chooseMessageFile({
		count: 1,
		type: 'file',
		extension: ['.xls', '.xlsx'],
		success: (res) => {
			const file = res.tempFiles[0];
			const isExcel = /\.(xls|xlsx)$/i.test(file.name); // 判断文件类型是否为 Excel（.xls 或 .xlsx）
			
			if (isExcel) {
				fileName.value = file.name;
				filePath = file.path;
				console.log("选择的文件是 Excel 文件:", fileName);
				console.log("文件路径:", filePath);
			} else {
				wx.showToast({
					title: '请选择 Excel 文件',
					icon: 'error',
					duration: 2000,
				});
			}
		},
		fail: (err) => {
			console.error("选择文件失败：", err);
		}
	});
};
</script>

<style lang="less" scoped>
#create-course {
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