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
      {
        path: "edit-course",
        name: "EditCourse",
        component: () => import("pages/EditCourse.vue"),
      },
      {
        path: "edit-course/:id?",
        name: "EditSpecificCourse",
        component: () => import("pages/EditSpecificCourse.vue"),
      },
      {
        path: "delete-course",
        name: "DeleteCourse",
        component: () => import("pages/DeleteCourse.vue"),
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
