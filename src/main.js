import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./libs";
import "./assets/css/app.css";
// import Filter from "./components/filter/Main.vue";


const app = createApp(App).use(router).use(createPinia());
// app.component("Filter", Filter); 

globalComponents(app);
utils(app);

app.mount("#app");
