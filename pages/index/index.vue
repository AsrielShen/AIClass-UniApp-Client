<template>
	<view id="index">
		<view class="main-func">
			<navigator class="item">
				<image class="pic" src="/static/main-icon/create-course.png"></image>
				<view class="text">创建课程</view>
			</navigator>
			<navigator class="item">
				<image class="pic" src="/static/main-icon/create-course.png"></image>
				<view class="text">申请课程</view>
			</navigator>
			<navigator class="item">
				<image class="pic" src="/static/main-icon/enter-course.png"></image>
				<view class="text">进入课程</view>
			</navigator>
			<navigator class="item">
				<image class="pic" src="/static/main-icon/enter-course.png"></image>
				<view class="text">管理课程</view>
			</navigator>
		</view>
		
		<view class="more-resource">
			<block-bar title="更多资源" />
			<view class="resource-box">
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
				<navigator class="item">
					<image class="pic" src="/static/more-resources/os.png"/>
					<view class="text">操作系统</view>
				</navigator>
			</view>
		</view>
		
	</view>
	
</template>

<script setup>
// import BlockBar from './components/BlockBar.vue'
	
</script>

<style lang="less" scoped>
#index{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #F6F6F6;
	.main-func {
		height: 230rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #cbcbcb;
		.item{
			text-align: center;
			.pic{
				width: 100rpx;
				height: 100rpx;
			}
			.text{
				font-size: small;
			}
		}
	}
	.more-resource {
		padding: 0 30rpx;
		border-bottom: 1rpx solid #cbcbcb;
		background-color: #fff;
		.resource-box {
			margin: 30rpx 0;
			display: flex;           /* 设置为 Flexbox 布局 */
			justify-content: space-around;
			flex-wrap: wrap;         /* 自动换行 */
			gap: 10px;
			.item{
				position: relative;
				width: 300rpx;
				height: 200rpx;
				.pic{
					width: 100%;
					height: 100%;
					position: relative;
					&::before {
						content: '';  /* 必须有content来显示伪元素 */
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						background-color: rgba(0, 0, 0, 0.3); /* 半透明背景色 */
						z-index: 1;  /* 让毛玻璃层位于图片之上 */
					}
				}
				.text {
					position: absolute;
					top: 50%;  /* 使文字垂直居中 */
					left: 50%;  /* 使文字水平居中 */
					transform: translate(-50%, -50%);  /* 精确居中 */
					color: white;  /* 文字颜色 */
					z-index: 2;  /* 确保文字位于毛玻璃效果之上 */
				}
			}
		}
		
		
	}
	
	
}
	
</style>
