<template>
<div class="navbar">
    <div class="titles">
        <h1>Invoices</h1>
        <p>There are 7 total invoices </p>
    </div>
    <div class="filter">
        <select name="filter" v-model="type" id="filer">
            <option value="">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
        </select>
    </div>
    <div class="create">
        <button class="create-btn">
            +
            Create Invoice
        </button>
    </div>
</div>
</template>

<script>
export default {
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

.filter {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 30px;
}

.create {
    width: 15%;
}
</style>
