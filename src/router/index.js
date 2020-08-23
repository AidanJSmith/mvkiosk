import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Oracle from "../views/Oracle.vue";
import Weather from "../views/weather/Weather.vue";

Vue.use(VueRouter);

// Handle this when we want to do actual UI switching
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/oracle",
    name: "Oracle",
    component: Oracle
  },
  {
    path: "/oracle/:articleID",
    name: "Oracle",
    component: Oracle
  },
  {
    path: "/Weather",
    name: "Weather",
    component: Weather
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
