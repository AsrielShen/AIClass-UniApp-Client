<template>
	<view id="user" class="bg-color">
		<view class="user-info">
			<view class="upper">
				<image class="avatar" src="/static/avatar-default.png" /> 
				<view class="name-block">
					<view class="name">
						姚珅
					</view>
					<view class="career">
						学生
					</view>
				</view>
			</view>
			<view class="lower">
				<view class="info-detail">
					学校：厦门大学
				</view>
				<view class="info-detail">
					学院：信息学院
				</view>
				<view class="info-detail">
					专业：计算机科学与技术
				</view>
				<view class="info-detail">
					年纪：2021级
				</view>
			</view>
		</view>
		<view class="func-block">
			<navigator class="func-item">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					关于
				</view>
			</navigator>
			<navigator class="func-item">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					关于
				</view>
			</navigator>
			<navigator class="func-item">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					关于
				</view>
			</navigator>
			<navigator class="func-item">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					关于
				</view>
			</navigator>
			<navigator class="func-item">
				<image class="icon" src="/static/tabBar-icon/courses-h.png" />
				<view class="text">
					关于
				</view>
			</navigator>
			
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="less" scoped>
#user{
	.user-info {
		margin: 30rpx 0;
		padding: 30rpx;
		background-color: #fff;
		border-top: 1rpx solid #cbcbcb;
		border-bottom: 1rpx solid #cbcbcb;
		.upper{
			display: flex;
			margin-bottom: 40rpx;
			.avatar{
				width: 150rpx;
				height: 150rpx;
				border-radius: 20rpx;
			}
			.name-block{
				margin: 0 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.name{
					font-size: 50rpx;
					letter-spacing: 5rpx;
				}
				.career{
					font-size: 35rpx;
					color: #8b8b8b;
				}
			}
		}
		.lower{
			.info-detail{
				font-size: 35rpx;
				line-height: 50rpx;
				color: #8b8b8b;
			}
		}
	}
	.func-block{
		margin: 50rpx 0;
		.func-item{
			height: 100rpx;
			background-color: #fff;
			border-top: 1rpx solid #cbcbcb;
			border-bottom: 1rpx solid #cbcbcb;
			padding: 0 30rpx;
			
			display: flex;
			align-items: center;

			.icon{
				height: 75rpx;
				width: 75rpx;
			}
			.text{
				margin: 0 20rpx;
				font-size: 40rpx;
				line-height: 100rpx;
			}
			&::after {
				content: '›'; /* 右箭头符号 */
				margin-left: auto; /* 让箭头靠右 */
				font-size: 70rpx;
				color: #cbcbcb;
		  }
		}
	}
}
</style>
