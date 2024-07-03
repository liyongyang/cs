import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/start/index.vue"),
    meta: { title: "home", hidden: true },
  },
  {
    path: "/home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "home", hidden: true },
  },
  {
    path: "/home/more",
    component: () => import("@/views/home/detail1.vue"),
    meta: { title: "detail1", hidden: true },
  },
  {
    path: "/service",
    component: () => import("@/views/myService/index.vue"),
    meta: { title: "service", hidden: true },
  },
  {
    path: "/service/case1",
    component: () => import("@/views/myService/components/case1.vue"),
    meta: { title: "serviceCase1", hidden: true },
  },
  {
    path: "/service/case2",
    component: () => import("@/views/myService/components/case2.vue"),
    meta: { title: "serviceCase2", hidden: true },
  },
  {
    path: "/service/case3",
    component: () => import("@/views/myService/components/case3.vue"),
    meta: { title: "serviceCase3", hidden: true },
  },
  {
    path: "/service/case4",
    component: () => import("@/views/myService/components/case4.vue"),
    meta: { title: "serviceCase4", hidden: true },
  },
  {
    path: "/service/case5",
    component: () => import("@/views/myService/components/case5.vue"),
    meta: { title: "serviceCase5", hidden: true },
  },
  {
    path: "/service/case6",
    component: () => import("@/views/myService/components/case6.vue"),
    meta: { title: "serviceCase6", hidden: true },
  },
  {
    path: "/service/case7",
    component: () => import("@/views/myService/components/case7.vue"),
    meta: { title: "serviceCase7", hidden: true },
  },
  {
    path: "/customer",
    component: () => import("@/views/myCustomer/index.vue"),
    meta: { title: "customer", hidden: true },
  },
  {
    path: "/customer/:case",
    component: () => import("@/views/myCustomer/components/case.vue"),
    meta: { title: "customer_case", hidden: true },
  },
  {
    path: "/comment1S1Y1S1Zg0Ct6O5l2t9Q4b1",
    component: () => import("@/views/sysMyC/index.vue"),
    meta: { title: "customer", hidden: true },
  },
  {
    path: "/recruit",
    component: () => import("@/views/recruit/index.vue"),
    meta: { title: "recruit", hidden: true },
  },
  {
    path: "/joinUs",
    component: () => import("@/views/joinUs/index.vue"),
    meta: { title: "recruit", hidden: true },
  },
  {
    path: "/joinUs/qa",
    component: () => import("@/views/joinUs/qa/index.vue"),
    meta: { title: "qa", hidden: true },
  },
  {
    path: "/joinUs/images",
    component: () => import("@/views/joinUs/imgList/index.vue"),
    meta: { title: "images", hidden: true },
  },
  {
    path: "/joinUs/pg1",
    component: () => import("@/views/joinUs/article/pg1.vue"),
    meta: { title: "art1", hidden: true },
  },
  {
    path: "/joinUs/pg2",
    component: () => import("@/views/joinUs/article/pg2.vue"),
    meta: { title: "art2", hidden: true },
  },
  {
    path: "/joinUs/pg3",
    component: () => import("@/views/joinUs/article/pg3.vue"),
    meta: { title: "art3", hidden: true },
  },
  {
    path: "/joinUs/pg4",
    component: () => import("@/views/joinUs/article/pg4.vue"),
    meta: { title: "art4", hidden: true },
  },
  {
    path: "/joinUs/pg5",
    component: () => import("@/views/joinUs/article/pg5.vue"),
    meta: { title: "art5", hidden: true },
  },
  {
    path: "/joinUs/pg6",
    component: () => import("@/views/joinUs/article/pg6.vue"),
    meta: { title: "art6", hidden: true },
  },
  {
    path: "/contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "contact", hidden: true },
  },
  {
    path: "/commentZg0Ct6O5l2t9Q4b1",
    component: () => import("@/views/comment/index.vue"),
    meta: { title: "comment", hidden: true },
  },
  // {
  //   path: "/setup",
  //   component: () => import("@/views/Setup/index.vue"),
  //   meta: { title: "Setup", hidden: true },
  // },
  // {
  //   path: "/gsap",
  //   component: () => import("@/views/gsap/index.vue"),
  //   meta: { title: "gsap", hidden: true },
  // },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: defaultRoutes,
});

export default router;
