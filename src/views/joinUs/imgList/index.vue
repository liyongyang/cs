// 父组件index.vue
<template>
  <div class="img-container">
    <div class="head wow animate__fadeInUp flex justify-between">
      <div class="icon_wrap" ref="backIconRef" @click="goBack">
        <el-icon class="icon-back cursor-pointer">
          <ArrowLeftBold />
        </el-icon>
        <span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
      </div>
      <li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t("page_joinUs.conf1.title") }}</li>
    </div>
    <productCard :productList="productList"></productCard>
    <div class="loading-text py-8" v-if="loading">加载中...</div>
    <div class="loading-text" v-if="finish">没有更多了</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

import productCard from "./components/index.vue";

const { t } = useI18n()
const router = useRouter();

const loading = ref(true);
const finish = ref(false);
let productList = ref([])
let arr = [
  {
    id: 1,
    src: '/joinUs/imgs/img1.jpg'
  },
  {
    id: 2,
    src: '/joinUs/imgs/img2.jpg'
  },
  {
    id: 3,
    src: '/joinUs/imgs/img3.jpg'
  }, {
    id: 4,
    src: '/joinUs/imgs/img4.jpg'
  }, {
    id: 5,
    src: '/joinUs/imgs/img5.jpg'
  }, {
    id: 6,
    src: '/joinUs/imgs/img6.jpg'
  }, {
    id: 7,
    src: '/joinUs/imgs/img7.jpg'
  }, {
    id: 8,
    src: '/joinUs/imgs/img8.jpg'
  }, {
    id: 9,
    src: '/joinUs/imgs/img9.jpg'
  }, {
    id: 10,
    src: '/joinUs/imgs/img0.jpg'
  },
]
//获取接口数据
const getProduct = () => {
  loading.value = true;
  productList.value = [...productList.value, ...arr]
};
const goBack = () => {
  router.push('/joinUs')
}
const handleScroll = () => {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  //滚动条滚动距离
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  //窗口可视范围高度
  const clientHeight =
    window.innerHeight ||
    Math.min(document.documentElement.clientHeight, document.body.clientHeight);
  if (clientHeight + scrollTop + 100 >= scrollHeight) {
    //快到底时----加载
    getProduct();
  }
};

const debounce = (fn, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000);
  for (let i = 0; i < 33; i++) {
    productList.value.push({
      id: i,
      src: `/joinUs/imgs/img${i}.jpg`
    })
  }
  window.addEventListener("scroll", debounce(handleScroll, 1000));
});
</script>

<style lang="scss" scoped>
.img-container {
  width: 1312px;
  margin: 16px auto;

  .head {
    display: flex;
    align-items: center;
    font-size: 48px;
    line-height: 63px;
    font-weight: 500;

    .icon_wrap {
      flex: 0 0 auto;
      height: 80px;
      width: 80px;
      cursor: pointer;
      background: #fff;
      text-align: center;
      border-radius: 100%;

      &:hover {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

        span {
          margin-right: 6px;
          opacity: 1;
          display: inline;
        }
      }

      span {
        opacity: 0;
        display: none;
        position: relative;
        font-size: 18px;
        transition: all 0.5s ease-in-out;
      }

    }

    .icon-back {
      display: inline-block;
      font-size: 32px;
      vertical-align: sub;
    }
  }
}

.loading-text {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 999;
  margin: auto;
  padding: 20px 0;
  font-size: 16px;
}

:deep(.waterfall-list) {
  background: none;
}

.container {
  padding: 0 12px;
}
</style>
