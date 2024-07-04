<template>
  <div class="evaluation">
    <div class="my-conf2 wow animate__fadeInUp">
      <div class="search" v-if="actOpt">
        <el-select clearable v-model="filterV.type1" placeholder="select" @change="getEvaluationList">
          <el-option v-for="(item, index) in actOpt" :key="index" :label="item" :value="index + 1" />
        </el-select>
      </div>
      <!-- <div v-if="!commentList2" class="list-container">
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
      </div> -->
      <div v-if="!commentList" class="list-container">
        <el-empty description="no Data" />
      </div>

      <div v-else class="list-container">
        <div class="card" v-for="(item, index) in commentList" :key="index">
          <div class="img_wrap">
            <img class="item-img" :src="`/customer/comment/${item.imageName}`" alt="">
          </div>
          <div class="item-info">
            <div class="head">
              <span class="line"></span>
              <span class="name">{{ item.name }}</span>
              <span class="gw">{{ item.tit }}</span>
            </div>
            <li class="txt">{{ item.msg }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang='ts'>
import { sys } from "@/api/index";
import { onBeforeMount, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const { t, locale } = useI18n();
const router = useRouter();
const commentList2 = ref();
const commentList = [
  {
    name: t('page_customer.conf2.detail[0].name'),
    tit: t('page_customer.conf2.detail[0].tit'),
    msg: t('page_customer.conf2.detail[0].msg'),
    imageName: 'logo1.png',
  },
  {
    name: t('page_customer.conf2.detail[1].name'),
    tit: t('page_customer.conf2.detail[1].tit'),
    msg: t('page_customer.conf2.detail[1].msg'),
    imageName: 'logo2.png',
  },
  {
    name: t('page_customer.conf2.detail[2].name'),
    tit: t('page_customer.conf2.detail[2].tit'),
    msg: t('page_customer.conf2.detail[2].msg'),
    imageName: 'logo3.png',
  },
  {
    name: t('page_customer.conf2.detail[3].name'),
    tit: t('page_customer.conf2.detail[3].tit'),
    msg: t('page_customer.conf2.detail[3].msg'),
    imageName: 'logo2.png',
  },
  {
    name: t('page_customer.conf2.detail[4].name'),
    tit: t('page_customer.conf2.detail[4].tit'),
    msg: t('page_customer.conf2.detail[4].msg'),
    imageName: 'logo4.png',
  },
  {
    name: t('page_customer.conf2.detail[5].name'),
    tit: t('page_customer.conf2.detail[5].tit'),
    msg: t('page_customer.conf2.detail[5].msg'),
    imageName: 'logo2.png',
  },
  {
    name: t('page_customer.conf2.detail[6].name'),
    tit: t('page_customer.conf2.detail[6].tit'),
    msg: t('page_customer.conf2.detail[6].msg'),
    imageName: 'logo1.png',
  },
]

const actOpt = ref()
const industryOptions_CN = [
  "制造工程",
  "医疗设备器材",
  "高科技与电子",
  "专业服务",
  "化工与制药",
  "耐用消费品",
  "其他",
];
const industryOptions_EN = [
  "Manufacturing engineering",
  "Medical equipment",
  "High Tech & Electronics",
  "Professional Services",
  "Chemical & Pharmaceutical",
  "Consumer durables",
  "Other",
];
const filterV = reactive({
  type1: "",
  type2: "",
});
onBeforeMount(() => {
  actOpt.value = locale.value === 'zh' ? industryOptions_CN : industryOptions_EN
  getEvaluationList();
});

const getEvaluationList = () => {
  const params = {
    business: filterV.type1,
    current: 1,
    size: 10,
  };
  sys.getEvaluationList(params).subscribe((res) => {
    commentList2.value = res.data.list;
    console.log(`output->commentList.value`, commentList2.value);
    // commentList2.value = [{
    //   business: "7",
    //   company: "博凯机械",
    //   headPortrait: "1",
    //   idea: "婷婷和她的团队热情、活力和认真负责，使他们在为我们的业务需求和文化量身定制服务方面有别于其他招聘机构。CSuite团队不仅专业，并且总是以比预期的更好的结果为目标。",
    //   name: "Chris Daly",
    //   position: "首席执行官&董事会成员",
    // }, {
    //   business: "7",
    //   company: "博凯机械",
    //   headPortrait: "1",
    //   idea: "婷婷和她的团队热情、活力和认真负责，使他们在为我们的业务需求和文化量身定制服务方面有别于其他招聘机构。CSuite团队不仅专业，并且总是以比预期的更好的结果为目标。",
    //   name: "Chris Daly",
    //   position: "首席执行官&董事会成员",
    // }]
  });
};
</script>

<style lang='scss' scoped>
.evaluation {
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

        .img_wrap {
          background: #f9f9f9;
          display: flex;
          justify-content: center;
          flex-direction: column;
          border-radius: 12px;
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
            overflow: hidden;
            text-overflow: ellipsis;
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


@media (max-width: 576px) {
  .evaluation {
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
            width: 72px;
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
</style>
