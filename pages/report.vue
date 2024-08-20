<script setup>
import VueMarkdown from 'markdown-vue'
import { ref, onMounted, computed } from "vue";
import { useRoute } from "nuxt/app";
import { android_permissions } from "../utils/permissions";
import JsPdfImg from "html2pdf-img";
import { android_versions } from '../utils/android_versions';

const currentSection = ref('basic');

const route = useRoute();
// 获取query中的id
const id = route.query.id;

const report = ref({
  "qid": "AZEXyzXTh6wn_HCy2a_e",
  "application_name": "...",
  "package_name": "...",
  "md5": "...",
  "version_code": "...",
  "version_name": "...",
  "target_sdk_version": "32",
  "architecture": {
    "armeabi": false,
    "armeabi-v7a": false,
    "arm64-v8a": false,
    "x86": false,
    "x86_64": false
  },
  "SHA1": "...",
  "permissions": [
    "android.permission...",
  ],
  "activities": [
    "com.example.android_web.WelcomeActivity"
  ],
  "static_analysis": {
    "data": {
      "apkid_metadata": [],
      "basic_info": {
        "crc32": "8972157B",
        "detect_et": "2024-07-17 22:57:13",
        "file_tags": [
          "联网行为",
          "高危权限",
          "普通行为"
        ],
        "md5": "...",
        "name": "8ca891bccf4a86dc8a7cc16bc73e5fdc5435a5cd.apk",
        "score": 6,
        "sha1": "...",
        "sha256": "...",
        "sha512": "...",
        "size": 0,
        "ssdeep": "24576:3udhmItVSx8qYpb9OUxLGeNzlCd6GN3msQT1IREsQT1IRZ7PCgp5zfry+n4qmuW0:6hmkqa0eNu2FiREFiRZWgp5zfryDt0",
        "trid": [
          "73.9% (.APK) Android Package (52500/1/12)",
          "20.4% (.JAR) Java Archive (14500/1/2)",
          "5.6% (.ZIP) ZIP compressed archive (4000/1)"
        ],
        "type": "Zip archive data, at least v?[0] to extract"
      },
      "code_analysis": {
        "domains": [
          "...",
        ],
        "emails": [],
        "ips": [],
        "urls": [
          "..."
        ]
      },
      "components": {
        "activities": [
          "com.example.android_web.WelcomeActivity"
        ],
        "providers": [],
        "receivers": [],
        "services": []
      },
      "exiftool_metadata": [],
      "file_icon": "",
      "files": [],
      "metadata": {
        "app_name": "Secufex",
        "earliest_modification": "2024-07-17 22:53:44",
        "latest_modification": "2024-07-17 22:53:44",
        "main_activity": "com.example.android_web.WelcomeActivity",
        "max_sdk_version": "-",
        "min_sdk_version": "Android 5.0",
        "package": "com.app.secufex",
        "packer_info": "",
        "target_sdk_version": "-",
        "version_code": "1209145400",
        "version_name": "4.0.0"
      },
      "permissions": {
        "custom": [],
        "general": [
          "android.permission.INTERNET",
          "android.permission.READ_MEDIA_AUDIO",
          "android.permission.READ_MEDIA_IMAGES",
          "android.permission.READ_MEDIA_VIDEO"
        ],
        "sensitive": [
          "android.permission.CAMERA",
          "android.permission.READ_EXTERNAL_STORAGE",
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ]
      },
      "signature": [
        {
          "end_time": "2050-12-31 17:24:01",
          "issuer": "C = djkd, S = aklz, L = dklld, O = djkd, OU = sjkd, CN = jd",
          "serial_number": "1084439782",
          "sha1_fingerprint": "2DD30FC21A4AD8AADFCA3B63FADE8C36A04914D6",
          "sha256_fingerprint": "955091837317F31FE4A14D267484C37E869D3884D562CB1F7436E6C106F907B4",
          "start_time": "2023-08-15 17:24:01",
          "subject": "C = djkd, S = aklz, L = dklld, O = djkd, OU = sjkd, CN = jd"
        }
      ]
    },
    "msg": "ok",
    "status": 10000
  },
  "threat_analysis": {
    "data": {
      "behavior_exception_analyze": [
        {
          "content": [],
          "description_chinese": "应用请求危险的权限（基于静态分析）",
          "format": "",
          "name": "android_dangerous_permissions",
          "severity": 3,
          "type": ""
        },
        {
          "content": [],
          "description_chinese": "应用查询设备信息",
          "format": "",
          "name": "android_queried_device_information",
          "severity": 3,
          "type": ""
        },
        {
          "content": [],
          "description_chinese": "应用执行动态加载的代码",
          "format": "",
          "name": "android_dynamic_code",
          "severity": 3,
          "type": ""
        },
        {
          "content": [
            {
              "method": "delete",
              "type": "generic",
              "value": "None"
            }
          ],
          "description_chinese": "文件操作",
          "format": "left-right",
          "name": "android_file_operation",
          "severity": 3,
          "type": "generic"
        },
        {
          "content": [],
          "description_chinese": "请求internet操作",
          "format": "",
          "name": "android_internet",
          "severity": 3,
          "type": ""
        },
        {
          "content": [
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "com.android.org.chromium.media.AudioManagerAndroid$1@3fe9b916{'mActions': ['android.intent.action.HEADSET_PLUG'], 'mHasPartialTypes': False, 'mPriority': 0}"
            },
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "com.android.org.chromium.content.browser.TimeZoneMonitor$1@1aee2c6d{'mActions': ['android.intent.action.TIMEZONE_CHANGED'], 'mHasPartialTypes': False, 'mPriority': 0}"
            },
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "{'mDebugUnregister': False}{'mActions': ['android.intent.action.PROXY_CHANGE'], 'mHasPartialTypes': False, 'mPriority': 0}"
            },
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "{'mDebugUnregister': False}{'mActions': ['android.security.STORAGE_CHANGED'], 'mHasPartialTypes': False, 'mPriority': 0}"
            },
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "com.android.org.chromium.media.AudioManagerAndroid$1@3f514ad8{'mActions': ['android.intent.action.HEADSET_PLUG'], 'mHasPartialTypes': False, 'mPriority': 0}"
            },
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "com.android.org.chromium.content.browser.TimeZoneMonitor$1@29ecb297{'mActions': ['android.intent.action.TIMEZONE_CHANGED'], 'mHasPartialTypes': False, 'mPriority': 0}"
            },
            {
              "method": "registerReceiver",
              "type": "generic",
              "value": "android.widget.ZoomButtonsController$1@1ae43012{'mActions': ['android.intent.action.CONFIGURATION_CHANGED'], 'mHasPartialTypes': False, 'mPriority': 0}"
            }
          ],
          "description_chinese": "启动时注册广播接收者",
          "format": "left-right",
          "name": "android_registered_receiver_runtime",
          "severity": 3,
          "type": "generic"
        },
        {
          "content": [],
          "description_chinese": "触摸操作",
          "format": "",
          "name": "android_touch_action",
          "severity": 3,
          "type": ""
        },
        {
          "content": [
            {
              "method": "loadDex",
              "type": "generic",
              "value": "[\"/system/app/webview/webview.apk\"]"
            }
          ],
          "description_chinese": "加载dex文件操作",
          "format": "left-right",
          "name": "android_load_dex",
          "severity": 0,
          "type": "generic"
        },
        {
          "content": [
            {
              "method": "loadLibrary",
              "type": "generic",
              "value": "[[\"webviewchromium\", \"\"], [\"webviewchromium_plat_support\", \"\"]]"
            }
          ],
          "description_chinese": "加载so文件操作",
          "format": "left-right",
          "name": "android_load_so",
          "severity": 0,
          "type": "generic"
        },
        {
          "content": [],
          "description_chinese": "设置可见不可见展示",
          "format": "",
          "name": "android_set_view",
          "severity": 0,
          "type": ""
        },
        {
          "content": [
            {
              "method": "setVisibility",
              "type": "generic",
              "value": "['8']"
            },
            {
              "method": "setVisibility",
              "type": "generic",
              "value": "['4']"
            },
            {
              "method": "setVisibility",
              "type": "generic",
              "value": "['0']"
            }
          ],
          "description_chinese": "显示操作",
          "format": "left-right",
          "name": "android_view_operation",
          "severity": 0,
          "type": "generic"
        }
      ],
      "sensitive_permissions": {
        "CAMERA": [
          "android.permission.CAMERA"
        ],
        "STORAGE": [
          "android.permission.READ_EXTERNAL_STORAGE",
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ]
      },
      "task_id": "8ca891bccf4a86dc8a7cc16bc73e5fdc5435a5cd",
      "ti": {
        "data": [
          {
            "family": [],
            "ioc": "c374640943758dd011ccf4d808c8c243",
            "ioc_type": "md5",
            "malicious_type": "",
            "score": 6,
            "tag": [],
            "ti_ioc_tag": 1,
            "ti_type": [
              "未知"
            ]
          },
          {
            "family": [],
            "ioc": "104.21.20.175",
            "ioc_type": "ip",
            "malicious_type": "",
            "score": 1,
            "tag": [
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "CDN",
                "source": 5,
                "tag_type": "reference"
              },
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "Anycast",
                "source": 5,
                "tag_type": "reference"
              }
            ],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "172.217.163.46",
            "ioc_type": "ip",
            "malicious_type": "",
            "score": 1,
            "tag": [
              {
                "category": "malicious",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "malicious",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "HIJACKED",
                "source": 5,
                "tag_type": "malicious_activity"
              },
              {
                "category": "malicious_type",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "malicious_type",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "DDOS",
                "source": 5,
                "tag_type": "malicious_activity"
              },
              {
                "category": "malicious",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "malicious",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "SCANNER",
                "source": 5,
                "tag_type": "malicious_activity"
              },
              {
                "category": "other",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "other",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "DHT",
                "source": 5,
                "tag_type": "reference"
              },
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "IDC",
                "source": 5,
                "tag_type": "reference"
              },
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "境内数据中心",
                "source": 5,
                "tag_type": "reference"
              }
            ],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "172.67.193.68",
            "ioc_type": "ip",
            "malicious_type": "",
            "score": 1,
            "tag": [
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "Anycast",
                "source": 5,
                "tag_type": "reference"
              }
            ],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "18.239.200.224",
            "ioc_type": "ip",
            "malicious_type": "",
            "score": 1,
            "tag": [
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "已使用",
                "source": 5,
                "tag_type": "reference"
              }
            ],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "211.68.71.26",
            "ioc_type": "ip",
            "malicious_type": "",
            "score": 1,
            "tag": [
              {
                "category": "other",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "other",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "DHT",
                "source": 5,
                "tag_type": "reference"
              },
              {
                "category": "reference_info",
                "detail": {
                  "affected_area": "",
                  "affected_sector": "",
                  "alias": [],
                  "attack_method": "",
                  "category": "reference_info",
                  "description": "",
                  "first_detection": "",
                  "malicious_type": "",
                  "platform": "",
                  "refer_link": [],
                  "responsible_area": "",
                  "risk": ""
                },
                "name": "境内学校单位",
                "source": 5,
                "tag_type": "reference"
              }
            ],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "app.secufex.com",
            "ioc_type": "domain",
            "malicious_type": "",
            "score": 1,
            "tag": [],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "exchange-office-no-0001-001.oss-accelerate.aliyuncs.com",
            "ioc_type": "domain",
            "malicious_type": "",
            "score": 1,
            "tag": [],
            "ti_ioc_tag": -1,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "github.com",
            "ioc_type": "domain",
            "malicious_type": "",
            "score": 1,
            "tag": [],
            "ti_ioc_tag": 2,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "india-bucket-001.s3-accelerate.amazonaws.com",
            "ioc_type": "domain",
            "malicious_type": "",
            "score": 1,
            "tag": [],
            "ti_ioc_tag": 2,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "line.me",
            "ioc_type": "domain",
            "malicious_type": "",
            "score": 1,
            "tag": [],
            "ti_ioc_tag": 2,
            "ti_type": [
              ""
            ]
          },
          {
            "family": [],
            "ioc": "schemas.android.com",
            "ioc_type": "domain",
            "malicious_type": "",
            "score": 1,
            "tag": [],
            "ti_ioc_tag": 2,
            "ti_type": [
              ""
            ]
          }
        ],
        "search_ti_ioc": [
          {
            "_type": "ip",
            "value": "1..."
          },

        ],
        "total": 1
      }
    },
    "msg": "ok",
    "status": 10000
  },
  "ai_response": "..."
}
);

