<template>
<div class="sidebar">
    <div class="logo">
        <LogoIcon />
    </div>
    <div class="menu">
        <div class="mode">Mode</div>
    </div>
    <div class="user">User</div>
</div>
</template>

<script>
import LogoIcon from "../assets/icons/logo.js"

export default {
    components: {
        LogoIcon
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
    background-color: rgb(37, 41, 69);
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
    background-color: rgb(124, 93, 250);
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
