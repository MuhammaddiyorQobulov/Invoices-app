<template>
<div class="invoices">
    <Navbar :amount='invoicesStore.datas.length' />
    <div v-if="invoicesStore.datas.length" class="lists">
        <div class="list" v-for="list in invoicesStore.datas" :key="list.id">
            <h2 class="value name">{{ list.id }}</h2>
            <p class="value date">{{ list.createdAt }}</p>
            <p class="value description"> {{ list.description }}</p>
            <h2 class="value total">{{ list.total }}</h2>
            <nav class="value status" :class="list.status">{{ list.status.toUpperCase() }}</nav>
            <router-link :to="{name:'Invoice', params:{id:`${list.id}`} }">
                <button class="btn-navigate">></button>
            </router-link>
        </div>
    </div>
    <div class="no-invoices" v-else>
        <NoInvoices />
        <h3>There is nothing here</h3>
        <p> Create an invoice by clicking the
            <br /> New Invoice button and get started</p>
    </div>
</div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
import NoInvoices from "../assets/icons/no-invoices.js"
import {
    useInvoicesStore
} from '../store/store.js'

export default {

    name: "InvoicesComponent",
    components: {
        Navbar,
        NoInvoices
    },
    data() {
        return {
            type: null,
        }
    },
    setup() {
        const invoicesStore = useInvoicesStore()
        invoicesStore.getInvoices()
        return {
            invoicesStore
        }
    },

}
</script>

<style scoped>
.invoices {
    width: 100%;
    height: calc(100vh - 100px);
    padding: 0 30px;
}

.lists {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    overflow: scroll;
    transition: .2s;


}

.list {
    width: calc(100% - 60px);
    border-radius: 10px;
    height: max-content;
    padding: 20px;
    background-color: var(--white);
    transition: .2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid transparent;
}

.list p {
    color: var(--title);
}

.value {
    width: 200px;
}

.list:hover {
    border: 1px solid rgb(227, 230, 245);
}

.status {
    height: 40px;
    text-align: center;
    width: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

}

.paid {
    background-color: rgba(51, 214, 160, 0.191);
    color: rgba(51, 214, 159, 1);
}

.pending {
    background-color: rgba(255, 145, 0, 0.326);
    color: rgba(255, 143, 0, 1);

}

.draft {
    background-color: rgba(219, 219, 219, 0.645);
    color: black;
}

.btn-navigate {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid var(--violet);
    cursor: pointer;
    color: var(--violet);
    background: transparent;
}

.btn-navigate:hover {
    background-color: rgb(203, 209, 243);
}

.btn-navigate:active {
    background: rgb(126, 136, 195);
}

.no-invoices {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