const permissionTableData = computed(() => {
  const data = [];
  // 根据权限数据生成表格数据
  for (const permission of report.value.permissions) {
    // 在android_permissions中查找权限
    const androidPermission = android_permissions.find(
      (p) => p.Key === permission
    );
    if (androidPermission) {
      data.push(androidPermission);
    } else {
      data.push({
        Key: permission,
        Title: "未知权限",
        Memo: "未知权限",
        Level: 1,
      });
    }
  }
  return data;
});


onMounted(() => {
  const main = window;
  main.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = main.scrollY + 100;
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection.value = section.getAttribute('id');
      }
    }
  });


  const queryData = (more) => {
    fetch(`http://8.138.83.46:5000/reports/get${more ? "_more" : ""}?id=${id}`)
      .then((res) =>
        res.json()
      ).then((data) => {
        report.value = { ...report.value, ...data };
      })
      .catch((error) => {
        console.error(error);
      });
  }
  queryData();

  const links = {
    "static_analyze": "api/sandbox/report/dynamic/get/static_analyze/file/",
    "threat_analyze": "api/sandbox/report/dynamic/get/threat_analyze/file/",
    "host_behavior": "api/sandbox/report/dynamic/get/host_behavior/file/",
    "network_behavior": "api/sandbox/report/dynamic/get/network_behavior/file/",
    "dropfile": "api/sandbox/report/dynamic/get/dropfile/file/",
    "screenshot": "api/sandbox/report/dynamic/get/screenshot/file/"
  };

  for (const key in links) {
    const link = links[key];
    $fetch(link + id).then((data) => {
      report.value = {
        ...report.value,
        [key]: data
      };
    });
  }

  // queryData(true);

});


