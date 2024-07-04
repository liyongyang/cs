<template>
  <div class="customer-container">
    <li v-if="isSmallSize" class="container-name">
      {{ t("common.routes.menu3") }}
    </li>
    <vue3-seamless-scroll v-if="logoList" :list="logoList" class="scroll" direction="right">
      <div class="scroll-item" v-for="(item, index) in logoList" :key="index">
        <div v-for="(t1, index) in item" :key="index" class="logo">
          <img :src="t1" alt="" />
          <!-- <li>{{ t }}</li> -->
        </div>
      </div>
    </vue3-seamless-scroll>
    <div class="content">
      <li class="title wow animate__fadeInUp">
        {{ t("page_customer.conf1.title") }}
      </li>
      <div class="my-conf1 wow animate__fadeInUp">
        <div class="card-item" v-for="(item, index) in egList" :key="index">
          <img @mouseover="changeHover(index, true)" @mouseleave="changeHover(index, false)" @click="toCase(index)"
            :class="[
      'img',
      'animate__animated',
      item.status ? 'animate__fadeIn' : '',
    ]" :src="item.status ? item.activeImg : item.img" alt="" />
        </div>
      </div>
      <li class="title wow animate__fadeInUp">
        {{ t("page_customer.conf2.title") }}
      </li>
      <!-- <div class="my-conf2 wow animate__fadeInUp">
        <div class="search">
          <el-select clearable v-model="filterV.type1" placeholder="行业选择" @change="getEvaluationList">
            <el-option v-for="(item, index) in industryOptions" :key="index" :label="item" :value="index + 1" />
          </el-select>
        </div>
        <div v-if="!commentList2" class="list-container">
          <el-empty description="no Data" />
        </div>

        <div v-else class="list-container">
          <div class="card" v-for="(item, index) in commentList2" :key="index">
            <img class="item-img" :src="`/customer/comment/logo${item.headPortrait}` + '.png'" alt="" />
            <div class="item-info">
              <div class="head">
                <span class="line"></span>
                <span class="name">{{ item.name }}</span>
                <span class="gw">{{ item.company }}{{ item.position }}</span>
              </div>
              <li class="txt">{{ item.idea }}</li>
            </div>
          </div>
        </div>
      </div> -->
      <Evaluation />
      <div class="getmore wow animate__fadeInUp">
        <div @click="toMore">
          {{ t('common.more1') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { sys } from "@/api/index";
import { ElMessage } from "element-plus";
import { onBeforeMount, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import Evaluation from './components/evaluation.vue';

const { t } = useI18n();
const router = useRouter();
const commentList2 = ref();
const industryOptions = [
  "制造工程",
  "医疗设备器材",
  "高科技与电子",
  "专业服务",
  "化工与制药",
  "耐用消费品",
  "其他",
];
const commentList = [
  {
    name: t("page_customer.conf2.detail[0].name"),
    tit: t("page_customer.conf2.detail[0].tit"),
    msg: t("page_customer.conf2.detail[0].msg"),
    imageName: "logo.png",
  },
  {
    name: t("page_customer.conf2.detail[1].name"),
    tit: t("page_customer.conf2.detail[1].tit"),
    msg: t("page_customer.conf2.detail[1].msg"),
    imageName: "logo2.png",
  },
  {
    name: t("page_customer.conf2.detail[2].name"),
    tit: t("page_customer.conf2.detail[2].tit"),
    msg: t("page_customer.conf2.detail[2].msg"),
    imageName: "logo3.png",
  },
  {
    name: t("page_customer.conf2.detail[3].name"),
    tit: t("page_customer.conf2.detail[3].tit"),
    msg: t("page_customer.conf2.detail[3].msg"),
    imageName: "logo2.png",
  },
  {
    name: t("page_customer.conf2.detail[4].name"),
    tit: t("page_customer.conf2.detail[4].tit"),
    msg: t("page_customer.conf2.detail[4].msg"),
    imageName: "logo4.png",
  },
  {
    name: t("page_customer.conf2.detail[5].name"),
    tit: t("page_customer.conf2.detail[5].tit"),
    msg: t("page_customer.conf2.detail[5].msg"),
    imageName: "logo2.png",
  },
  {
    name: t("page_customer.conf2.detail[6].name"),
    tit: t("page_customer.conf2.detail[6].tit"),
    msg: t("page_customer.conf2.detail[6].msg"),
    imageName: "logo.png",
  },
];
const isSmallSize = ref(window.innerWidth < 576);
const logoList = ref([]);
const egList = ref([]);
const filterV = reactive({
  type1: "",
  type2: "",
});

onBeforeMount(() => {
  let temp = [];

  for (let index = 1; index < 89; index++) {
    temp.push(`/customer/logo/` + index + `.jpg`);
  }
  for (let i = 0; i < temp.length; i += 22) {
    logoList.value.push(temp.slice(i, i + 22));
  }
  for (let index = 1; index < 9; index++) {
    egList.value.push({
      active: false,
      activeImg: `/customer/example/ag-active-` + index + `.png`,
      img: `/customer/example/eg` + index + `.png`,
    });
  }
  getEvaluationList();
});

const changeHover = (i: number, key: any) => {
  egList.value[i].status = key;
  console.log("first", i);
};
const toCase = (i: number) => {
  router
    .push({
      path: `customer/${i}`,
    })
    .then(() => {
      window.scrollTo(0, 0);
    });
};
const toMore = (i: number) => {
  router
    .push({
      path: `customer/more`,
    })
    .then(() => {
      window.scrollTo(0, 0);
    });
};

const deleteEvaluation = (key: number) => {
  const id = [key];
  sys.deleteEvaluation(id).subscribe((res) => {
    ElMessage({
      message: "success.",
      type: "success",
      plain: true,
    });
    getEvaluationList();
  });
};
const getEvaluationList = () => {
  const params = {
    business: filterV.type1,
    current: 1,
    size: 10,
  };
  sys.getEvaluationList(params).subscribe((res) => {
    commentList2.value = res.data.list;
    console.log(`output->commentList.value`, commentList2.value);
  });
};
</script>

<style lang='scss' scoped>
.customer-container {
  color: #231c1e;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;

  .scroll {
    height: 100%;
    width: auto;
    overflow: hidden;
    padding-bottom: 32px;

    .scroll-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: auto;
      height: 100%;

      img {
        height: 172px;
        width: 172px;
        margin: 4px 6px;
      }
    }
  }

  .content {
    width: 1312px;
    margin: 0 auto;

    .title {
      font-size: 48px;
      font-weight: 500;
      line-height: 64px;
      margin: 64px 0;
    }

    .my-conf1 {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 32px;

      .card-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: auto;
        height: 320px;
        margin: 8px 0;
        cursor: pointer;
      }
    }

    .my-conf2 {
      padding-bottom: 32px;

      .search {
        display: flex;
        justify-content: space-between;

        :deep(.el-select__wrapper) {
          width: 648px !important;
          height: 48px;
          border-radius: 12px;
        }
      }

      .list-container {
        padding-top: 8px;

        .card {
          cursor: default;
          display: flex;
          width: auto;
          min-height: 243px;
          margin: 8px auto;
          border-radius: 12px;
          border: 1px solid #b0a7a7;

          &:hover {
            border: 1px solid #e30214;
          }

          .item-img {
            width: 320px;
            height: 244px;
            border-radius: 12px 0 0 12px;
          }

          .item-info {
            // display: flex;
            // flex-direction: column;
            // justify-content: space-between;
            width: 928px;
            margin: 40px 40px 32px;
            flex-wrap: wrap;
            text-wrap: wrap;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-wrap: break-word;
            white-space: pre-wrap;

            .head {
              display: flex;
              font-size: 28px;
              line-height: 36px;
              align-items: center;
              white-space: nowrap;

              .line {
                width: 3px;
                height: 20px;
                background: #e30214;
                border-radius: 8px;
              }

              .name {
                font-weight: 500;
                margin: 0 20px;
              }

              .gw {
                font-weight: 300;
              }
            }

            .txt {
              margin-top: 32px;
              font-size: 20px;
              line-height: 26px;
              width: auto;
              white-space: wrap;
            }
          }
        }
      }
    }
  }

  .getmore {
    width: 100%;
    text-align: center;


    div {
      display: inline-block;
      width: 160px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      border: 1px solid rgba(176, 167, 167, 1);
      border-radius: 8px;
      cursor: pointer;
    }
  }
}

@media (max-width: 576px) {
  .customer-container {
    color: #231c1e;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding-left: 16px;
    padding-right: 16px;

    .container-name {
      text-align: center;
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .scroll {
      height: 100%;
      width: auto;
      overflow: hidden;
      padding-bottom: 16px;

      .scroll-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        height: 100%;

        img {
          height: 64px;
          width: 64px;
          margin: 4px;
        }
      }
    }

    .content {
      width: 358px;
      margin: 0 auto;

      .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        margin: 12px 0;
      }

      .my-conf1 {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: 24px;

        .card-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: auto;
          height: 173px;
          margin-bottom: 8px;
          cursor: pointer;

          img {
            width: 173px;
          }
        }
      }

      .my-conf2 {
        padding-bottom: 24px;

        .search {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          :deep(.el-select__wrapper) {
            width: 358px !important;
            margin-bottom: 8px;
            height: 28px;
            border-radius: 8px;
          }
        }

        .list-container {
          padding-top: 0px;

          .card {
            position: relative;
            display: block;
            width: auto;
            height: auto;
            margin: 14px auto;
            border-radius: 8px;
            border: 1px solid #b0a7a7;

            .item-img {
              height: 48px;
              width: auto;
            }

            .item-info {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: auto;
              margin: 0 10px;
              flex-wrap: nowrap;

              .head {
                position: absolute;
                top: 10px;
                left: 70px;
                display: block;
                font-size: 14px;
                line-height: 18px;
                align-items: center;

                &::before {
                  content: "";
                  display: inline-block;
                  width: 2px;
                  height: 12px;
                  margin-right: 4px;
                  background-color: #e30214;
                }

                .line {
                  display: none;
                  width: 3px;
                  height: 12px;
                  background: #e30214;
                  border-radius: 8px;
                }

                .name {
                  font-weight: 500;
                  margin: 0;
                }

                .gw {
                  display: block;
                  font-size: 12px;
                  font-weight: 300;
                }
              }

              .txt {
                margin-top: 4px;
                padding-bottom: 12px;
                font-size: 12px;
                line-height: 20px;
                width: auto;
                height: 100%;
                text-wrap: wrap;
                word-wrap: break-word;
                white-space: pre-wrap;
                word-wrap: break-word;
                white-space: pre-wrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>
