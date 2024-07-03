<template>
  <div class="comment-wrapper">
    <div class="title">欢迎留下您的宝贵意见</div>
    <el-form
      ref="ruleFormRef"
      style="max-width: 700px; margin: 0 auto"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      size="large"
      status-icon
    >
      <el-form-item prop="idea">
        <el-input
          v-model="ruleForm.idea"
          placeholder="可以描述一下您所在企业发展中遇到的痛点，并评价一下C-Suite提供的服务"
          type="textarea"
          :rows="5"
        />
      </el-form-item>
      <li class="my-2">麻烦提供一下您的信息</li>
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="姓名" />
      </el-form-item>
      <el-form-item prop="company">
        <el-input v-model="ruleForm.company" placeholder="企业" />
      </el-form-item>
      <el-form-item prop="position">
        <el-input v-model="ruleForm.position" placeholder="岗位" />
      </el-form-item>
      <el-form-item prop="business">
        <el-select
          v-model="ruleForm.business"
          placeholder="行业"
          style="width: 700px"
        >
          <el-option
            v-for="(item, index) in industryOptions"
            :key="index"
            :label="item"
            :value="index + 1"
          />
        </el-select>
      </el-form-item>
      <li>您可以选择一个显示的头像</li>
      <el-form-item prop="headPortrait">
        <div class="avatar-list flex justify-around">
          <img
            class="cursor-pointer"
            :class="
              ruleForm.headPortrait === idx + 1 ? 'avatar-active' : 'avatar'
            "
            v-for="(item, idx) in avatarOptions"
            :key="idx"
            :src="item"
            alt=""
            @click="ruleForm.headPortrait = idx + 1"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <div class="mx-auto">
          <el-button class="commit" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { sys } from "@/api/index";
import type { FormInstance, FormRules } from "element-plus";
import { ElLoading, ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  idea: "",
  company: "",
  position: "",
  business: "",
  headPortrait: "",
});
const industryOptions = [
  "制造工程",
  "医疗设备器材",
  "高科技与电子",
  "专业服务",
  "化工与制药",
  "耐用消费品",
  "其他",
];
const avatarOptions = [
  "/customer/comment/avatar1.png",
  "/customer/comment/avatar2.png",
  "/customer/comment/avatar3.png",
  "/customer/comment/avatar4.png",
];
const rules = reactive<FormRules>({
  idea: [
    {
      required: true,
      message: "Please input Activity comment",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
  ],
  company: [
    {
      required: true,
      message: "Please input Activity company",
      trigger: "blur",
    },
  ],
  position: [
    {
      required: true,
      message: "Please input Activity position",
      trigger: "blur",
    },
  ],
  business: [
    {
      required: true,
      message: "Please select a business",
      trigger: "change",
    },
  ],
  headPortrait: [
    {
      required: true,
      message: "Please select a avatar",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const loadingInstance = ElLoading.service({
        fullscreen: true,
        text: "loading...",
      });
      sys.addEvaluation(ruleForm).subscribe((res) => {
        formEl.resetFields();
        ElMessage({
          message: "感谢您提供的宝贵意见，我们将继续努力",
          type: "success",
          offset: 180,
        });
        setTimeout(() => {
          loadingInstance.close();
        }, 2500);
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};

onMounted(() => {});
</script>
<style lang='scss' scoped>
.comment-wrapper {
  padding: 0 64px;
  padding-top: 104px;
  text-align: center;
  margin: 0 auto;
  .title {
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 12px;
  }
  .avatar-list {
    width: 100%;
    .avatar {
      margin-top: 20px;
      margin-bottom: 10px;
      filter: grayscale(100%);
      transition: all 0.5s ease-in-out;
      &:hover {
        filter: grayscale(0.4);
      }
    }
    .avatar-active {
      margin-top: 20px;
      margin-bottom: 10px;
      transform: scale(1.1);
      filter: grayscale(0);
      transition: all 0.5s ease-in-out;
    }
  }
  :deep(.el-button) {
    font-size: 14px;
    color: #fff;
    line-height: 20px;
    padding: 12px 36px;
    border-radius: 99px;
    border-radius: 4px;
    background: radial-gradient(
      795.13% 210.19% at 50% -1.74%,
      #e30214 0%,
      rgba(250, 129, 41, 0.39) 100%
    );
  }
}
@media (max-width: 576px) {
  .comment-wrapper {
    position: relative;
    width: 358px;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    padding-top: 110px;
    .title {
      font-size: 18px;
      font-weight: 500;
      line-height: 32px;
      margin-bottom: 12px;
    }
    .avatar-list {
      width: 358px;
      .avatar {
        width: 64px;
        margin-top: 20px;
        filter: grayscale(100%);
        transition: all 0.5s ease-in-out;
        &:hover {
          filter: grayscale(0);
        }
      }
      .avatar-active {
        width: 64px;
        margin-top: 20px;
        transform: scale(1.1);
        filter: grayscale(0);
        transition: all 0.5s ease-in-out;
      }
    }

    :deep(.el-button) {
      font-size: 14px;
      color: #fff;
      line-height: 20px;
      padding: 12px 36px;
      border-radius: 99px;
      border-radius: 4px;
      background: radial-gradient(
        795.13% 210.19% at 50% -1.74%,
        #e30214 0%,
        rgba(250, 129, 41, 0.39) 100%
      );
    }
  }
}
</style>