<template>
	<view class="example">
		<uni-popup :show="isShow" position="bottom" mode="fixed" @hidePopup="togglePopup">
			<scroll-view :scroll-y="true" class="uni-center center-box">
				<view v-for="(item, index) in list" :key="index" class="uni-list-item">滚动列表数据 {{ item }}</view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	import {uniPopup} from "@dcloudio/uni-ui"
	export default {
		components: {
			uniPopup
		},
		props:['isShow'],
		data() {
			return {
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			};
		},
		methods: {
			togglePopup() {
				this.$emit('hiddenEvent')
			},
		}
	};
</script>

<style>
	.example {
		padding: 0 30upx 30upx
	}

	.center-box {
		width: 100%;
		height: 500upx;
	}

	.uni-list-item {
		line-height: 80upx;
		border-bottom: 1px #f5f5f5 solid;
	}

	.uni-list-item:last-child {
		border: none;
	}

</style>
