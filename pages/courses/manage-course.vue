<template>
	<view id="enter-course" class="bg-color">
		<view class="item-block">
			<block-bar class="block-bar" title="课程管理" />
			<navigator class="item" v-for="index in 4" :key="index">
				<view class="header">
					<view class="title">算法</view>
					<view class="dead-line">授课老师：张德福</view>
					<view class="more-btn">
						>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
#enter-course {
	.item-block {
		display: flex;
		flex-direction: column;
		.block-bar {
			padding: 0 30rpx;
			background-color: #fff;
		}
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
}
</style>