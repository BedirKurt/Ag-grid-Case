import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";

import BaseTodoTable from "./components/UI/BaseTodoTable.vue";
import BasePostsTable from "./components/BasePostsTable.vue";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const routes = [
  {
    path: "/basepoststable",
    name: "baseposttable",
    component: BasePostsTable,
  },
  {
    path: "/basetodotable",
    name: "basetodotable",
    component: BaseTodoTable,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
