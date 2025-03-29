<template>
	<view id="create-course" class="bg-color">
		<view class="create-block">
			<block-bar-other title="创建课程" />
			<view class="action-block">
				<form @submit="formSubmit" @reset="formReset">
					<view class="action-item">
						<view class="title">
							课程名
						</view>
						<input 
							class="input-box" 
							type="text"
							placeholder="请输入课程名"
						/>
					</view>
					<view class="detail-block">
						<view class="title">
							课程描述
						</view>
						<textarea 
							class="large-textarea" 
							type="text"
							auto-height
							disable-default-padding
							placeholder="请输入描述信息"
						/>
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
					<button form-type="submit" class="button">提交</button>
					<button form-type="reset" class="button red">重置</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"

const fileName = ref("");
let filePath = '';

const formSubmit = ()=> {
	console.log("here is submit");
}
const formReset = ()=> {
	fileName.value = "";
	filePath = "";
	console.log("here is reset");
}

const selectFile = () => {
	uni.chooseFile({
		success: (res) => {
			const file = res.tempFiles[0];
			fileName.value = file.name;
			const isExcel = /\.(xls|xlsx)$/i.test(fileName.value); // 判断文件类型是否为 Excel（.xls 或 .xlsx）
			if (isExcel) {
				filePath = file.path;
			} else {
				uni.showToast({
					title: '请选择 Excel 文件',
					icon: 'error',
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
					white-space: nowrap;       /* 禁止换行 */
					overflow: hidden;          /* 超出部分隐藏 */
					text-overflow: ellipsis;   /* 超出部分显示省略号 */
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