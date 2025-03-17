<template>
	<view id="login" class="bg-color">
		<view class="login-block">
			<block-bar-other title="用户登录" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">学号</view>
					<input class="input-box" type="text" placeholder="输入学号" />
				</view>
				<view class="action-item">
					<view class="title">密码</view>
					<input class="input-box" type="password" placeholder="输入密码" />
				</view>
				<view class="action-item tip-block">
					提示：若未注册账号，请
					<navigator url="/pages/user/register" style="color: #39c5bb;">注册</navigator>
				</view>
				<button class="button">登录</button>
			</view>
		</view>
	</view>
</template>

<script setup>


</script>

<style lang="less" scoped>
#login {
	.login-block {
		.action-block {
			margin: 20rpx 0;
			padding: 10rpx 30rpx;
			background-color: #fff;
			.action-item {
				display: flex;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ccc;
				.input-box {
					flex: 1;
					font-size: 32rpx;
					margin: 0 20rpx;
				}
			}
			.tip-block {
				border: 0;
				font-size: 24rpx;
				color: gray;
			}
			.button {
				font-size: 32rpx;
				margin: 10rpx 0;
				border-radius: 50rpx;
				color: #fff;
				background-color: #39c5bb;
				border: none
			}
		}
	}
}
</style>