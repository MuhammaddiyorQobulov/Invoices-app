<template>
<div class="invoice" v-if="invoice">
    ad
</div>
<div v-else>
    <not-found />
</div>
</template>

<script>
import datas from "../store/store.js"
import NotFound from './NotFound.vue';
export default {
    components: {
        NotFound
    },
    name: "InvoiceComponent",
    props: ["id"],
    data() {
        return {
            invoice: null
        }
    },
    beforeMount() {
        this.invoice = datas.filter((item) => item.id == this.id)[0];
    }
}
</script>

<style>

</style>
