<template>
  <div class="qa-container1">
    <div class="head wow animate__fadeInUp flex justify-between">
      <div class="icon_wrap" ref="backIconRef" @click="goBack">
        <el-icon class="icon-back cursor-pointer">
          <ArrowLeftBold />
        </el-icon>
        <span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
      </div>
      <li class="flex-initial w-full text-center wow animate__fadeInUp"> {{ t("page_customer.conf2.title") }}</li>
    </div>
    <div class="content">
      <Evaluation />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";
import Evaluation from './components/evaluation.vue'
const { t } = useI18n()
const router = useRouter();

const articleList = [
  {
    title: "Csuite分享 | 创业: 走出舒适圈的征程",
  },
  {
    title: "再给我五年，我要成为这个行业的专家",
  },
  {
    title: "中国这40年之我见-沈达理(Shane Tedjarati)",
  },
  {
    title: "学做一个会沟通的人",
  },
  {
    title: "格局打开，交一个猎头朋友",
  },
  {
    title: "金三银四真的是金三银四么？",
  },
];
const toArticle = (index: number) => {
  router
    .push({
      path: `/joinUs/pg` + (+index + 1),
    })
    .then(() => {
      window.scrollTo(0, 0);
    });
};
const goBack = () => {
  router.go(-1)
}
</script>
<style lang='scss' scoped>
.qa-container1 {
  width: 1312px;
  margin: 0 auto;
  min-height: calc(100% - 294px);

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

  .content {
    color: #4C4143;
    width: auto;
    text-wrap: wrap;
    word-wrap: break-word;
    white-space: pre-wrap;
    padding-top: 80px;

    .conf5 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .card {
        cursor: pointer;
        width: 426px;
        padding: 32px;
        margin-bottom: 16px;
        border-radius: 12px;
        border: #b0a7a7 solid 1px;

        &:hover {
          color: #fff;
          box-shadow: 0 0 0 1px #e30214 inset;
          background: linear-gradient(180deg, #e30214 0%, #f16b57 100%);

          .article-title::before {
            content: "";
            display: inline-block;
            width: 3px;
            height: 20px;
            border-radius: 8px;
            margin-right: 16px;
            background-color: #fff;
          }
        }

        .article-title {
          font-size: 28px;
          line-height: 36px;
          font-weight: 500;
          margin-bottom: 8px;

          &::before {
            content: "";
            display: inline-block;
            width: 3px;
            height: 20px;
            border-radius: 8px;
            margin-right: 16px;
            background-color: #e30214;
          }
        }

        .article-txt {
          font-size: 16px;
          line-height: 21px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .qa-container1 {
    position: relative;
    width: 358px;
    margin: 0 auto;
    min-height: calc(100% - 294px);

    .head {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 40px;
      font-weight: 500;

      .icon_wrap {
        flex: 0 0 auto;
        height: 40px;
        width: 40px;
        cursor: pointer;
        background: #fff;
        text-align: center;
        border-radius: 100%;

        &:hover {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

          span {
            margin-right: 2px;
            opacity: 1;
            display: inline;
          }
        }

        span {
          opacity: 0;
          display: none;
          position: relative;
          font-size: 12px;
          transition: all 0.5s ease-in-out;
        }

      }

      .icon-back {
        display: inline-block;
        font-size: 20px;
        vertical-align: sub;
      }
    }

    .content {
      color: #4C4143;
      width: auto;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding-top: 80px;

      .conf5 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
          cursor: pointer;
          width: 358px;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 12px;
          border: #b0a7a7 solid 1px;

          &:hover {
            color: #fff;
            box-shadow: 0 0 0 1px #e30214 inset;
            background: linear-gradient(180deg, #e30214 0%, #f16b57 100%);

            .article-title::before {
              content: "";
              display: inline-block;
              width: 3px;
              height: 12px;
              border-radius: 8px;
              margin-right: 8px;
              background-color: #fff;
            }
          }

          .article-title {
            font-size: 14px;
            line-height: 16px;
            font-weight: 500;
            margin-bottom: 4px;

            &::before {
              content: "";
              display: inline-block;
              width: 3px;
              height: 12px;
              border-radius: 8px;
              margin-right: 8px;
              background-color: #e30214;
            }
          }

          .article-txt {
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
  }
}
</style>
