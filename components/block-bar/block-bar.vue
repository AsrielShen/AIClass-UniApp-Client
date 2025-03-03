<template>
	<view class="block-bar">
		{{ title }}
	</view>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
  }
})
	
</script>

<style lang="less" scoped>
.block-bar {
	height: 75rpx;
	line-height: 75rpx;
	display: flex;
	align-items: center;
	border-bottom: 1rpx solid #cbcbcb;
	color: #3f3f3f;
	font-size: 36rpx;
	font-weight: bold;
	&::before {
		content: '';  /* 必须添加 content 属性才能显示伪元素 */
		width: 10rpx;
		height: 30rpx;
		margin-right: 20rpx;
		background-color: #39c5bb;
	}
}

</style>