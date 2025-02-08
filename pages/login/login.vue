<template>
	<view class="userLayout pageBg" v-if="userinfo">
		<view :style="{height:getNavBarHeight()+'px'}"></view>

		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
import {getNavBarHeight} from "@/utils/system.js"
import {apiUserInfo} from "@/api/apis.js"
import { ref } from "vue";

const userinfo = ref(null)

const getUserInfo = ()=>{
	apiUserInfo().then(res=>{
		console.log(res);
		userinfo.value = res.data
	})
}

// getUserInfo();
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;		
		padding:50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}

	}
}
</style>
