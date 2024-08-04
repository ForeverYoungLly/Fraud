import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import pinia from "@/stores/index";
import "./global.css";
import 'element-plus/dist/index.css'
import ElementPlus from "element-plus";

const app = createApp(App).use(ElementPlus).use(pinia).use(router).mount("#app");
