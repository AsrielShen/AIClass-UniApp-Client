<template>
	<view id="register" class="bg-color">
		<view class="register-block">
			<block-bar-other title="用户登录" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">用户学号</view>
					<input class="input-box" type="text" placeholder="请用学号注册" />
				</view>
				<view class="action-item">
					<view class="title">用户密码</view>
					<input class="input-box" type="password" placeholder="输入密码" />
				</view>
				<view class="action-item">
					<view class="title">确认密码</view>
					<input class="input-box" type="password" placeholder="确认密码" />
				</view>
				<view class="action-item">
					<view class="title">姓名</view>
					<input class="input-box" type="text" placeholder="输入姓名" />
				</view>
				<view class="action-item">
					<view class="title">性别</view>
					<radio-group @change="selectGender" class="radio-box">
					    <label class="radio-item">
							<radio value="male" :checked="gender === 'male'" color="#39c5bb" style="transform:scale(0.7)" />
							男
					    </label>
					    <label class="radio-item">
							<radio value="female" :checked="gender === 'female'" color="#39c5bb" style="transform:scale(0.7)" />
							女
					    </label>
					</radio-group>
				</view>
				<view class="action-item">
					<view class="title">年级</view>
					<input class="input-box" type="text" placeholder="输入年级,如2021级" />
				</view>
				<view class="action-item">
					<view class="title">学院</view>
					<input class="input-box" type="text" placeholder="输入所在学院" />
				</view>
				<view class="action-item">
					<view class="title">专业</view>
					<input class="input-box" type="text" placeholder="输入所在专业" />
				</view>
				<view class="action-item">
					<view class="title">电话</view>
					<input class="input-box" type="text" placeholder="输入联系电话" />
				</view>
				<view class="action-item tip-block">
					提示：若已注册账号，请
					<navigator url="/pages/user/login" style="color: #39c5bb;">登录</navigator>
				</view>
				<button class="button">注册</button>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
#register {
	.register-block {
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
				.radio-box {
					flex: 1;
					margin: 0 20rpx;
					.radio-item {
						margin-right: 20rpx;
					}
				}
				
			}
			.tip-block {
				border: 0;
				font-size: 24rpx;
				color: gray;
				.blue {
					margin-left: 5rpx;
					color: #39c5bb;
					font-weight: bold;
				}
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