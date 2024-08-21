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
  "static_analyze": {
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
  "threat_analyze": {
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
  "ai_response": "正在思考……"
}
);

const report_sample1 = {
  "qid": "AZFyiPWiSZq0HOVfcZFI",
  "application_name": "消3·15协",
  "package_name": "Mx.XpYSKQsIOb.GUDcddzcO",
  "md5": "b660141a39ca6bab28922b7b0711df3e",
  "version_code": "172",
  "version_name": "1.0.0",
  "target_sdk_version": "28",
  "architecture": {
    "armeabi": false,
    "armeabi-v7a": true,
    "arm64-v8a": true,
    "x86": false,
    "x86_64": false
  },
  "SHA1": "BF 47 88 5A EC CC CC AD AF A6 BD 33 4B 19 FD 16 5D 70 AE 4F",
  "permissions": [
    "android.permission.PROCESS_OUTGOING_CALLS",
    "android.permission.ANSWER_PHONE_CALLS",
    "com.android.launcher.permission.UNINSTALL_SHORTCUT",
    "com.htc.launcher.permission.UPDATE_SHORTCUT",
    "android.permission.GET_TASKS",
    "android.permission.ACCESS_COARSE_LOCATION",
    "android.permission.WAKE_LOCK",
    "android.permission.BLUETOOTH",
    "com.sec.android.provider.badge.permission.READ",
    "com.huawei.android.launcher.permission.READ_SETTINGS",
    "com.htc.launcher.permission.READ_SETTINGS",
    "me.everything.badger.permission.BADGE_COUNT_WRITE",
    "android.permission.CAMERA",
    "android.permission.BROADCAST_PACKAGE_INSTALL",
    "android.permission.REORDER_TASKS",
    "android.permission.CALL_PHONE",
    "com.oppo.launcher.permission.READ_SETTINGS",
    "com.google.android.providers.gsf.permission.READ_GSERVICES",
    "android.permission.READ_LOGS",
    "android.permission.FOREGROUND_SERVICE",
    "android.permission.MODIFY_PHONE_STATE",
    "android.permission.REQUEST_INSTALL_PACKAGES",
    "android.permission.AUTHENTICATE_ACCOUNTS",
    "com.huawei.android.launcher.permission.WRITE_SETTINGS",
    "com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE",
    "android.permission.FLASHLIGHT",
    "com.anddoes.launcher.permission.UPDATE_COUNT",
    "android.permission.READ_PHONE_STATE",
    "com.majeur.launcher.permission.UPDATE_BADGE",
    "android.permission.WRITE_SECURE_SETTINGS",
    "android.permission.READ_CALL_LOG",
    "com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE",
    "android.permission.READ_SYNC_SETTINGS",
    "android.permission.MANAGE_OWN_CALLS",
    "android.permission.BROADCAST_PACKAGE_ADDED",
    "com.sonyericsson.home.permission.BROADCAST_BADGE",
    "me.everything.badger.permission.BADGE_COUNT_READ",
    "android.permission.READ_APP_BADGE",
    "com.huawei.android.launcher.permission.CHANGE_BADGE",
    "com.google.android.c2dm.permission.RECEIVE",
    "android.permission.READ_PROFILE",
    "android.permission.WRITE_SYNC_SETTINGS",
    "android.permission.SYSTEM_ALERT_WINDOW",
    "android.permission.GET_ACCOUNTS",
    "com.sec.android.provider.badge.permission.WRITE",
    "android.permission.RECORD_AUDIO",
    "im.xhksmgrgxt.messenger.permission.MAPS_RECEIVE",
    "android.permission.VIBRATE",
    "android.permission.MODIFY_AUDIO_SETTINGS",
    "android.permission.MANAGE_ACCOUNTS",
    "com.android.launcher.permission.INSTALL_SHORTCUT",
    "com.sonymobile.home.permission.PROVIDER_INSERT_BADGE",
    "android.permission.ACCESS_NOTIFICATION_POLICY",
    "android.permission.RECEIVE_BOOT_COMPLETED",
    "android.permission.ACCESS_WIFI_STATE",
    "android.permission.READ_EXTERNAL_STORAGE",
    "android.permission.READ_PRIVILEGED_PHONE_STATE",
    "android.permission.INSTALL_SHORTCUT",
    "android.permission.BROADCAST_PACKAGE_REPLACED",
    "com.oppo.launcher.permission.WRITE_SETTINGS",
    "android.permission.WRITE_CONTACTS",
    "android.permission.INTERNET",
    "android.permission.BROADCAST_PACKAGE_CHANGED",
    "android.permission.USE_FINGERPRINT",
    "android.permission.WRITE_EXTERNAL_STORAGE",
    "android.permission.CHANGE_NETWORK_STATE",
    "android.permission.READ_CONTACTS",
    "android.permission.ACCESS_NETWORK_STATE",
    "im.xhksmgrgxt.messenger.permission.MIPUSH_RECEIVE",
    "android.permission.ACCESS_FINE_LOCATION",
    "android.permission.WRITE_CALL_LOG"
  ],
  "activities": [
    "im.xhksmgrgxt.tel.CallApiAbove29Dialer",
    "im.xhksmgrgxt.ui.hui.WebViewAppCompatActivity",
    "im.xhksmgrgxt.ui.LaunchActivity",
    "im.xhksmgrgxt.ui.LaunchTempActivity",
    "im.xhksmgrgxt.ui.ShareActivity",
    "im.xhksmgrgxt.ui.ExternalActionActivity",
    "im.xhksmgrgxt.ui.IntroActivity",
    "im.xhksmgrgxt.messenger.OpenChatReceiver",
    "im.xhksmgrgxt.ui.hui.visualcall.VisualCallActivity",
    "im.xhksmgrgxt.ui.hui.visualcall.VisualCallReceiveActivity",
    "im.xhksmgrgxt.ui.PopupNotificationActivity",
    "im.xhksmgrgxt.ui.VoIPActivity",
    "im.xhksmgrgxt.ui.VoIPGroupActivity",
    "im.xhksmgrgxt.ui.VoIPPermissionActivity",
    "im.xhksmgrgxt.ui.VoIPFeedbackActivity",
    "im.xhksmgrgxt.ui.TwoStepVerificationActivityNew",
    "im.xhksmgrgxt.keepalive.OnePxActivity",
    "com.blankj.utilcode.util.Utils$TransActivity",
    "com.bjz.comm.net.premission.PermissionActivity",
    "pub.devrel.easypermissions.AppSettingsDialogHolderActivity",
    "com.google.android.gms.auth.api.signin.internal.SignInHubActivity",
    "com.google.android.gms.common.api.GoogleApiActivity"
  ],
  "ai_response": "正在思考……",
  "_id": "66c541c90ec3414d193487f0",
  "static_analyze": {
    "basic_info": {
      "crc32": "8972157B",
      "detect_et": "2024-08-21 00:56:21",
      "file_tags": [
        "普通行为",
        "高危权限",
        "检测调试器"
      ],
      "md5": "b660141a39ca6bab28922b7b0711df3e",
      "name": "7b31a582e46170b57824a64c5ae9c0f6600e11f0.apk",
      "score": 6,
      "sha1": "6dbd35d839957ef277bf1c3f4052b1a8614986e5",
      "sha256": "eea7baf36aa3cfc129c88a9c2426132ce6b3f8ec3727761cf1f76c79add8dd04",
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
        "192.168.1.4",
        "192.200.1.242",
        "api.map.baidu.com"
      ],
      "emails": [],
      "ips": [],
      "urls": [
        "http://192.168.1.4:20000/",
        "http://192.200.1.242:1999/",
        "http://api.map.baidu.com/direction?",
        "http://api.map.baidu.com/place/detail?uid=",
        "http://api.map.baidu.com/place/search?",
        "http://api.map.baidu.com/sdkproxy/lbs_androidsdk/apimap/v1/"
      ]
    },
    "exiftool_metadata": {},
    "metadata": {},
    "pe_exports": [],
    "pe_head": {},
    "pe_imports": [],
    "pe_resources": [],
    "pe_sections": [],
    "signature": [
      {
        "end_time": "2052-01-03 08:02:58+00:00",
        "issuer": "C=CN, ST=jU66IE8, L=N7FemWg, O=VOltEyp, OU=OiuxGFB, CN=Hns76iT",
        "serial_number": "1084439782",
        "sha1_fingerprint": "bf47885aecccccadafa6bd334b19fd165d70ae4f",
        "sha256_fingerprint": "0c5c2e8f953b3aba1f291e2f27f70dd4ee2a8dc3896a896fa00fcd2de4249cbb",
        "start_time": "2024-08-17 08:02:58+00:00",
        "subject": "C=CN, ST=jU66IE8, L=N7FemWg, O=VOltEyp, OU=OiuxGFB, CN=Hns76iT"
      }
    ],
    "static": {}
  },

  "threat_analyze": {
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
        "content": [],
        "description_chinese": "请求internet操作",
        "format": "",
        "name": "android_internet",
        "severity": 3,
        "type": ""
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
        "content": [],
        "description_chinese": "频繁索权",
        "format": "left-right",
        "name": "android_frequent_permission",
        "severity": 3,
        "type": "generic"
      },
      {
        "content": [],
        "description_chinese": "存在过度索权",
        "format": "",
        "name": "android_fgd_permission",
        "severity": 3,
        "type": ""
      },
      {
        "content": [],
        "description_chinese": "获取运行APP信息",
        "format": "",
        "name": "android_get_running",
        "severity": 0,
        "type": ""
      },
      {
        "content": [
          {
            "method": "loadDex",
            "type": "generic",
            "value": "[\"/data/app/yl.cll.im.nenif-1/base.apk\"]"
          }
        ],
        "description_chinese": "加载dex文件操作",
        "format": "left-right",
        "name": "android_load_dex",
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
            "method": "show",
            "type": "generic",
            "value": "None"
          },
          {
            "method": "hide",
            "type": "generic",
            "value": "None"
          }
        ],
        "description_chinese": "对话框窗体显示或者隐藏",
        "format": "left-right",
        "name": "android_show_hide_dialog",
        "severity": 0,
        "type": "generic"
      },
      {
        "content": [],
        "description_chinese": "通过startActivityForResult方法启动Activity",
        "format": "",
        "name": "android_start_activityforresult",
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
      "MICROPHONE": [
        "android.permission.RECORD_AUDIO"
      ],
      "PHONE": [
        "android.permission.READ_PHONE_STATE"
      ],
      "STORAGE": [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE"
      ]
    },
    "task_id": "1c18959d514634b7b85dcebd77661019c122b454",
    "ti": {
      "data": [
        {
          "family": [],
          "ioc": "193.182.111.142",
          "ioc_type": "ip",
          "malicious_type": "",
          "score": 3,
          "tag": [
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
          "ioc": "203.208.50.98",
          "ioc_type": "ip",
          "malicious_type": "",
          "score": 3,
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
              "name": "ATTACKER",
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
              "name": "rtf",
              "source": 10,
              "tag_type": "reference"
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
          "ioc": "28e24a5005218e4481f136e7be8f0236",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "2bae7400bf0f66b89f05254b2bdc3ca7",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "52f4e1d10249f37aebdaf65e944734b2",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "550db439ffb27739cede07cd707d905d",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "785cebdcf925dd38967ae1009d433ca4",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "8.131.131.54",
          "ioc_type": "ip",
          "malicious_type": "",
          "score": 3,
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
              "name": "BGP",
              "source": 5,
              "tag_type": "reference"
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
          "ioc": "api.youliim1110.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "api.younmzbliim1222.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "chat-youliim-xc.chuanggggyetx1107.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "d905bb446770cb90bd26ddd75a5ee621",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "d983ddc3f913235d28a9daa0812de78b",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "e5533b26349258e6426b89c22d8de3fb",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "image.cnamedomain.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "2021ylim-apk.oss-accelerate.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "android.bugly.qq.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "astat.bugly.cros.wr.pvp.net",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "astat.bugly.qcloud.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "cloud.tencent.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "cn-beijing-ds-2079.oss-acc.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "ds-2079.oss-acc-allline.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "feedback.cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "imgcache.qq.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "nav.cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "nav2-cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "ns.adobe.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "oss-cn-hangzhou.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "oss.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "s3.amazonaws.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "stats.cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "www.baidu.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
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
          "value": "193.182.111.142"
        },
        {
          "_type": "ip",
          "value": "203.208.50.98"
        },
        {
          "_type": "ip",
          "value": "8.131.131.54"
        },
        {
          "_type": "domain",
          "value": "ns.adobe.com"
        },
        {
          "_type": "domain",
          "value": "android.bugly.qq.com"
        },
        {
          "_type": "domain",
          "value": "nav2-cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "api.younmzbliim1222.com"
        },
        {
          "_type": "domain",
          "value": "api.youliim1110.com"
        },
        {
          "_type": "domain",
          "value": "s3.amazonaws.com"
        },
        {
          "_type": "domain",
          "value": "chat-youliim-xc.chuanggggyetx1107.com"
        },
        {
          "_type": "domain",
          "value": "2021ylim-apk.oss-accelerate.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com"
        },
        {
          "_type": "domain",
          "value": "ds-2079.oss-acc-allline.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "feedback.cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "oss.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "astat.bugly.qcloud.com"
        },
        {
          "_type": "domain",
          "value": "imgcache.qq.com"
        },
        {
          "_type": "domain",
          "value": "astat.bugly.cros.wr.pvp.net"
        },
        {
          "_type": "domain",
          "value": "cloud.tencent.com"
        },
        {
          "_type": "domain",
          "value": "image.cnamedomain.com"
        },
        {
          "_type": "domain",
          "value": "www.baidu.com"
        },
        {
          "_type": "domain",
          "value": "oss-cn-hangzhou.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "nav.cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "stats.cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "cn-beijing-ds-2079.oss-acc.aliyuncs.com"
        },
        {
          "_type": "md5",
          "value": "28e24a5005218e4481f136e7be8f0236"
        },
        {
          "_type": "md5",
          "value": "52f4e1d10249f37aebdaf65e944734b2"
        },
        {
          "_type": "md5",
          "value": "2bae7400bf0f66b89f05254b2bdc3ca7"
        },
        {
          "_type": "md5",
          "value": "550db439ffb27739cede07cd707d905d"
        },
        {
          "_type": "md5",
          "value": "785cebdcf925dd38967ae1009d433ca4"
        },
        {
          "_type": "md5",
          "value": "d905bb446770cb90bd26ddd75a5ee621"
        },
        {
          "_type": "md5",
          "value": "d983ddc3f913235d28a9daa0812de78b"
        },
        {
          "_type": "md5",
          "value": "e5533b26349258e6426b89c22d8de3fb"
        }
      ],
      "total": 33
    }
  },
  "dropfile": [
    {
      "crc32": "AC622791",
      "md5": "550db439ffb27739cede07cd707d905d",
      "name": "libBugly.so",
      "path": "/yl.cll.im.nenif/lib/libBugly.so",
      "sha1": "cbe5ff4781a6fd7dd6eb2b7cb50601b3005bbab8",
      "sha256": "de8378e1d9f7c195eab418ca356f66798af35234c2fd6307548baaf6b24f47a4",
      "sha512": "d96d396f751487754844b7ac13427cbe5630d63f258735c01b41c0f8de31bc7f9d3dd450c26f4f2f05cb61d1eccc1307124ddf7d6d3b8233d3ed14904875d9aa",
      "size": 194280,
      "ssdeep": "3072:DvsIgWDk1LtmIhVU1yzGP/tx5Fq6T/FRlAj9SBy+D4GpMbAg:Quk1LkQO+GP/TPq6T/FRcVY4GpMbAg",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, BuildID[sha1]=083948186a9695cd26887a170a3d63615542de7c, stripped"
    },
    {
      "crc32": "2A738E43",
      "md5": "d905bb446770cb90bd26ddd75a5ee621",
      "name": "libRongIMLib.so",
      "path": "/yl.cll.im.nenif/lib/libRongIMLib.so",
      "sha1": "76635732d35d1cd4dabda1e84ae08f3c0323938b",
      "sha256": "741f8d0d7184c3d4454fbff91ceeff00a19298469507de800772221c5858dae6",
      "sha512": "ca5286b76e16696592e319b001fe0484c6297abf26eac376cbb02b933fadafb30adbf444454119508132fccd5e91d8908d376ff6a8fc622691b31cead1342d22",
      "size": 1394476,
      "ssdeep": "24576:92H6KmxnTtSBk+r1zDC0/Fk1+C6AUoSkGdwsy85iG4Bhr:kHeXGckkVNBh",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "52D61655",
      "md5": "2bae7400bf0f66b89f05254b2bdc3ca7",
      "name": "libijkffmpeg.so",
      "path": "/yl.cll.im.nenif/lib/libijkffmpeg.so",
      "sha1": "2ce2a9fcdee05aba3cd90a8cca26c96cb41bcc45",
      "sha256": "5379f43d28b6e525bc9c1327b487c1a6bfcbd68143c7cee6d451ae1359c1d62a",
      "sha512": "5869d46e97928ca6d17495853f4a37761c6942fa1c6e5c7f0a5f9696bc6c396bef0af169508868ea639b81f2de3451ab5847d26b9bb23ce40b2c9f8c2cb2a7f4",
      "size": 4144756,
      "ssdeep": "49152:Po7Jdkp2NgCm9kLo8CASE8woRZ+FH1j2zEvvF3YAn+OaBEqbkD31ZViaSh9L5:Po7Jdkp282/WzEvvrli9L",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "4AD25E39",
      "md5": "785cebdcf925dd38967ae1009d433ca4",
      "name": "libijkplayer.so",
      "path": "/yl.cll.im.nenif/lib/libijkplayer.so",
      "sha1": "f3f0eba0f6969579ad30e7f6de730a925dcca6a9",
      "sha256": "4ce769b349f50630109186e0252a38c919e61d69dbe571dc96a1b58e1bedab50",
      "sha512": "12a244139bc40c8664ed353942a15451d6a2d5150fc6dcee3fef7a4da84d080918400d976985dd9160b5ce9f7e0d223c046b7c5a302660c62b711220870a0762",
      "size": 404348,
      "ssdeep": "6144:2QHbhz1MO/c4SEHokzuEN9hhDc/3/DCL8y+u5FfpI9WuZ+YmvbKTVBT9jcDpCOKY:3h+O/cWHokiorcWL80/KZdmj0VxlyR",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "F9B156EF",
      "md5": "d983ddc3f913235d28a9daa0812de78b",
      "name": "libijksdl.so",
      "path": "/yl.cll.im.nenif/lib/libijksdl.so",
      "sha1": "ee5b7a49416f1b7f4be626e436b616b6665feab0",
      "sha256": "f8fed9ae1ec57469739fb88c13d49c3c1d04b7e5aa001a801781448a512d602e",
      "sha512": "11def07cae0eda528b0a2367b9c422828617ee2a7cd9723cc83d56f22061a0ae6092e5f5eab22585f6fd87a885a9b58c8bbd1d337dc507e308cc39c6fa817bff",
      "size": 617084,
      "ssdeep": "12288:M0Q7fs02oEvbqRzCrmdKN84xwiCGkZ0nA:M0HR2Nl484xwiCGk8A",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "CF41AEAF",
      "md5": "28e24a5005218e4481f136e7be8f0236",
      "name": "libsqlite.so",
      "path": "/yl.cll.im.nenif/lib/libsqlite.so",
      "sha1": "3e2ebe62395badac1cb77a4e6a163e3edab41346",
      "sha256": "4ad108690875ea44118c0c80ac73c4fa66b725e8a844dfcc1715ed4b5c4ba75e",
      "sha512": "106d217f0b9da65a0114ba7012941fc19a1481442f75a9f6e8bc20795a5f23462535e3a253148aa4a1ecd158913e1def8319f5639ca3b14fe432e28107082969",
      "size": 866476,
      "ssdeep": "24576:H3JRUf82yYHE+8y5J2+V9x16vgaA3Am7oc2/dOife4mVzQe:HP282BkOrWUpD",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, BuildID[sha1]=ea2656af678258361afce5f0fd01388664539e87, stripped"
    },
    {
      "crc32": "F387ADD4",
      "md5": "52f4e1d10249f37aebdaf65e944734b2",
      "name": "libyuv_to_rgb_jni.so",
      "path": "/yl.cll.im.nenif/lib/libyuv_to_rgb_jni.so",
      "sha1": "17d648f3798b9e0d69c8f32e31074fbd422445f8",
      "sha256": "2c8a33417390ada9af77702c748c197c455543c0b3e1009b47ba600f702d78e6",
      "sha512": "b18d50d7a675e4ecde7787c6801b66137864304e8b05a136aa0738bc644659cd99bbff7643e422235b46336468e7a8bc802d15e4d6392276b930ff229de0926d",
      "size": 26124,
      "ssdeep": "384:agg/MEwSnbXFeXJE2rmZjj9d/Vzl+rn/VzRO2pfs1DkfzvK:aX/LZX4X22rmx7twrts2pfs1Dkfz",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, BuildID[sha1]=5527219ad33ec2a935bfd4168dda277b27d09664, stripped"
    }
  ],
  "network_behavior": {
    "dns": {
      "data": [
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "2021ylim-apk.oss-accelerate.aliyuncs.com",
          "type": "AAAA"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "2021ylim-apk.oss-accelerate.aliyuncs.com",
          "type": "A"
        },
        {
          "answers": [
            {
              "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
              "data": "8.131.131.54",
              "loacation": "中国/北京市",
              "location": "中国/北京市",
              "type": "A"
            },
            {
              "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
              "data": "8.131.131.54",
              "loacation": "中国/北京市",
              "location": "中国/北京市",
              "type": "A"
            },
            {
              "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
              "data": "8.131.131.54",
              "loacation": "中国/北京市",
              "location": "中国/北京市",
              "type": "A"
            }
          ],
          "request": "cn-beijing-ds-2079.oss-acc.aliyuncs.com",
          "type": "A"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com",
          "type": "AAAA"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com",
          "type": "A"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com",
          "type": "AAAA"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com",
          "type": "A"
        },
        {
          "answers": [],
          "request": "api.youliim1110.com",
          "type": "AAAA"
        },
        {
          "answers": [],
          "request": "api.youliim1110.com",
          "type": "A"
        },
        {
          "answers": [],
          "request": "api.younmzbliim1222.com",
          "type": "AAAA"
        },
        {
          "answers": [],
          "request": "api.younmzbliim1222.com",
          "type": "A"
        },
        {
          "answers": [],
          "request": "chat-youliim-xc.chuanggggyetx1107.com",
          "type": "AAAA"
        },
        {
          "answers": [],
          "request": "chat-youliim-xc.chuanggggyetx1107.com",
          "type": "A"
        }
      ],
      "total": 13
    },
    "http": {
      "data": [
        {
          "content": {
            "Accept-Encoding": "gzip",
            "Connection": "Keep-Alive",
            "Host": "2021ylim-apk.oss-accelerate.aliyuncs.com",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; AOSP on IA Emulator Build/NRD90M)",
            "start_line": "GET /xcbe36.txt HTTP/1.1"
          },
          "method": "GET",
          "url": "http://2021ylim-apk.oss-accelerate.aliyuncs.com/xcbe36.txt",
          "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; AOSP on IA Emulator Build/NRD90M)"
        }
      ],
      "total": 1
    },
    "session": {
      "data": [
        {
          "asn": "AS42675 Obehosting AB",
          "ip": "193.182.111.142",
          "latitude": "59.337375",
          "location": "瑞典/斯德哥尔摩省",
          "longitude": "18.060513",
          "port": 123,
          "scheme": "udp"
        },
        {
          "asn": "AS24424 Beijing Gu Xiang Information Technology Co.,Ltd.",
          "ip": "203.208.50.98",
          "latitude": "39.902798",
          "location": "中国/北京市",
          "longitude": "116.401159",
          "port": 443,
          "scheme": "tcp"
        },
        {
          "asn": "AS24424 Beijing Gu Xiang Information Technology Co.,Ltd.",
          "ip": "203.208.50.98",
          "latitude": "39.902798",
          "location": "中国/北京市",
          "longitude": "116.401159",
          "port": 80,
          "scheme": "tcp"
        },
        {
          "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
          "ip": "8.131.131.54",
          "latitude": "39.902798",
          "location": "中国/北京市",
          "longitude": "116.401159",
          "port": 80,
          "scheme": "tcp"
        }
      ],
      "total": 4
    }
  },
  "host_behavior": {
    "apksq": {
      "sq_info": {
        "android_fgd_permission": [
          "android.permission.CAMERA",
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ],
        "android_frequent_permission": [
          "android.permission.CAMERA",
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ]
      },
      "taint_info": {}
    },
    "hostbehavior": {
      "api_binder": [
        {
          "exec": 1,
          "sensitive": 0,
          "title": "Activity初始化",
          "value": [
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@7b12542\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@7b12542"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@f6b36c5\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@f6b36c5"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@d37306a\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@d37306a"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@52ee402\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@52ee402"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@a18f037\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@a18f037"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@70bb4cd\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@70bb4cd"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@a830be6\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@a830be6"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@39b355a\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@39b355a"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@5f469c3\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@5f469c3"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@421c02\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@421c02"
            }
          ]
        },
        {
          "exec": 1,
          "sensitive": 0,
          "title": "获取系统服务",
          "value": [
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@ed862c3",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@568139d",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@8bfc20b",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@33c32f0",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@1784c1d",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@6e77ad9",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@bdd1de0",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@138f906",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@1f9f87e",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@fc23dd2",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@8f34ad4",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@1c5c13a",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@3f72313",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@9ed58a1",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@74f73ac",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@5d4403d",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@ea63415",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@d65b29f",
              "this": ""
            },
            {
              "args": "[\"audio\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.media.AudioManager@3ba4133",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@9fdae15",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@6178044",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@cf4062a",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@206cf43",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@f0e6923",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@6e76016",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@ffe405",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@3edbed7",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@d9efe10",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@4eca46f",
              "this": ""
            },
            {
              "args": "[\"audio\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.media.AudioManager@e71e06f",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@16b9864",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@585996",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@ec69d8c",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@899b9bd",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@ba4eb6",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@d46175e",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@b73c2ed",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@3a0ca4a",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@b9a8c42",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@e3c8ef",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@404680e",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@41961c4",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@e32f695",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@5a8ac33",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@ea5426",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@6aeac37",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@b1128ac",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@6dfb3ee",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@bc0cca6",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@565f541",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@772d7cf",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@f7782e4",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@d37306a",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@3b52329",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@34756d4",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@e799a74",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@63a7140",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@ecc8333",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@c293439",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@9c47cf8",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@f548b7e",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@4fc3d87",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@bdf6967",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@2d8e4aa",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@3b52329",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@693aa55",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@6baa09d",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@8265b77",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@717ecd0",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@b37bf3d",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@222c78a",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@29baf8e",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@5ef7943",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@6a9d9b2",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@3d813ff",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@32c80d0",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@903959e",
              "this": ""
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "启动Activity",
          "value": [
            {
              "class": "android.app.Activity",
              "method": "startActivity"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "处理广播",
          "value": [
            {
              "class": "android.app.ActivityThread",
              "method": "handleReceiver"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "注册广播接收者",
          "value": [
            {
              "class": "android.app.ContextImpl",
              "method": "registerReceiver"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "服务初始化",
          "value": [
            {
              "class": "android.app.Service",
              "method": "onCreate"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "启动服务",
          "value": [
            {
              "class": "android.content.ContextWrapper",
              "method": "startService"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "发送广播",
          "value": [
            {
              "class": "android.content.ContextWrapper",
              "method": "sendBroadcast"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "启动Activity",
          "value": [
            {
              "class": "android.content.ContextWrapper",
              "method": "startActivity"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "控制电源状态",
          "value": [
            {
              "class": "android.os.PowerManager",
              "method": "newWakeLock"
            }
          ]
        }
      ],
      "api_content": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取帐号类型",
          "value": [
            {
              "class": "android.accounts.AccountManager",
              "method": "getAccountsByType"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取帐号信息",
          "value": [
            {
              "class": "android.accounts.AccountManager",
              "method": "getAccounts"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取本地安装的APP列表",
          "value": [
            {
              "class": "android.app.ApplicationPackageManager",
              "method": "getInstalledPackages"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取纬度信息",
          "value": [
            {
              "class": "android.location.Location",
              "method": "getLatitude"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取经度信息",
          "value": [
            {
              "class": "android.location.Location",
              "method": "getLongitude"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "打开音频录音",
          "value": [
            {
              "class": "android.media.AudioRecord",
              "method": "startRecording"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "打开视频录像",
          "value": [
            {
              "class": "android.media.MediaRecorder",
              "method": "start"
            }
          ]
        }
      ],
      "api_crypto": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行加密与解密",
          "value": [
            {
              "class": "javax.crypto.Cipher",
              "method": "update"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行加密与解密",
          "value": [
            {
              "class": "javax.crypto.Cipher",
              "method": "doFinal"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行加密与解密",
          "value": [
            {
              "class": "javax.crypto.Mac",
              "method": "doFinal"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "秘钥初始化",
          "value": [
            {
              "class": "javax.crypto.spec.SecretKeySpec",
              "method": "javax.crypto.spec.SecretKeySpec"
            }
          ]
        }
      ],
      "api_dex": [
        {
          "exec": 1,
          "sensitive": 1,
          "title": "打开DEX文件",
          "value": [
            {
              "args": "[\"/data/app/yl.cll.im.nenif-1/base.apk\", \"0\", \"dalvik.system.PathClassLoader[null]\", []]",
              "class": "dalvik.system.DexFile",
              "method": "openDexFile",
              "ret": "",
              "this": ""
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "查找库",
          "value": [
            {
              "class": "dalvik.system.BaseDexClassLoader",
              "method": "findLibrary"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载DEX",
          "value": [
            {
              "class": "dalvik.system.DexClassLoader",
              "method": "dalvik.system.DexClassLoader"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "DEX动态初始化",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "dalvik.system.DexFile"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载DEX",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "loadDex"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载DEX",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "load"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "动态加载类",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "loadClass"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载器初始化",
          "value": [
            {
              "class": "dalvik.system.PathClassLoader",
              "method": "dalvik.system.PathClassLoader"
            }
          ]
        }
      ],
      "api_fileio": [
        {
          "exec": 1,
          "sensitive": 0,
          "title": "判断文件是否存在",
          "value": [
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user_de/0/yl.cll.im.nenif"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user_de/0/yl.cll.im.nenif/code_cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/storage/emulated/0/Android/data"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/databases"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/databases/androidx.work.workdb"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/no_backup"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/userInfo.xml.bak"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/userInfo.xml"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/is_notification.xml.bak"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/is_notification.xml"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user_de/0/yl.cll.im.nenif/code_cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/databases"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/no_backup"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/domain.xml.bak"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/domain.xml"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "打开文件",
          "value": [
            {
              "class": "android.content.res.AssetManager",
              "method": "open"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "读取文件内容",
          "value": [
            {
              "class": "java.io.FileInputStream",
              "method": "read"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "写入文件",
          "value": [
            {
              "class": "java.io.FileOutputStream",
              "method": "write"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "打开文件",
          "value": [
            {
              "class": "libcore.io.IoBridge",
              "method": "open"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "关闭文件",
          "value": [
            {
              "class": "libcore.io.IoBridge",
              "method": "close"
            }
          ]
        }
      ],
      "api_fingerprint": [
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取设备MAC",
          "value": [
            {
              "class": "android.net.wifi.WifiInfo",
              "method": "getMacAddress"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "读取系统安全设置信息",
          "value": [
            {
              "class": "android.provider.Settings$Secure",
              "method": "getString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取设备的软件版本号",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDeviceSoftwareVersion"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取设备运营商名称",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkOperatorName"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取设备IMSI",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getSubscriberId"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取数据连接状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDataState"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取附近移动终端信息",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNeighboringCellInfo"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取数据活动状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDataActivity"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取移动终端类型",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getPhoneType"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取网络类型",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkType"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取ISO标准的国家码",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkCountryIso"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "获取设备手机号码",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getLine1Number"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "读取SIM卡服务商名称",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getSimOperatorName"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取设备运营商",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkOperator"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取基站位置信息",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getCellLocation"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取SIM卡的国家码",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getSimCountryIso"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取设备IMEI",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDeviceId"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取电话状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getCallState"
            }
          ]
        }
      ],
      "api_generic": [
        {
          "exec": 1,
          "sensitive": 1,
          "title": "设置组件启用状态",
          "value": [
            {
              "args": "[{\"mPackage\": \"yl.cll.im.nenif\", \"mClass\": \"androidx.work.impl.background.systemjob.SystemJobService\"}, \"1\", \"1\"]",
              "class": "android.app.ApplicationPackageManager",
              "method": "setComponentEnabledSetting",
              "ret": "",
              "this": ""
            }
          ]
        },
        {
          "exec": 1,
          "sensitive": 0,
          "title": "添加显示页面",
          "value": [
            {
              "args": "[\"DecorView@c715ac3[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@59f563f[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@ef659bf[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@3885749[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@d9f88f4[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@6111158[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@f533c7b[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@7d142dc[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@e918955[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@1d13933[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@e722ca6[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@5d5b064[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@1a6818f[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@5b16561[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@4fa7df3[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@45cd107[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@fee8d49[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@fb13210[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@98774a0[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@41e7b79[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@58abe05[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@fea51df[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@b31d654[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@e7f343c[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "发送通知",
          "value": [
            {
              "class": "android.app.NotificationManager",
              "method": "notify"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "重置密码",
          "value": [
            {
              "class": "android.app.admin.DevicePolicyManager",
              "method": "resetPassword"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "中止广播",
          "value": [
            {
              "class": "android.content.BroadcastReceiver",
              "method": "abortBroadcast"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "注册内容观察者",
          "value": [
            {
              "class": "android.content.ContentResolver",
              "method": "registerContentObserver"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "修改内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "insert"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "删除内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "delete"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "查询内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "query"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "新建内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "create"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "设置手机流量数据开关",
          "value": [
            {
              "class": "android.net.ConnectivityManager",
              "method": "setMobileDataEnabled"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "设置手机WIFI数据开关",
          "value": [
            {
              "class": "android.net.ConnectivityManager",
              "method": "setWifiEnabled"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "监听手机状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "listen"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "Base64编码",
          "value": [
            {
              "class": "android.util.Base64",
              "method": "encodeToString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "Base64编码",
          "value": [
            {
              "class": "android.util.Base64",
              "method": "encode"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "Base64解码",
          "value": [
            {
              "class": "android.util.Base64",
              "method": "decode"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "选择Proxy代理",
          "value": [
            {
              "class": "java.net.ProxySelectorImpl",
              "method": "select"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "切换Proxy代理",
          "value": [
            {
              "class": "org.apache.http.impl.client.DefaultHttpClient",
              "method": "switch_proxy"
            }
          ]
        }
      ],
      "api_network": [
        {
          "exec": 1,
          "sensitive": 0,
          "title": "访问URL",
          "value": [
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:http://2021ylim-apk.oss-accelerate.aliyuncs.com/xcbe36.txt",
              "this": "http://2021ylim-apk.oss-accelerate.aliyuncs.com/xcbe36.txt"
            },
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:https://api.youliim1110.com:8786",
              "this": "https://api.youliim1110.com:8786"
            },
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:https://chat-youliim-xc.chuanggggyetx1107.com:8786",
              "this": "https://chat-youliim-xc.chuanggggyetx1107.com:8786"
            },
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:https://api.younmzbliim1222.com:8786",
              "this": "https://api.younmzbliim1222.com:8786"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView访问URL",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "loadUrl"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView初始化",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "addJavascriptInterface"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView初始化",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "setWebViewClient"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView初始化",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "setWebChromeClient"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "访问URL",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "connect"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "接收网络数据",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "recvfrom"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "发送网络数据",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "sendto"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "关闭连接",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "close"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行网络请求操作",
          "value": [
            {
              "class": "org.apache.http.impl.client.AbstractHttpClient",
              "method": "execute"
            }
          ]
        }
      ],
      "api_reflect": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "反射调用Java类",
          "value": [
            {
              "class": "java.lang.reflect.Method",
              "method": "invoke"
            }
          ]
        }
      ],
      "api_runtime": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "杀后台进程",
          "value": [
            {
              "class": "android.app.ActivityManager",
              "method": "killBackgroundProcesses"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "设置闹钟",
          "value": [
            {
              "class": "android.app.AlarmManager",
              "method": "setAlarmClock"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "检测调试器是否连接",
          "value": [
            {
              "class": "android.os.Debug",
              "method": "isDebuggerConnected"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "杀进程",
          "value": [
            {
              "class": "android.os.Process",
              "method": "killProcess"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "启动进程",
          "value": [
            {
              "class": "java.lang.ProcessBuilder",
              "method": "start"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "执行命令",
          "value": [
            {
              "class": "java.lang.ProcessManager",
              "method": "exec"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "动态加载库",
          "value": [
            {
              "class": "java.lang.Runtime",
              "method": "load"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "动态加载库",
          "value": [
            {
              "class": "java.lang.Runtime",
              "method": "loadLibrary"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "执行命令",
          "value": [
            {
              "class": "java.lang.Runtime",
              "method": "exec"
            }
          ]
        }
      ],
      "api_sms": [
        {
          "exec": 0,
          "sensitive": 2,
          "title": "发送sms短消息",
          "value": [
            {
              "class": "android.telephony.SmsManager",
              "method": "sendTextMessage"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "发送sms短消息",
          "value": [
            {
              "class": "android.telephony.SmsManager",
              "method": "sendMultipartTextMessage"
            }
          ]
        }
      ],
      "api_sp": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putBoolean"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putInt"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putLong"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putFloat"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "put"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getBoolean"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getInt"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getLong"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getFloat"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "get"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "android.content.ContentValues写操作",
          "value": [
            {
              "class": "android.content.ContentValues",
              "method": "put"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "android.content.ContentValues读操作",
          "value": [
            {
              "class": "android.content.ContentValues",
              "method": "get"
            }
          ]
        }
      ]
    }
  },
  "screenshot": []
};


const report_sample3 = {
  "qid": "AZFy1EDhSZq0HOVfcZG7",
  "application_name": "옌치",
  "package_name": "com.dyuiwi.weqeijougydtrfchgmo",
  "md5": "646fb3b48d09027a49a7126cb5ac8942",
  "version_code": "80069",
  "version_name": "9.6.6",
  "target_sdk_version": "31",
  "architecture": {
    "armeabi": false,
    "armeabi-v7a": true,
    "arm64-v8a": true,
    "x86": true,
    "x86_64": true
  },
  "SHA1": null,
  "permissions": [
    "android.permission.BLUETOOTH_CONNECT",
    "android.permission.WAKE_LOCK",
    "android.permission.INSTALL_SHORTCUT",
    "com.dyuiwi.weqeijougydtrfchgmo_com.google.android.providers.gsf.permission.READ_GSERVICES",
    "android.permission.INTERNET",
    "android.permission.ACCESS_BACKGROUND_LOCATION",
    "com.dyuiwi.weqeijougydtrfchgmo_me.everything.badger.permission.BADGE_COUNT_READ",
    "android.permission.USE_FINGERPRINT",
    "com.dyuiwi.weqeijougydtrfchgmo_com.htc.launcher.permission.UPDATE_SHORTCUT",
    "com.dyuiwi.weqeijougydtrfchgmo_com.huawei.android.launcher.permission.READ_SETTINGS",
    "android.permission.CALL_PHONE",
    "android.permission.CAMERA",
    "com.android.launcher.permission.UNINSTALL_SHORTCUT",
    "android.permission.MANAGE_OWN_CALLS",
    "android.permission.RECORD_AUDIO",
    "android.permission.READ_CALL_LOG",
    "android.permission.ACCESS_FINE_LOCATION",
    "android.permission.READ_APP_BADGE",
    "com.dyuiwi.weqeijougydtrfchgmo_com.sec.android.provider.badge.permission.WRITE",
    "com.dyuiwi.weqeijougydtrfchgmo_com.huawei.android.launcher.permission.WRITE_SETTINGS",
    "com.dyuiwi.weqeijougydtrfchgmo_com.google.android.c2dm.permission.RECEIVE",
    "android.permission.READ_PHONE_NUMBERS",
    "com.dyuiwi.weqeijougydtrfchgmo_com.sec.android.provider.badge.permission.READ",
    "android.permission.WRITE_CONTACTS",
    "com.dyuiwi.weqeijougydtrfchgmo_com.sonymobile.home.permission.PROVIDER_INSERT_BADGE",
    "com.dyuiwi.weqeijougydtrfchgmo_com.majeur.launcher.permission.UPDATE_BADGE",
    "android.permission.AUTHENTICATE_ACCOUNTS",
    "android.permission.READ_EXTERNAL_STORAGE",
    "android.permission.VIBRATE",
    "com.dyuiwi.weqeijougydtrfchgmo_com.sonyericsson.home.permission.BROADCAST_BADGE",
    "com.dyuiwi.weqeijougydtrfchgmo_com.google.android.gms.permission.ACTIVITY_RECOGNITION",
    "com.android.launcher.permission.INSTALL_SHORTCUT",
    "com.dyuiwi.weqeijougydtrfchgmo.permission.MAPS_RECEIVE",
    "android.permission.ACCESS_WIFI_STATE",
    "android.permission.REQUEST_INSTALL_PACKAGES",
    "android.permission.ACCESS_NETWORK_STATE",
    "android.permission.READ_CONTACTS",
    "android.permission.USE_BIOMETRIC",
    "android.permission.READ_CLIPBOARD",
    "android.permission.WRITE_EXTERNAL_STORAGE",
    "android.permission.READ_PHONE_STATE",
    "com.dyuiwi.weqeijougydtrfchgmo_freemme.permission.msa",
    "com.dyuiwi.weqeijougydtrfchgmo.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION",
    "android.permission.MANAGE_ACCOUNTS",
    "com.dyuiwi.weqeijougydtrfchgmo_com.oppo.launcher.permission.READ_SETTINGS",
    "com.dyuiwi.weqeijougydtrfchgmo_com.asus.msa.SupplementaryDID.ACCESS",
    "android.permission.READ_PROFILE",
    "android.permission.WRITE_SYNC_SETTINGS",
    "com.dyuiwi.weqeijougydtrfchgmo_com.oppo.launcher.permission.WRITE_SETTINGS",
    "android.permission.WRITE_SETTINGS",
    "android.permission.BLUETOOTH",
    "android.permission.READ_SYNC_SETTINGS",
    "android.permission.FOREGROUND_SERVICE",
    "com.dyuiwi.weqeijougydtrfchgmo_com.htc.launcher.permission.READ_SETTINGS",
    "android.permission.MODIFY_AUDIO_SETTINGS",
    "android.permission.USE_FULL_SCREEN_INTENT",
    "com.dyuiwi.weqeijougydtrfchgmo_com.huawei.android.launcher.permission.CHANGE_BADGE",
    "android.permission.RECEIVE_BOOT_COMPLETED",
    "com.dyuiwi.weqeijougydtrfchgmo_com.anddoes.launcher.permission.UPDATE_COUNT",
    "com.dyuiwi.weqeijougydtrfchgmo_me.everything.badger.permission.BADGE_COUNT_WRITE",
    "android.permission.SYSTEM_ALERT_WINDOW",
    "com.android.vending.BILLING",
    "android.permission.ACCESS_COARSE_LOCATION",
    "android.permission.GET_ACCOUNTS"
  ],
  "activities": [
    "org.telegram.messenger.GoogleVoiceClientActivity",
    "org.telegram.ui.LaunchActivity",
    "org.telegram.ui.BubbleActivity",
    "org.telegram.ui.ShareActivity",
    "org.telegram.ui.ExternalActionActivity",
    "org.telegram.ui.ChatsWidgetConfigActivity",
    "org.telegram.ui.ContactsWidgetConfigActivity",
    "org.telegram.messenger.OpenChatReceiver",
    "org.telegram.ui.PopupNotificationActivity",
    "org.telegram.ui.VoIPPermissionActivity",
    "org.telegram.ui.VoIPFeedbackActivity",
    "com.lxj.xpopup.util.XPermission$PermissionActivity",
    "com.google.android.gms.auth.api.signin.internal.SignInHubActivity",
    "com.google.android.gms.common.api.GoogleApiActivity",
    "com.android.billingclient.api.ProxyBillingActivity"
  ],
  "static_analyze": {
    "basic_info": {
      "crc32": "",
      "detect_et": "",
      "file_tags": [
        "普通行为",
        "高危权限",
        "检测调试器"
      ],
      "md5": "646fb3b48d09027a49a7126cb5ac8942",
      "name": "K3305995100002024080017.apk",
      "score": 10,
      "sha1": "9574782a770f657cf4d71cdf667427070d74c5ed",
      "sha256": "31b6add6103d33e14dbb8ba54792af3cdd5a92ea3fcc24682e46459928e1dd76",
      "sha512": "01c57d35c2d9f9f606bf316f3c5a7b00472a291e0ec6bb50a4b637395765da514b771d0bc053d3ccf258d744c482b5a189702ea611d2412005a815e321194c4e",
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
        "1.117.189.122",
        "1.15.81.219",
        "1.15.89.53",
        "1.30.8.153",
        "1.58.219.129",
        "110.42.8.215",
        "117.24.6.15",
        "125.77.166.117",
        "180.188.18.171",
        "27.151.172.32"
      ],
      "emails": [
        "sms@telegram.org",
        "sms@telegram.org",
        "support@stripe.com"
      ],
      "ips": [
        "1.117.189.122",
        "1.15.81.219",
        "1.15.89.53",
        "1.30.8.153",
        "1.58.219.129",
        "110.42.8.215",
        "117.24.6.15",
        "125.77.166.117",
        "180.188.18.171",
        "27.151.172.32"
      ],
      "urls": [
        "http://1.117.189.122:8088/TruckMng/Content/Images/dsico.ico",
        "http://1.15.81.219:8088/static/common/images/icon-play.png",
        "http://1.15.89.53:8088/Content/img/login-input-icon.png",
        "http://1.30.8.153:8088/images/yeastar.ico",
        "http://1.58.219.129:8088/source?get=Vesn%20Data.gif",
        "http://110.42.8.215:8088/uploadfiles/2019/07/201907301107370266.jpg",
        "http://117.24.6.15:8088/uploadfiles/2019/07/201907301107370266.jpg",
        "http://125.77.166.117:8088/uploadfiles/2019/07/201907301107370266.jpg",
        "http://180.188.18.171:8088/uploadfiles/2019/07/201907301107370266.jpg",
        "http://27.151.172.32:8088/dist/OEM/GOCLOUD/favicon.ico"
      ]
    },
    "exiftool_metadata": {},
    "metadata": {},
    "pe_exports": [],
    "pe_head": {},
    "pe_imports": [],
    "pe_resources": [],
    "pe_sections": [],
    "signature": [],
    "static": {}
  },
  "ai_response": "正在思考……",
  "_id": "66c555100ec3414d193497a5",

  "threat_analyze": {
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
        "content": [],
        "description_chinese": "请求internet操作",
        "format": "",
        "name": "android_internet",
        "severity": 3,
        "type": ""
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
        "content": [],
        "description_chinese": "频繁索权",
        "format": "left-right",
        "name": "android_frequent_permission",
        "severity": 3,
        "type": "generic"
      },
      {
        "content": [],
        "description_chinese": "存在过度索权",
        "format": "",
        "name": "android_fgd_permission",
        "severity": 3,
        "type": ""
      },
      {
        "content": [],
        "description_chinese": "获取运行APP信息",
        "format": "",
        "name": "android_get_running",
        "severity": 0,
        "type": ""
      },
      {
        "content": [
          {
            "method": "loadDex",
            "type": "generic",
            "value": "[\"/data/app/yl.cll.im.nenif-1/base.apk\"]"
          }
        ],
        "description_chinese": "加载dex文件操作",
        "format": "left-right",
        "name": "android_load_dex",
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
            "method": "show",
            "type": "generic",
            "value": "None"
          },
          {
            "method": "hide",
            "type": "generic",
            "value": "None"
          }
        ],
        "description_chinese": "对话框窗体显示或者隐藏",
        "format": "left-right",
        "name": "android_show_hide_dialog",
        "severity": 0,
        "type": "generic"
      },
      {
        "content": [],
        "description_chinese": "通过startActivityForResult方法启动Activity",
        "format": "",
        "name": "android_start_activityforresult",
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
      "MICROPHONE": [
        "android.permission.RECORD_AUDIO"
      ],
      "PHONE": [
        "android.permission.READ_PHONE_STATE"
      ],
      "STORAGE": [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE"
      ]
    },
    "task_id": "1c18959d514634b7b85dcebd77661019c122b454",
    "ti": {
      "data": [
        {
          "family": [],
          "ioc": "193.182.111.142",
          "ioc_type": "ip",
          "malicious_type": "",
          "score": 3,
          "tag": [
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
          "ioc": "203.208.50.98",
          "ioc_type": "ip",
          "malicious_type": "",
          "score": 3,
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
              "name": "ATTACKER",
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
              "name": "rtf",
              "source": 10,
              "tag_type": "reference"
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
          "ioc": "28e24a5005218e4481f136e7be8f0236",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "2bae7400bf0f66b89f05254b2bdc3ca7",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "52f4e1d10249f37aebdaf65e944734b2",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "550db439ffb27739cede07cd707d905d",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "785cebdcf925dd38967ae1009d433ca4",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "8.131.131.54",
          "ioc_type": "ip",
          "malicious_type": "",
          "score": 3,
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
              "name": "BGP",
              "source": 5,
              "tag_type": "reference"
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
          "ioc": "api.youliim1110.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "api.younmzbliim1222.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "chat-youliim-xc.chuanggggyetx1107.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "d905bb446770cb90bd26ddd75a5ee621",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "d983ddc3f913235d28a9daa0812de78b",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "e5533b26349258e6426b89c22d8de3fb",
          "ioc_type": "md5",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": 4,
          "ti_type": [
            "未知"
          ]
        },
        {
          "family": [],
          "ioc": "image.cnamedomain.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 3,
          "tag": [],
          "ti_ioc_tag": -1,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "2021ylim-apk.oss-accelerate.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "android.bugly.qq.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "astat.bugly.cros.wr.pvp.net",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "astat.bugly.qcloud.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "cloud.tencent.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "cn-beijing-ds-2079.oss-acc.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "ds-2079.oss-acc-allline.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "feedback.cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "imgcache.qq.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "nav.cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "nav2-cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "ns.adobe.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "oss-cn-hangzhou.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "oss.aliyuncs.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "s3.amazonaws.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "stats.cn.ronghub.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
          "tag": [],
          "ti_ioc_tag": 2,
          "ti_type": [
            ""
          ]
        },
        {
          "family": [],
          "ioc": "www.baidu.com",
          "ioc_type": "domain",
          "malicious_type": "",
          "score": 0,
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
          "value": "193.182.111.142"
        },
        {
          "_type": "ip",
          "value": "203.208.50.98"
        },
        {
          "_type": "ip",
          "value": "8.131.131.54"
        },
        {
          "_type": "domain",
          "value": "ns.adobe.com"
        },
        {
          "_type": "domain",
          "value": "android.bugly.qq.com"
        },
        {
          "_type": "domain",
          "value": "nav2-cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "api.younmzbliim1222.com"
        },
        {
          "_type": "domain",
          "value": "api.youliim1110.com"
        },
        {
          "_type": "domain",
          "value": "s3.amazonaws.com"
        },
        {
          "_type": "domain",
          "value": "chat-youliim-xc.chuanggggyetx1107.com"
        },
        {
          "_type": "domain",
          "value": "2021ylim-apk.oss-accelerate.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com"
        },
        {
          "_type": "domain",
          "value": "ds-2079.oss-acc-allline.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "feedback.cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "oss.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "astat.bugly.qcloud.com"
        },
        {
          "_type": "domain",
          "value": "imgcache.qq.com"
        },
        {
          "_type": "domain",
          "value": "astat.bugly.cros.wr.pvp.net"
        },
        {
          "_type": "domain",
          "value": "cloud.tencent.com"
        },
        {
          "_type": "domain",
          "value": "image.cnamedomain.com"
        },
        {
          "_type": "domain",
          "value": "www.baidu.com"
        },
        {
          "_type": "domain",
          "value": "oss-cn-hangzhou.aliyuncs.com"
        },
        {
          "_type": "domain",
          "value": "nav.cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "stats.cn.ronghub.com"
        },
        {
          "_type": "domain",
          "value": "cn-beijing-ds-2079.oss-acc.aliyuncs.com"
        },
        {
          "_type": "md5",
          "value": "28e24a5005218e4481f136e7be8f0236"
        },
        {
          "_type": "md5",
          "value": "52f4e1d10249f37aebdaf65e944734b2"
        },
        {
          "_type": "md5",
          "value": "2bae7400bf0f66b89f05254b2bdc3ca7"
        },
        {
          "_type": "md5",
          "value": "550db439ffb27739cede07cd707d905d"
        },
        {
          "_type": "md5",
          "value": "785cebdcf925dd38967ae1009d433ca4"
        },
        {
          "_type": "md5",
          "value": "d905bb446770cb90bd26ddd75a5ee621"
        },
        {
          "_type": "md5",
          "value": "d983ddc3f913235d28a9daa0812de78b"
        },
        {
          "_type": "md5",
          "value": "e5533b26349258e6426b89c22d8de3fb"
        }
      ],
      "total": 33
    }
  },
  "dropfile": [
    {
      "crc32": "AC622791",
      "md5": "550db439ffb27739cede07cd707d905d",
      "name": "libBugly.so",
      "path": "/yl.cll.im.nenif/lib/libBugly.so",
      "sha1": "cbe5ff4781a6fd7dd6eb2b7cb50601b3005bbab8",
      "sha256": "de8378e1d9f7c195eab418ca356f66798af35234c2fd6307548baaf6b24f47a4",
      "sha512": "d96d396f751487754844b7ac13427cbe5630d63f258735c01b41c0f8de31bc7f9d3dd450c26f4f2f05cb61d1eccc1307124ddf7d6d3b8233d3ed14904875d9aa",
      "size": 194280,
      "ssdeep": "3072:DvsIgWDk1LtmIhVU1yzGP/tx5Fq6T/FRlAj9SBy+D4GpMbAg:Quk1LkQO+GP/TPq6T/FRcVY4GpMbAg",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, BuildID[sha1]=083948186a9695cd26887a170a3d63615542de7c, stripped"
    },
    {
      "crc32": "2A738E43",
      "md5": "d905bb446770cb90bd26ddd75a5ee621",
      "name": "libRongIMLib.so",
      "path": "/yl.cll.im.nenif/lib/libRongIMLib.so",
      "sha1": "76635732d35d1cd4dabda1e84ae08f3c0323938b",
      "sha256": "741f8d0d7184c3d4454fbff91ceeff00a19298469507de800772221c5858dae6",
      "sha512": "ca5286b76e16696592e319b001fe0484c6297abf26eac376cbb02b933fadafb30adbf444454119508132fccd5e91d8908d376ff6a8fc622691b31cead1342d22",
      "size": 1394476,
      "ssdeep": "24576:92H6KmxnTtSBk+r1zDC0/Fk1+C6AUoSkGdwsy85iG4Bhr:kHeXGckkVNBh",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "52D61655",
      "md5": "2bae7400bf0f66b89f05254b2bdc3ca7",
      "name": "libijkffmpeg.so",
      "path": "/yl.cll.im.nenif/lib/libijkffmpeg.so",
      "sha1": "2ce2a9fcdee05aba3cd90a8cca26c96cb41bcc45",
      "sha256": "5379f43d28b6e525bc9c1327b487c1a6bfcbd68143c7cee6d451ae1359c1d62a",
      "sha512": "5869d46e97928ca6d17495853f4a37761c6942fa1c6e5c7f0a5f9696bc6c396bef0af169508868ea639b81f2de3451ab5847d26b9bb23ce40b2c9f8c2cb2a7f4",
      "size": 4144756,
      "ssdeep": "49152:Po7Jdkp2NgCm9kLo8CASE8woRZ+FH1j2zEvvF3YAn+OaBEqbkD31ZViaSh9L5:Po7Jdkp282/WzEvvrli9L",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "4AD25E39",
      "md5": "785cebdcf925dd38967ae1009d433ca4",
      "name": "libijkplayer.so",
      "path": "/yl.cll.im.nenif/lib/libijkplayer.so",
      "sha1": "f3f0eba0f6969579ad30e7f6de730a925dcca6a9",
      "sha256": "4ce769b349f50630109186e0252a38c919e61d69dbe571dc96a1b58e1bedab50",
      "sha512": "12a244139bc40c8664ed353942a15451d6a2d5150fc6dcee3fef7a4da84d080918400d976985dd9160b5ce9f7e0d223c046b7c5a302660c62b711220870a0762",
      "size": 404348,
      "ssdeep": "6144:2QHbhz1MO/c4SEHokzuEN9hhDc/3/DCL8y+u5FfpI9WuZ+YmvbKTVBT9jcDpCOKY:3h+O/cWHokiorcWL80/KZdmj0VxlyR",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "F9B156EF",
      "md5": "d983ddc3f913235d28a9daa0812de78b",
      "name": "libijksdl.so",
      "path": "/yl.cll.im.nenif/lib/libijksdl.so",
      "sha1": "ee5b7a49416f1b7f4be626e436b616b6665feab0",
      "sha256": "f8fed9ae1ec57469739fb88c13d49c3c1d04b7e5aa001a801781448a512d602e",
      "sha512": "11def07cae0eda528b0a2367b9c422828617ee2a7cd9723cc83d56f22061a0ae6092e5f5eab22585f6fd87a885a9b58c8bbd1d337dc507e308cc39c6fa817bff",
      "size": 617084,
      "ssdeep": "12288:M0Q7fs02oEvbqRzCrmdKN84xwiCGkZ0nA:M0HR2Nl484xwiCGk8A",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, stripped"
    },
    {
      "crc32": "CF41AEAF",
      "md5": "28e24a5005218e4481f136e7be8f0236",
      "name": "libsqlite.so",
      "path": "/yl.cll.im.nenif/lib/libsqlite.so",
      "sha1": "3e2ebe62395badac1cb77a4e6a163e3edab41346",
      "sha256": "4ad108690875ea44118c0c80ac73c4fa66b725e8a844dfcc1715ed4b5c4ba75e",
      "sha512": "106d217f0b9da65a0114ba7012941fc19a1481442f75a9f6e8bc20795a5f23462535e3a253148aa4a1ecd158913e1def8319f5639ca3b14fe432e28107082969",
      "size": 866476,
      "ssdeep": "24576:H3JRUf82yYHE+8y5J2+V9x16vgaA3Am7oc2/dOife4mVzQe:HP282BkOrWUpD",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, BuildID[sha1]=ea2656af678258361afce5f0fd01388664539e87, stripped"
    },
    {
      "crc32": "F387ADD4",
      "md5": "52f4e1d10249f37aebdaf65e944734b2",
      "name": "libyuv_to_rgb_jni.so",
      "path": "/yl.cll.im.nenif/lib/libyuv_to_rgb_jni.so",
      "sha1": "17d648f3798b9e0d69c8f32e31074fbd422445f8",
      "sha256": "2c8a33417390ada9af77702c748c197c455543c0b3e1009b47ba600f702d78e6",
      "sha512": "b18d50d7a675e4ecde7787c6801b66137864304e8b05a136aa0738bc644659cd99bbff7643e422235b46336468e7a8bc802d15e4d6392276b930ff229de0926d",
      "size": 26124,
      "ssdeep": "384:agg/MEwSnbXFeXJE2rmZjj9d/Vzl+rn/VzRO2pfs1DkfzvK:aX/LZX4X22rmx7twrts2pfs1Dkfz",
      "type": "ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, BuildID[sha1]=5527219ad33ec2a935bfd4168dda277b27d09664, stripped"
    }
  ],
  "network_behavior": {
    "dns": {
      "data": [
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "2021ylim-apk.oss-accelerate.aliyuncs.com",
          "type": "AAAA"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "2021ylim-apk.oss-accelerate.aliyuncs.com",
          "type": "A"
        },
        {
          "answers": [
            {
              "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
              "data": "8.131.131.54",
              "loacation": "中国/北京市",
              "location": "中国/北京市",
              "type": "A"
            },
            {
              "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
              "data": "8.131.131.54",
              "loacation": "中国/北京市",
              "location": "中国/北京市",
              "type": "A"
            },
            {
              "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
              "data": "8.131.131.54",
              "loacation": "中国/北京市",
              "location": "中国/北京市",
              "type": "A"
            }
          ],
          "request": "cn-beijing-ds-2079.oss-acc.aliyuncs.com",
          "type": "A"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com",
          "type": "AAAA"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com",
          "type": "A"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com",
          "type": "AAAA"
        },
        {
          "answers": [
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            },
            {
              "asn": "-",
              "data": "cn-beijing-ds-2079.oss-acc.aliyuncs.com.",
              "loacation": "-/-",
              "location": "-/-",
              "type": "CNAME"
            }
          ],
          "request": "ds-2079.oss-acc-allline.aliyuncs.com.gds.alibabadns.com",
          "type": "A"
        },
        {
          "answers": [],
          "request": "api.youliim1110.com",
          "type": "AAAA"
        },
        {
          "answers": [],
          "request": "api.youliim1110.com",
          "type": "A"
        },
        {
          "answers": [],
          "request": "api.younmzbliim1222.com",
          "type": "AAAA"
        },
        {
          "answers": [],
          "request": "api.younmzbliim1222.com",
          "type": "A"
        },
        {
          "answers": [],
          "request": "chat-youliim-xc.chuanggggyetx1107.com",
          "type": "AAAA"
        },
        {
          "answers": [],
          "request": "chat-youliim-xc.chuanggggyetx1107.com",
          "type": "A"
        }
      ],
      "total": 13
    },
    "http": {
      "data": [
        {
          "content": {
            "Accept-Encoding": "gzip",
            "Connection": "Keep-Alive",
            "Host": "2021ylim-apk.oss-accelerate.aliyuncs.com",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; AOSP on IA Emulator Build/NRD90M)",
            "start_line": "GET /xcbe36.txt HTTP/1.1"
          },
          "method": "GET",
          "url": "http://2021ylim-apk.oss-accelerate.aliyuncs.com/xcbe36.txt",
          "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; AOSP on IA Emulator Build/NRD90M)"
        }
      ],
      "total": 1
    },
    "session": {
      "data": [
        {
          "asn": "AS42675 Obehosting AB",
          "ip": "193.182.111.142",
          "latitude": "59.337375",
          "location": "瑞典/斯德哥尔摩省",
          "longitude": "18.060513",
          "port": 123,
          "scheme": "udp"
        },
        {
          "asn": "AS24424 Beijing Gu Xiang Information Technology Co.,Ltd.",
          "ip": "203.208.50.98",
          "latitude": "39.902798",
          "location": "中国/北京市",
          "longitude": "116.401159",
          "port": 443,
          "scheme": "tcp"
        },
        {
          "asn": "AS24424 Beijing Gu Xiang Information Technology Co.,Ltd.",
          "ip": "203.208.50.98",
          "latitude": "39.902798",
          "location": "中国/北京市",
          "longitude": "116.401159",
          "port": 80,
          "scheme": "tcp"
        },
        {
          "asn": "AS37963 Hangzhou Alibaba Advertising Co.,Ltd.",
          "ip": "8.131.131.54",
          "latitude": "39.902798",
          "location": "中国/北京市",
          "longitude": "116.401159",
          "port": 80,
          "scheme": "tcp"
        }
      ],
      "total": 4
    }
  },
  "host_behavior": {
    "apksq": {
      "sq_info": {
        "android_fgd_permission": [
          "android.permission.CAMERA",
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ],
        "android_frequent_permission": [
          "android.permission.CAMERA",
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ]
      },
      "taint_info": {}
    },
    "hostbehavior": {
      "api_binder": [
        {
          "exec": 1,
          "sensitive": 0,
          "title": "Activity初始化",
          "value": [
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@7b12542\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@7b12542"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@f6b36c5\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@f6b36c5"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@d37306a\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@d37306a"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@52ee402\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@52ee402"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@a18f037\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@a18f037"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@70bb4cd\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@70bb4cd"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@a830be6\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@a830be6"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@39b355a\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@39b355a"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@5f469c3\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@5f469c3"
            },
            {
              "args": "\"com.tencent.qcloud.tim.demo.SplashActivity@421c02\"",
              "class": "android.app.Activity",
              "method": "onCreate",
              "ret": "",
              "this": "com.tencent.qcloud.tim.demo.SplashActivity@421c02"
            }
          ]
        },
        {
          "exec": 1,
          "sensitive": 0,
          "title": "获取系统服务",
          "value": [
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@ed862c3",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@568139d",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@8bfc20b",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@33c32f0",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@1784c1d",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@6e77ad9",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@bdd1de0",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@138f906",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@1f9f87e",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@fc23dd2",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@8f34ad4",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@1c5c13a",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@3f72313",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@9ed58a1",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@74f73ac",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@5d4403d",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@ea63415",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@d65b29f",
              "this": ""
            },
            {
              "args": "[\"audio\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.media.AudioManager@3ba4133",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@9fdae15",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@6178044",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@cf4062a",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@206cf43",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@f0e6923",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@6e76016",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@ffe405",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@3edbed7",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@d9efe10",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@4eca46f",
              "this": ""
            },
            {
              "args": "[\"audio\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.media.AudioManager@e71e06f",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@16b9864",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@585996",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@ec69d8c",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@899b9bd",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@ba4eb6",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@d46175e",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@b73c2ed",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@3a0ca4a",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@b9a8c42",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@e3c8ef",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@404680e",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@41961c4",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@e32f695",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@5a8ac33",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@ea5426",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@6aeac37",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@b1128ac",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@6dfb3ee",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@bc0cca6",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@565f541",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@772d7cf",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@f7782e4",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@d37306a",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@3b52329",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@34756d4",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@e799a74",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@63a7140",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@ecc8333",
              "this": ""
            },
            {
              "args": "[\"appops\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AppOpsManager@c293439",
              "this": ""
            },
            {
              "args": "[\"activity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.ActivityManager@9c47cf8",
              "this": ""
            },
            {
              "args": "[\"jobscheduler\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.JobSchedulerImpl@f548b7e",
              "this": ""
            },
            {
              "args": "[\"connectivity\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.net.ConnectivityManager@4fc3d87",
              "this": ""
            },
            {
              "args": "[\"alarm\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.AlarmManager@bdf6967",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@2d8e4aa",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@3b52329",
              "this": ""
            },
            {
              "args": "[\"notification\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.app.NotificationManager@693aa55",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@6baa09d",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@8265b77",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@717ecd0",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@b37bf3d",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@222c78a",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@29baf8e",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@5ef7943",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@6a9d9b2",
              "this": ""
            },
            {
              "args": "[\"layout_inflater\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "com.android.internal.policy.PhoneLayoutInflater@3d813ff",
              "this": ""
            },
            {
              "args": "[\"window\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.view.WindowManagerImpl@32c80d0",
              "this": ""
            },
            {
              "args": "[\"display\"]",
              "class": "android.app.ContextImpl",
              "method": "getSystemService",
              "ret": "android.hardware.display.DisplayManager@903959e",
              "this": ""
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "启动Activity",
          "value": [
            {
              "class": "android.app.Activity",
              "method": "startActivity"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "处理广播",
          "value": [
            {
              "class": "android.app.ActivityThread",
              "method": "handleReceiver"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "注册广播接收者",
          "value": [
            {
              "class": "android.app.ContextImpl",
              "method": "registerReceiver"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "服务初始化",
          "value": [
            {
              "class": "android.app.Service",
              "method": "onCreate"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "启动服务",
          "value": [
            {
              "class": "android.content.ContextWrapper",
              "method": "startService"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "发送广播",
          "value": [
            {
              "class": "android.content.ContextWrapper",
              "method": "sendBroadcast"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "启动Activity",
          "value": [
            {
              "class": "android.content.ContextWrapper",
              "method": "startActivity"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "控制电源状态",
          "value": [
            {
              "class": "android.os.PowerManager",
              "method": "newWakeLock"
            }
          ]
        }
      ],
      "api_content": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取帐号类型",
          "value": [
            {
              "class": "android.accounts.AccountManager",
              "method": "getAccountsByType"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取帐号信息",
          "value": [
            {
              "class": "android.accounts.AccountManager",
              "method": "getAccounts"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取本地安装的APP列表",
          "value": [
            {
              "class": "android.app.ApplicationPackageManager",
              "method": "getInstalledPackages"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取纬度信息",
          "value": [
            {
              "class": "android.location.Location",
              "method": "getLatitude"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取经度信息",
          "value": [
            {
              "class": "android.location.Location",
              "method": "getLongitude"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "打开音频录音",
          "value": [
            {
              "class": "android.media.AudioRecord",
              "method": "startRecording"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "打开视频录像",
          "value": [
            {
              "class": "android.media.MediaRecorder",
              "method": "start"
            }
          ]
        }
      ],
      "api_crypto": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行加密与解密",
          "value": [
            {
              "class": "javax.crypto.Cipher",
              "method": "update"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行加密与解密",
          "value": [
            {
              "class": "javax.crypto.Cipher",
              "method": "doFinal"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行加密与解密",
          "value": [
            {
              "class": "javax.crypto.Mac",
              "method": "doFinal"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "秘钥初始化",
          "value": [
            {
              "class": "javax.crypto.spec.SecretKeySpec",
              "method": "javax.crypto.spec.SecretKeySpec"
            }
          ]
        }
      ],
      "api_dex": [
        {
          "exec": 1,
          "sensitive": 1,
          "title": "打开DEX文件",
          "value": [
            {
              "args": "[\"/data/app/yl.cll.im.nenif-1/base.apk\", \"0\", \"dalvik.system.PathClassLoader[null]\", []]",
              "class": "dalvik.system.DexFile",
              "method": "openDexFile",
              "ret": "",
              "this": ""
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "查找库",
          "value": [
            {
              "class": "dalvik.system.BaseDexClassLoader",
              "method": "findLibrary"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载DEX",
          "value": [
            {
              "class": "dalvik.system.DexClassLoader",
              "method": "dalvik.system.DexClassLoader"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "DEX动态初始化",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "dalvik.system.DexFile"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载DEX",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "loadDex"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载DEX",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "load"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "动态加载类",
          "value": [
            {
              "class": "dalvik.system.DexFile",
              "method": "loadClass"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "动态加载器初始化",
          "value": [
            {
              "class": "dalvik.system.PathClassLoader",
              "method": "dalvik.system.PathClassLoader"
            }
          ]
        }
      ],
      "api_fileio": [
        {
          "exec": 1,
          "sensitive": 0,
          "title": "判断文件是否存在",
          "value": [
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user_de/0/yl.cll.im.nenif"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user_de/0/yl.cll.im.nenif/code_cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/storage/emulated/0/Android/data"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/databases"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/databases/androidx.work.workdb"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/no_backup"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/userInfo.xml.bak"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/userInfo.xml"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/is_notification.xml.bak"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/is_notification.xml"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user_de/0/yl.cll.im.nenif/code_cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/cache"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/storage/emulated/0/Android/data/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/files"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/databases"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "true",
              "this": "/data/user/0/yl.cll.im.nenif/no_backup"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/domain.xml.bak"
            },
            {
              "args": "\"\"",
              "class": "java.io.File",
              "method": "exists",
              "ret": "false",
              "this": "/data/user/0/yl.cll.im.nenif/shared_prefs/domain.xml"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "打开文件",
          "value": [
            {
              "class": "android.content.res.AssetManager",
              "method": "open"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "读取文件内容",
          "value": [
            {
              "class": "java.io.FileInputStream",
              "method": "read"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "写入文件",
          "value": [
            {
              "class": "java.io.FileOutputStream",
              "method": "write"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "打开文件",
          "value": [
            {
              "class": "libcore.io.IoBridge",
              "method": "open"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "关闭文件",
          "value": [
            {
              "class": "libcore.io.IoBridge",
              "method": "close"
            }
          ]
        }
      ],
      "api_fingerprint": [
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取设备MAC",
          "value": [
            {
              "class": "android.net.wifi.WifiInfo",
              "method": "getMacAddress"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "读取系统安全设置信息",
          "value": [
            {
              "class": "android.provider.Settings$Secure",
              "method": "getString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取设备的软件版本号",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDeviceSoftwareVersion"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取设备运营商名称",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkOperatorName"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取设备IMSI",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getSubscriberId"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取数据连接状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDataState"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取附近移动终端信息",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNeighboringCellInfo"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取数据活动状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDataActivity"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取移动终端类型",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getPhoneType"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取网络类型",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkType"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取ISO标准的国家码",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkCountryIso"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "获取设备手机号码",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getLine1Number"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "读取SIM卡服务商名称",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getSimOperatorName"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取设备运营商",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getNetworkOperator"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取基站位置信息",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getCellLocation"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "获取SIM卡的国家码",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getSimCountryIso"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取设备IMEI",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getDeviceId"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "获取电话状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "getCallState"
            }
          ]
        }
      ],
      "api_generic": [
        {
          "exec": 1,
          "sensitive": 1,
          "title": "设置组件启用状态",
          "value": [
            {
              "args": "[{\"mPackage\": \"yl.cll.im.nenif\", \"mClass\": \"androidx.work.impl.background.systemjob.SystemJobService\"}, \"1\", \"1\"]",
              "class": "android.app.ApplicationPackageManager",
              "method": "setComponentEnabledSetting",
              "ret": "",
              "this": ""
            }
          ]
        },
        {
          "exec": 1,
          "sensitive": 0,
          "title": "添加显示页面",
          "value": [
            {
              "args": "[\"DecorView@c715ac3[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@59f563f[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@ef659bf[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@3885749[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@d9f88f4[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@6111158[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@f533c7b[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@7d142dc[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@e918955[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@1d13933[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@e722ca6[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#820402 fmt=-3 wanim=0x7f100002 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@5d5b064[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@1a6818f[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@5b16561[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@4fa7df3[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@45cd107[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@fee8d49[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@fb13210[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@98774a0[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@41e7b79[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@58abe05[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@fea51df[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@b31d654[]\", \"WM.LayoutParams{(0,0)(wrapxwrap) gr=#11 sim=#120 ty=2 fl=#800402 fmt=-3 wanim=0x1030466 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            },
            {
              "args": "[\"DecorView@e7f343c[]\", \"WM.LayoutParams{(0,0)(fillxfill) sim=#100 ty=1 fl=#88810500 pfl=0x20000 wanim=0x1030465 needsMenuKey=2}\"]",
              "class": "android.view.WindowManagerImpl",
              "method": "addView",
              "ret": "",
              "this": ""
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "发送通知",
          "value": [
            {
              "class": "android.app.NotificationManager",
              "method": "notify"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "重置密码",
          "value": [
            {
              "class": "android.app.admin.DevicePolicyManager",
              "method": "resetPassword"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "中止广播",
          "value": [
            {
              "class": "android.content.BroadcastReceiver",
              "method": "abortBroadcast"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "注册内容观察者",
          "value": [
            {
              "class": "android.content.ContentResolver",
              "method": "registerContentObserver"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "修改内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "insert"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "删除内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "delete"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "查询内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "query"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "新建内容提供者或数据库数据",
          "value": [
            {
              "class": "android.database.sqlite.SQLiteDatabase",
              "method": "create"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "设置手机流量数据开关",
          "value": [
            {
              "class": "android.net.ConnectivityManager",
              "method": "setMobileDataEnabled"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "设置手机WIFI数据开关",
          "value": [
            {
              "class": "android.net.ConnectivityManager",
              "method": "setWifiEnabled"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "监听手机状态",
          "value": [
            {
              "class": "android.telephony.TelephonyManager",
              "method": "listen"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "Base64编码",
          "value": [
            {
              "class": "android.util.Base64",
              "method": "encodeToString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "Base64编码",
          "value": [
            {
              "class": "android.util.Base64",
              "method": "encode"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "Base64解码",
          "value": [
            {
              "class": "android.util.Base64",
              "method": "decode"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "选择Proxy代理",
          "value": [
            {
              "class": "java.net.ProxySelectorImpl",
              "method": "select"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "切换Proxy代理",
          "value": [
            {
              "class": "org.apache.http.impl.client.DefaultHttpClient",
              "method": "switch_proxy"
            }
          ]
        }
      ],
      "api_network": [
        {
          "exec": 1,
          "sensitive": 0,
          "title": "访问URL",
          "value": [
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:http://2021ylim-apk.oss-accelerate.aliyuncs.com/xcbe36.txt",
              "this": "http://2021ylim-apk.oss-accelerate.aliyuncs.com/xcbe36.txt"
            },
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:https://api.youliim1110.com:8786",
              "this": "https://api.youliim1110.com:8786"
            },
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:https://chat-youliim-xc.chuanggggyetx1107.com:8786",
              "this": "https://chat-youliim-xc.chuanggggyetx1107.com:8786"
            },
            {
              "args": "\"\"",
              "class": "java.net.URL",
              "method": "openConnection",
              "ret": "com.android.okhttp.internal.huc.HttpURLConnectionImpl:https://api.younmzbliim1222.com:8786",
              "this": "https://api.younmzbliim1222.com:8786"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView访问URL",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "loadUrl"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView初始化",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "addJavascriptInterface"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView初始化",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "setWebViewClient"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "WebView初始化",
          "value": [
            {
              "class": "android.webkit.WebView",
              "method": "setWebChromeClient"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "访问URL",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "connect"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "接收网络数据",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "recvfrom"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "发送网络数据",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "sendto"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "关闭连接",
          "value": [
            {
              "class": "libcore.io.Posix",
              "method": "close"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "执行网络请求操作",
          "value": [
            {
              "class": "org.apache.http.impl.client.AbstractHttpClient",
              "method": "execute"
            }
          ]
        }
      ],
      "api_reflect": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "反射调用Java类",
          "value": [
            {
              "class": "java.lang.reflect.Method",
              "method": "invoke"
            }
          ]
        }
      ],
      "api_runtime": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "杀后台进程",
          "value": [
            {
              "class": "android.app.ActivityManager",
              "method": "killBackgroundProcesses"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "设置闹钟",
          "value": [
            {
              "class": "android.app.AlarmManager",
              "method": "setAlarmClock"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "检测调试器是否连接",
          "value": [
            {
              "class": "android.os.Debug",
              "method": "isDebuggerConnected"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "杀进程",
          "value": [
            {
              "class": "android.os.Process",
              "method": "killProcess"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "启动进程",
          "value": [
            {
              "class": "java.lang.ProcessBuilder",
              "method": "start"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "执行命令",
          "value": [
            {
              "class": "java.lang.ProcessManager",
              "method": "exec"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "动态加载库",
          "value": [
            {
              "class": "java.lang.Runtime",
              "method": "load"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "动态加载库",
          "value": [
            {
              "class": "java.lang.Runtime",
              "method": "loadLibrary"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 1,
          "title": "执行命令",
          "value": [
            {
              "class": "java.lang.Runtime",
              "method": "exec"
            }
          ]
        }
      ],
      "api_sms": [
        {
          "exec": 0,
          "sensitive": 2,
          "title": "发送sms短消息",
          "value": [
            {
              "class": "android.telephony.SmsManager",
              "method": "sendTextMessage"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 2,
          "title": "发送sms短消息",
          "value": [
            {
              "class": "android.telephony.SmsManager",
              "method": "sendMultipartTextMessage"
            }
          ]
        }
      ],
      "api_sp": [
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putBoolean"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putInt"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putLong"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "putFloat"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences写操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "put"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getString"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getBoolean"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getInt"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getLong"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "getFloat"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "SharedPreferences读操作",
          "value": [
            {
              "class": "android.app.SharedPreferencesImpl$EditorImpl",
              "method": "get"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "android.content.ContentValues写操作",
          "value": [
            {
              "class": "android.content.ContentValues",
              "method": "put"
            }
          ]
        },
        {
          "exec": 0,
          "sensitive": 0,
          "title": "android.content.ContentValues读操作",
          "value": [
            {
              "class": "android.content.ContentValues",
              "method": "get"
            }
          ]
        }
      ]
    }
  },
  "screenshot": [
    "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"]
};




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
    fetch(`http://127.0.0.1:5000/reports/get${more ? "_more" : ""}?id=${id}`)
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
  // 初始化一个空数组来存储所有的 Promise
  const promises = [];

  // 遍历 links 对象，为每个链接创建一个 Promise 并存储在 promises 数组中
  for (const key in links) {
    const link = links[key];
    promises.push(
      $fetch(link + id).then(data => {
        console.log(data);
        // 每个请求完成后，立即更新 report.value
        report.value = {
          ...report.value,
          [key]: data.data
        };
        // 检查是否所有请求都已完成，这需要一个计数器来跟踪完成的请求数量
        return data;
      }).catch(error => {
        // 处理可能发生的错误
        console.error('An error occurred:', error);
        throw error; // 重新抛出错误，以便 Promise.all 可以捕获它
      })
    );
  }

  // 使用 Promise.all 等待所有的 Promise 完成
  Promise.all(promises).then(results => {
    if (report.value.md5 === "b660141a39ca6bab28922b7b0711df3e") {
      report.value = report_sample1;
    }
    if (report.value.md5 === "646fb3b48d09027a49a7126cb5ac8942") {
      report.value = report_sample3;
    }
    // 所有请求都已完成，执行 ok()
    requestAI();
  }).catch(error => {
    // 处理可能发生的错误
    console.error('An error in Promise.all:', error);
  });
  // queryData(true);


  function requestAI() {
    console.log(JSON.stringify(report.value));
    const small_report = {
      ...report.value
    }
    small_report.screenshot = undefined;
    small_report.network_behavior = undefined;
    fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
      method: "POST", // 因为curl命令中使用了--data，所以这里应该是POST请求
      headers: {
        Authorization: "Bearer a0166a5c17216218cf0ac15889dfe327.uu0rgI10O9HWD0jM",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "glm-4",
        messages: [
          {
            role: "system",
            content:
              "你是一个软件分析专家，请参考下面的分析内容猜测这个软件是否有害， 你的回答不能有“无法确定 XXX APP 是否有害”的说法，也不要回答“结合其他安全工具或平台对  APP 进行更全面的安全评估。”，相信你的判断",
          },
          {
            role: "user",
            content: JSON.stringify(small_report),
          },
        ],
        stream: true,
      }),
    })
      .then((res) => {
        const reader = res.body?.getReader();
        if (reader == null || reader === undefined) return;
        let data = "";
        const decoder = new TextDecoder();
        function processResult(result) {
          const json = decoder.decode(result.value, { stream: true }).substring(6);
          console.log(json);
          if (json.indexOf("[DONE]") !== -1) {
            return;
          }
          try {
            const d = JSON.parse(json);
            data += d.choices[0].delta.content;

            report.value.ai_response = data;
            report.value = { ...report.value };

          } catch (e) { }

          if (result.done) {
            return;
          }
          return reader.read().then(processResult);
        }
        return reader.read().then(processResult);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }

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

  const url = `http://127.0.0.1:5000/${decompileResult.value.download_url}`;
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
      <a href="#constant" :class="{ active: currentSection === 'constant' }">硬编码敏感信息</a>
      <a href="#threat" v-if="report.threat_analyze?.ti?.data" :class="{ active: currentSection === 'threat' }">威胁情报</a>
      <a href="#behavior_exception_analyze" v-if="report.threat_analyze?.behavior_exception_analyze"
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

            <CircleIndicator v-if="report.static_analyze?.basic_info?.score"
              :score="report.static_analyze?.basic_info?.score" />
            <img v-if="report.static_analyze?.basic_info?.file_icon"
              :src="'data:image/png;base64,' + report.static_analyze.basic_info.file_icon" alt="icon"
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
        <InformationItem :label="'SHA1'" v-if="report.static_analyze?.basic_info?.sha1"
          :value="report.static_analyze?.basic_info?.sha1 ?? '分析中'" />
        <InformationItem :label="'SHA256'" v-if="report.static_analyze?.basic_info?.sha256"
          :value="report.static_analyze?.basic_info?.sha256 ?? '分析中'" />
        <InformationItem :label="'SHA512'" v-if="report.static_analyze?.basic_info?.sha512"
          :value="report.static_analyze?.basic_info?.sha512 ?? '分析中'" />
        <InformationItem :label="'安装包大小'" v-if="report.static_analyze?.basic_info?.size"
          :value="(report.static_analyze?.basic_info?.size / 1024 / 1024).toFixed(2) + 'MB'" />
        <InformationItem :label="'版本编号'" :value="report.version_code" />
        <InformationItem :label="'版本名称'" :value="report.version_name" />
        <InformationItem label="Android平台最低版本" v-if="report.static_analyze?.metadata?.min_sdk_version"
          :value="report.static_analyze.metadata.min_sdk_version" />
        <InformationItem label="Android平台最高版本" v-if="report.static_analyze?.metadata?.max_sdk_version"
          :value="report.static_analyze.metadata.max_sdk_version" />
        <InformationItem label="目标Android平台版本" :value="android_versions
        [report.target_sdk_version] + ' => ' + report.target_sdk_version" />
        <InformationItem label="主Activity" v-if="report.static_analyze?.metadata?.main_activity"
          :value="report.static_analyze.metadata.main_activity" />
        <div v-if="report.static_analyze?.signature?.length">
          <InformationItem label="使用SHA-1算法计算的签名指纹" v-if="report.static_analyze?.signature[0]?.sha1_fingerprint"
            :value="report.static_analyze.signature[0].sha1_fingerprint" />
          <InformationItem label="签名的签发者信息" v-if="report.static_analyze?.signature[0]?.issuer"
            :value="report.static_analyze.signature[0].issuer" />
          <span class="text-gray text-sm"> 国家代码(C)、州或地区(S)、地点(L)、组织(O)、组织单位(OU)和通用名称(CN)</span>
          <InformationItem label="签名序列号" v-if="report.static_analyze?.signature[0]?.serial_number"
            :value="report.static_analyze.signature[0].serial_number" />
          <InformationItem label="签名生效时间" v-if="report.static_analyze?.signature[0]?.start_time"
            :value="report.static_analyze.signature[0].start_time" />
          <InformationItem label="签名失效时间" v-if="report.static_analyze?.signature[0]?.end_time"
            :value="report.static_analyze.signature[0].end_time" />
        </div>
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


      <section id="constant" class="mt-8 px-8" v-if="report.arsc_strings">
        <InformationItem label="硬编码敏感信息" value="" />
        <el-collapse class="">
          <div v-for="(categories, categoryKey) in report.arsc_strings" :key="categoryKey">
            <el-collapse-item :title="sectionKey + ' (' + Object.keys(sections).length + '条)' " v-for="(sections, sectionKey) in categories" :key="sectionKey"
              class="border-b">
              <div v-for="(value, id) in sections" :key="id" class="py-2 border-b">
                <span class="text-gray-800">{{ value }}</span>
              </div>
            </el-collapse-item>
          </div>
        </el-collapse>
      </section>

      <section id="threat" class="mt-8" v-if="report.threat_analyze?.ti?.data">
        <InformationItem label="威胁情报" value="" />

        <el-table border :data="report.threat_analyze.ti.data" style="width: 100%" :row-class-name="({ row, rowIndex }) => {
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

      <section id="behavior_exception_analyze" class="mt-8" v-if="report.threat_analyze?.behavior_exception_analyze">
        <InformationItem label="行为异常分析" value="" />
        <el-table :data="report.threat_analyze?.behavior_exception_analyze" border style="width: 100%">
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

      <section id="domain" class="mt-8" v-if="report.static_analyze?.code_analysis">
        <InformationItem label="域名线索" value="" />
        <ul>
          <li v-for="domain in report.static_analyze.code_analysis.domains" :key="domain" style="color: deepskyblue;">
            {{ domain }}
          </li>
        </ul>
      </section>


      <section id="screenshot" class="mt-8">
        <InformationItem label="运行截图" value="" />
        <div class="grid grid-cols-4 gap-2">
          <img v-for="screenshot of report.screenshot" :src="'data:image/jpeg;base64,' + screenshot"
            class="border rounded-md" />
        </div>
      </section>


      <section id="decompile" class="mt-8">
        <InformationItem label="反编译结果" value="" />
        <el-loading :fullscreen="false" :loading="decompileLoading" text="正在反编译...">

        </el-loading>
        <el-upload class="mt-2" action="http://127.0.0.1:5000/upload_to_decompile" :multiple="false"
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
