<template>
	<view id="register" class="bg-color">
		<view class="register-block">
			<block-bar-other title="用户注册" />
			<view class="action-block">
				<view class="action-item">
					<view class="title">用户学号</view>
					<input v-model="studentNumber" class="input-box" type="text" placeholder="请用学号注册" />
				</view>
				<view class="action-item">
					<view class="title">用户密码</view>
					<input v-model="password" class="input-box" type="password" placeholder="输入密码" />
				</view>
				<view class="action-item">
					<view class="title">确认密码</view>
					<input v-model="confirmPassword" class="input-box" type="password" placeholder="确认密码" />
				</view>
				<view class="action-item">
					<view class="title">姓名</view>
					<input v-model="studentName" class="input-box" type="text" placeholder="输入姓名" />
				</view>
				<view class="action-item">
					<view class="title">性别</view>
					<radio-group @change="selectGender" class="radio-box">
						<label class="radio-item">
							<radio value="男" :checked="gender === '男'" color="#39c5bb"
								style="transform:scale(0.7)" />
							男
						</label>
						<label class="radio-item">
							<radio value="女" :checked="gender === '女'" color="#39c5bb"
								style="transform:scale(0.7)" />
							女
						</label>
					</radio-group>
				</view>
				<view class="action-item">
					<view class="title">年级</view>
					<picker  @change="pickerChange" mode="date" fields="year" class="picker-box">
						<text v-if="grade">{{ grade }}级</text>
						<text v-else style="color: #666;">请选择入学年份</text>
					</picker>
				</view>
				<view class="action-item">
					<view class="title">学院</view>
					<input v-model="department" class="input-box" type="text" placeholder="输入所在学院" />
				</view>
				<view class="action-item">
					<view class="title">专业</view>
					<input v-model="major" class="input-box" type="text" placeholder="输入所在专业" />
				</view>
				<view class="action-item">
					<view class="title">电话</view>
					<input v-model="phone" class="input-box" type="text" placeholder="输入联系电话" />
				</view>
				<view class="action-item tip-block">
					提示：若已注册账号，请
					<navigator url="/pages/user/login" style="color: #39c5bb;">登录</navigator>
				</view>
				<button @click="register" class="button">注册</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { globalData } from '@/utils/config.js'

// 双向绑定的数据
const studentNumber = ref('')
const password = ref('')
const confirmPassword = ref('')
const studentName = ref('')
const gender = ref('男')
const grade = ref('')
const department = ref('')
const major = ref('')
const phone = ref('')
const role = ref('student')

// 选择性别
const selectGender = (e) => {
	gender.value = e.detail.value
}

const pickerChange = (e) => {
	grade.value = parseInt(e.detail.value);
}


const register = () => {	
	if (!studentNumber.value || !password.value ||
		!confirmPassword.value || !studentName.value ||
		!department.value || !major.value || !phone.value) {
		uni.showToast({
			title: '请完整填写所有信息',
			icon: 'error'
		})
		return
	  }

	if (password.value !== confirmPassword.value) {
		uni.showToast({
			title: '密码和确认密码不一致',
			icon: 'error'
		})
		return
	}

  // 发起请求
  uni.request({
    url: globalData.baseUrl + '/auth/register/student',
    method: 'POST',
    data: {
		studentNumber: studentNumber.value,
		studentName: studentName.value,
		password: password.value,
		gender: gender.value,
		department: department.value,
		major: major.value,
		grade: grade.value,
		phone: phone.value,
		role: role.value,
		openid: null
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
		const data = res.data
		if (data.code === 0) {
			uni.setStorageSync('userInfo', {
				userId: data.data.userId,
				userNumber: data.data.userNumber,
				userName: data.data.userName,
				role: data.data.role,
				token: data.data.token
			});
      	
			uni.showToast({ title: '注册成功', icon: 'success' });
			// 登录成功后跳转到 index 页面
			uni.switchTab({
				url: '/pages/index/index'
			});
      	
		} else {
			uni.showToast({ title: data.msg || "注册失败！", icon: 'error' });
		}
    },
    fail: (err) => {
      uni.showToast({
        title: '网络错误',
        icon: 'error'
      })
      console.log(err)
    }
  })
}
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
						font-size: 32rpx;
						margin: 0 20rpx;

						.radio-item {
							margin-right: 20rpx;
						}
					}

					.picker-box {
						flex: 1;
						font-size: 32rpx;
						margin: 0 20rpx;
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