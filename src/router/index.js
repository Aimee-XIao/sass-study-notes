import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path:'/nested-css-rules',
        component: ()=> import('../views/nested-css-rules')
      },
      {
        path:'/import-file',
        component: ()=> import('../views/import-file')
      },
      {
        path:'/mixer',
        component: ()=> import('../views/mixer')
      }
    ]
  },


];

const router = new VueRouter({
  routes,
});

export default router;
