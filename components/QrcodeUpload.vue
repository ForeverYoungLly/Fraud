<script setup>
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'

import { useRouter } from "nuxt/app";
const router = useRouter();

defineOptions({ name: "QrcodeUpload" });

const fileList = ref([]);
const loading = ref(false);
const fileId = ref("");

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
    url: "http://127.0.0.1:5000/files/upload/qrcode", //此处为往后台发送请求的地址
    data: formData,
  }).then((res) => {
    // 处理组件加载中
    loading.value = !loading.value;
    console.log(res);
    fileId.value = res.data.id;

    if (res.status === 200) {

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
    <i class="el-icon-upload"></i>
    <div class="el-upload__text"><em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传图片</div>
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
