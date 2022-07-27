const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "IndexPage",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "create-course",
        name: "CreateCourse",
        component: () => import("pages/CreateCourse.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;