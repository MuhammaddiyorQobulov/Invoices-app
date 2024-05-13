import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useInvoicesStore = defineStore("invocesStore", {
  state: () => ({
    datas: [],
    single: undefined,
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

      this.single = mainSingleData;
    },

    async handleType(tp) {
      await this.getInvoices();
      if (tp == "") return;
      this.datas = this.datas.filter((item) => item.status == tp);
    },
  },
});
