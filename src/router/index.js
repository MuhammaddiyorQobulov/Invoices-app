import { createRouter, createWebHistory } from "vue-router";
import Invoices from "../views/Invoices.vue";
import Invoice from "../views/Invoice.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Invoices",
    component: Invoices,
  },
  {
    path: "/invoice:id",
    name: "Invoice",
    component: Invoice,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
