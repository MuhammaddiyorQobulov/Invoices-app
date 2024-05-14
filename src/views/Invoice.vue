<template>
<div class="invoice" v-if="invoicesStore.single">
    <div class="back" @click="$router.go(-1)">
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185" stroke="#7C5DFA" stroke-width="2" />
        </svg>
        Go back
    </div>
    <div class="navbar">
        <div class="status-bar">
            <p class="status-title">Status</p>
            <nav class="status" :class="invoicesStore.single.status">{{ invoicesStore.single.status.toUpperCase() }}</nav>
            <div class="modal" v-if="invoicesStore.statusModal">
                <div class="btns">
                    <button @click="invoicesStore.handleMark(invoicesStore.single.id,'paid')" class="status paid">PAID</button>
                    <button @click="invoicesStore.handleMark(invoicesStore.single.id,'pending')" class="status pending">PENDING</button>
                    <button @click="invoicesStore.handleMark(invoicesStore.single.id,'draft')" class="status draft">DRAFT</button>
                </div>
            </div>
        </div>
        <div class="options">
            <button type="button" @click="handleEdit" class="option edit">Edit</button>
            <button type="button" @click="invoicesStore.handleDelete(invoicesStore.single.id)" class="option delete">Delete</button>
            <button type="button" @click="invoicesStore.toggleStatusModal()" class="option mark">Mark as ...</button>
        </div>
    </div>
    <div class="description">
        <div class="titles">
            <div class="inv-id">
                <h2>#{{ invoicesStore.single.id }}</h2>
                <p>{{ invoicesStore.single.description }}</p>
            </div>
            <div class="sender-address">
                <p>{{ invoicesStore.single.senderAddress.street }}</p>
                <p>{{ invoicesStore.single.senderAddress.city }}</p>
                <p>{{ invoicesStore.single.senderAddress.postCode }}</p>
                <p>{{ invoicesStore.single.senderAddress.country }}</p>
            </div>
        </div>
        <div class="client">
            <ul>
                <li>
                    <p>invoicesStore.single Date</p>
                    <h3>{{ invoicesStore.single.createdAt }}</h3>
                </li>
                <li>
                    <p>Bill to</p>
                    <h3>{{ invoicesStore.single.clientName }}</h3>
                </li>
                <li>
                    <p>Sent To</p>
                    <h3>{{ invoicesStore.single.clientEmail }}</h3>
                </li>
                <li>
                    <p>Payment Due</p>
                    <h3>{{ invoicesStore.single.paymentDue }}</h3>
                </li>
                <li>
                    <p>{{ invoicesStore.single.clientAddress.street }}</p>
                    <p>{{ invoicesStore.single.clientAddress.city }}</p>
                    <p>{{ invoicesStore.single.clientAddress.postCode }}</p>
                    <p>{{ invoicesStore.single.clientAddress.country }}</p>
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
                        <tbody v-if="invoicesStore.single.items">
                            <tr v-for="itm in invoicesStore.single.items" :key="itm.name">
                                <td>
                                    <h3>{{ itm.name }}</h3>
                                </td>
                                <td>
                                    {{itm.quantity }}
                                </td>
                                <td>
                                    {{itm.price }}
                                </td>
                                <td>
                                    {{itm.total }}
                                </td>

                            </tr>
                        </tbody>
                        <div class="no-items" v-else>No Items</div>
                    </table>
                </div>
                <div class="amount-due">
                    <h3>Amount Due</h3>
                    <h1 v-if="invoicesStore.single.items">{{invoicesStore.single.total }}</h1>
                    <h1 v-else>-</h1>
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
import NotFound from './NotFound.vue';
import {
    useInvoicesStore
} from '@/store/store';

export default {
    name: "InvoiceComponent",
    props: ["id"],
    components: {
        NotFound
    },
    setup() {
        const invoicesStore = useInvoicesStore();
        invoicesStore.getSingleInvoice()

        return {
            invoicesStore
        }
    },

}
</script>

<style scoped>
.invoice {
    width: 100%;
    height: calc(100vh - 100px);
    padding: 50px;
    transition: .2s;
    overflow: scroll;
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
    background-color: var(--white);
    border-radius: 10px;
    margin-top: 20px;
}

.status-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.modal {
    top: 0;
    left: 0;
    position: absolute;
    backdrop-filter: blur(10px);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btns {
    background: var(--title);
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
}

.btns .status:active {
    transform: scale(.9);
}

.status-title {
    color: var(--title);
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
    border: none;
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
    color: var(--white);
}

.mark {
    background: rgba(124, 93, 250, 1);
    color: var(--white);
}

.description {
    width: calc(100% - 100px);
    height: max-content;
    padding: 50px;
    background: var(--white);
    margin-top: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;

}

.description p {
    color: var(--title);
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
    background: var(--primary);
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
    background: rgba(12, 14, 22, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    color: white;
}

.client .table table th {
    text-align: start;
}

.no-items {
    font-size: 30px;
    color: red;
    text-align: end;
}
</style>
