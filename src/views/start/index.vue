<template>
	<div>
		<div class="loading" v-if="loading" @wheel="onMouseWheel">
			<video autoplay muted loop ref="v1">
				<source src="/video/1.mp4" type="video/mp4">
			</video>
			<video muted loop ref="v2">
				<source src="/video/2.mp4" type="video/mp4">
			</video>
			<video muted loop ref="v3">
				<source src="/video/3.mp4" type="video/mp4">
			</video>
			<video muted loop ref="v4">
				<source src="/video/4.mp4" type="video/mp4">
			</video>
			<div class="to-center flex items-center" ref="v5">
				<video muted loop>
					<source src="/video/5.mp4" type="video/mp4">
				</video>
				<div v-if="showStart" class="info animate__animated animate__fadeIn">
					<li class="title">C-Suite Executive Consulting</li>
					<li>Office: +86 21 5470 0562</li>
					<li>Mobile: +86 18621966191</li>
					<li>E-Mail: tingting.wu@csuite.com.cn</li>
					<li class="start hvr-pulse" @click="toStart">关于我们</li>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash';
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router";

const isSmallSize = ref(window.innerWidth < 576)

const router = useRouter();
const route = useRoute();
const loading = ref(true)
const showMenus = ref(true)
const showStart = ref(false)
const currentVideo = ref(0);
const currH = ref(0)

const playNextVideo = () => {
	const videos = document.querySelectorAll('video');
	videos[currentVideo.value].style.display = 'block'; // 显示当前视频
	videos[currentVideo.value].play(); // 播放当前视频
	currentVideo.value = (currentVideo.value + 1) % videos.length; // 更新当前视频索引
	setTimeout(playNextVideo, videos[currentVideo.value].duration * 1000); // 在当前视频播放完后切换到下一个视频
}

const toStart = () => {
	showMenus.value = true
	loading.value = false
	document.body.removeEventListener('wheel', onMouseWheel);

	router.push({
		path: '/home'
	}).then(() => {
		// window.scrollTo(0, 0)
	})
}

const onMouseWheel = debounce((event: any) => {
	const videos = document.querySelectorAll('video');
	const screenHeight = window.innerHeight;
	if (event.deltaY > 0) {
		if (currentVideo.value < videos.length - 1) {
			currentVideo.value++
			if (currentVideo.value === 4) {
				showStart.value = true
			}
		} else {
			return
		}
		showMenus.value = false
		videos[currentVideo.value].play(); // 播放当前视频
		currH.value = currH.value + screenHeight
		window.scrollTo({
			top: currH.value,
			behavior: 'smooth'
		})
	} else if (event.deltaY < 0) {
		showMenus.value = true
		showStart.value = false
		if (currentVideo.value > 0) {
			currentVideo.value--
		}
		currH.value = currH.value - screenHeight > 0 ? currH.value - screenHeight : 0
		window.scrollTo({
			top: currH.value,
			behavior: 'smooth'
		})
	}
}, 100);

onBeforeMount(() => {
	if (isSmallSize.value) {
		router.push({
			path: '/home'
		}).then(() => {
			// window.scrollTo(0, 0)
		})
	}
})

onMounted(() => {
	document.body.addEventListener('wheel', onMouseWheel)
})
onBeforeUnmount(() => {
	document.body.removeEventListener('wheel', onMouseWheel);
})
</script>
<style lang="scss" scoped>
.loading {
	width: 100vw;
	height: 100%;
	// overflow: hidden;

	video {
		display: block;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}

	.to-center {
		position: relative;
		width: 100vw;
		height: 100vh;
		margin: 0 auto;

		video {
			position: absolute;
			top: 50%;
			left: -20px;
			transform: translateY(-50%);
			width: 65%;
			height: 65%;
			object-fit: cover;
			/* 让视频填充整个容器 */
		}

		.info {
			position: absolute;
			top: 50%;
			right: 120px;
			transform: translateY(-50%);
			font-size: 28px;
			line-height: 50px;
		}

		.title {
			font-size: 40px;
			font-weight: 500;
			line-height: 48px;
			margin-bottom: 80px;
			text-align: left;
		}

		.start {
			width: 128px;
			margin-top: 50px;
			text-align: center;
			border-radius: 12px;
			font-size: 20px;
			line-height: 48px;
			font-weight: 500;
			cursor: pointer;
			border: 1px solid #20262e;
		}
	}
}

.main {
	padding-top: 110px;
}
</style>
