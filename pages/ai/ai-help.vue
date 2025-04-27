<template>
	<view id="ai-help" class="bg-color">
		<view class="chat-box">
			<view v-for="(item, index) in chatHistory" :key="index" class="chat-item">
				<view v-if="item.type === 'ai'" class="ai-question">
					<view v-html="renderMarkdown(item.message)"></view>
				</view>
				<view v-if="item.type === 'user'" class="user-answer">
					<text>{{ item.message }}</text>
				</view>
			</view>
		</view>
		<!-- 用户输入框 -->
		<view class="input-box">
			<input v-model="userInput" placeholder="请输入问题..." class="input" />
			<button @click="sendMessage" class="send-btn">发送</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { globalData } from '@/utils/config.js'
import MarkdownIt from 'markdown-it';


const userInput = ref('');
const chatHistory = ref([
	{
		type: 'ai',
		message: '**您好！** 这里是ai问答'
	}
]);

// 实例化 markdown-it
const md = new MarkdownIt();

// 渲染Markdown格式
const renderMarkdown = (markdownText) => {
	return md.render(markdownText);
}

// 发送用户消息
const sendMessage = () => {
	if (userInput.value.trim() === '') return;

	// 添加用户消息到对话记录
	chatHistory.value.push({
		type: 'user',
		message: userInput.value
	});
	// 清空输入框
	const message = userInput.value;
	userInput.value = '';

	uni.request({
		url: globalData.baseUrl + '/ai/generate/',
		method: 'POST',
		data: message,
		header: {
			'Content-Type': 'application/json'
		},
		success: (res) => {
			const backData = res.data;
			console.log(backData);
			if(backData.code === 0) {
				// 返回AI 回答
				const aiResponse = backData.data.generatedText;
				// 添加 AI 消息到对话记录
				chatHistory.value.push({
					type: 'ai',
					message: aiResponse
				});
			}
			else {
				uni.showToast({
					title: "生成失败！",
					icon: "error"
				});
			}
		},
		fail: (e)=> {
			uni.showToast({ title: "网络异常", icon: 'error' })
		}
	})
}
</script>

<style lang="less" scoped>
#ai-help {
	display: flex;
	flex-direction: column;
	.chat-box {
		flex: 1;
		padding: 30rpx;
		overflow-y: scroll;
		.chat-item {
			margin-bottom: 20rpx;

			.ai-question {
				background-color: #fff;
				padding: 10rpx;
				border-radius: 8px;
				border: 1rpx solid #ccc;
			}

			.user-answer {
				background-color: #39c5bb;
				color: white;
				padding: 10rpx;
				border-radius: 8px;
				border: 1rpx solid #ccc;
			}
		}
	}
	.input-box {
		padding: 30rpx;
		background-color: #fff;
		border-top: 1rpx solid #cbcbcb;
		display: flex;
		align-items: center;
		.input {
			flex: 1;
			line-height: 60rpx;
			padding: 10rpx;
			border: 1px solid #ccc;
			border-radius: 10px;
		}

		.send-btn {
			width: 120rpx;
			height: 60rpx;
			font-size: 25rpx;
			line-height: 60rpx;
			margin-left: 30rpx;
			color: white;
			border-radius: 8px;
			background-color: #39c5bb;
		}
	}
}
</style>