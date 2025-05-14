import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/poststable",
    name: "poststable",
    component: () => import("../../views/PostsTableView.vue"),
  },
  {
    path: "/todostable",
    name: "todotable",
    component: () => import("../../views/TodosTableView.vue"),
  },
  {
    path: "/todosdetail/:id",
    name: "TodoDetail",
    component: () => import("../../views/TodosDetailView.vue"),
  },
  {
    path: "/postsdetail/:id",
    name: "PostDetail",
    component: () => import("../../views/PostsDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
