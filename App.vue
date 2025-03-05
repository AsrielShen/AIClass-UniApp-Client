<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
.bg-color {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #F6F6F6;
}
	
.func-block {
	padding: 0 30rpx;
	border-bottom: 1rpx solid #ccc;
	background-color: #fff;
}


</style>
