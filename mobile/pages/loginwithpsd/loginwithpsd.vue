<template>
	<view class="content">
		<view class="title">
			<image id="logo" src="../../static/icon/微博.png"></image>
			<br />
			<text id="Weibo">登陆微博</text>
			<br />
			<text id="share-life">分享生活 发现世界</text>
		</view>
		<view class="phone-box">
			<input type="ph-" placeholder="手机号或者邮箱"/>
		</view>
		<view class="password-box">
			<input type="psd-box" password placeholder="请输入登陆密码"/>
		</view>
		<button class="verif-code" @click="toIndex()">
			<text id="verif">登陆</text>
		</button>
		<button class="password" @click="toLogin()">
			<text id="psd">用短信验证码登陆</text>
		</button>
		<view class="problem">
			<text id="change-id">账号已更换</text>
			<text id="met-pro">登陆遇到问题?</text>
		</view>
		<view class="other-methods">
				<text class="ot-login">其他登陆方式</text>
		</view>
		<view class="image">
			<image id="weixin" src="../../static/icon/微信.png"></image>
			<image id="QQ" src="../../static/icon/icon_QQ.png"></image>
		</view>
		<view class="agreement">
			<text id="agree">登陆注册表示同意</text>
			<text id="user">用户协议、</text>
			<text id="private">隐私条款</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin:function()
			{
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			toIndex:function()
			{
				uni.navigateTo({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>
.content{
	display:flex;
	flex-direction:column;
}
#logo{
	width:150rpx;
	height:150rpx;
	margin-left: 300rpx;
	margin-bottom: 15rpx;
}
#Weibo{
	margin-left:280rpx;
	font-size: 40rpx;
	font-weight: bold;
	font-family: "宋体";
}
#share-life{
	margin-left:230rpx;
	font-weight: lighter;
	font-family: "宋体";
}
.phone-box{
	width:80%;
	height:100rpx;
	margin-left:10%;
	border-bottom: solid #dadada 2rpx;
	margin-top:20rpx;
}
.phone-box input{
	float: left;
	padding-top: 1rpx;
	font-size: 35rpx;
}
.password-box{
	width:80%;
	height:70rpx;
	margin-left:10%;
	border-bottom: solid #dadada 2rpx;
	margin-top:20rpx;
}
.password-box input{
	font-size: 35rpx;
	font-weight: lighter;
}
.verif-code{
	margin-top:80rpx;
	width:90%;
	height:85rpx;
	background: #fcc985;
	margin-left:5%;
	border-radius: 50rpx;
	display: flex;
}
.verif-code text{
	text-align: center;
	margin-left: 280rpx;
	margin-top: 3rpx;
	color:#fff;
	font-family: "宋体";
}
.password{
	margin-top:40rpx;
	width:90%;
	height:85rpx;
	background: #fff;
	margin-left:5%;
	border-radius: 50rpx;
	display: flex;
	border: solid #dea87c 4rpx;
}
.password text{
	text-align: center;
	margin-left: 190rpx;
	font-size:35rpx ;
	margin-top: 3rpx;
	color:#dea87c;
	font-family: "宋体";
}
.other-methods{
	margin-top: 110rpx;
	display: flex;
}
.ot-login{
	display: inline-block;
	margin-left: 280rpx;
}
#weixin{
	width:75rpx;
	height:75rpx;
	margin-left: 200rpx;
	margin-top:40rpx;
}
#QQ{
	float:right;
	width:75rpx;
	height:75rpx;
	margin-right: 200rpx;
	margin-top:40rpx;
}
.agreement{
	margin-top:40rpx;
	margin-left: 150rpx;
}
#agree{
	font-size: 25rpx;
	font-family: "宋体";
}
#private,#user{
	font-size: 25rpx;
	font-family: "宋体";
	color:#aabcc6;
}
.problem{
	margin-top:20rpx;
}
#change-id{
	font-size:30rpx;
	font-family: "宋体";
	margin-left:50rpx;
	color:#aabcc6;
}
#met-pro{
	font-size:30rpx;
	float:right;
	margin-right:50rpx;
	font-family:"宋体";
	color:#aabcc6;
}
</style>
