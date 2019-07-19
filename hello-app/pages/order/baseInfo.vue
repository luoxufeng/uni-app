<template>
	<view>
		<uni-collapse @change="change">
			<uni-collapse-item :title="title" :open="open"  :thumb="icon">
				<view style="padding: 0 30upx;"> 
				 <view class="row">
					<input class="inputName" type="text" v-model="form.name" placeholder="姓名" placeholder-class="placeholder" style="width:200upx;border-right:1px solid #ccc;"/>
					<input class="input" type="text" v-model="form.phone" placeholder="手机号" placeholder-class="placeholder" style="padding-left:10px;"/>
				 </view>
				  <view class="row">
					  <text style="color:#999" @click="showMulLinkageThreePicker">{{form.pickerText?form.pickerText:'省市区'}}</text>
				 </view>
				 <view class="row">
					 <input class="input" type="text" v-model="form.address" placeholder="详细地址" placeholder-class="placeholder"/>
				 </view>
				 <view class="row">
					<button class="add-btn" @click="onAdd">确认</button>
				 </view>
				 </view>
			</uni-collapse-item>
	    </uni-collapse>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
	    @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
	    components: {uniCollapse,uniCollapseItem,mpvueCityPicker},
		props:['type','icon'],
		data() {
			return {
		       form: {
				   name:'',
				   phone:'',
				   pickerValue:[],
				   pickerText: '',
				   address:''
			   },
			   themeColor: '#007AFF',
			   cityPickerValueDefault: [0, 0, 1],
			   title:this.type=== 'send' ? '请输入寄件人信息' : '请输入收件人信息',
			   open:false
			}
		},
		methods: {
		    change(v) {
			},
		    // 三级联动选择
		    showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
		    },
			onConfirm(e) {
				// this.pickerText = JSON.stringify(e)
				// console.log(this.pickerText)
				this.form.pickerText = e.label;
				this.form.pickerValue = e.value;
			},
			onCancel(e) {
				console.log(e)
			},
			onAdd() {
				let data = this.form;
				let text = this.type==='send' ? '寄件人' : '收件人';
				if(!data.name) {
					this.$api.msg(`请填写${text}姓名`);
					return;
				}
				if(!/(^1[3|4|5|7|8|9][0-9]{9}$)/.test(data.phone)) {
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.pickerText) {
					this.$api.msg('请选择省市区');
					return;
				}
				if(!data.address) {
					this.$api.msg('请填写详细地址');
					return;
				}
				this.title = this.form.name + ' ' + this.form.phone;
				this.open = !this.open;
				 this.$emit('onAdd');
				// this.collapse.onChange && this.collapse.onChange()
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}
	
	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		border-bottom:1px solid #ccc;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.inputName {
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		
	}
</style>
