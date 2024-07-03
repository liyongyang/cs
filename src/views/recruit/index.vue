<template>
  <div class="recruit-container">
    <div class="banner">
      <div v-if="isSmallSize" class="animate__animated animate__fadeInUp">
        <li class="name">{{ t("common.routes.menu3") }}</li>
        <img src="/recruit/banner-s-1.png" alt="" class="" />
        <div class="info animate__animated animate__fadeInUp">
          <li class="title">{{ t("page_recruit.banner.title") }}</li>
          <li class="msg text-wrap">{{ t("page_recruit.banner.msg") }}</li>
        </div>
      </div>
      <div v-else class="img">
        <img w-full src="/recruit/banner.png" alt="" class="" />
        <div class="info animate__animated animate__fadeInUp">
          <li class="title">{{ t("page_recruit.banner.title") }}</li>
          <li class="msg text-wrap">{{ t("page_recruit.banner.msg") }}</li>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="search-content wow animate__fadeInUp">
        <li class="title">职位筛选</li>
        <el-input class="search-key" v-model="filterV.key" placeholder="输入职位关键字">
          <template #append>搜索职位</template>
        </el-input>
        <div class="search-group">
          <el-select v-model="filterV.type" @change="search()" clearable placeholder="全部行业" style="max-width: 405px">
            <el-option v-for="item in jdOpts" :key="item" :label="item" :value="item" />
          </el-select>
        </div>
      </div>
      <div class="result-content wow animate__fadeInUp" v-if="jdConf">
        <div class="head">
          <li class="title">在招职位</li>
          <li class="line"></li>
          <li class="total">共 {{ jdConf.length }} 个岗位</li>
        </div>
        <div class="list">
          <div class="item-conf" v-for="(item, index) in jdConf" :key="item.name" @click="handlActive(index)">
            <div class="item-conf-head">
              <div class="title">
                <li class="line"></li>
                <li class="name">{{ item.name }}</li>
              </div>
              <li>
                <span class="tag">{{ item.tag }}</span>
                <span class="type">{{ item.type }}</span>
              </li>
              <li class="com">{{ item.com }}</li>
              <li class="flex justify-between">
                <span class="address">{{ item.address }}</span>
                <span v-if="!item.active || isSmallSize">发布时间：{{ item.time }}</span>
              </li>
            </div>
            <!-- v-if="item.active" -->
            <div class="item-conf-jd">
              <li class="tips">岗位职责</li>
              <li class="desc" v-for="(t, index) in item.conf.jd1" :key="index">
                {{ t }}
              </li>
              <li class="tips">岗位要求</li>
              <li class="desc" v-for="(t, index) in item.conf.jd2" :key="index">
                {{ t }}
              </li>
              <span v-if="!isSmallSize" class="jd-create">发布时间：{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref } from "vue";

import { useI18n } from "vue-i18n";
import { jdList } from "./jdList";
const { t } = useI18n();
const isSmallSize = ref(window.innerWidth < 576);
const filterV = reactive({
  key: "",
  address: "",
  type: "",
  nature: "",
});
const jdConf = ref();
const jdOpts = [
  '经营管理类',
  '人力资源类',
  '市场营销类',
  '销售类',
  '财务类',
  '行政类',
  '贸易类',
  '业务类',
  '公关类',
  '文职类',
  '客户服务类',
  '工厂类',
  '互联网类',
  '电子通讯类',
  '机械类',
  '建筑类',
  '房地产类',
  '金融经济类',
  '设计类',
  '法律类',
  '物流交通运输类',
  '酒店餐饮类',
  '商场类',
  '电气电力类',
  '咨询顾问类',
  '化工类',
  '生物类',
  '文娱类',
  '医疗类',
  '新闻传媒类',
  '公众服务类',
  '印刷染织类',
  '技工类',
  '其他',
]

const search = () => {
  if (filterV.type) {
    jdConf.value = jdList.filter((l: any) => l.type === filterV.type)
  } else {
    jdConf.value = jdList
  }
}

onMounted(() => {
  jdConf.value = jdList;
  jdConf.value.forEach((t: any) => {
    t.active = false;
  });
});
const handlActive = (i: number) => {
  jdConf.value.forEach((t: any, index: number) => {
    if (i === index) {
      jdConf.value[index].active = true;
    } else {
      jdConf.value[index].active = false;
    }
  });
};
</script>

