<template>
<div class="invoice" v-if="invoice">
    <div class="back" @click="$router.go(-1)">
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185" stroke="#7C5DFA" stroke-width="2" />
        </svg>
        Go back
    </div>
    <div class="navbar">
        <div class="status-bar">
            <p class="status-title">Status</p>
            <nav class="status" :class="invoice.status">{{ invoice.status.toUpperCase() }}</nav>
        </div>
        <div class="options">
            <button type="button" class="option edit">Edit</button>
            <button type="button" class="option delete">Delete</button>
            <button type="button" class="option mark">Mark as Paid</button>
        </div>
    </div>
    <div class="description">
        <div class="titles">
            <div class="inv-id">
                <h2>#{{ invoice.id }}</h2>
                <p>{{ invoice.description }}</p>
            </div>
            <div class="sender-address">
                <p>{{ invoice.senderAddress.street }}</p>
                <p>{{ invoice.senderAddress.city }}</p>
                <p>{{ invoice.senderAddress.postCode }}</p>
                <p>{{ invoice.senderAddress.country }}</p>
            </div>
        </div>
        <div class="client">
            <ul>
                <li>
                    <p>Invoice Date</p>
                    <h3>{{ invoice.createdAt }}</h3>
                </li>
                <li>
                    <p>Bill to</p>
                    <h3>{{ invoice.clientName }}</h3>
                </li>
                <li>
                    <p>Sent To</p>
                    <h3>{{ invoice.clientEmail }}</h3>
                </li>
                <li>
                    <p>Payment Due</p>
                    <h3>{{ invoice.paymentDue }}</h3>
                </li>
                <li>
                    <p>{{ invoice.clientAddress.street }}</p>
                    <p>{{ invoice.clientAddress.city }}</p>
                    <p>{{ invoice.clientAddress.postCode }}</p>
                    <p>{{ invoice.clientAddress.country }}</p>
                </li>
            </ul>
            <div class="item">
                <div class="table">
                    <table>
                        <thead>
                            <th>
                                <p>Item Name</p>
                            </th>
                            <th>
                                <p>QTY</p>
                            </th>
                            <th>
                                <p>Price</p>
                            </th>
                            <th>
                                <p>Total</p>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>Banner Design</h3>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Email Design</h3>
                                </td>
                                <td>a</td>
                                <td>a</td>
                                <td>a</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="amount-due">
                    <h3>Amount Due</h3>
                    <h1>{{ invoice.total }}</h1>
                </div>
            </div>
        </div>

    </div>
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

<style scoped>
.invoice {
    width: 100%;
    padding: 50px;
    background: rgb(248, 248, 251);
}

.back {
    cursor: pointer;
    width: max-content;
    padding: 10px 20px;
}

.navbar {
    width: calc(100% - 60px);
    height: max-content;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
}

.status-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.status-title {
    color: rgb(136, 142, 176);
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
    background-color: rgba(51, 214, 160, 0.2);
    color: rgba(51, 214, 159, 1);
}

.pending {
    background-color: rgba(255, 145, 0, 0.2);
    color: rgba(255, 143, 0, 1);
}

.draft {
    background-color: rgba(219, 219, 219, 0.245);
    color: black;
}

.options {
    display: flex;
    gap: 15px;
}

.option {
    width: max-content;
    border-radius: 50px;
    padding: 15px 30px;
    font-size: 20px;
    border: none;
    cursor: pointer;
}

.option:active {
    transform: scale(.95);
}

.edit {
    background: rgb(229, 234, 255);
    color: rgba(126, 136, 195, 1);
}

.delete {
    background: rgba(236, 87, 87, 1);
    color: white;
}

.mark {
    background: rgba(124, 93, 250, 1);
    color: white;
}

.description {
    width: calc(100% - 100px);
    height: max-content;
    padding: 50px;
    background: white;
    margin-top: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;

}

.description p {
    color: rgb(136, 142, 176);
}

.titles {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.client {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.client ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    list-style: none;
}

.client .table {
    width: 100%;
    padding: 30px;
    background: rgb(248, 248, 251);
    border-radius: 10px;
}

.client .table table {
    width: 100%;
    text-align: start;
}

.client .item {
    overflow: hidden;
    border-radius: 10px;
}

.client .amount-due {
    width: calc(100% - 60px);
    background: rgba(55, 59, 83, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    color: white;
}

.client .table table th {
    text-align: start;
}
</style>
