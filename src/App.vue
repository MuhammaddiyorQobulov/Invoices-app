<template>
<div class="app">
    <SideBar />
    <router-view />
</div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
    components: {
        SideBar
    },
}
</script>

<style>
.app {
    display: flex;
    background: rgb(248, 248, 251);
}
</style>
