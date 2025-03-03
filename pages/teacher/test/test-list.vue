<template>
	<view id="test-teacher" class="bg-color">
		<view class="test-block">
			<navigator class="test-item" v-for="index in 4" :key="index">
				<view class="test-header">
					<view class="title">第一次作业</view>
					<view class="dead-line">截止时间：2025.3.3</view>
					<view class="more-btn">
						>
					</view>
				</view>
			</navigator>
		</view>
		<navigator class="icon-add">
			+
		</navigator>
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
#test-teacher {
	.test-block {
		display: flex;
		flex-direction: column;
		.test-item {
			margin: 10rpx 0;
			padding: 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			.test-header {
				position: relative;
				.title {
					font-size: 36rpx;
					margin: 15rpx 0;
				}
				.dead-line {
					color: #8d8d8d;
				}
				.more-btn {
					display: flex;
					align-items: center;
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					color: #8d8d8d;
				}
			}
		}
	}
	.icon-add {
		width: 100rpx;
		height: 100rpx;
		background-color: #39c5bb;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font: 50rpx bolder;
		color: #fff;
		position: fixed;
		right: 30rpx;
		bottom: 200rpx;
	}
}
</style>