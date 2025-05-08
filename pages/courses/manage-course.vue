<template>
	<view id="manage-course" class="bg-c">
		<view class="item-block">
			<block-bar-other title="管理课程" />
			<view @tap="gotoDetail(index)" class="item" v-for="index in courses" :key="index.id">
				<view class="header">
					<view class="title">{{index.courseName}}</view>
					<view class="dead-line">{{index.description}}</view>
					<view class="more-btn">
						>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
import { globalData } from '@/utils/config.js'

const courses = ref([]);
const userInfo = uni.getStorageSync('userInfo');

uni.request({
	url: globalData.baseUrl + '/course/allCourse/teacher/' + userInfo.token,
	method: 'GET',
	header: {
		'Content-Type': 'application/json'
	},
	success: (res) => {
		const backData = res.data;
		if(backData.code === 0) {
			courses.value = backData.data;
		}
		else {
			uni.showToast({
				title: "认证错误，请重新登录",
				icon: "error"
			});
			uni.removeStorageSync("userInfo");
			uni.redirectTo({
				url: "/pages/user/login" 
			});
		}
	},
	fail: (e)=> {
		uni.showToast({ title: "网络异常", icon: 'error' })
	}
})

const gotoDetail = (course) => {
	uni.setStorageSync('courseTeacher', {
		id: course.id,
		name: course.courseName,
		teacherId: course.teacherId,
		description: course.description
	});
	const courseTeacher = uni.getStorageSync('courseTeacher');
	uni.navigateTo({
		url: "/pages/courses/course-feature"
	})
	
}

</script>

<style lang="less" scoped>
.bg-c {
	background-color: #F6F6F6;
}
#manage-course {
	.item-block {
		.item {
			margin: 10rpx 0;
			padding: 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			.header {
				position: relative;
				.title {
					font-size: 36rpx;
					margin: 15rpx 0;
				}
				.dead-line {
					color: #8d8d8d;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.more-btn {
					display: flex;
					align-items: center;
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					color: #8d8d8d;
				}
			}
		}
	}
}
</style>