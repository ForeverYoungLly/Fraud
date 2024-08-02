<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'

defineOptions({ name: "QrcodeUpload" });

const fileList = ref([]);
const loading = ref(false);
const fileId = ref("");
const dialogTableVisible = ref(false);

const AIResponse = ref('')
const md5 = ref("");
const application_name = ref("");
const qid = ref("");
const package_name = ref("");
const version_code = ref("");
const version_name = ref("");
const target_sdk_version = ref("");
const SHA1 = ref("");
const permissions = ref([]);
const activities = ref([]);
let StaticAnalysis = reactive({});
let ThreatAnalysis = reactive({});

const changeFile = (file) => {
    ElMessage({
    message: '上传成功，正全力解析，请耐心等待',
    type: 'success',
  })
  loading.value = !loading.value;
  let formData = new FormData();
  formData.append("file", file.raw); // 传文件
  axios({
    method: "post",
    url: `https://fu.oboard.eu.org/files/upload/qrcode`, //此处为往后台发送请求的地址
    data: formData,
  }).then((res) => {
    // 处理组件加载中
    loading.value = !loading.value;
    console.log(res);
    fileId.value = res.data.id;

    if (res.status === 200) {
      axios
        .get(`https://fu.oboard.eu.org/reports/get?id=${fileId.value}`)
        .then((response) => {
          dialogTableVisible.value = !dialogTableVisible.value;

          AIResponse.value = response.data.ai_response
          md5.value = response.data.md5;
          target_sdk_version.value = response.data.target_sdk_version;
          application_name.value = response.data.application_name;
          qid.value = response.data.qid;
          package_name.value = response.data.package_name;
          version_code.value = response.data.version_code;
          version_name.value = response.data.version_name;
          SHA1.value = response.data.SHA1;
          permissions.value = response.data.permissions;
          activities.value = response.data.activities;
          StaticAnalysis = response.data.static_analysis;
          ThreatAnalysis = response.data.threat_analysis;
          StaticAnalysis.value = Reflect.get(StaticAnalysis, "data");
          ThreatAnalysis.value = Reflect.get(ThreatAnalysis, "data");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });
};
</script>

<template>
  <el-container>
    <el-main>
      <el-upload
        drag
        v-loading="loading"
        :auto-upload="false"
        :show-file-list="false"
        :file-list="fileList"
        action="https://jsonplaceholder.typicode.com/posts/"
        :before-upload="beforeUpload"
        :on-change="changeFile"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text"><em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传图片</div>
      </el-upload>

      <!-- 检测报告弹出框 -->
      <el-dialog v-model="dialogTableVisible" title="分析结果为：高危" width="1000">
        <el-descriptions title="AI检测结果" :column="1" border>
          <el-descriptions-item
            label="AI检测结果"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="30px"
          >
            <pre style="text-align: left; white-space: pre-wrap;">{{ AIResponse }}</pre>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="该Apk分析得出" :column="2" border>
          <el-descriptions-item
            label="apkid"
            label-align="center"
            align="center"
            width="100px"
          >
            {{ qid }}
          </el-descriptions-item>
          <el-descriptions-item
            label="应用名称"
            label-align="center"
            align="center"
            width="100px"
            class-name="my-content"
          >
            {{ application_name }}
          </el-descriptions-item>
          <el-descriptions-item
            label="安装包名"
            label-align="center"
            align="center"
            width="100px"
          >
            {{ package_name }}
          </el-descriptions-item>
          <el-descriptions-item label="md5" label-align="center" align="center">
            {{ md5 }}
          </el-descriptions-item>
          <el-descriptions-item
            label="版本编号"
            label-align="center"
            align="center"
          >
            {{ version_code }}
          </el-descriptions-item>
          <el-descriptions-item
            label="版本名称"
            label-align="center"
            align="center"
          >
            {{ version_name }}
          </el-descriptions-item>
          <el-descriptions-item
            label="目标SDK版本号"
            label-align="center"
            align="center"
          >
            {{ target_sdk_version }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions :column="1" border>
          <el-descriptions-item
            label="SHA1指纹"
            label-align="center"
            align="center"
            width="100px"
          >
            {{ SHA1 }}
          </el-descriptions-item>
          <el-descriptions-item
            label="活动列表"
            label-align="center"
            align="center"
            width="100px"
          >
            <el-text class="mx-1" v-for="activity in activities" :key="activity"
              ><p>{{ activity }}</p></el-text
            >
          </el-descriptions-item>
          <el-descriptions-item
            label="权限列表"
            label-align="center"
            align="center"
            width="100px"
          >
            <el-text
              class="mx-1"
              v-for="permission in permissions"
              :key="permission"
              ><p>{{ permission }}</p></el-text
            >
          </el-descriptions-item>
        </el-descriptions>

        <div class="demo-collapse">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1" title="静态分析">
              <el-descriptions :column="1" border>
                <el-descriptions-item
                  label="评分"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.score }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="SHA1哈希值"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.sha1 }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="SHA256哈希值"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.sha256 }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="SHA512哈希值"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.sha512 }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="大小"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.size }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="ssdeep"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.ssdeep }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="类型"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.basic_info.type }}
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions :column="1" border>
                <el-descriptions-item
                  label="域名"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.code_analysis.domains }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="所涉及到的邮箱"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.code_analysis.emails }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="IP"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.code_analysis.ips }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="URL"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.code_analysis.urls }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="主要活动"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.metadata.main_activity }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="一般权限"
                  label-align="center"
                  align="center"
                  width="100px"
                  border
                >
                  <el-text
                    class="mx-1"
                    v-for="activity in StaticAnalysis.value.permissions.general"
                    :key="activity"
                    ><p>{{ activity }}</p></el-text
                  >
                </el-descriptions-item>
                <el-descriptions-item
                  label="用户权限"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  <el-text
                    class="mx-1"
                    v-for="activity in StaticAnalysis.value.permissions.custom"
                    :key="activity"
                    ><p>{{ activity }}</p></el-text
                  >
                </el-descriptions-item>
                <el-descriptions-item
                  label="敏感权限"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  <el-text
                    class="mx-1"
                    v-for="activity in StaticAnalysis.value.permissions
                      .sensitive"
                    :key="activity"
                    ><p>{{ activity }}</p></el-text
                  >
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions :column="1" border title="签名">
                <el-descriptions-item
                  label="issuer"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.signature[0].issuer }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="序列号"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.signature[0].serial_number }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="SHA1指纹"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.signature[0].sha1_fingerprint }}
                </el-descriptions-item>
                <el-descriptions-item
                  label="SHA256指纹"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  {{ StaticAnalysis.value.signature[0].sha256_fingerprint }}
                </el-descriptions-item>
              </el-descriptions>
            </el-collapse-item>
            <el-collapse-item title="威胁分析" name="2">
              <el-text class="mx-1" size="large">行为异常分析</el-text>
              <el-table
                :data="ThreatAnalysis.value.behavior_exception_analyze"
                style="width: 100%; margin-left: 12%"
              >
                <el-table-column
                  prop="description_chinese"
                  label="名称"
                  width="300"
                />
                <el-table-column prop="name" label="Name" width="300" />
                <el-table-column prop="severity" label="严重程度" width="200" />
              </el-table>

              <el-text class="mx-1" size="large">敏感权限列表</el-text>
              <el-descriptions :column="1" border>
                <el-descriptions-item
                  label="敏感权限"
                  label-align="center"
                  align="center"
                  width="100px"
                >
                  <el-text
                    class="mx-1"
                    v-for="activity in StaticAnalysis.value.permissions
                      .sensitive"
                    :key="activity"
                    ><p>{{ activity }}</p></el-text
                  >
                </el-descriptions-item>
              </el-descriptions>

              <el-text class="mx-1" size="large">IOC分析</el-text>
              <el-table
                :data="ThreatAnalysis.value.ti.data"
                style="width: 100%; margin-left: 12%"
              >
                <el-table-column prop="ioc_type" label="类型" width="300" />
                <el-table-column prop="ioc" label="ioc" width="300" />
                <el-table-column prop="score" label="恶意评分" width="200" />
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible = false">
              确定
            </el-button>
          </div>
        </template>
      </el-dialog>
    </el-main>
  </el-container>
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