const downloadReport = () => {
  // 把当前页面转换为pdf下载

  new JsPdfImg("#printPage", `${new Date().toLocaleString()}.pdf`, {
    pageBreak: ["section"], // 当导出pdf时候，这个参数必填
    pageStartOffset: 20, // 每个页头的留空距离
    watermarkOption: {
      watermark_txt: "诈骗终结者",
      z_index: 97,
      watermark_x: 0,
      watermark_y: 0,
      watermark_x_space: 160,
      watermark_y_space: 160,
      watermark_width: 180,
    },
  }).outPdf(() => {
    console.log("结束");
  });
};


const decompileResult = ref({
  "download_url": undefined,
});

const decompileLoading = ref(false);
const decompileFileList = ref([]);

function handleDecompileDownload() {
  // 下载decompileResult

  const url = `http://8.138.83.46:5000/${decompileResult.value.download_url}`;
  if (url) {
    window.open(url);
  }
}

function handleDecompileSuccess(data) {
  decompileResult.value = data;
  decompileLoading.value = false;
}


</script>

<template>
  <div>

    <div class="min-w-[128px] flex flex-col fixed nav">
      <a href="#basic" :class="{ active: currentSection === 'basic' }">基本信息</a>
      <a href="#permission" :class="{ active: currentSection === 'permission' }">权限列表</a>
      <a href="#threat" :class="{ active: currentSection === 'threat' }">威胁情报</a>
      <a href="#behavior_exception_analyze"
        :class="{ active: currentSection === 'behavior_exception_analyze' }">行为异常分析</a>
      <a href="#network" :class="{ active: currentSection === 'network' }">网络分析</a>
      <a href="#domain" :class="{ active: currentSection === 'domain' }">域名线索</a>
      <a href="#screenshot" :class="{ active: currentSection === 'screenshot' }">运行截图</a>
      <a href="#decompile" :class="{ active: currentSection === 'decompile' }">反编译</a>
      <a href="#behavior" :class="{ active: currentSection === 'behavior' }">行为信息</a>
    </div>
    <div class="px-[200px] py-8" id="printPage">
      <section id="basic">
        <div class="flex flex-row gap-2 items-center justify-between">
          <div class="flex flex-row gap-3 items-center mb-4">

            <CircleIndicator v-if="report.static_analysis?.basic_info?.score"
              :score="report.static_analysis?.basic_info?.score" />
            <img v-if="report.static_analysis?.basic_info?.file_icon"
              :src="'data:image/png;base64,' + report.static_analysis.basic_info.file_icon" alt="icon"
              class="w-16 h-16 mb-2">
            <svg v-else class="w-16 h-16 mb-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4301" width="200" height="200">
              <path
                d="M985.742 749.896c0 130.902-106.178 237.004-237.17 237.004H274.298c-130.954 0-237.092-106.102-237.092-237.004V276.018c0-130.902 106.138-236.966 237.092-236.966h474.274c130.992 0 237.17 106.064 237.17 236.966v473.878z"
                fill="#85BF00" p-id="4302"></path>
              <path
                d="M591.876 266.404l6.558-9.72 6.486-9.526 14.588-21.444a5.766 5.766 0 0 0-1.622-7.982c-2.702-1.736-6.33-1.042-8.104 1.62l-15.632 22.988-6.558 9.68-6.68 9.796c-21.036-8.062-44.616-12.534-69.434-12.534-24.818 0-48.362 4.472-69.474 12.534l-6.676-9.796-6.522-9.68-15.63-22.988c-1.776-2.622-5.404-3.356-8.106-1.62a5.696 5.696 0 0 0-1.584 7.982l14.552 21.444 6.484 9.526 6.6 9.72c-49.596 22.638-83.144 65.566-83.144 114.74h326.992c-0.002-49.174-33.578-92.102-83.094-114.74z m-150.448 68.882c-9.69 0-17.524-7.714-17.524-17.202 0-9.526 7.834-17.202 17.524-17.202 9.686 0 17.484 7.674 17.484 17.202 0 9.488-7.798 17.202-17.484 17.202z m140.104 0c-9.69 0-17.484-7.714-17.484-17.202 0-9.526 7.794-17.202 17.484-17.202 9.686 0 17.524 7.674 17.524 17.202-0.002 9.488-7.84 17.202-17.524 17.202zM674.968 656.33V404.054H347.978v252.276c0 20.018 16.578 36.33 37.024 36.33h26.668c-0.886 3.01-1.428 6.21-1.428 9.528v72.624c0 18.976 15.71 34.364 35.084 34.364 19.334 0 35.044-15.386 35.044-34.364V702.188c0-3.316-0.54-6.518-1.428-9.528h65.034a35.046 35.046 0 0 0-1.348 9.528v72.624c0 18.976 15.708 34.364 35.042 34.364 19.3 0 35.008-15.386 35.008-34.364V702.188c0-3.316-0.5-6.518-1.388-9.528H638c20.374 0 36.968-16.312 36.968-36.33zM254.576 438.458v147.178c0 18.974 15.668 34.366 35.044 34.366 19.318 0 35.024-15.39 35.024-34.366v-147.178c0-19.014-15.708-34.402-35.024-34.402-19.376-0.002-35.044 15.386-35.044 34.402zM698.322 438.458v147.178c0 18.974 15.668 34.366 35.006 34.366 19.376 0 35.042-15.39 35.042-34.366v-147.178c0-19.014-15.668-34.402-35.042-34.402-19.338-0.002-35.006 15.386-35.006 34.402z"
                fill="#FFFFFF" p-id="4303"></path>
              <path
                d="M591.876 266.404l6.558-9.72 6.486-9.526 14.588-21.444a5.766 5.766 0 0 0-1.622-7.982c-2.702-1.736-6.33-1.042-8.104 1.62l-15.632 22.988-6.558 9.68-6.68 9.796c-21.036-8.062-44.616-12.534-69.434-12.534-24.818 0-48.362 4.472-69.474 12.534l-6.676-9.796-6.522-9.68-15.63-22.988c-1.776-2.622-5.404-3.356-8.106-1.62a5.696 5.696 0 0 0-1.584 7.982l14.552 21.444 6.484 9.526 6.6 9.72c-49.596 22.638-83.144 65.566-83.144 114.74h326.992c-0.002-49.174-33.578-92.102-83.094-114.74z m-150.448 68.882c-9.69 0-17.524-7.714-17.524-17.202 0-9.526 7.834-17.202 17.524-17.202 9.686 0 17.484 7.674 17.484 17.202 0 9.488-7.798 17.202-17.484 17.202z m140.104 0c-9.69 0-17.484-7.714-17.484-17.202 0-9.526 7.794-17.202 17.484-17.202 9.686 0 17.524 7.674 17.524 17.202-0.002 9.488-7.84 17.202-17.524 17.202zM674.968 656.33V404.054H347.978v252.276c0 20.018 16.578 36.33 37.024 36.33h26.668c-0.886 3.01-1.428 6.21-1.428 9.528v72.624c0 18.976 15.71 34.364 35.084 34.364 19.334 0 35.044-15.386 35.044-34.364V702.188c0-3.316-0.54-6.518-1.428-9.528h65.034a35.046 35.046 0 0 0-1.348 9.528v72.624c0 18.976 15.708 34.364 35.042 34.364 19.3 0 35.008-15.386 35.008-34.364V702.188c0-3.316-0.5-6.518-1.388-9.528H638c20.374 0 36.968-16.312 36.968-36.33zM254.576 438.458v147.178c0 18.974 15.668 34.366 35.044 34.366 19.318 0 35.024-15.39 35.024-34.366v-147.178c0-19.014-15.708-34.402-35.024-34.402-19.376-0.002-35.044 15.386-35.044 34.402zM698.322 438.458v147.178c0 18.974 15.668 34.366 35.006 34.366 19.376 0 35.042-15.39 35.042-34.366v-147.178c0-19.014-15.668-34.402-35.042-34.402-19.338-0.002-35.006 15.386-35.006 34.402z"
                fill="#FFFFFF" p-id="4304" data-spm-anchor-id="a313x.search_index.0.i0.66f43a81d1MpHr"></path>
              <path
                d="M614.646 216.778c1.114 0 2.24 0.31 3.24 0.952a5.766 5.766 0 0 1 1.622 7.982l-14.588 21.444-6.486 9.526-6.558 9.72c49.518 22.638 83.094 65.566 83.094 114.74H347.976c0-49.174 33.548-92.102 83.144-114.74l-6.6-9.72-6.484-9.526-14.552-21.444a5.694 5.694 0 0 1 1.584-7.982 5.94 5.94 0 0 1 3.216-0.942c1.904 0 3.768 0.904 4.89 2.562l15.63 22.988 6.522 9.68 6.676 9.796c21.114-8.062 44.658-12.534 69.474-12.534 24.818 0 48.398 4.472 69.434 12.534l6.68-9.796 6.558-9.68 15.632-22.988a5.822 5.822 0 0 1 4.866-2.572m-33.114 118.508c9.686 0 17.524-7.714 17.524-17.202 0-9.526-7.838-17.202-17.524-17.202-9.69 0-17.484 7.674-17.484 17.202-0.002 9.488 7.794 17.202 17.484 17.202m-140.104 0c9.686 0 17.484-7.714 17.484-17.202 0-9.526-7.796-17.202-17.484-17.202-9.69 0-17.524 7.674-17.524 17.202 0 9.488 7.834 17.202 17.524 17.202m173.218-138.262a25.532 25.532 0 0 0-21.23 11.266l-15.6 22.94-4.788 7.064c-19.608-5.822-40.246-8.766-61.55-8.766-21.272 0-41.916 2.946-61.574 8.774l-4.716-7-15.678-23.056a25.596 25.596 0 0 0-21.224-11.208c-4.938 0-9.742 1.41-13.894 4.076l-0.276 0.18a25.346 25.346 0 0 0-10.912 16.348 25.268 25.268 0 0 0 3.954 19.194l14.534 21.416 0.728 1.07c-46.278 28.336-74.196 73.41-74.196 121.826 0 10.91 8.844 19.754 19.754 19.754h326.992c10.91 0 19.754-8.844 19.754-19.754 0-48.4-27.914-93.48-74.18-121.832l0.706-1.036 14.594-21.452 0.204-0.306c7.642-11.698 4.406-27.504-7.216-35.236a25.7 25.7 0 0 0-14.186-4.262z m60.322 207.03v252.276c0 20.018-16.596 36.33-36.97 36.33h-26.71c0.888 3.01 1.388 6.21 1.388 9.528v72.624c0 18.976-15.708 34.364-35.008 34.364-19.334 0-35.042-15.386-35.042-34.364V702.188c0-3.316 0.498-6.518 1.348-9.528H478.94a33.66 33.66 0 0 1 1.428 9.528v72.624c0 18.976-15.708 34.364-35.044 34.364-19.376 0-35.084-15.386-35.084-34.364V702.188c0-3.316 0.542-6.518 1.428-9.528H385c-20.446 0-37.024-16.312-37.024-36.33V404.054H674.968m0-19.754H347.978c-10.91 0-19.754 8.844-19.754 19.754v252.276c0 30.926 25.47 56.084 56.778 56.084h5.486v62.398c0 29.84 24.6 54.118 54.838 54.118 30.216 0 54.798-24.278 54.798-54.118v-62.398h22.75v62.398c0 29.84 24.58 54.118 54.794 54.118 30.196 0 54.762-24.278 54.762-54.118v-62.398h5.568c31.278 0 56.724-25.158 56.724-56.084V404.054c0-10.91-8.844-19.754-19.754-19.754z m-385.348 19.754c19.318 0 35.024 15.388 35.024 34.402v147.178c0 18.974-15.708 34.366-35.024 34.366-19.376 0-35.044-15.39-35.044-34.366v-147.178c0-19.014 15.668-34.402 35.044-34.402m0-19.754c-30.216 0-54.798 24.294-54.798 54.156v147.178c0 29.842 24.582 54.12 54.798 54.12 30.206 0 54.778-24.278 54.778-54.12v-147.178c0-29.862-24.572-54.156-54.778-54.156z m443.708 19.754c19.376 0 35.042 15.388 35.042 34.402v147.178c0 18.974-15.668 34.366-35.042 34.366-19.338 0-35.006-15.39-35.006-34.366v-147.178c0-19.014 15.668-34.402 35.006-34.402m0-19.754c-30.196 0-54.76 24.294-54.76 54.156v147.178c0 29.842 24.564 54.12 54.76 54.12 30.214 0 54.796-24.278 54.796-54.12v-147.178c0.002-29.862-24.582-54.156-54.796-54.156z"
                fill="#436000" p-id="4305"></path>
              <path
                d="M728.078 956.122H294.83c-124.896 0-226.506-101.636-226.506-226.566V296.358c0-124.908 101.61-226.526 226.506-226.526h433.248c124.918 0 226.544 101.62 226.544 226.526v433.198c0.002 124.928-101.626 226.566-226.544 226.566zM294.83 89.636c-113.976 0-206.702 92.734-206.702 206.72v433.198c0 114.008 92.726 206.762 206.702 206.762h433.248c113.996 0 206.74-92.754 206.74-206.762V296.358c0-113.986-92.744-206.72-206.74-206.72H294.83z"
                fill="#436000" p-id="4306"></path>
            </svg>
            <span class="font-bold text-xl">
              {{ report.application_name }}
            </span>
          </div>

          <div>
            <!-- 下载 PDF 报告 -->

            <a href="#" @click.prevent="downloadReport">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                下载 PDF 报告
              </button>

            </a>
          </div>
        </div>
        <div class="bg-blue-50 p-2 rounded">
          <div class="flex flex-row gap-2">
            <svg class="icon w-8 h-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="5370" width="200" height="200">
              <path
                d="M891.228 500c0 26.508-21.492 48-48 48H180.776c-26.508 0-48-21.492-48-48v-58.668c0-26.508 21.492-48 48-48h662.452c26.508 0 48 21.492 48 48V500z"
                fill="#99D9E8" p-id="5371"></path>
              <path d="M150.776 474h722.452v63.456H150.776z" fill="#6E6E96" opacity=".2" p-id="5372"></path>
              <path
                d="M843.228 566H180.776c-36.392 0-66-29.608-66-66v-58.668c0-36.392 29.608-66 66-66h662.452c36.392 0 66 29.608 66 66V500c0 36.392-29.62 66-66 66zM180.776 411.332c-16.544 0-30 13.456-30 30V500c0 16.544 13.456 30 30 30h662.452c16.54 0 30-13.456 30-30v-58.668c0-16.544-13.46-30-30-30H180.776z"
                fill="#6E6E96" p-id="5373"></path>
              <path
                d="M816 640c0 22-18 40-40 40H247.996c-22 0-40-18-40-40V300c0-22 18-40 40-40H776c22 0 40 18 40 40v340z"
                fill="#B4B7C9" p-id="5374"></path>
              <path d="M215.368 260.332h554.228v53H215.368z" fill="#FFFFFF" opacity=".2" p-id="5375"></path>
              <path
                d="M776 698H248c-31.98 0-58-26.02-58-58V300c0-31.98 26.02-58 58-58h528c31.98 0 58 26.02 58 58v340c0 31.98-26.02 58-58 58zM248 278a22.024 22.024 0 0 0-22 22v340c0 12.128 9.868 22 22 22h528c12.128 0 22-9.872 22-22V300c0-12.132-9.872-22-22-22H248z"
                fill="#6E6E96" p-id="5376"></path>
              <path d="M132.776 1012v-152c0-22 18-40 40-40h678.452c22 0 40 18 40 40v152" fill="#F8A4A7" p-id="5377">
              </path>
              <path d="M494 140h36v120h-36z" fill="#6E6E96" p-id="5378"></path>
              <path d="M511.18 105.524m-66.476 0a66.476 66.476 0 1 0 132.952 0 66.476 66.476 0 1 0-132.952 0Z"
                fill="#B4B7C9" p-id="5379"></path>
              <path
                d="M511.18 190c-46.58 0-84.476-37.896-84.476-84.476 0-46.584 37.896-84.48 84.476-84.48 46.584 0 84.476 37.896 84.476 84.48 0 46.58-37.9 84.476-84.476 84.476z m0-132.956c-26.732 0-48.476 21.752-48.476 48.48 0 26.732 21.744 48.476 48.476 48.476 26.736 0 48.476-21.748 48.476-48.476 0-26.728-21.74-48.48-48.476-48.48z"
                fill="#6E6E96" p-id="5380"></path>
              <path d="M226 313.332H404v304.252H226z" fill="#FFFFFF" opacity=".2" p-id="5381"></path>
              <path d="M456 680h128v140h-128z" fill="#FDD089" p-id="5382"></path>
              <path d="M602 838h-164v-176h164v176z m-128-36h92v-104h-92v104z" fill="#6E6E96" p-id="5383"></path>
              <path d="M456 732h132v36h-132z" fill="#6E6E96" p-id="5384"></path>
              <path d="M387.364 395.412m-66.436 0a66.436 66.436 0 1 0 132.872 0 66.436 66.436 0 1 0-132.872 0Z"
                fill="#A9DDF3" p-id="5385"></path>
              <path
                d="M387.364 479.844c-46.56 0-84.436-37.876-84.436-84.436s37.876-84.436 84.436-84.436c46.56 0 84.436 37.876 84.436 84.436s-37.876 84.436-84.436 84.436z m0-132.868c-26.708 0-48.436 21.728-48.436 48.436s21.728 48.436 48.436 48.436 48.436-21.728 48.436-48.436-21.728-48.436-48.436-48.436z"
                fill="#6E6E96" p-id="5386"></path>
              <path d="M643.1 395.412m-66.436 0a66.436 66.436 0 1 0 132.872 0 66.436 66.436 0 1 0-132.872 0Z"
                fill="#A9DDF3" p-id="5387"></path>
              <path
                d="M643.1 479.844c-46.564 0-84.432-37.876-84.432-84.436s37.876-84.436 84.432-84.436c46.556 0 84.432 37.876 84.432 84.436s-37.872 84.436-84.432 84.436z m0-132.868c-26.712 0-48.432 21.728-48.432 48.436s21.732 48.436 48.432 48.436 48.432-21.728 48.432-48.436c0.004-26.708-21.724-48.436-48.432-48.436zM499.332 525.332h36v77.336h-36zM424.668 525.332h36v77.336h-36z"
                fill="#6E6E96" p-id="5388"></path>
              <path d="M230.036 838h189.332V1012H230.036z" fill="#FBD2D3" opacity=".5" p-id="5389"></path>
              <path d="M699.964 838h173.26V1012h-173.26z" fill="#D99A9D" p-id="5390"></path>
              <path
                d="M909.228 1012h-36v-152c0-12.132-9.876-22-22-22H172.776a22.024 22.024 0 0 0-22 22v152h-36v-152c0-31.98 26.02-58 58-58h678.452c31.976 0 58 26.02 58 58v152z"
                fill="#6E6E96" p-id="5391"></path>
              <path
                d="M522 698h44v104h-44zM784 252h-14.408v325.592c0 22-18 40-40 40H216V632c0 22 18 40 40 40h528c22 0 40-18 40-40V292c0-22-18-40-40-40z"
                fill="#6E6E96" opacity=".2" p-id="5392"></path>
              <path d="M419.368 838h280.596v38h-280.596z" fill="#FBD2D3" opacity=".5" p-id="5393"></path>
              <path d="M575.332 525.332h36v77.336h-36z" fill="#6E6E96" p-id="5394"></path>
              <path
                d="M670.668 916h29.296v34.668h-29.296zM645.98 950.668h53.984v34.668h-53.984zM588.668 936h26.668v29.332h-26.668z"
                fill="#D99A9D" p-id="5395"></path>
            </svg>
            <span class="font-bold text-lg">
              AI 研判
            </span>
          </div>
          <VueMarkdown :source="report.ai_response"></VueMarkdown>

        </div>
        <InformationItem :label="'包名'" :value="report.package_name" />
        <InformationItem :label="'MD5'" :value="report.md5" />
        <InformationItem :label="'SHA1'" :value="report.SHA1" />
        <InformationItem :label="'SHA256'" v-if="report.static_analysis?.basic_info?.sha256"
          :value="report.static_analysis?.basic_info?.sha256 ?? '分析中'" />
        <InformationItem :label="'SHA512'" v-if="report.static_analysis?.basic_info?.sha512"
          :value="report.static_analysis?.basic_info?.sha512 ?? '分析中'" />
        <InformationItem :label="'安装包大小'" v-if="report.static_analysis?.basic_info?.size"
          :value="(report.static_analysis?.basic_info?.size / 1024 / 1024).toFixed(2) + 'MB'" />
        <InformationItem :label="'版本编号'" :value="report.version_code" />
        <InformationItem :label="'版本名称'" :value="report.version_name" />
        <InformationItem label="Android平台最低版本" v-if="report.static_analysis?.metadata?.min_sdk_version"
          :value="report.static_analysis.metadata.min_sdk_version" />
        <InformationItem label="Android平台最高版本" v-if="report.static_analysis?.metadata?.max_sdk_version"
          :value="report.static_analysis.metadata.max_sdk_version" />
        <InformationItem label="目标Android平台版本" :value="android_versions
        [report.target_sdk_version] + ' => ' + report.target_sdk_version" />
        <InformationItem label="主Activity" v-if="report.static_analysis?.metadata?.main_activity"
          :value="report.static_analysis.metadata.main_activity" />
        <InformationItem label="签名失效时间" v-if="report.static_analysis?.signature?.end_time"
          :value="report.static_analysis.signature.end_time" />
      </section>

      <section id="permission" class="mt-8">
        <InformationItem label="权限列表" value="" />

        <el-table border :data="permissionTableData" style="width: 100%" :row-class-name="({ row, rowIndex }) => {

          switch (row.Level) {
            case 0:
              return 'normal-row'
            case 1:
              return 'warning-row'
            case 2:
              return 'danger-row'
          }
          return ''
        }">
          <el-table-column type="index" width="50" label="#" :index="(i) => i" />
          <el-table-column prop="Key" label="权限" />
          <el-table-column prop="Title" label="名称" />
          <el-table-column prop="Memo" label="描述" />
        </el-table>
      </section>

      <section id="threat" class="mt-8" v-if="report.threat_analysis?.ti?.data">
        <InformationItem label="威胁情报" value="" />

        <el-table border :data="report.threat_analysis.ti.data" style="width: 100%" :row-class-name="({ row, rowIndex }) => {
          // switch (row.Level) {
          //   case 0:
          //     return 'normal-row'
          //   case 1:
          //     return 'warning-row'
          //   case 2:
          //     return 'danger-row'
          // }
          return ''
        }">
          <!-- IOC对象	研判意见	情报类型	恶意类型	家族/团伙	标签 -->
          <el-table-column type="index" width="50" label="#" :index="(i) => i" />
          <el-table-column prop="ioc" label="IOC对象" />
          <el-table-column prop="ti_ioc_tag" label="研判意见">
            <template #default="scope">
              {{ {
                "-1": "未知",
                "1": "可疑",
                "2": "安全",
              }[scope.row.ti_ioc_tag] }}
            </template>
          </el-table-column>
          <el-table-column prop="ti_type" label="情报类型" />
          <el-table-column prop="malicious_type" label="恶意类型" />
          <el-table-column prop="family" label="家族/团伙" />

          <el-table-column prop="tag" label="标签">
            <template #default="scope">
              <el-tag v-for="t in scope.row.tag" disable-transitions>{{ t.name }}</el-tag>
            </template>
          </el-table-column>

        </el-table>
      </section>

      <section id="behavior_exception_analyze" class="mt-8" v-if="report.threat_analysis?.behavior_exception_analyze">
        <InformationItem label="行为异常分析" value="" />
        <el-table :data="report.threat_analysis?.behavior_exception_analyze" border style="width: 100%">
          <el-table-column prop="description_chinese" label="威胁描述" width="300">
          </el-table-column>
          <el-table-column prop="severity" label="严重级别" width="120">
            <template v-slot="scope">
              <el-tag :type="(severity) => {
                switch (severity) {
                  case 1:
                    return 'success';
                  case 2:
                    return 'warning';
                  case 3:
                    return 'danger';
                  default:
                    return '';
                }
              }">
                {{ scope.row.severity }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="内容">
            <template v-slot="scope">
              <el-table :data="scope.row.content" border v-if="scope.row.content.length > 0" style="width: 100%">
                <el-table-column prop="method" label="方法">
                </el-table-column>
                <el-table-column prop="value" label="值">
                </el-table-column>
              </el-table>
              <span v-else>无内容</span>
            </template>
          </el-table-column>
        </el-table>
      </section>

      <section id="network" class="mt-8" v-if="report.network_behavior">
        <InformationItem label="网络分析" value="" />
        <NetworkBehavior :networkData="report.network_behavior" />
      </section>

      <section id="domain" class="mt-8" v-if="report.static_analysis?.code_analysis">
        <InformationItem label="域名线索" value="" />
        <ul>
          <li v-for="domain in report.static_analysis.code_analysis.domains" :key="domain" style="color: deepskyblue;">
            {{ domain }}
          </li>
        </ul>
      </section>


      <section id="screenshot" class="mt-8">
        <InformationItem label="运行截图" value="" />
        <div class="grid grid-cols-4 gap-2">
          <img v-for="(screenshot, index) in report.screenshot" :src="'data:image/png;base64,' + screenshot"
            class="border rounded-md" :key="index" />
        </div>
      </section>


      <section id="decompile" class="mt-8">
        <InformationItem label="反编译结果" value="" />
        <el-loading :fullscreen="false" :loading="decompileLoading" text="正在反编译...">

        </el-loading>
        <el-upload class="mt-2" action="http://8.138.83.46:5000/upload_to_decompile" :multiple="false"
          :file-list="decompileFileList" :on-success="handleDecompileSuccess" :before-upload="beforeDecompileUpload">
          <el-button type="primary">点击上传 APK 文件开始反编译</el-button>
          <div class="el-upload__tip" slot="tip" style="color: #666">
            只支持 .apk 格式文件
          </div>
        </el-upload>
        <div v-if="decompileResult.download_url">
          <el-button type="primary" @click="handleDecompileDownload">下载反编译结果</el-button>
        </div>

      </section>

      <section id="behavior" class="mt-8" v-if="report?.host_behavior?.hostbehavior?.api_binder">
        <InformationItem label="行为分析" value="" />
        <el-card>
          <el-table :data="report.host_behavior.hostbehavior.api_binder" border style="width: 100%">
            <el-table-column prop="title" label="行为类型" width="180">
            </el-table-column>
            <el-table-column label="详细信息">
              <template v-slot="scope">
                <el-table :data="scope.row.value" border style="width: 100%">
                  <el-table-column prop="class" label="类名" width="200">
                  </el-table-column>
                  <el-table-column prop="method" label="方法">
                  </el-table-column>
                  <el-table-column prop="args" label="参数">
                  </el-table-column>
                  <el-table-column prop="ret" label="返回值">
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </section>

    </div>

  </div>

</template>
