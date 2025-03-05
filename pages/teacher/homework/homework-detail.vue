<template>
	<view id="homework-detail" class="bg-color">
		<view class="create-block">
			<block-bar-other title="作业管理" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">
						作业名
					</view>
					<input 
						class="input-box" 
						type="text"
						placeholder="请输入作业名"
					/>
				</view>
				<view class="action-item">
					<view class="title">
						截止时间
					</view>
					<input 
						class="input-box" 
						type="text"
						placeholder="请输入作业名"
					/>
				</view>
				<view class="detail-block">
					<view class="title">
						详细内容
					</view>
					<textarea 
						class="large-textarea" 
						type="text"
						auto-height
						disable-default-padding
						placeholder="请输入详细内容"
					/>
				</view>
				<view class="action-item tip-block">
					提示：这里是小提示
				</view>
				<button class="button">保存</button>
				<button class="button red">删除</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	

</script>

<style lang="less" scoped>
#homework-detail {
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
				.title {
					width: 150rpx;
				}
				.input-box {
					flex: 1;
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
}
</style>