<template>
	<view id="create-course" class="bg-color">
		<view class="create-block">
			<block-bar-other title="创建课程" />
			<view class="action-block">
				<form @submit="openShow" @reset="formReset">
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
					<view class="action-item tip-block">
						提示：这里是小提示
					</view>
					<button form-type="submit" class="button">提交</button>
					<button form-type="reset" class="button red">重置</button>
				</form>
			</view>
		</view>
		<view class="pop-up" v-if="isShow" @click="cancelShow">
			<view class="pop-block">
				<view class="pop-title">
					请确认信息
				</view>
				<view class="pop-content">
					<view>课程名：</view>
					<view>老师：</view>
				</view>
				<view class="pop-action">
					<button class="button" @click="formSubmit">创建</button>
					<button class="button" @click="cancelShow">取消</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"

const isShow = ref(false)
const openShow = ()=>{
	isShow.value = true;
}
const cancelShow = ()=> {
	isShow.value = false;
}

const formSubmit = ()=> {
	console.log("here is submit");
}
const formReset = ()=> {
	console.log("here is reset");
}

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
					margin: 0 20rpx;
				}
			}
			.detail-block {
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ccc;
				.large-textarea {
					width: 100%;
					min-height: 250rpx;
					margin: 20rpx 0;
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