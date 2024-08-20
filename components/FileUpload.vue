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

const doingText = ref("上传中");

onMounted(() => {
  const progressTexts = [
    "正在解析安装包",
    "正在反编译",
    "正在计算 MD5",
    "正在提取 AndroidManifest.xml",
    "正在提取 R.java",
    "正在提取 res",
    "正在解析 AndroidManifest.xml",
    "正在解析 DEX 文件",
    "正在解析 静态字符池",
    "正在分析 网络链接信息",
    "正在分析 网络请求信息",
    "正在提取 网络请求参数",
    "正在解压APK文件",
    "正在检查APK完整性",
    "正在读取APK元数据",
    "正在分析APK结构",
    "正在识别APK签名",
    "正在去除APK签名",
    "正在解析APK资源",
    "正在提取APK资源文件",
    "正在分析资源文件格式",
    "正在提取资源文件内容",
    "正在分析资源引用",
    "正在提取资源ID",
    "正在提取资源名称",
    "正在分析XML文件结构",
    "正在解析XML文件内容",
    "正在提取XML文件元素",
    "正在提取XML文件属性",
    "正在分析XML文件命名空间",
    "正在提取XML文件注释",
    "正在分析Java字节码",
    "正在提取Java类定义",
    "正在提取Java方法定义",
    "正在提取Java字段定义",
    "正在分析Java代码逻辑",
    "正在提取Java代码块",
    "正在分析Java异常处理",
    "正在提取Java注解",
    "正在分析Java访问修饰符",
    "正在提取Java继承关系",
    "正在分析Java接口实现",
    "正在提取Java泛型信息",
    "正在分析Java集合框架使用",
    "正在提取Java线程同步机制",
    "正在分析Java反射使用",
    "正在提取Java网络编程代码",
    "正在分析Java数据库访问代码",
    "正在提取Java文件操作代码",
    "正在分析Java多线程代码",
    "正在提取Java事件处理代码",
    "正在分析Java序列化代码",
    "正在提取Java本地方法",
    "正在分析Java安全性",
    "正在提取Java性能优化代码",
    "正在分析Java设计模式",
    "正在提取Java测试代码",
    "正在分析Java日志记录",
    "正在提取Java配置信息",
    "正在分析Java国际化支持",
    "正在提取Java依赖库",
    "正在分析Java第三方服务集成",
    "正在反编译",
    "正在模拟运行 抓取截图",
  ];
  setInterval(() => {
    doingText.value = progressTexts[Math.floor(Math.random() * progressTexts.length)];
    progress.value = { ...progress.value, percent: progress.value.percent + 0.1 }
    if (progress.value.percent >= 99.9 / 0.9) {
      progress.value = { ...progress.value, percent: 99.9 / 0.9 }
    }

  }, 1000);
});
</script>

<template>
  <div>
    <div v-if="progress" class="py-8 flex flex-col gap-2">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="(progress.percent * 0.9).toFixed(2)" />
      <span v-if="progress.percent > 90">{{ doingText }}……</span>
    </div>
    <el-upload drag :show-file-list="true" :limit="1" :on-progress="uploadProgress"
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
