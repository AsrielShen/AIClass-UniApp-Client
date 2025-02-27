<template>
	<view id="random-call">
		<view class="random-block">
			<block-bar title="随机点名" />
			<view class="random-action">
				<view class="action-name">
					随机点名
				</view>
				<button class="action-button">
					点名
				</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	
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
}
 
</style>
