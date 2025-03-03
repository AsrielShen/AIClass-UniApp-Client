<template>
	<view id="teacher-features">
		<view class="class-features">
			<block-bar title="课堂功能" />
			<view class="item-block">
				<navigator class="item" v-for="(item,index) in list" :key="index" 
					:style="{ backgroundColor: item.color }" :url="item.url">
					<view class="upper">
						<view class="nav-title">
							{{item.title}}
						</view>
						<image class="nav-icon" :src="item.icon" />
					</view>
					<view class="nav-name">
						{{item.name}}
					</view>
				</navigator>
			</view>
			
		</view>
		
	</view>
</template>

<script setup>

const list = [
	{title: "发起签到", name: "Sign", icon: "/static/tabBar-icon/ai.png", color: "#39c5bb", url: ""},
	{title: "随机点名", name: "Call", icon: "/static/tabBar-icon/ai.png", color: "#EE9597", url: "/pages/teacher/random-call"},
	{title: "课程作业", name: "Homework", icon: "/static/tabBar-icon/ai.png", color: "#1264A6", url: "/pages/teacher/homework/homework-list"},
	{title: "课堂练习", name: "Test", icon: "/static/tabBar-icon/ai.png", color: "#E6A23F", url: ""},
];


</script>

<style lang="less" scoped>
#teacher-features {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #F6F6F6;
	.class-features {
		padding: 0 30rpx;
		border-bottom: 1rpx solid #cbcbcb;
		background-color: #fff;
		
		.item-block {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.item {
				width: 300rpx;
				margin: 20rpx;
				padding: 30rpx;
				border-radius: 20rpx;
				box-sizing: border-box;
				position: relative;
				background-color: aquamarine;
				color: #fff;
				z-index: 1;
				&::after{
					content: "";
					z-index: -1;
					width: 100%;
					height: 100%;
					background-color: inherit;
					position: absolute;
					left: 8%;
					bottom: -10%;
					border-radius: 20rpx;
					opacity: 0.3;
					transform: scale(0.9, 0.9);
				}
				
				.upper {
					display: flex;
					justify-content: space-between;
					.nav-title {
						font-size: 32rpx;
						line-height: 60rpx;
						&::first-letter {
							font-size: 40rpx;
							margin-right: 3rpx;
						}
					}
					.nav-icon {
						width: 60rpx;
						height: 60rpx;
					}
				}
				
				
				.nav-name {
					position: relative;
					font-size: 28rpx;
					&::first-letter {
						font-weight: bold;
						font-size: 36rpx;
						margin-right: 1px;
					}
					&::before{
						content: "";
						position: absolute;
						display: block;
						width: 40rpx;
						height: 6rpx;
						bottom: 0;
						right: 0;
						opacity: 0.9;
						background-color: #fff;
					}
					&::after {
						content: "";
						position: absolute;
						display: block;
						width: 100rpx;
						height: 1px;
						bottom: 0;
						right: 0;
						opacity: 0.7;
						background-color: #fff;
					}
				}
				
			}
		}
		
		
	}
}
	       
</style>
