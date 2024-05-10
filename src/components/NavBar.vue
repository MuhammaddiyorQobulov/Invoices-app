<template>
<div class="navbar">
    <div class="titles">
        <h1>Invoices</h1>
        <p>There are {{amount }} total invoices </p>
    </div>
    <div class="filter">
        <select name="filter" v-model="type" id="filer">
            <option value="">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
        </select>
    </div>
    <button class="create-btn">
        <p>
            <PlusIcon />
        </p>
        <nav class="create">
            Create Invoice
        </nav>
    </button>
</div>
</template>

<script>
import PlusIcon from "../assets/icons/plus.js";
export default {
    components: {
        PlusIcon
    },
    props: ['amount'],
    data() {
        return {
            type: ""
        }
    },
    updated() {
        this.$emit('filter', this.type)
    },

}
</script>

<style scoped>
.navbar {
    width: calc(100%-60px);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

.titles {
    width: 15%;
}

.titles p {
    color: var(--title);
}

select {
    font-size: 20px;
    border-radius: 10px;
}

.filter {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 30px;
}

.create-btn {
    width: 200px;
    padding: 5px;
    background-color: var(--violet);
    border-radius: 50px;
    border: none;
    display: flex;
    gap: 20px;
    align-items: center;
    color: var(--white);
    font-size: 15px;
    cursor: pointer;
}

.create-btn:active {
    transform: scale(.9);
}

.create-btn p {
    width: 40px;
    height: 40px;
    background: var(--white);
    text-align: center;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
