<template>
	<view class="content">
		<view class="point">
			<image id="im1" src="../../static/icon/敦煌小花.png"></image>
			<image id="im2" src="../../static/icon/敦煌冰心莲.png"></image>
			<image id="im3" src="../../static/icon/敦煌白莲心.png"></image>
			<image id="im4" src="../../static/icon/敦煌莲心凝露.png"></image>
		</view>
		<view v-if="!showNewView"> 
		<view class="all-box">
		<view class="box">
			<view class="user">
				<view>
				<image id="image1" src="../../static/icon/头像-女一.png"></image>
				</view>
				<view class="all-name">
				<text id="name">反射弧超长星人</text>
				<br />
				<text id="called">xxx年xxx博主</text>
			    </view>
				<view id="concern">
					<text>+ 关注</text>
				</view>
			</view>
			<view class="wd-image">
				<custom-tar-bar direction="horizontal":show-icon="true":selected="selectedIndex" @onTabItemTap="tabbarTaped" />
				<image id="mood" src="../../static/icon/confused-3.png"></image>
				<text id="words">
					<br/>
					<text>我瞎了</text>
					<br/>
					<text>除了第一张剩下的两张都找不到</text>
				</text>
				<br/>
				<!-- 点击图片放大尝试 -->
				<view id="image2">
					<image id="img1" src="../../static/icon/QQ图片20240819144213.jpg" @click="previewImage" mode="widthFix"></image>
					<image id="img1" src="../../static/icon/QQ图片20240819144216.jpg"  @click="previewImage1" mode="widthFix"></image>
					<image id="img1" src="../../static/icon/QQ图片20240819144154.jpg"  @click="previewImage2" mode="widthFix"></image>
				</view>
			</view>
			<view class="comment">
				<view class="rel">
				<view>
				<image id="relay" src="../../static/icon/微博转发.png"></image>
				</view>
				<view>
				<text id="num1">7</text>
				</view>
				<view>
				<image id="comt" src="../../static/icon/微博评论 (1).png"></image>
				</view>
				<view>
				<text id="num2">31</text>
				</view>
				<view>
				<image id="agree" src="../../static/icon/微博点赞.png"></image>
				</view>
				<view>
				<text id="num3">172</text>
				</view>
				</view>
			</view>
		</view>
		<!-- 第二个盒子 -->
		<view class="box">
			<view class="user">
				<view>
				<image id="image1" src="../../static/icon/头像-女一.png"></image>
				</view>
				<view class="all-name">
				<text id="name">反射弧超长星人</text>
				<br />
				<text id="called">xxx年xxx博主</text>
			    </view>
				<view id="concern">
					<text>+ 关注</text>
				</view>
			</view>
			<view class="wd-image">
				<image id="mood" src="../../static/icon/confused-3.png"></image>
				<text id="words">
					<br/>
					<text>我瞎了</text>
					<br/>
					<text>除了第一张剩下的两张都找不到</text>
				</text>
				<br/>
				<view id="image2">
					<image id="img1" src="../../static/icon/QQ图片20240819144213.jpg"></image>
					<image id="img1" src="../../static/icon/QQ图片20240819144216.jpg"></image>
					<image id="img1" src="../../static/icon/QQ图片20240819144154.jpg"></image>
				</view>
			</view>
			<view class="comment">
				<view class="rel">
				<view>
				<image id="relay" src="../../static/icon/微博转发.png"></image>
				</view>
				<view>
				<text id="num1">7</text>
				</view>
				<view>
				<image id="comt" src="../../static/icon/微博评论 (1).png"></image>
				</view>
				<view>
				<text id="num2">31</text>
				</view>
				<view>
				<image id="agree" src="../../static/icon/微博点赞.png"></image>
				</view>
				<view>
				<text id="num3">172</text>
				</view>
				</view>
			</view>
		</view>
		</view>
		</view>
		<view v-else>  
		      <!-- 新的界面 -->  
		      <view>这是新添加的界面</view>  
		      <button @click="closeNewView">关闭新界面</button>  
		    </view>  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedIndex:0
			}
		},
		onLoad() {

		},
		methods: {
			tabbarSelected(e)
			{
				
			},
			tabbarTaped(e){
				console.log(e.pagePath)
				uni:switchTab({
					url:'/'+e.pagePath
				})
			},
			previewImage() {
			            uni.previewImage({
			                urls: ["../../static/icon/QQ图片20240819144213.jpg"], // 需要预览的图片http链接列表
			                current: "../../static/icon/QQ图片20240819144213.jpg" // 当前显示图片的http链接
			            });
			        },
			previewImage1() {
			            uni.previewImage({
			                urls: ["../../static/icon/QQ图片20240819144216.jpg"], // 需要预览的图片http链接列表
			                current: "../../static/icon/QQ图片20240819144216.jpg" // 当前显示图片的http链接
			            });
			        },
			previewImage2() {
			            uni.previewImage({
			                urls: ["../../static/icon/QQ图片20240819144154.jpg"], // 需要预览的图片http链接列表
			                current: "../../static/icon/QQ图片20240819144154.jpg" // 当前显示图片的http链接
			            });
			        }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
	.point{
		width:100%;
		height:150rpx;
		background: #ffffff;
	}
	.box{
		margin-top: 20rpx;
		width:100%;
		height:600rpx;
		background:#ffffff;
	}
	.comment{
		margin-top:42rpx;
		width:100%;
		height:80rpx;
		background: #ffffff;
		display:flex;
	    flex-direction: initial;
		border-top: solid #d1d1d1 2rpx;
	}
	#relay{
		margin-left:30%;
		margin-top: 10rpx;
		width:60rpx;
		height:60rpx;
	}
	#agree{
		margin-top: 10rpx;
		margin-left: 100rpx;
		width:60rpx;
		height:60rpx;
	}
	#comt{
		margin-top: 25rpx;
		margin-left: 80rpx;
		width:50rpx;
		height:45rpx;
	}
	.user{
		width:100%;
		height:130rpx;
		background:#ffffff;	
		display: flex;
		flex-direction: initial;
		border-top: #d1d1d1;
	}
	#image1{
		display:inline-block;
		width:100rpx;
		height:100rpx;
		margin-top: 10rpx;
		margin-left: 10rpx;
	}
	.all-name{
		margin-top: 10rpx;;
	}
	#name{
		margin-top: 10rpx;
		margin-left:10rpx;
		color:#c6956a;
		 }
	#called{
		font-weight: lighter;
	}
	#concern{
		background: #fff;
		width:100rpx;
		height:50rpx;
		margin-top:10rpx;
		margin-left: 250rpx;
		border: solid #c6956a 4rpx;
		border-radius: 30rpx;
	}
	#mood{
		margin-top: 10rpx;
		margin-left: 20rpx;
		width:30rpx;
		height:30rpx;
	}
	#img1{
		margin-top: 10rpx;
		width:150rpx;
		height:150rpx;
		margin-left: 60rpx;
	}
	#num{
		margin-top:10rpx
	}
	.rel{
		display:flex;
		flex-direction: initial;
		background-color: #ffffff;
	}
	#relay{
		margin-top: 10rpx;
		margin-left: 50rpx;
	}
	#comt{
		margin-top: 20rpx;
		margin-left: 180rpx;
	}
	#agree{
		margin-top: 10rpx;
		margin-left: 180rpx;
	}
	#num1{
		margin-left: 10rpx;
		margin-top: 50rpx;
	}
	#num2{
		margin-left: 10rpx;
	}
	#num3{
		margin-left: 10rpx;
	}
	#im1,#im2,#im3,#im4{
		margin-left: 30rpx;
		width:150rpx;
		height:150rpx;
	}
</style>
