<template>
  <el-config-provider @wheel="onMouseWheel">

    <Head v-show="showMenus" class="animate__animated animate__fadeInDown"></Head>
    <router-view v-slot="{ Component }">
      <component :is="Component" :class="isStart ? '' : 'main'" />
    </router-view>
    <Footer v-if="!isStart"></Footer>
  </el-config-provider>

</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from "vue-router";
import WOW from "wow.js";

import Footer from '@/components/footer/index.vue';
import Head from '@/components/head/index.vue';


const route = useRoute();
const isStart = ref(true)
const showMenus = ref(true)
const currentVideo = ref(0);

watch(route, (v) => {
  showMenus.value = true
  if (v.path != '/') {
    isStart.value = false
  }
  console.log(v)
})
const playNextVideo = () => {
  const videos = document.querySelectorAll('video');
  videos[currentVideo.value].style.display = 'block'; // 显示当前视频
  videos[currentVideo.value].play(); // 播放当前视频
  currentVideo.value = (currentVideo.value + 1) % videos.length; // 更新当前视频索引
  setTimeout(playNextVideo, videos[currentVideo.value].duration * 1000); // 在当前视频播放完后切换到下一个视频
}

const onMouseWheel = ((event: any) => {
  if (event.deltaY > 0) {
    showMenus.value = false
  } else if (event.deltaY < 0) {
    showMenus.value = true
  }
})

onMounted(() => {
  new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
  }).init()
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
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    /* 让视频填充整个容器 */
  }

  .to-center {
    position: relative;
    width: 100vw;
    height: 924px;
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
