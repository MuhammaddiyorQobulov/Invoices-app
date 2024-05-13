<template>
<div class="sidebar">
    <div class="logo">
        <LogoIcon />
    </div>
    <div class="menu">
        <div v-if="!invoicesStore.currentMode " class="mode" @click="invoicesStore.toggleMode">
            <ModeIcon />
        </div>
        <div v-else class="mode" @click="invoicesStore.toggleMode">
            <SunIcon />
        </div>
    </div>
    <div class="user">User</div>
</div>
</template>

<script>
import LogoIcon from "../assets/icons/logo.js"
import ModeIcon from "../assets/icons/mode.js"
import SunIcon from "../assets/icons/sun.js"
import {
    useInvoicesStore
} from "@/store/store"

export default {
    setup() {
        const invoicesStore = useInvoicesStore()
        invoicesStore.toggleMode()
        return {
            invoicesStore
        }
    },
    components: {
        LogoIcon,
        ModeIcon,
        SunIcon
    },
    methods: {

    }
}
</script>

<style>
.sidebar {
    height: 100vh;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    background-color: var(--primary-black);
    border-radius: 0px 25px 25px 0;
    overflow: hidden;
    color: white;
}

.logo {
    width: 82px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--violet);
    border-radius: 0 25px 25px 0;
}

.menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.mode {
    width: 70px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid gray;
    cursor: pointer;
}

.user {
    width: 90%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
