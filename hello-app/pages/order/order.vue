<template>
<view>
	<base-info type="send"  refs="send" icon="../../static/send.png" @onAdd="addBase"/>
	<base-info type="receive" refs="receive" icon="../../static/rec.png" @onAdd="addBase"/>
	<view class="b-bottom">
		<list-cell  title="基本信息完善" @eventClick="showBase"></list-cell>
		<list-cell  title="增值服务&备注" @eventClick=""></list-cell>
		<view class="b-content">
		  <checkbox value="cb" checked="true" color="#47086c"/> 
		  <text>我同意</text>
		  <text class="cell-tip">《国内快递服务协议》</text>	
		  <button class="btnSend">寄件</button>
		</view>
	</view>
	<base-popup  :isShow="isBaseShow" @hiddenEvent="hiddenBase"></base-popup>
</view>
</template>

<script>
	import listCell from '@/components/mix-list-cell';
	import baseInfo from './baseInfo'
	import basePopup from './basePopup'
	export default {
        components: {baseInfo,listCell,basePopup},
		data() {
			return {
		     isBaseShow:false
			}
		},
		methods: {
		    addBase() {
				console.log('add success')
			},
			showBase() {
				this.isBaseShow = true;
			},
			hiddenBase() {
				this.isBaseShow = false;
			}
		}
    }
</script>

<style lang="scss">
	.b-bottom {
		background:#fff;
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		font-size:$font-base;
		.b-content {
			display:flex;
			align-items:baseline;
			padding: 20upx $page-row-spacing;
			line-height:80upx;
			position:relative;
			.cell-tip {
				color:$base-color;
			}
			.btnSend {
				width:200upx;
				height:100%;
				background:$base-color;
				color:#fff;
				justify-content: flex-end;
				margin-right:0;
			}
		}
	}
</style>
