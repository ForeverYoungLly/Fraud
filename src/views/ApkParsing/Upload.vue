<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false);

defineOptions({ name: "Upload" });

const changeFile = (file) => {
  ElMessage({
    message: '正在上传，请耐心等待',
    type: 'success',
  })
  loading.value = !loading.value;
  const formData = new FormData();
  formData.append("file", file.raw); // 传文件
  axios({
    method: "post",
    url: "https://fu.oboard.eu.org/files/upload", //此处为往后台发送请求的地址
    data: formData,
  }).then((res) => {
    // 处理组件加载中
    loading.value = !loading.value;
    console.log(res);

    if (res.status === 200) {
      // 跳转到/report?id=fileId.value

      router.push({
        path: '/report',
        query: {
          id: res.data.id
        }
      })
    }
  });
};
</script>

<template>
  <el-upload drag v-loading="loading" :auto-upload="false" :show-file-list="false" :file-list="fileList"
    action="https://jsonplaceholder.typicode.com/posts/" :on-change="changeFile" multiple>
    <el-button :icon="UploadFilled" type="primary" size="large">上传可疑APP & 查线索</el-button>
    <div class="el-upload__tip" slot="tip">请选择 APK 文件</div>
  </el-upload>
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
