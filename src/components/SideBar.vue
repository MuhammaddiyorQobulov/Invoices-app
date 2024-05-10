<template>
<div class="sidebar">
    <div class="logo">
        <LogoIcon />
    </div>
    <div class="menu">
        <div v-if="currentMode " class="mode" @click="handleMode">
            <ModeIcon />
        </div>
        <div v-else class="mode" @click="handleMode">
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

export default {
    data() {
        return {
            currentMode: true
        }
    },
    components: {
        LogoIcon,
        ModeIcon,
        SunIcon
    },
    methods: {
        handleMode() {
            document.documentElement.style.setProperty('--primary', this.currentMode ? "rgba(30, 33, 57, 1)" : 'rgb(248, 248, 251)')
            document.documentElement.style.setProperty('--white', this.currentMode ? "var(--primary-black)" : 'white')
            document.body.style.color = this.currentMode ? "white" : "black"
            this.currentMode = !this.currentMode
        }
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
