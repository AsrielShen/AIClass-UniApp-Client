<template>
	<view class="block-bar-other">
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
.block-bar-other {
	height: 100rpx;
	line-height: 100rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	color: #3f3f3f;
	font-size: 40rpx;
	font-weight: bold;
	background-color: #fff;
	&::before {
		content: '';  /* 必须添加 content 属性才能显示伪元素 */
		width: 12rpx;
		height: 40rpx;
		margin-right: 20rpx;
		background-color: #39c5bb;
	}
}

</style>