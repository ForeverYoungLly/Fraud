<script setup>
import { ref } from "vue";
import { UploadFilled } from '@element-plus/icons-vue'

import { useRouter } from "nuxt/app";

const router = useRouter()

const progress = ref();

defineOptions({ name: "Upload" });

const uploadSuccess = (res, file, files) => {
  // 处理组件加载中
  console.log(res);
  // 跳转到/report?id=fileId.value

  router.push({
    path: '/report',
    query: res
  })

};

const uploadProgress = (event, file, files) => {
  progress.value = event;
}
</script>

<template>
  <div>
    <div v-if="progress" class="py-8 flex flex-col gap-2">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="(progress.percent * 0.9).toFixed(2)" />
      <span v-if="progress.percent > 90">正在反编译……</span>
    </div>
    <el-upload v-else drag :show-file-list="true" :limit="1" :on-progress="uploadProgress"
      action="http://8.138.83.46:5000/files/upload" accept=".apk" :on-success="uploadSuccess">
      <el-button :icon="UploadFilled" type="primary" size="large">上传可疑APP & 查线索</el-button>
      <div class="el-upload__tip" slot="tip">请选择 APK 文件</div>
    </el-upload>
  </div>
</template>

<style scoped>
:deep(.my-label) {
  background: var(--el-color-success-light-9) !important;
}

:deep(.my-content) {
  background: var(--el-color-danger-light-9);
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}

.content {
  padding-left: 20px;
  font-size: 17px;
  color: black;
  border-radius: 4px;
  min-height: 40px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
