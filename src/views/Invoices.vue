<template>
<div class="invoices">
    <Navbar :filter='filterLists' />
    <div class="lists">
        <div class="list" v-for="list in lists" :key="list.id">
            <h1 class="value name">{{ list.id }}</h1>
            <p class="value date">{{ list.createdAt }}</p>
            <p class="value description"> {{ list.description }}</p>
            <h1 class="value total">{{ list.total }}</h1>
            <nav class="value status">{{ list.status }}</nav>
            <button class="btn-navigate">></button>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    name: "InvoicesComponent",
    components: {
        Navbar
    },

    data() {
        return {
            title: "Invoices",
            type: "",
            lists: [{
                    id: 'RT3080',
                    createdAt: '2021-08-18',
                    paymentDue: '2021-08-19',
                    description: 'Re-branding',
                    paymentTerms: 1,
                    clientName: 'Jensen Huang',
                    clientEmail: 'jensenh@mail.com',
                    status: 'paid',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '106 Kendell Street',
                        city: 'Sharrington',
                        postCode: 'NR24 5WQ',
                        country: 'United Kingdom'
                    },
                    items: [{
                        name: 'Brand Guidelines',
                        quantity: 1,
                        price: 1800.9,
                        total: 1800.9
                    }],
                    total: 1800.9
                },
                {
                    id: 'XM9141',
                    createdAt: '2021-08-21',
                    paymentDue: '2021-09-20',
                    description: 'Graphic Design',
                    paymentTerms: 30,
                    clientName: 'Alex Grim',
                    clientEmail: 'alexgrim@mail.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '84 Church Way',
                        city: 'Bradford',
                        postCode: 'BD1 9PB',
                        country: 'United Kingdom'
                    },
                    items: [{
                            name: 'Banner Design',
                            quantity: 1,
                            price: 156,
                            total: 156
                        },
                        {
                            name: 'Email Design',
                            quantity: 2,
                            price: 200,
                            total: 400
                        }
                    ],
                    total: 556
                },
                {
                    id: 'RG0314',
                    createdAt: '2021-09-24',
                    paymentDue: '2021-10-01',
                    description: 'Website Redesign',
                    paymentTerms: 7,
                    clientName: 'John Morrison',
                    clientEmail: 'jm@myco.com',
                    status: 'paid',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '79 Dover Road',
                        city: 'Westhall',
                        postCode: 'IP19 3PF',
                        country: 'United Kingdom'
                    },
                    items: [{
                        name: 'Website Redesign',
                        quantity: 1,
                        price: 14002.33,
                        total: 14002.33
                    }],
                    total: 14002.33
                },
                {
                    id: 'RT2080',
                    createdAt: '2021-10-11',
                    paymentDue: '2021-10-12',
                    description: 'Logo Concept',
                    paymentTerms: 1,
                    clientName: 'Alyssa Werner',
                    clientEmail: 'alyssa@email.co.uk',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '63 Warwick Road',
                        city: 'Carlisle',
                        postCode: 'CA20 2TG',
                        country: 'United Kingdom'
                    },
                    items: [{
                        name: 'Logo Sketches',
                        quantity: 1,
                        price: 102.04,
                        total: 102.04
                    }],
                    total: 102.04
                },
                {
                    id: 'AA1449',
                    createdAt: '2021-10-7',
                    paymentDue: '2021-10-14',
                    description: 'Re-branding',
                    paymentTerms: 7,
                    clientName: 'Mellisa Clarke',
                    clientEmail: 'mellisa.clarke@example.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '46 Abbey Row',
                        city: 'Cambridge',
                        postCode: 'CB5 6EG',
                        country: 'United Kingdom'
                    },
                    items: [{
                            name: 'New Logo',
                            quantity: 1,
                            price: 1532.33,
                            total: 1532.33
                        },
                        {
                            name: 'Brand Guidelines',
                            quantity: 1,
                            price: 2500,
                            total: 2500
                        }
                    ],
                    total: 4032.33
                },
                {
                    id: 'TY9141',
                    createdAt: '2021-10-01',
                    paymentDue: '2021-10-31',
                    description: 'Landing Page Design',
                    paymentTerms: 30,
                    clientName: 'Thomas Wayne',
                    clientEmail: 'thomas@dc.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '3964  Queens Lane',
                        city: 'Gotham',
                        postCode: '60457',
                    }
                },
                {
                    id: 'TY9142',
                    createdAt: '2021-10-01',
                    paymentDue: '2021-10-31',
                    description: 'Landing Page Design',
                    paymentTerms: 30,
                    clientName: 'Thomas Wayne',
                    clientEmail: 'thomas@dc.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '3964  Queens Lane',
                        city: 'Gotham',
                        postCode: '60457',
                    }
                },
                {
                    id: 'TY9143',
                    createdAt: '2021-10-01',
                    paymentDue: '2021-10-31',
                    description: 'Landing Page Design',
                    paymentTerms: 30,
                    clientName: 'Thomas Wayne',
                    clientEmail: 'thomas@dc.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '3964  Queens Lane',
                        city: 'Gotham',
                        postCode: '60457',
                    }
                },
                {
                    id: 'TY9144',
                    createdAt: '2021-10-01',
                    paymentDue: '2021-10-31',
                    description: 'Landing Page Design',
                    paymentTerms: 30,
                    clientName: 'Thomas Wayne',
                    clientEmail: 'thomas@dc.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '3964  Queens Lane',
                        city: 'Gotham',
                        postCode: '60457',
                    }
                },
                {
                    id: 'TY9145',
                    createdAt: '2021-10-01',
                    paymentDue: '2021-10-31',
                    description: 'Landing Page Design',
                    paymentTerms: 30,
                    clientName: 'Thomas Wayne',
                    clientEmail: 'thomas@dc.com',
                    status: 'pending',
                    senderAddress: {
                        street: '19 Union Terrace',
                        city: 'London',
                        postCode: 'E1 3EZ',
                        country: 'United Kingdom'
                    },
                    clientAddress: {
                        street: '3964  Queens Lane',
                        city: 'Gotham',
                        postCode: '60457',
                    }
                }
            ]
        }

    },
    methods: {
        filterLists(tp) {
            console.log(tp);
        }
    }
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
