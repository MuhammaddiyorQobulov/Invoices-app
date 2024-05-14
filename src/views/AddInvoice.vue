<template>
<div class="add-invoice">
    <h2>Add New Invoice</h2>
    <form class="form" @submit.prevent='handleSubmit'>
        <div class="bill-from">
            <h3 class="section-title">Bill From</h3>
            <label for="from-street">
                <p>Street Address</p>
            </label>
            <input v-model="senderAddress.street" type="text" id="street-address">
            <div class="from-address">
                <div class="address-input">
                    <label for="from-city">
                        <p>City</p>
                    </label>
                    <input v-model="senderAddress.city" type="text" id="from-city">
                </div>
                <div class="address-input">
                    <label for="from-postcode">
                        <p>Post Code</p>
                    </label>
                    <input v-model="senderAddress.postCode" type="text" id="from-postcode">
                </div>
                <div class="address-input">
                    <label for="from-country">
                        <p>Country</p>
                    </label>
                    <input v-model="senderAddress.country" type="text" id="from-country">
                </div>
            </div>
        </div>
        <div class="bill-to">
            <h3 class="section-title">Bill To</h3>
            <label for="client-name">
                <p>Client’s Name</p>
            </label>
            <input v-model="clientName" type="text" id="client-name">

            <label for="to-email">
                <p>Client Email</p>
            </label>
            <input v-model="clientEmail" type="text" id="to-email">

            <label for="to-street">
                <p>Street Address</p>
            </label>
            <input v-model="clientAddress.street" type="text" id="to-street">
            <div class="to-address">
                <div class="address-input">
                    <label for="to-city">
                        <p>City</p>
                    </label>
                    <input v-model="clientAddress.city" type="text" id="to-city">
                </div>
                <div class="address-input">
                    <label for="to-postcode">
                        <p>Post Code</p>
                    </label>
                    <input v-model="clientAddress.postCode" type="text" id="to-postcode">
                </div>
                <div class="address-input">
                    <label for="to-country">
                        <p>Country</p>
                    </label>
                    <input v-model="clientAddress.country" type="text" id="to-country">
                </div>
            </div>
        </div>
        <button class="btn" @click="handleSubmit" type="submit">Add Invoice</button>
    </form>
</div>
</template>

<script>
import {
    useInvoicesStore
} from '@/store/store';
export default {
    name: "AddInvoicePage",
    props: ['handleModal'],
    data() {
        return {
            id: this.handleId(),
            createdAt: new Date().toISOString().slice(0, 10),
            paymentDue: new Date().toISOString().slice(0, 10),
            description: "",
            paymentTerms: null,
            clientName: "",
            clientEmail: "",
            status: "pending",
            senderAddress: {
                street: "",
                city: "",
                postCode: "",
                country: "",
            },
            clientAddress: {
                street: "",
                city: "",
                postCode: "",
                country: "",
            },
            items: [{
                name: "",
                quantity: null,
                price: null,
                total: null,
            }, ],
            total: null,

        }
    },
    methods: {
        handleSubmit() {
            this.invoicesStore.createInvoice(this.$data)
            this.handleModal()
            console.log(this.$data);
        },
        handleId() {
            return `${Math.floor(Math.random() * 100000)}`
        }
    },
    setup() {
        const invoicesStore = useInvoicesStore();

        return {
            invoicesStore
        }
    }
}
</script>

<style scoped>
.add-invoice {
    width: calc(50% - 80px);
    background: var(--primary);
    height: calc(100vh - 80px);
    border: 1px solid;
    padding: 40px;
    overflow: scroll;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
}

.section-title {
    color: var(--violet);
}

label {
    color: var(--title);
    margin-top: 20px;
    display: block;
}

input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;
    border: 1px solid rgba(223, 227, 250, 1);
    padding: 5px;
}

.from-address,
.to-address {
    display: flex;
    gap: 30px;
    justify-content: space-between;

}

.address-input {
    width: 100%;
}

.btn {
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    width: max-content;
    background: var(--violet);
    color: white;
    font-size: 18px;
    cursor: pointer;
}
</style>
