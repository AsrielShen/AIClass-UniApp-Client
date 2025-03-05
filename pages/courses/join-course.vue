<template>
	<view id="join-course" class="bg-color">
		<view class="join-block func-block">
			<block-bar title="加入课程" />
			<view class="join-action">
				<view class="action-name">
					课程码：
				</view>
				<input 
					class="input-box" 
					v-model="courseNum" 
					maxlength="10" 
					type="text"
					focus 
					placeholder="请输入课程码"
				/>
				<button 
					class="action-button" 
					:class="{disabled: courseNum.length !== 10}"
					@click="searchFunc"
					:disabled="courseNum.length !== 10"
				>
					查询
				</button>
			</view>
		</view>
		<view class="pop-up" v-if="isShow" @click="cancelShow">
			<view class="pop-block">
				<view class="pop-title">
					查询课程
				</view>
				<view class="pop-content">
					<view>课程名：</view>
					<view>老师：</view>
				</view>
				<view class="pop-action">
					<button class="button" @click="joinSubmit">加入</button>
					<button class="button" @click="cancelShow">取消</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"

const isShow = ref(false);
const cancelShow = ()=> {
	isShow.value = false;
}

const courseNum = ref('');

const searchFunc = ()=> {
	isShow.value = true;
	console.log(courseNum.value);
}

const joinSubmit = ()=> {
	courseNum.value = '';
	cancelShow();
}

</script>

<style lang="less" scoped>
#join-course {
	.join-block {
		.join-action {
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
					margin-right: 20rpx;
				}
			}
			.input-box {
				flex: 1;
				margin: 0 10rpx;
			}
			.action-button {
				margin: 0;
				font-size: 24rpx;
				border-radius: 25rpx;
				color: #fff;
				background-color: #39c5bb;
				transition: 0.2s;
				&.disabled {
				    background-color: #A3D7D0;
				    color: #202b2a;
				}
			}
		}
	}
	.pop-up {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		.pop-block {
			width: 80%;
			box-sizing: border-box;
			padding: 30rpx;
			border-radius: 10rpx;
			background: white;
			font-size: 28rpx;
			text-align: center;
			.pop-content {
				margin: 30rpx 0;
				padding: 30rpx;
				background-color: #F6F6F6;
			}
			.pop-action {
				display: flex;
				justify-content: center;
				.button {
					font-size: 28rpx;
					width: 200rpx;
					margin: 0 50rpx;
					border-radius: 25rpx;
					color: red;
					border: 1rpx solid red;
					background-color: #fff;
					&:first-child {
						color: #fff;
						background-color: #39c5bb;
						border: none
					}
				}
			}
		}
	}

}
</style>
