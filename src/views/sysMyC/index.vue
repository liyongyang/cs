<template>
  <div class="customer-container">
    <li v-if="isSmallSize" class="container-name">
      {{ t("common.routes.menu3") }}
    </li>
    <div class="content">
      <li class="title text-center wow animate__fadeInUp">
        {{ t("page_customer.conf2.title") }}
      </li>
      <div class="my-conf2 wow animate__fadeInUp">
        <div class="search">
          <el-select
            clearable
            v-model="filterV.type1"
            placeholder="行业选择"
            @change="getEvaluationList"
          >
            <el-option
              v-for="(item, index) in industryOptions"
              :key="index"
              :label="item"
              :value="index + 1"
            />
          </el-select>
        </div>
        <div v-if="!commentList2" class="list-container">
          <el-empty description="no Data" />
        </div>

        <div v-else class="list-container">
          <div class="card" v-for="(item, index) in commentList2" :key="index">
            <img
              class="item-img"
              :src="`/customer/comment/logo${item.headPortrait}` + '.png'"
              alt=""
            />
            <div class="item-info">
              <div class="head">
                <span class="line"></span>
                <span class="name">{{ item.name }}</span>
                <span class="gw">{{ item.company }}{{ item.position }}</span>
              </div>
              <li class="txt">{{ item.idea }}</li>
              <li class="text-right">
                <span
                  class="text-4 text-red-500 cursor-pointer hover:font-600"
                  @click="deleteEvaluation(item.id)"
                >
                  删除
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { sys } from "@/api/index";
import { ElMessage, ElMessageBox } from "element-plus";
import { onBeforeMount, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

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
const isSmallSize = ref(window.innerWidth < 576);
const egList = ref([]);
const filterV = reactive({
  type1: "",
  type2: "",
});

onBeforeMount(() => {
  getEvaluationList();
});

const deleteEvaluation = (key: number) => {
  ElMessageBox.confirm("确认删除该条评论吗，删除后不可恢复?", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
  })
    .then(() => {
      const id = [key];
      sys.deleteEvaluation(id).subscribe((res) => {
        ElMessage({
          type: "success",
          message: "删除成功",
          plain: true,
          offset: 240,
        });
        getEvaluationList();
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
        offset: 240,
      });
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

  .content {
    width: 1312px;
    margin: 0 auto;

    .title {
      font-size: 48px;
      font-weight: 500;
      line-height: 64px;
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
