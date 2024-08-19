<!-- 实现下拉索引 -->
<template>
	<view>
		<!-- 下拉索引 -->
		<picker mode="selector" :range="followList" v-model="selectedIndex" @change="handlePickerChange">
            <view class="picker">
                当前选择：‌{{ followList[selectedIndex] }}
            </view>
        </picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				        followList: ['关注', '推荐', '热门', '最新'], // 下拉列表数据
				        selectedIndex: -1 // 当前选中的索引
			}
		},
		methods: {
			 handlePickerChange(e) {
			        // 用户选择了一个选项，‌e.detail.value 是选中的索引
			        console.log('选中的索引：‌', e.detail.value);
			        // 根据选中的索引执行一些操作，‌比如更新页面内容
					 this.selectedIndex = e.detail.value;
			    }
		}
	}
</script>

<style>
.picker {
    padding: 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
}
</style>