<style lang='scss' scoped>
.recruit-container {
  .banner {
    padding-bottom: 64px;

    .name {
      text-align: center;
      font-size: 24px;
      line-height: 64px;
      font-weight: 500;
    }

    .img {
      height: 100%;
    }

    .info {
      color: #fff;
      position: absolute;
      top: 38%;
      left: 50px;

      .title {
        font-size: 48px;
        font-weight: 500;
        line-height: 64px;
        word-wrap: break-word;
        white-space: pre-wrap;
      }

      .msg {
        width: 400px;
        margin-top: 16px;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  .content {
    width: 1312px;
    height: 100%;
    margin: 0 auto;

    .search-content {
      width: auto;
      padding: 24px 32px;
      border-radius: 12px;
      border: 1px solid #b0a7a7;

      .title {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 12px;
      }

      .search-key {
        height: 48px;
        cursor: pointer;

        :deep(.el-input-group__append) {
          color: #fff;
          width: 96px;
        }
      }

      .el-input__wrapper {
        height: 48px;
        border-radius: 12px;
        background-color: #fff;
        border: 1px solid #cdc6c6;
      }

      .search-group {
        display: flex;
        justify-content: space-between;
        margin: 12px 0;

        :deep(.el-select__wrapper) {
          width: 405px;
          height: 48px;
          border-radius: 12px;

          &:hover {
            box-shadow: 0 0 0 1px #e30214 inset;
          }

          .is-focused {
            box-shadow: 0 0 0 1px #e30214 inset;
          }
        }

        :deep(.el-select-dropdown__item) {
          &:hover {
            background-color: #fff;
            color: #e30214;
          }
        }
      }
    }

    .result-content {
      width: auto;
      padding: 24px 12px;
      border-radius: 12px;
      border: 1px solid #b0a7a7;
      margin-top: 24px;

      .head {
        height: 50px;
        padding-left: 32px;
        display: flex;
        align-items: center;
        border-bottom: #cdc6c6 solid 1px;

        .title {
          font-size: 20px;
          font-weight: 500;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: left;
        }

        .line {
          height: 12px;
          margin: 0 12px;
          border: 1px solid #cdc6c6;
        }

        .total {
          color: #fff;
          font-size: 12px;
          line-height: 16px;
          padding: 2px 8px;
          border-radius: 4px;
          background: radial-gradient(795.13% 210.19% at 50% -1.74%,
              #e30214 0%,
              rgba(250, 129, 41, 0.39) 100%);
        }
      }

      .list {
        .item-conf {
          cursor: pointer;
          font-size: 14px;
          line-height: 24px;
          color: #868686;
          padding: 24px;
          transition: all 0.5s;

          &:hover {
            border-radius: 8px;
            background: #f2f0f0;

            .item-conf-jd {
              max-height: 600px;
            }
          }

          .item-conf-head {
            width: auto;
            padding-bottom: 12px;

            .title {
              display: flex;
              align-items: center;
              margin-bottom: 8px;

              .line {
                width: 3px;
                height: 14px;
                border-radius: 8px;
                margin-right: 8px;
                background-color: #e30214;
              }

              .name {
                color: #373737;
                font-size: 16px;
                line-height: 21px;
                font-weight: 500;
              }
            }

            .tag {
              margin-right: 64px;
            }

            .com {
              margin-bottom: 8px;
            }

            .address {
              color: #373737;
            }
          }

          .item-conf-jd {
            position: relative;
            line-height: 18px;
            max-height: 0;
            overflow: hidden;
            transition: all 1s ease-in-out;

            .tips {
              margin-bottom: 4px;
            }

            .jd-create {
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .recruit-container {
    .banner {
      width: 358px;
      margin: 0 auto;
      padding-bottom: 32px;

      .name {
        text-align: center;
        font-size: 24px;
        line-height: 64px;
        font-weight: 500;
      }

      .img {
        height: 100%;
      }

      .info {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 20px;

        .title {
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
        }

        .msg {
          width: 240px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }

    .content {
      width: 358px;
      height: 100%;
      margin: 0 auto;

      .search-content {
        width: auto;
        padding: 0;
        border-radius: 12px;
        border: none;

        .title {
          display: none;
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          margin-bottom: 8px;
        }

        .search-key {
          height: 48px;

          :deep(.el-input-group__append) {
            color: #fff;
            width: 96px;
          }
        }

        .el-input__wrapper {
          height: 48px;
          border-radius: 12px;
          background-color: #fff;
          border: 1px solid #cdc6c6;
        }

        .search-group {
          display: flex;
          justify-content: space-between;
          margin: 12px 0;

          :deep(.el-select__wrapper) {
            width: 114px;
            height: 48px;
            border-radius: 12px;

            &:hover {
              box-shadow: 0 0 0 1px #e30214 inset;
            }

            .is-focused {
              box-shadow: 0 0 0 1px #e30214 inset;
            }
          }

          :deep(.el-select-dropdown__item) {
            &:hover {
              background-color: #fff;
              color: #e30214;
            }
          }
        }
      }

      .result-content {
        width: auto;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid #b0a7a7;
        margin-top: 12px;

        .head {
          height: 40px;
          padding-left: 0;
          display: flex;
          align-items: center;
          border-bottom: #cdc6c6 solid 1px;

          .title {
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
          }

          .line {
            height: 12px;
            margin: 0 12px;
            border: 1px solid #cdc6c6;
          }

          .total {
            color: #fff;
            font-size: 12px;
            line-height: 16px;
            padding: 2px 8px;
            border-radius: 4px;
            background: radial-gradient(795.13% 210.19% at 50% -1.74%,
                #e30214 0%,
                rgba(250, 129, 41, 0.39) 100%);
          }
        }

        .list {
          .item-conf {
            cursor: pointer;
            font-size: 12px;
            line-height: 16px;
            color: #868686;
            padding: 12px;

            &:hover {
              border-radius: 8px;
              background: #f2f0f0;
            }

            .item-conf-head {
              width: auto;
              padding-bottom: 0;
              line-height: 18px;

              .title {
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                .line {
                  width: 3px;
                  height: 14px;
                  border-radius: 8px;
                  margin-right: 8px;
                  background-color: #e30214;
                }

                .name {
                  color: #373737;
                  font-size: 14px;
                  line-height: 18px;
                  font-weight: 500;
                }
              }

              .tag {
                margin-right: 64px;
              }

              .com {
                margin-bottom: 8px;
              }

              .address {
                color: #373737;
              }
            }

            .item-conf-jd {
              position: relative;
              width: auto;
              line-height: 18px;

              .tips {
                margin: 4px;
                margin-top: 8px;
              }

              .desc {
                line-height: 18px;
                text-wrap: wrap;
                word-wrap: break-word;
                white-space: pre-wrap;
              }

              .jd-create {
                position: absolute;
                right: 0;
                bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
