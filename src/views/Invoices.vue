<template>
<div class="invoices">
    <Navbar @filter='handleType' />
    <div v-if="filteredLists.length" class=" lists">
        <div class="list" v-for="list in filteredLists" :key="list.id">
            <h1 class="value name">{{ list.id }}</h1>
            <p class="value date">{{ list.createdAt }}</p>
            <p class="value description"> {{ list.description }}</p>
            <h1 class="value total">{{ list.total }}</h1>
            <nav class="value status">{{ list.status }}</nav>
            <router-link :to="{name:'Invoice', params:{id:`${list.id}`} }">
                <button class="btn-navigate">></button>
            </router-link>
        </div>
    </div>
    <div v-else>
        Invoices didn't have
    </div>
</div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
import datas from '../store/store.js'
export default {
    name: "InvoicesComponent",
    components: {
        Navbar
    },

    data() {
        return {
            title: "Invoices",
            type: null,
            filteredLists: undefined,
            lists: []
        }

    },
    methods: {
        handleType(tp) {
            this.filterLists(tp)
            this.type = tp
        },
        filterLists(a) {
            if (a == "") {
                this.filteredLists = this.lists;
                return
            }
            this.filteredLists = this.lists.filter((item) => item.status == a)
        },
    },
    beforeMount() {
        console.log(datas);
        this.lists = datas
        this.filteredLists = datas
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
}

.list {
    width: calc(100% - 60px);
    border-radius: 10px;
    height: max-content;
    padding: 20px;
    background-color: white;
    transition: .2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.value {
    width: 200px;
}

.list:hover {
    background-color: rgb(227, 230, 245);
}

.btn-navigate {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(124, 93, 250);
    cursor: pointer;
    color: rgb(124, 93, 250);
    background: transparent;
}

.btn-navigate:hover {
    background-color: rgb(203, 209, 243);
}

.btn-navigate:active {
    background: rgb(126, 136, 195);
}
</style>
