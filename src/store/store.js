import router from "@/router";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useInvoicesStore = defineStore("invocesStore", {
  state: () => ({
    datas: [],
    single: undefined,
    statusModal: false,
    currentMode: false,
  }),
  getters: {
    invoicesCount() {
      return this.datas.length;
    },
  },
  actions: {
    async getInvoices() {
      const res = await fetch("http://localhost:3000/invoices");
      const mainDatas = await res.json();

      this.datas = mainDatas;
    },
    async getSingleInvoice() {
      const route = useRoute();
      const res = await fetch(
        "http://localhost:3000/invoices/" + route.params.id
      );
      const mainSingleData = await res.json();
      if (res.error) console.log(res.error);
      this.single = mainSingleData;
    },

    async handleType(tp) {
      await this.getInvoices();
      if (tp == "") return;
      this.datas = this.datas.filter((item) => item.status == tp);
    },

    async handleDelete(id) {
      const res = await fetch("http://localhost:3000/invoices/" + id, {
        method: "DELETE",
      });
      if (res.error) console.log(res.error);

      router.go(-1);
    },

    async handleMark(id, status) {
      const res = await fetch("http://localhost:3000/invoices/" + id, {
        method: "PATCH",
        body: JSON.stringify({ status }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) console.log(res.error);
      this.single = await res.json();
      this.statusModal = false;
    },
    toggleStatusModal() {
      this.statusModal = true;
    },
    async getInitialMode() {
      const res = await fetch("http://localhost:3000/current-mode/mode-id");

      this.currentMode = (await res.json()).value;

      document.documentElement.style.setProperty(
        "--primary",
        this.currentMode ? "rgba(30, 33, 57, 1)" : "rgb(248, 248, 251)"
      );
      document.documentElement.style.setProperty(
        "--white",
        this.currentMode ? "var(--primary-black)" : "white"
      );
      document.body.style.color = this.currentMode ? "white" : "black";
    },

    async toggleMode() {
      const res = await fetch("http://localhost:3000/current-mode/mode-id", {
        method: "PATCH",
        body: JSON.stringify({ value: !this.currentMode }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) console.log(res.error);

      this.currentMode = (await res.json()).value;
      document.documentElement.style.setProperty(
        "--primary",
        this.currentMode ? "rgba(30, 33, 57, 1)" : "rgb(248, 248, 251)"
      );
      document.documentElement.style.setProperty(
        "--white",
        this.currentMode ? "var(--primary-black)" : "white"
      );
      document.body.style.color = this.currentMode ? "white" : "black";
    },
  },
});
