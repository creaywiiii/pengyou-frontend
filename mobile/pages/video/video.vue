<template>
	<view>
		<!-- 底部tarbar -->
		<view class="my-sub-tabbar-wrapper">
			<custom-tar-bar direction="horizontal":show-icon="true":selected="selectedIndex" @onTabItemTap="tabbarTaped" />
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
		methods: {
			tabbarSelected(e)
			{
				
			},
			tabbarTaped(e){
				
				uni:switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
