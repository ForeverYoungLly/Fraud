<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import InformationItem from "../components/InformationItem.vue";
import { android_permissions } from "../utils/permissions";

const route = useRoute();
// 获取query中的id
const id = route.query.id;

const report = ref({
  "qid": "AZEXyzXTh6wn_HCy2a_e",
  "application_name": "...",
  "package_name": "...",
  "md5": "c374640943758dd011ccf4d808c8c243",
  "version_code": "1209145400",
  "version_name": "4.0.0",
  "target_sdk_version": "32",
  "architecture": {
    "armeabi": false,
    "armeabi-v7a": false,
    "arm64-v8a": false,
    "x86": false,
    "x86_64": false
  },
  "SHA1": "2D D3 0F C2 1A 4A D8 AA DF CA 3B 63 FA DE 8C 36 A0 49 14 D6",
  "permissions": [
    "android.permission.READ_MEDIA_AUDIO",
    "android.permission.INTERNET",
    "android.permission.CAMERA",
    "android.permission.READ_MEDIA_VIDEO",
    "android.permission.WRITE_EXTERNAL_STORAGE",
    "android.permission.READ_MEDIA_IMAGES",
    "android.permission.READ_EXTERNAL_STORAGE"
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
        "file_icon": "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",
        "file_tags": [
          "联网行为",
          "高危权限",
          "普通行为"
        ],
        "md5": "c374640943758dd011ccf4d808c8c243",
        "name": "8ca891bccf4a86dc8a7cc16bc73e5fdc5435a5cd.apk",
        "score": 6,
        "sha1": "6fbe0d9f3f8481eb27e02ba0ea36be35319e15b8",
        "sha256": "a2134089913ef678e8466cfc71be1ee5679ef526f39c16d958343f06ce7a0f0a",
        "sha512": "c06dba179361a349e5fc73f96ba67343a8fcf3609d7711bcbae10b9eeb670fb54910d8cfdae15d878988b01b52f05dc2021a4b54dc70b697340a72890d57a8b2",
        "size": 2031457,
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
    console.log(androidPermission);
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
  fetch(`https://fu.oboard.eu.org/reports/get?id=${id}`)
    .then((res) =>
      res.json()
    ).then((data) => {
      console.log(data);
      report.value = data;
    })
    .catch((error) => {
      console.error(error);
    });

});


</script>

<template>
  <div>
    <div>
      <div>
        <div>
          <img v-if="report.static_analysis.data.basic_info.file_icon"
            :src="'data:image/png;base64,' + report.static_analysis.data.basic_info.file_icon" alt="icon"
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
          <h1 class="font-bold text-xl">
            {{ report.application_name }}
          </h1>

        </div>

        <InformationItem :label="'安装包名'" :value="report.package_name" />
        <InformationItem :label="'MD5'" :value="report.md5" />
        <InformationItem :label="'SHA1'" :value="report.SHA1" />
        <InformationItem :label="'SHA256'" :value="report.static_analysis.data.basic_info.sha256" />
        <InformationItem :label="'SHA512'" :value="report.static_analysis.data.basic_info.sha512" />
        <InformationItem :label="'大小'"
          :value="(report.static_analysis.data.basic_info.size / 1024 / 1024).toFixed(2) + 'MB'" />
        <InformationItem :label="'版本编号'" :value="report.version_code" />
        <InformationItem :label="'版本名称'" :value="report.version_name" />
        <InformationItem :label="'目标SDK版本号'" :value="[
          'Android 1.0 Astro',
          'Android 1.0 Bender',
          'Android 1.1 Petit Four',
          'Android 1.5 Cupcake',
          'Android 1.6 Donut',
          'Android 2.0 Eclair',
          'Android 2.0.1 Eclair_MR1',
          'Android 2.1 Eclair_MR2',
          'Android 2.2 Froyo',
          'Android 2.3 Gingerbread',
          'Android 2.3.3 Gingerbread_MR1',
          'Android 3.0 Honeycomb',
          'Android 3.1 Honeycomb_MR1',
          'Android 3.2 Honeycomb_MR2',
          'Android 4.0 Ice Cream Sandwich',
          'Android 4.0.3 Ice Cream Sandwich_MR1',
          'Android 4.1 Jelly Bean',
          'Android 4.2 Jelly Bean_MR1',
          'Android 4.3 Jelly Bean_MR2',
          'Android 4.4 KitKat',
          'Android 4.4W KitKat Wear',
          'Android 5.0 Lollipop',
          'Android 5.1 Lollipop',
          'Android 6.0 Marshmallow',
          'Android 7.0 Nougat',
          'Android 7.1 Nougat',
          'Android 8.0 Oreo',
          'Android 8.1 Oreo',
          'Android 9 Pie',
          'Android 10 Q',
          'Android 11 R',
          'Android 12 S',
          'Android 13 T',
          'Android 14 U',
          'Android 15 V',
          'Android 16 W',
          'Android 17 X',
          'Android 18 Y',
        ]
        [report.target_sdk_version] + ' => ' + report.target_sdk_version" />


        <div>
          <el-table border :data="permissionTableData" style="width: 100%" :row-class-name="({ row, rowIndex }) => {
            console.log(row.Level)
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
        </div>

      </div>


    </div>
  </div>

  <!-- <el-container>
    <el-main>
      <el-descriptions title="AI 检测结果" :column="1" border>
        <el-descriptions-item label="AI 检测结果" label-align="center" align="center" label-class-name="my-label"
          class-name="my-content" width="30px">
          <pre style="text-align: left; white-space: pre-wrap;">{{ report.ai_response }}</pre>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions title="该 APK 分析得出" :column="2" border>
        <el-descriptions-item label="应用名称" label-align="center" align="center" width="100px" class-name="my-content">
          {{ report.application_name }}
        </el-descriptions-item>
        <el-descriptions-item label="安装包名" label-align="center" align="center" width="100px">
          {{ report.package_name }}
        </el-descriptions-item>
        <el-descriptions-item label="MD5" label-align="center" align="center">
          {{ report.md5 }}
        </el-descriptions-item>
        <el-descriptions-item label="版本编号" label-align="center" align="center">
          {{ report.version_code }}
        </el-descriptions-item>
        <el-descriptions-item label="版本名称" label-align="center" align="center">
          {{ report.version_name }}
        </el-descriptions-item>
        <el-descriptions-item label="目标SDK版本号" label-align="center" align="center">
          {{ report.target_sdk_version }}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="SHA1指纹" label-align="center" align="center" width="100px">
          {{ report.SHA1 }}
        </el-descriptions-item>
        <el-descriptions-item label="活动列表" label-align="center" align="center" width="100px">
          <el-text class="mx-1" v-for="activity in report.activities" :key="activity">
            <p>{{ activity }}</p>
          </el-text>
        </el-descriptions-item>
        <el-descriptions-item label="权限列表" label-align="center" align="center" width="100px">
          <el-text class="mx-1" v-for="permission in report.permissions" :key="permission">
            <p>{{ permission }}</p>
          </el-text>
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions :column="1" border>
        <el-descriptions-item label="评分" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.score }}
        </el-descriptions-item>
        <el-descriptions-item label="SHA1 哈希值" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.sha1 }}
        </el-descriptions-item>
        <el-descriptions-item label="SHA256 哈希值" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.sha256 }}
        </el-descriptions-item>
        <el-descriptions-item label="SHA512 哈希值" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.sha512 }}
        </el-descriptions-item>
        <el-descriptions-item label="大小" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.size }}
        </el-descriptions-item>
        <el-descriptions-item label="ssdeep" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.ssdeep }}
        </el-descriptions-item>
        <el-descriptions-item label="类型" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.basic_info.type }}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="域名" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.code_analysis.domains }}
        </el-descriptions-item>
        <el-descriptions-item label="所涉及到的邮箱" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.code_analysis.emails }}
        </el-descriptions-item>
        <el-descriptions-item label="IP" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.code_analysis.ips }}
        </el-descriptions-item>
        <el-descriptions-item label="URL" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.code_analysis.urls }}
        </el-descriptions-item>
        <el-descriptions-item label="主要活动" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.metadata.main_activity }}
        </el-descriptions-item>
        <el-descriptions-item label="一般权限" label-align="center" align="center" width="100px" border>
          <el-text class="mx-1" v-for="activity in report.static_analysis.data.permissions.general" :key="activity">
            <p>{{ activity }}</p>
          </el-text>
        </el-descriptions-item>
        <el-descriptions-item label="用户权限" label-align="center" align="center" width="100px">
          <el-text class="mx-1" v-for="activity in report.static_analysis.data.permissions.custom" :key="activity">
            <p>{{ activity }}</p>
          </el-text>
        </el-descriptions-item>
        <el-descriptions-item label="敏感权限" label-align="center" align="center" width="100px">
          <el-text class="mx-1" v-for="activity in report.static_analysis.data.permissions
            .sensitive" :key="activity">
            <p>{{ activity }}</p>
          </el-text>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border title="签名">
        <el-descriptions-item label="issuer" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.signature[0].issuer }}
        </el-descriptions-item>
        <el-descriptions-item label="序列号" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.signature[0].serial_number }}
        </el-descriptions-item>
        <el-descriptions-item label="SHA1指纹" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.signature[0].sha1_fingerprint }}
        </el-descriptions-item>
        <el-descriptions-item label="SHA256指纹" label-align="center" align="center" width="100px">
          {{ report.static_analysis.data.signature[0].sha256_fingerprint }}
        </el-descriptions-item>
      </el-descriptions>

      <el-text class="mx-1" size="large">行为异常分析</el-text>
      <el-table :data="report.threat_analysis.data.behavior_exception_analyze" style="width: 100%; margin-left: 12%">
        <el-table-column prop="description_chinese" label="名称" width="300" />
        <el-table-column prop="name" label="Name" width="300" />
        <el-table-column prop="severity" label="严重程度" width="200" />
      </el-table>

      <el-text class="mx-1" size="large">敏感权限列表</el-text>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="敏感权限" label-align="center" align="center" width="100px">
          <el-text class="mx-1" v-for="activity in report.static_analysis.data.permissions
            .sensitive" :key="activity">
            <p>{{ activity }}</p>
          </el-text>
        </el-descriptions-item>
      </el-descriptions>

      <el-text class="mx-1" size="large">IOC分析</el-text>
      <el-table :data="report.threat_analysis.data.ti.data" style="width: 100%; margin-left: 12%">
        <el-table-column prop="ioc_type" label="类型" width="300" />
        <el-table-column prop="ioc" label="ioc" width="300" />
        <el-table-column prop="score" label="恶意评分" width="200" />
      </el-table>


    </el-main>

  </el-container> -->
</template>

<style>
.normal-row {
  --el-table-tr-bg-color: #e4f3e5;
}

.warning-row {
  --el-table-tr-bg-color: #fff7da;
}

.danger-row {
  --el-table-tr-bg-color: #f6f8fa;
}
</style>
