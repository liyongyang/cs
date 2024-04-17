<template>
	<div @wheel="onMouseWheel">
		<video autoplay muted loop>
			<source src="/video/1.mp4" type="video/mp4">
		</video>
		<video muted loop>
			<source src="/video/2.mp4" type="video/mp4">
		</video>
		<video muted loop>
			<source src="/video/3.mp4" type="video/mp4">
		</video>
		<video muted loop>
			<source src="/video/4.mp4" type="video/mp4">
		</video>
		<div class="to-center flex items-center">
			<video muted loop>
				<source src="/video/5.mp4" type="video/mp4">
			</video>
			<div class="info">
				<li class="title">C-Suite Executive Consulting</li>
				<li>Office: +86 21 5470 0562</li>
				<li>Mobile: +86 18621966191</li>
				<li>E-Mail: tingting.wu@csuite.com.cn</li>
				<li class="start" @click="toStart">关于我们</li>
			</div>
		</div>
	</div>

</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
const currentVideo = ref(0);
const currH = ref(0)

const toStart = () => {
	loading.value = false
	window.scrollTo(0, 0)
}

const onMouseWheel = debounce((event: any) => {
	console.log(currH.value)

	if (event.deltaY > 0) {

		showMenus.value = false
		if (currH.value >= 3696) {
			return
		}
		currH.value = currH.value + 924
		window.scrollTo({
			top: currH.value,
			behavior: 'smooth' // 可选，实现平滑滚动
		})
	} else if (event.deltaY < 0) {
		showMenus.value = true
		currH.value = currH.value - 924 > 0 ? currH.value - 924 : 0

		window.scrollTo({
			top: currH.value,
			behavior: 'smooth' // 可选，实现平滑滚动
		})
	}
}, 500);
onMounted(() => {
	playNextVideo()
	document.body.addEventListener('wheel', onMouseWheel)
})
onUnmounted(() => {
	document.body.removeEventListener('wheel', onMouseWheel);

}) 
</script>
<style lang="scss" scoped>
.loading {
	width: 100vw;
	height: 100%;

	video {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* 让视频填充整个容器 */
	}
}

.main {
	padding-top: 110px;
}
</style>
